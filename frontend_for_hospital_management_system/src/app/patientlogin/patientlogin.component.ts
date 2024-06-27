import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientauthService } from '../patientauth.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent {
  username: string = '';
  password: string = '';
  inValidLogin = false;

  constructor(private router: Router, private patientauth: PatientauthService) { } // Corrected service name

  checkLogin() {
    if (this.patientauth.authenticate(this.username, this.password)) {
      this.router.navigate(['patientdash']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert("Wrong Credentials! Please input the correct username or password");
      this.router.navigate(['home']);
    }
  }
}
