import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  getPlayers(){

    return this._http.get('/allplayers')
  }

  newPlayer(player){
    return this._http.post("/players", player)
    .subscribe((res)=>{
    })
  }

  playingGame(gameStatus){
    return this._http.post('/playing-in-game', gameStatus)
  }

  deletePlayer(playerid){
    return this._http.post('/deleteplayer', playerid)
  }
}
