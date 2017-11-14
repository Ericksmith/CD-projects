import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { HeaderComponent } from './header/header.component';
import { MainService } from './main.service'

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    WashingtonComponent,
    ChicagoComponent,
    SanJoseComponent,
    DallasComponent,
    BurbankComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
