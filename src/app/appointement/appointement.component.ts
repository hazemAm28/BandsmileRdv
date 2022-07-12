import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointement } from '../Model/appointement';
import { AppointementService } from '../Services/appointement.service';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {
 
  Appointement !: Appointement[];

  constructor(private ap : AppointementService,private router: Router) { }

  ngOnInit(): void {
    this.getRdv();
    
  }


  getRdv(){
    this.ap.listappointement().subscribe((data : Appointement[])=>{
      
      console.log(data);
      
      this.Appointement = data;
    })
    
  }
}
