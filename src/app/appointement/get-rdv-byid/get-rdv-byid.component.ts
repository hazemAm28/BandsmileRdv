import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointement } from 'src/app/Model/appointement';
import { AppointementService } from 'src/app/Services/appointement.service';

@Component({
  selector: 'app-get-rdv-byid',
  templateUrl: './get-rdv-byid.component.html',
  styleUrls: ['./get-rdv-byid.component.css']
})
export class GetRdvByidComponent implements OnInit {

  Appointement !: any;
  id!: number;
  
  constructor(private ap : AppointementService,private router: Router, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    this.id = this.activate.snapshot.params['id'];
    this.ap.GetNextRDV(this.id).subscribe((d) => {
      console.log(d);
      
      this.Appointement = d;
    });
  }
}
