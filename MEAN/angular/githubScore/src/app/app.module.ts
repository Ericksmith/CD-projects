import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { GhScoreService } from "./gh-score.service"
import { MainService } from "./main/main.service"
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GhScoreService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
