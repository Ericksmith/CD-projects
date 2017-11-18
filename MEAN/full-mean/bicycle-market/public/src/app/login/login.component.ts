import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_data = {
    email: "",
    password: ""
  }

  reg_data: object ={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
  }

  constructor(private _api: MainService, private _router: Router) { }

  ngOnInit() {
    this.login_data
    this.reg_data
  }

  login(){
    console.log(this.login_data);
    this._api.login(this.login_data).subscribe((res)=>{
      console.log('login promise returned');
    })
  }

  register(){
    this._api.register(this.reg_data).subscribe((res)=>{
      if(res.json().message == "Success"){
        this._router.navigate(["/browse"])
      }
    })
  }

}
