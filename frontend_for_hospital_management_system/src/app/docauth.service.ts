import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === "Rajnandini" && password === "Rajnandini@2003") {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      alert("Wrong Credentials! Please input the correct username or password");
      return false;
    }
  }
  isUserLoggedIn(){
    console.log("User is looged in")
    let user = sessionStorage.getItem('username');
    console.log(user)

    return !(user==null)
  }

  logout(){

    console.log("The User is logged out Successfully")

    sessionStorage.removeItem('username');

  }
}


