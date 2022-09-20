import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(public authService: AuthService, private router:Router) {}

  authUser() {
    if (this.username && this.password) {
      if (this.authService.loginUser(this.username, this.password)) {
        this.router.navigate(['/']);
      }else{
        alert('wrong username or password entred!!')
      }
    }
  }
  ngOnInit(): void {}
}
