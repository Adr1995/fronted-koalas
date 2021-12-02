import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post= {
    user_id: localStorage.getItem('user'),
    owner: "",
    text: "",
    title: "",
    hobbies:[],
    likes:[]
  }
  constructor(private servicePost: PostService, private toastr: ToastrService, private userService: UserService) { }

  ngOnInit(): void {
    this.post.owner = this.getOwner()
    console.log(this.post.owner)
  }
  getOwner(){
    let profile: any
    profile = this.userService.getUserUsername()
    return profile
  }
  newPost(){
    this.servicePost.newPost(this.post).then(result =>{
      console.log(this.post)
      //this.servicePost.newPost(this.post);
      this.toastr.success("Has publicado correctamente");}
    ).catch(err => this.toastr.error("Fallo a la hora de publicar, todos los campos han de ser rellenados correctamente.", "Error!"))
  }
}
