import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component"
import { BurbankComponent} from "./burbank/burbank.component"
import { ChicagoComponent} from "./chicago/chicago.component"
import { SanJoseComponent} from "./san-jose/san-jose.component"
import { WashingtonComponent} from "./washington/washington.component"
import { SeattleComponent } from "./seattle/seattle.component"
import { DallasComponent } from "./dallas/dallas.component"

const routes: Routes = [
  {
    path: '',
    component: BurbankComponent,
    children: []
  }, {
    path: 'chicago',
    component: ChicagoComponent,
    children: []
  }, {
    path: "sanJose",
    component: SanJoseComponent,
    children: []
  }, {
    path: "washington",
    component: WashingtonComponent,
    children: []
  }, {
    path: "seattle",
    component: SeattleComponent,
    children: []
  }, {
    path: "dallas",
    component: DallasComponent,
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
