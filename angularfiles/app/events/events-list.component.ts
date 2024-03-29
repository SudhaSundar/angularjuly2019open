import { Component, Injectable } from '@angular/core';
import { EventsListService } from './events-list.service';

//Metadata for your class
//@Injectable()
@Component({
selector: 'events-list',
template: `
<h1>Upcoming Angular Events</h1>
<hr>
<div  class="row">
<div *ngFor="let evedetail of eventdetails" class="col-md-5">
<events-list-thumbnail [eve]="evedetail" ></events-list-thumbnail>
</div>
</div>
`,
styles: ['h1{color:yellow}']

})

// <events-list-thumbnail  (outdata)="call($event)" #thumbnail [eve]="eventdetails" (click)="call(thumbnail.country)"  ></events-list-thumbnail>
export class EventsListComponent{

    //label:string="Angular Events";

    // call(data){
    //     this.label=data;
    // }
    
    eventdetails;
    constructor(private eventsListService:EventsListService){
        this.eventsListService; //= new EventsListService();
          this.eventsListService.getAllEvents()
        .subscribe((resp)=>{
            this.eventdetails = resp;
        });
    }
    
  
}