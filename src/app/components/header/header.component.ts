import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faHome, faSearch, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faUser = faUser;

  constructor(public authService: AuthService) { }


  ngOnInit(): void {
  }

}
