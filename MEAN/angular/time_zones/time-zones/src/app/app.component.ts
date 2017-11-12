import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  current_date: any = new Date();
  timezone = ""
  showTime = false;
  pstBool = false;
  cstBool = false
  mstBool = false
  estBool = false
  displayTime(zone){
      this.current_date = new Date()
      if(zone == "PST"){
        this.current_date = this.current_date.toLocaleString('en-US', {timeZone: "America/Los_Angeles"})
      } else if(zone == "EST"){
        this.current_date = this.current_date.toLocaleString('en-US', {timeZone: "America/New_York"})
      } else if(zone == "CST"){
        this.current_date = this.current_date.toLocaleString('en-US', {timeZone: "America/Chicago"})
      } else if(zone == "MST"){
        this.current_date = this.current_date.toLocaleString('en-US', {timeZone: "America/Creston"})
      } 
      this.timezone = zone;
      this.showTime = true;
      return null
    }
  clear(){
    this.showTime = false;
    this.timezone = ""
  }
  }
  