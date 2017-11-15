import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service"

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  notes: any;

  constructor(private api: MainService) { }

  ngOnInit() {
    this.loadNotes()
  }

  loadNotes(){
    this.api.getNotes().subscribe(res=> {
      console.log(res.json());
      this.notes = res.json()
    }, err=>{
      console.log('There was a problem');
    })
  }

}
