import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {

  tasks: any = [];
  id = localStorage.getItem('user')!;
  like= true;


  constructor( private tasksService: TaskService, private servicePost: PostService, private router: Router) { }
  ngOnInit(): void {this.loadData();
  }
  delete(idtasks: any){
    
    this.servicePost.deletePost(idtasks);
    setTimeout(() => {
      this.ngOnInit();
    }, 150); 
   
  }
  likes(postid:any){
  
   console.log("hola"); this.servicePost.likesPosts(postid,{user_id: this.id}).then(res=> this.like=false);
   setTimeout(() => {
    this.ngOnInit();
  }, 150); 
  }
  
  dislikes(postid:any){
    console.log("adios");
    this.servicePost.deletelike(postid, {user_id: this.id}).then(res=> this.like=true);
    setTimeout(() => {
      this.ngOnInit();
    }, 150); 
          
   }
  loadData() {
       this.tasksService.getTasks()
      .then(resultados => {
        this.tasks = resultados;
        console.log(this.tasks);
      })
      .catch(err => {
        console.log("No se han podido cargar las publicaciones")
      })
  }

}

