import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    username: '',
    password: ''
  };

  onInit() {

  }

  onSubmit() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
    let testPassword = regex.test(this.user.password);

    if ( testPassword && this.user.username.length > 6 && this.user.password.length > 8 ) {
      alert('Usuario Valido');
      console.log(this.user);
    } else {
      alert('Usuario Invalido');
    }
  }

}
