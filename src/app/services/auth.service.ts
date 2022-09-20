import { EventEmitter, Injectable, Output } from '@angular/core';

type CompanyId = number;
type User = {
  name?: string;
  jobApplied: CompanyId[];
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() loginStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() logoutStatus: EventEmitter<boolean> = new EventEmitter();

  public user: User = {
    jobApplied: [],
  };

  constructor() {}

  loginUser(username: string, password: string): boolean {
    if (username == 'sky96' && password === 'rambo@123') {
      sessionStorage.setItem('user', username);
      this.user.name = username;
      this.loginStatus.emit(true);
      return true;
    }
    this.loginStatus.emit(false);
    return false;
  }

  logoutUser() {
    sessionStorage.clear();
    this.user.name = undefined;
    this.logoutStatus.emit(true);
  }

  isUserLoggedIn(){
    if(this.user.name){
      return true;
    }
    return false;
  }
}
