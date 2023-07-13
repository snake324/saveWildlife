import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Animalsdetails2Component } from './characters/views/animalsdetails2/animalsdetails2.component';

const routes: Routes = [
  { path: 'animalsdetails2', component: Animalsdetails2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
