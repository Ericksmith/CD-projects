import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

@Injectable()
export class MainService {

  constructor(private _http: Http) { }


  login(loginData){
    return this._http.post('/login', loginData)
  }

  register(regData){
    return this._http.post('/register', regData)
  }

  addBike(bikeData){
    return this._http.post('/addbike', bikeData)
  }

  getAllBikes(){
    return this._http.get('/getBikes')
  }

  getBikes(){
    return this._http.get('/getAllBikes')
  }

}
