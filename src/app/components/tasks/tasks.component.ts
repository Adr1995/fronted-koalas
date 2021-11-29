import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: any = [];

  constructor( private tasksService: TaskService) { this.loadData()}

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
