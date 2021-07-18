import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AfricanComponent } from './african/african.component';
import { AkitaComponent } from './akita/akita.component';
import { BorzoiComponent } from './borzoi/borzoi.component';
import { BoxerComponent } from './boxer/boxer.component';
import { ChowComponent } from './chow/chow.component'
const routes: Routes = [

  {
    path : 'navbar',
    component : NavbarComponent
  },
  {
    path : 'african',
    component : AfricanComponent
  },
  {
    path : 'akita',
    component: AkitaComponent
  },
  {
    path : 'borzoi',
    component : BorzoiComponent
  },
  {
    path : 'chow',
    component : ChowComponent
  },
  {
    path : 'boxer',
    component : BoxerComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
