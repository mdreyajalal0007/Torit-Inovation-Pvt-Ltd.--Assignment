import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AfricanComponent } from './african/african.component';
import { AkitaComponent } from './akita/akita.component';
import { BorzoiComponent } from './borzoi/borzoi.component';
import { BoxerComponent } from './boxer/boxer.component';
import { ChowComponent } from './chow/chow.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AfricanComponent,
    AkitaComponent,
    BorzoiComponent,
    BoxerComponent,
    ChowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
