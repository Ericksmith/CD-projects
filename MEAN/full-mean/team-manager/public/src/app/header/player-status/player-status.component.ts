import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {MainService} from "./../../main.service"

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: object;
  gameNum: String;

  constructor(private _route: ActivatedRoute, private _api: MainService ) { }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      this.gameNum = "game"
      this.gameNum += params.id
      this.getplayers()
    })
  }
  

  getplayers(){
    this._api.getPlayers().subscribe((res)=>{
      this.players = res.json()
    })
  }

  playingInGame(player){
    let gameChange = {game: this.gameNum, player_id: player, status: "playing"}
    this._api.playingGame(gameChange).subscribe((res)=>{
      this.getplayers()
    })
  }

  notPlayingInGame(player){
    let gameChange = {game: this.gameNum, player_id: player, status: 'notplaying'}
    this._api.playingGame(gameChange).subscribe((res)=>{
      this.getplayers()
    })
  }

  undecided(player){
    let gameChange = {game: this.gameNum, player_id: player, status: 'Undecided'}
    this._api.playingGame(gameChange).subscribe((res)=>{
      this.getplayers()
    })
  }

}
