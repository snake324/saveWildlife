import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { FamiliesComponent } from './characters/components/families/families.component';
import { ViewsComponent } from './characters/views/views.component';
import { ServiceComponent } from './characters/service/service.component';
import { ModelsComponent } from './characters/models/models.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FamiliesComponent,
    ViewsComponent,
    ServiceComponent,
    ModelsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
