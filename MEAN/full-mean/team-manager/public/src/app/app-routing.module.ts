import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from "./header/add-player/add-player.component"
import { ListPlayersComponent } from "./header/list-players/list-players.component"
import { PlayerStatusComponent } from "./header/player-status/player-status.component"

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: ListPlayersComponent,
    children: []
  }, {
    path: 'status/game/:id',
    pathMatch: 'full',
    component: PlayerStatusComponent,
    children: []
  }, {
    path:"players/list",
    pathMatch: "full",
    component: ListPlayersComponent,
    children: []
  }, {
    path: "players/addplayer",
    pathMatch: "full",
    component: AddPlayerComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
