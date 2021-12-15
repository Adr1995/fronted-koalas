import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
 
  tasks: any = [];
  public page!: number;
  @Input() id = ``;

  constructor( public tasksService: TaskService) { }
  ngOnInit(): void {
    this.loadData();
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
