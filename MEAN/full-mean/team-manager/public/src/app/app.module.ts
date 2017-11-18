import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddPlayerComponent } from './header/add-player/add-player.component';
import { PlayerStatusComponent } from './header/player-status/player-status.component';
import { ListPlayersComponent } from './header/list-players/list-players.component';
import { MainService } from './main.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPlayerComponent,
    PlayerStatusComponent,
    ListPlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
