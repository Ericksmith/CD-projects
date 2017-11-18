import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { AddBikeComponent } from './add-bike/add-bike.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    AddBikeComponent
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
