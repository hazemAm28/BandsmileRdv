import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointement } from '../Model/appointement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  readonly apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

//Retourne tous les rendez-vous de la base de donnée
  listappointement(): Observable<Appointement[]> {
    return this.http.get<Appointement[]>(this.apiUrl + '/Appointments');
  }

  //Retourne la liste des rendez-vous à effectuer prochainement en tenant compte de l'identificant du patient ordonnées selon la date du rendez-vous (version web)
  GetNextRDV(id:number): Observable<Appointement[]> {
    return this.http.get<Appointement[]>(this.apiUrl + '/GetNextRDV/' + id);
  }

  //Retourne la liste des rendez-vous ainsi des zones restraintes entre deux dates précises
  getAppointementByDateData(date1:Date , date2:Date) {

   // console.log(datedebut,datefin);

    return this.http.get(this.apiUrl + 'AppointementByDateData/' + date1 + '&'+ date2 );
  }

  //Permet d'insérer un nouveau rendez-vous dans la base de donnée
  InsertNextRDV(Appointement:Appointement):Observable<Appointement[]> {
    return this.http.post<Appointement[]>(this.apiUrl + 'Appointement/InsertNextRDV' ,Appointement);
  }


}
