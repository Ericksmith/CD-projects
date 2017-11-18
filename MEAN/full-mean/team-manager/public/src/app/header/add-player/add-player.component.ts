import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { MainService } from "./../../main.service"

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private api: MainService) { }

  ngOnInit() {
  }

  addPlayer(formData){
    if(formData.value.position == ''){
      this.api.newPlayer({name: formData.value.name})
    } else {
      this.api.newPlayer(formData.value)
    }
  }
}
