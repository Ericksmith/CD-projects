import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  getWeather(city){
    return this._http.get(city)
  }
}
