import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddrdvComponent } from './appointement/addrdv/addrdv.component';
import { AppointementComponent } from './appointement/appointement.component';
import { CalendarComponent } from './appointement/calendar/calendar.component';
import { GetRdvByidComponent } from './appointement/get-rdv-byid/get-rdv-byid.component';
import { RdvDateComponent } from './appointement/rdv-date/rdv-date.component';
import { CliniqueFComponent } from './clinique-f/clinique-f.component';
import { CliniquesComponent } from './cliniques/cliniques.component';
import { SuisseOrFranceComponent } from './suisse-or-france/suisse-or-france.component';

const routes: Routes = [
  { path: "rdv", component:AppointementComponent},
  { path: "rdv/:id", component:GetRdvByidComponent},
  { path: "cliniquesSuisse", component:CliniquesComponent},
  { path: "cliniquesFrance", component:CliniqueFComponent},
  { path: "choice", component:SuisseOrFranceComponent},
  { path: "rdvdate", component:RdvDateComponent},
  { path: "calendar", component:CalendarComponent},
  { path: "add", component:AddrdvComponent},


  //Admin pour consulter les render-vous
  { path: "admin", component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
