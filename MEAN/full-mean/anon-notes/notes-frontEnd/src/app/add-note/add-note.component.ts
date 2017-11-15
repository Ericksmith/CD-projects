import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { MainService } from "./../main.service"

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note: String;

  constructor(private api: MainService) { }

  ngOnInit() {
    this.note = ""
  }

  onSubmit(formData){
    this.note = formData.value.note
    this.api.addNote({note: this.note}).subscribe(res=>{

      console.log('subscribe and like');
    }, err=>{
      console.log('subscribe something went wrong');
    })
  }

}
