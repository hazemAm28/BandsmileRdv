import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointementService } from 'src/app/Services/appointement.service';

@Component({
  selector: 'app-rdv-date',
  templateUrl: './rdv-date.component.html',
  styleUrls: ['./rdv-date.component.css']
})
export class RdvDateComponent implements OnInit {
  now = new Date();

  constructor(private ap : AppointementService,private router: Router, private activate: ActivatedRoute) { }

  datedebut!:Date;
  datefin!:Date;
  ngOnInit(): void {
      let dateDebut = formatDate(new Date(Date.now()), "yyyy-MM-dd HH:mm:ss", 'en-US');
      let dateDebutDuJour = dateDebut.substring(0, 10) + " 00:00:00";
      let dateFinDuJour = dateDebut.substring(0, 10) + " 23:59:00";
console.log(dateDebutDuJour, dateFinDuJour);

      this.getAppointements(dateDebutDuJour, dateFinDuJour);
     // console.log(this.getAppointements(dateDebutDuJour, dateFinDuJour))
  }

  async getAppointements(datedebut:any, datefin:any) {

    await this.ap.getAppointementByDateData(datedebut, datefin).toPromise().then(result => {
console.log(result);

    });

  }


}
