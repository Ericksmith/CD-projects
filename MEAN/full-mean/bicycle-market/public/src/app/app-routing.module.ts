import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component"
import { BrowseComponent } from "./browse/browse.component"
import { AddBikeComponent} from './add-bike/add-bike.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: LoginComponent,
  }, {
    path: 'browse',
    pathMatch: "full",
    component: BrowseComponent,
  }, {
    path: 'listings',
    pathMatch: "full",
    component: AddBikeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
