import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  tasks: any = [];
  id = localStorage.getItem('user')!;
  like = true;


  constructor(private tasksService: TaskService, private servicePost: PostService, private router: Router) { }
  ngOnInit(): void {
    this.loadData();
  }

  getDeleted(response: any): void {
    let deletedTask = response.task;;
    this.tasks = this.tasks.filter((task: any) => task._id !== deletedTask._id);
  }


  loadData() {
    this.tasksService.getTasks(this.id)
      .then(resultados => {
        this.tasks = resultados;
      })
      .catch(err => {
        console.log("No se han podido cargar las publicaciones")
      })
  }

}
