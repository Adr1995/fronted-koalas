import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() publicaciones = new EventEmitter();

  constructor( public tasksService: TaskService) { }
  ngOnInit(): void {
    this.loadData(); 
    this.onPropagar;
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

  onPropagar(){
    this.publicaciones.emit(this.tasks);
  }

}
