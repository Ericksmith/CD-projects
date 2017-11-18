import { Component, OnInit } from '@angular/core';
import {MainService} from "./../main.service"

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  bike = {
    title: "",
    discription: "",
    price: "",
    location: "",
    image: ""
  }

  allBikes: object;

  constructor(private _api: MainService) { }

  ngOnInit() {
    this.getBikes()
  }

  getBikes(){
    this._api.getAllBikes().subscribe((res)=>{
      let userData = res.json();
      this.allBikes = userData[0].bikes
    })
  }

  createListing(){
    this.bike.price = "" + this.bike.price
    this._api.addBike(this.bike).subscribe((res)=>{
      this.getBikes()
    })
  }
  
  deteleBike(bikeId){
    console.log(bikeId);
  }

}
