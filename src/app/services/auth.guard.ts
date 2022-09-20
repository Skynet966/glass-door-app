import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    var isUserAuthenticated = this.authService.isUserLoggedIn();
    if(!isUserAuthenticated){
      this.router.navigate(['/login']);
    }
    return isUserAuthenticated;
  }

}
