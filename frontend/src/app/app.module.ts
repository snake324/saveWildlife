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
import { ModelsComponent } from './characters/models/models.component';
import { AnimalsCounterComponent } from './characters/components/animals-counter/animals-counter.component';
import { FamiliesComponent } from './characters/views/families/families.component';
import { LoginviewComponent } from './characters/views/loginview/loginview.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FamiliesComponent,
    LoginComponent,
    PopuploginComponent,
    ModelsComponent,
    CardFamiliesComponent,
    AnimalsCounterComponent,
    LoginviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
