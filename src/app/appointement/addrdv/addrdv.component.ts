import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointementService } from 'src/app/Services/appointement.service';

@Component({
  selector: 'app-addrdv',
  templateUrl: './addrdv.component.html',
  styleUrls: ['./addrdv.component.css']
})
export class AddrdvComponent implements OnInit {

  constructor(private ap : AppointementService,private router: Router, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    
  }


  save(f: any) {
    this.ap.InsertNextRDV(f).subscribe(() => {
      alert('rdv added.');
    });
  }


}
