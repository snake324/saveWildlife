import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { CardFamiliesComponent } from './characters/components/card-families/card-families.component';
import { ServiceComponent } from './characters/service/service.component';
import { ModelsComponent } from './characters/models/models.component';
import { AnimalsCounterComponent } from './characters/components/animals-counter/animals-counter.component';
import { FamiliesComponent } from './characters/views/families/families.component';

import { FilterPipe } from './characters/components/pipes/filter.pipe';
import { ListSpeciesComponent } from './characters/components/list-species/list-species.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    ModelsComponent,
    CardFamiliesComponent,
    AnimalsCounterComponent,
    FamiliesComponent,
    FilterPipe,
    ListSpeciesComponent
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
