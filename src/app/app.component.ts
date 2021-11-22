import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'koalagram-front';
  logged : boolean = false;
  
  ngOnInit() {
    console.log('componente inicializado...');
  }
  
}