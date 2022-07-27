import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  test : any = formatDate(new Date(Date.now()), "yyyy-MM-dd HH:mm:ss", 'en-US'); 
  ShowMe:boolean=false;
  constructor() {

   }

  ngOnInit(): void {

  }
  ToggleTag(){
     this.ShowMe=true;
  }
  onclick(){
    console.log('hiii');
  }
  onChange(event: { value: Date  }): void {
    console.log("DATE PASSED: ", event.value ,);
    this.test=formatDate(new Date(event.value),"yyyy-MM-dd", 'en-US');

    // this.test=event.value;
    //  this.test =this.test.transform(this.test, 'yyyy-MM-dd');
    }


}
