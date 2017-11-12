import { Component } from '@angular/core';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    lucky: ""
  }

  message = ""

  isEmailValid = false;

  checkEmail(){
    this.isEmailValid = EmailValidator.validate(this.user.email)
    console.log(this.isEmailValid);
    return EmailValidator.validate(this.user.email)
  }

  onSubmit(){
    
    this.message = "Thank you for registering with us " + this.user.firstName + ". We just sent you a confirmation email at " + this.user.email + ", and we will send all mail to "+ this.user.street +", " + this.user.state + ".";

    this.user = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      street: "",
      apt: "",
      city: "",
      state: "",
      lucky: ""
    }
  }
}
