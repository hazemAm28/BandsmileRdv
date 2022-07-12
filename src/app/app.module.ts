import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointementComponent } from './appointement/appointement.component';
import { GetRdvByidComponent } from './appointement/get-rdv-byid/get-rdv-byid.component';
import { CliniquesComponent } from './cliniques/cliniques.component';
import { AddnextRdvComponent } from './appointement/addnext-rdv/addnext-rdv.component';
import { SuisseOrFranceComponent } from './suisse-or-france/suisse-or-france.component';
import { CliniqueFComponent } from './clinique-f/clinique-f.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    AppointementComponent,
    GetRdvByidComponent,
    CliniquesComponent,
    AddnextRdvComponent,
    SuisseOrFranceComponent,
    CliniqueFComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
