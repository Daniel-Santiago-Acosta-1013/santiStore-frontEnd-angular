import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
  redirectRegister() {
    this.router.navigate(['/register']);
  }
  redirectHome() {
    this.router.navigate(['']);
  }

}
