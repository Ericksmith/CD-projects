import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  addNote(newNote){
    console.log('services', newNote);
     return this._http.post('/add-note', newNote)
  }

  getNotes(){
    return this._http.get('/getNotes')
  }
}
