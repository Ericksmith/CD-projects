import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class TaskService {

  tasks = [];

  constructor(private _http: Http) { }

  retrieveTasks(){
    this._http.get('http://localhost:8000').subscribe(
      (response) => { console.log("response: ", response.json());},
      (error) => { console.log("error", error);}
    )
  }

  createTask(task) {
    this.tasks.push(task);
  }

}
