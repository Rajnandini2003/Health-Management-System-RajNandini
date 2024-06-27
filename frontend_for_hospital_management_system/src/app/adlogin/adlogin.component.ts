import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {

  username: string = '';
  password: string = '';
  inValidLogin = false;

  constructor(private router: Router, private adminauthService: AdminauthService) { } // Corrected service name

  checkLogin() {
    if (this.adminauthService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert("Wrong Credentials! Please input the correct username or password");
      this.router.navigate(['home']);
    }
  }

}
