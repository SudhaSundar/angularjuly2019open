import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsListService } from '../events-list.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit,OnDestroy{

    eventDetail;

    constructor(private eventsService:EventsListService,private route:ActivatedRoute){

    }
//http:localhost:4200/events/101/sabari/23
    ngOnInit(){
        console.log(+this.route.snapshot.params['id']);  
        console.log(typeof(this.route.snapshot.params['id'])); 
        console.log(typeof(+this.route.snapshot.params['id']));         
        let id = +this.route.snapshot.params['id'];
        this.eventDetail = this.eventsService.getEventByID(id);
    }
ngOnDestroy(){

}
}