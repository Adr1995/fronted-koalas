import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

 @Input() users : any = [];

  constructor() { 
    // console.log("usuarios hijo",this.users)
  }

  ngOnInit(): void {
   
  }

}
