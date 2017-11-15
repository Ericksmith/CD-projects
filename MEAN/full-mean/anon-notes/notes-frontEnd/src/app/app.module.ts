import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { MainService } from './main.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNoteComponent,
    DisplayNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
