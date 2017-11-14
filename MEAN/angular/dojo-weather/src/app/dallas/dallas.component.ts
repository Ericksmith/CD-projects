import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather: any;
  
  constructor(private _weatherService: MainService) { }
  
  ngOnInit() {
    this._weatherService.getWeather("http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=8ade7b0be78ce6e8b68dbb4ab54c2c22").subscribe(res=>{
      
      this.weather = { 
        humidity: res.json().main.humidity,
        current: Math.round(res.json().main.temp * 9/5 - 459.67),
        high: Math.round(res.json().main.temp_max * 9/5 - 459.67),
        low: Math.round(res.json().main.temp_min * 9/5 - 459.67),
        status:res.json().weather[0].discription
      }
      console.log(this.weather);
    }, err=>{
      console.log("No api reponse");
    })
  }

}
