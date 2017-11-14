import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"
import { MainService } from "./main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: String;
  result: Object;
  score: Number;
  feedback: any;
  scoreMessages: Object;
  
  onSubmit(formData){
    this.user = formData.value.user;
    this._http.get("https://api.github.com/users/" + this.user).subscribe(
      (res) => { 
        let userData = res.json();
        this._http.get(userData.followers_url).subscribe((res)=> {
          this.score += res.json().length;
          this.score += userData.public_repos;
          this.result = {response: "Your Score: " + this.score }
          
          if(this.score < 20){
            this.feedback = {
              'message': "Needs Work!",
              'css': "red"
            }
            } else if(this.score < 50){
              this.feedback = {
                'message': "A decent Start!",
                'css': "orange"
              }
            } else if(this.score < 100){
              this.feedback = {
                'message': "Doing good!",
                'css': "black"
              }
              } else if(this.score < 200){
                this.feedback = {
                  'message': "Great Job!!",
                  'css': "green"
                }
                } else {
                  this.feedback = {
                    'message': "Github Elite!",
                    'css': "blue"
                  }
                }
              this.score = 0;
        }), (err)=>{
          console.log("error finding followers");
        }
      },
      (err) => {  
        this.result = {response: "User not found."}
      }
    )
  }

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this.user = "";
    this.result = {};
    this.score = 0;
    this.feedback = false;
  }

}
