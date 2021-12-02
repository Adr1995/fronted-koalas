import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
 
  tasks: any = [];
  @Input() id = ``;

  constructor( private tasksService: TaskService) { }
  ngOnInit(): void {this.loadData();
  }

  loadData() {
       this.tasksService.getTasks(this.id)
      .then(resultados => {
        this.tasks = resultados;
        console.log(this.tasks);
      })
      .catch(err => {
        console.log("No se han podido cargar las publicaciones")
      })
  }

}
