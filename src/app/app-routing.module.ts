import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppointementComponent } from './appointement/appointement.component';
import { GetRdvByidComponent } from './appointement/get-rdv-byid/get-rdv-byid.component';
import { CliniqueFComponent } from './clinique-f/clinique-f.component';
import { CliniquesComponent } from './cliniques/cliniques.component';
import { SuisseOrFranceComponent } from './suisse-or-france/suisse-or-france.component';

const routes: Routes = [
  { path: "rdv", component:AppointementComponent},
  { path: "rdv/:id", component:GetRdvByidComponent},
  { path: "cliniquesSuisse", component:CliniquesComponent},
  { path: "cliniquesFrance", component:CliniqueFComponent},
  { path: "choice", component:SuisseOrFranceComponent},



  //Admin pour consulter les render-vous
  { path: "admin", component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
