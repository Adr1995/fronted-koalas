// import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
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
  id : any = 0;
  constructor( private userService: UserService, private router: Router, private tasksService: TaskService) {
    // this.loadData();
    
  }

  ngOnInit(): void {
    this.userService.listUserInfo()
    .then(usuarios => this.users = usuarios)
    setTimeout(() => {
      console.log(this.users)
    }, 300);
  }

   showUserProfile(profileId : any) {
    // let userId : string;
        this.userService.showUserProfile(profileId)
        .then(res => {return console.log(res)})
        
      //  localStorage.setItem('username', this.profile.username)
      //  localStorage.setItem('profileId', this.profile._id)
      .catch (error => {
        console.log(error)
      })  
  }

//   async loadUserProfile(profileId : any, username: any) {
//     try {
//       this.profile = await this.userService.getUserProfile();
//      localStorage.setItem('username2', username)
//      localStorage.setItem('profileId2', profileId)
//      this.id = localStorage.getItem('profileId2');
//      window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   loadData() {
//     this.tasksService.getTasks(this.id)
//    .then(resultados => {
//      this.tasks = resultados.length;
//    })
//    .catch(err => {
//      console.log("No se han podido cargar las publicaciones")
//    })
// }
    
    
    handleSearch(value: string) {
    this.filtro_valor = value;
 }

}
