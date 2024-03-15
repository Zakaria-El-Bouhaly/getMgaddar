import { Component, inject } from '@angular/core';
import { AuthService } from 'src/auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private authSvc = inject(AuthService);
  private location = inject(Location);
  isAuth = false;
  currentUser?: any;

  ngOnInit() {
    this.authSvc.getAuthState().subscribe((user) => {
      if (user) {
        this.isAuth = true;
        this.currentUser = user;
        console.log(user);
      }
      else {
        this.isAuth = false;
      }
    });
  }

  logout() {
    try {
      this.authSvc.logout();
      this.location.go('/auth/login');
    }
    catch (err) {
      console.error(err);
    }
  }



}
