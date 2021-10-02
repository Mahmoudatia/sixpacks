import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

export class AuthService {

  private user: User | null;

  logout() {
    this.user = null;
    this.authChange.next(false)
  }

  authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true)
  }


  getUser() {
    return { ...this.user }
  }

  isLoggedIn() {
    return this.user != null;
  }

}
