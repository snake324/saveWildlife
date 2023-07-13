import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { FamiliesComponent } from './characters/components/families/families.component';

import { ServiceComponent } from './characters/service/service.component';
import { ModelsComponent } from './characters/models/models.component';
import { AnimaldetailsComponent } from './characters/components/animaldetails/animaldetails.component';
import { Animalsdetails2Component } from './characters/views/animalsdetails2/animalsdetails2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FamiliesComponent,

    ServiceComponent,
    ModelsComponent,
    AnimaldetailsComponent,
    Animalsdetails2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
