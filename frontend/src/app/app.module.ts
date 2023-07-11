import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { LoginComponent } from './global/login/login.component';
import { PopuploginComponent } from './characters/components/popuplogin/popuplogin.component';
import { CardFamiliesComponent } from './characters/components/card-families/card-families.component';
import { ServiceComponent } from './characters/service/service.component';
import { ModelsComponent } from './characters/models/models.component';
import { AnimalsCounterComponent } from './characters/components/animals-counter/animals-counter.component';
import { FamiliesComponent } from './characters/views/families/families.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FamiliesComponent,
    ServiceComponent,
    LoginComponent,
    PopuploginComponent,
    ModelsComponent,
    CardFamiliesComponent,
    AnimalsCounterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
