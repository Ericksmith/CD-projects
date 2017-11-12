import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = {
    0: "Black",
    1: "Aqua",
    2: "BlueViolet ",
    3: "Brown ",
    4: "Chartreuse ",
    5: "Coral ",
    6: "Crimson ",
    7: "DarkGreen ",
    8: "DarkSlateGrey ",
    9: "Gold ",
  }

  six = this.colors[Math.floor(Math.random() * 10)];
  five = this.colors[Math.floor(Math.random() * 10)];
  four = this.colors[Math.floor(Math.random() * 10)];
  three = this.colors[Math.floor(Math.random() * 10)];
  two = this.colors[Math.floor(Math.random() * 10)];
  one = this.colors[Math.floor(Math.random() * 9)];
}
