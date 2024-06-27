import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2: string, password2: string): boolean {
    if (username2 === "Nandini" && password2 === "Nandini@2003") {
      sessionStorage.setItem('username2', username2);
      return true;
    } else {
      alert("Wrong Credentials! Please input the correct username or password");
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User is looged in")
    let user = sessionStorage.getItem('username2');

    return !(user==null)
  }

  logout(){

    console.log("The User is logged out Successfully")

    sessionStorage.removeItem('username2');

  }
}


