import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttons = [
    {
      status: "OFF"
      
    },
    {
      status: "OFF"
    },
    {
      status: "OFF"
    },
    {
      status: "OFF"
    },
    {
      status: "OFF"
    },
    {
      status: "OFF"
    },
    {
      status: "OFF"
    },
    {
      status: "OFF"
    },
  ]

  flip(idx){
    if(this.buttons[idx].status == "OFF"){
      this.buttons[idx].status = "ON"
    } else {
      this.buttons[idx].status = "OFF"
    }
  }
}
