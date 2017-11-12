import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  qouteForm = {
    qoute: "",
    author: "",
    votes: 0
  }

  qoutes = [
  ]

  onSubmit(form){
    let formData = form.value;
    formData.votes = 0
    this.qoutes.push(formData)
  }

  upVote(idx){
    this.qoutes[idx].votes += 1
  }
  downVote(idx){
    this.qoutes[idx].votes -= 1
  }
  delete(idx){
    this.qoutes.splice(idx, 1)
    console.log(this.qoutes);
  }
}
