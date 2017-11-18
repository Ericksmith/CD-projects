import { Component, OnInit } from '@angular/core';
import {MainService} from "./../../main.service"

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  playerList: object;
  constructor(private _api: MainService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this._api.getPlayers().subscribe((res)=>{
      this.playerList = res.json()

    })
  }

  delete(player){
    this._api.deletePlayer({id: player}).subscribe((res)=>{
      this.getAll()
    })
  }

}
