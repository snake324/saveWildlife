import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliesComponent } from './characters/views/families/families.component';
import { LoginviewComponent } from './characters/views/loginview/loginview.component';
import { Animalsdetails2Component } from './characters/views/animalsdetails2/animalsdetails2.component';

const routes: Routes = [
  { path: 'families', component: FamiliesComponent },
  { path: '', component: LoginviewComponent },
  { path: 'animalsdetails2', component: Animalsdetails2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }