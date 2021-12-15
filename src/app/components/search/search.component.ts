// import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users : any[] = [];
  filtro_valor = '';
  profile : any;
  tasks: any = 0;
  userId : any = 0;
  myId : any = localStorage.getItem('user');
  profileId : any =0;
  myProfileId : any = localStorage.getItem('profileId');
  rerender = false;
  followUser : any = true;
  constructor
    ( 
      private userService: UserService, 
      private router: Router, 
      private tasksService: TaskService, 
      private cdRef:ChangeDetectorRef
    ) 
    {}

  ngOnInit(): void {
    this.userService.listUserInfo()
    .then(usuarios => this.users = usuarios)
    setTimeout(() => {
      console.log(this.users)
    }, 300);
  }

   async showUserProfile(id : any) {
       this.profile = await this.userService.showUserProfile(id) 
       localStorage.setItem('username2', this.profile.username)
       localStorage.setItem('profileId2', this.profile._id)
       localStorage.setItem('userId2', id)
       this.userId = id;
       this.profileId = localStorage.getItem('profileId2')
       this.loadData();
       this.doRerender();
  }

  loadData() {
    this.tasksService.getTasks(this.userId)
   .then(resultados => {
     this.tasks = resultados.length;
   })
   .catch(err => {
     console.log("No se han podido cargar las publicaciones")
   })
}
  doRerender() {
    this.rerender = true;
    this.cdRef.detectChanges();
    this.rerender = false;
  }

  follow() {
    this.userService.followUser(this.profileId, {follower_uuid: this.myId} )
      .then(res=> {
        this.followUser = false
        return this.showUserProfile(this.userId);
      });
      console.log("----",this.users)
      this.following();
  }

  unfollow() {
    this.userService.unfollow(this.profileId, {follower_uuid: this.myId} )
      .then(res=>{ 
        this.followUser = true
        return this.showUserProfile(this.userId);
      });
      this.showUserProfile(this.userId);
      console.log("----",this.users)
      this.deleteFollowing();
  }

  following() {
    this.userService.addFollowing(this.myProfileId, {following_uuid: this.userId} )
    .then(res=> {
      return this.showUserProfile(this.userId);
    });
    console.log("----",this.users)
  }
  deleteFollowing() {
    this.userService.deleteFollowing(this.myProfileId, {following_uuid: this.userId} )
    .then(res=> {
      return this.showUserProfile(this.userId);
    });
    console.log("----",this.users)
  }
    
  handleSearch(value: string) {
    this.filtro_valor = value;
 }

}
