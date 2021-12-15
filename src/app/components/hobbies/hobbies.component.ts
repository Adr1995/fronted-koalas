import { Component, Input, OnInit } from '@angular/core';
import { HobbieService } from 'src/app/services/hobbie.service';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: any = [];
  public page!: number;
  @Input() idProfile : any = ``;

  constructor( private hobbieService: HobbieService) { }
  ngOnInit(): void { this.loadData(); }

  loadData(){
    this.hobbieService.getHobby(this.idProfile)
      .then(resultados => {
        this.hobbies = resultados;
      })
      .catch(err => {
        console.log("No se ha podido cargar los hobbies")
      })
  }

  delete(hobby: any){
    this.hobbieService.deleteHobby({hobby})
    .then(res => {
      this.hobbies = this.hobbies.filter((inHobby: any) => inHobby !== hobby)
    })
  }
}
