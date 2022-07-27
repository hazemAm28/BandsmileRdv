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
import { RdvDateComponent } from './appointement/rdv-date/rdv-date.component';
import { CalendarComponent } from './appointement/calendar/calendar.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AddrdvComponent } from './appointement/addrdv/addrdv.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    AppointementComponent,
    GetRdvByidComponent,
    CliniquesComponent,
    AddnextRdvComponent,
    SuisseOrFranceComponent,
    CliniqueFComponent,
    AdminComponent,
    RdvDateComponent,
    CalendarComponent,
    AddrdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,




  ],
  providers: [DatePipe, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
