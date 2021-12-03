import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    owner: localStorage.getItem('username'),
    text: "",
    title: "",
    hobbies:[],
    likes:[]
  }
  
  constructor(private servicePost: PostService, private toastr: ToastrService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
 
  newPost(){
    this.servicePost.newPost(this.post).then(result =>{
        this.toastr.success("Has publicado correctamente");
        this.router.navigateByUrl('/posts');
     }
    ).catch(err => this.toastr.error("Fallo a la hora de publicar, todos los campos han de ser rellenados correctamente.", "Error!"))
  }
}
