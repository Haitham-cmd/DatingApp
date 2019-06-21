import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private alertifyService: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.authService.Login(this.model)
      .subscribe(next => {
        this.alertifyService.success('Logged in successfully');
      }, error => {
        this.alertifyService.error('Faild to login');
      }, () => {
        this.router.navigate(['/members']);
      });
  }

  LoggedIn() {
    return this.authService.LoggedIn();
  }

  Logout() {
    if (!!localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.alertifyService.warning('logged out');
      this.router.navigate(['/home']);
    }
  }

}
