import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nameUser: any;
  firstName: any;
  lastName: any;
  password: any;
  confirmPassword: any;

  // dataRegister = {
  //   nameUser: '',
  //   firstName: '',
  //   lastName: '',
  //   password: '',
  //   confirmPassword: '',
  // };

  setData() {
    console.log(this.nameUser);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.password);
    console.log(this.confirmPassword);
  }
}
