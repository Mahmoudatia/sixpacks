import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {

  private user: User | null;
  constructor(private router: Router) { }

  logout() {
    this.user = null;
    this.authChange.next(false)
    this.router.navigate(['/login'])
  }

  authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully()
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully()
  }


  getUser() {
    return { ...this.user }
  }

  isLoggedIn() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true)
    this.router.navigate(['/training'])
  }
}
