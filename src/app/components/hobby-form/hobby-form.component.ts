import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HobbieService } from 'src/app/services/hobbie.service';

@Component({
  selector: 'app-hobby-form',
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.css']
})
export class HobbyFormComponent implements OnInit {
  hobbies = {
    hobby: "",
  }
  constructor(
    private serviceHobbies: HobbieService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newHobby() {
    this.serviceHobbies.newHobby(this.hobbies).then(result =>{
      // console.log("hobbyForm : --- ",this.hobbies);
      this.toastr.success("Has añadido un hobby correctamente");
      this.router.navigateByUrl('/hobbies');
   }
  ).catch(err => this.toastr.error("Fallo al añadir un hobby, todos los campos han de ser rellenados correctamente.", "Error!"))
}
  }


