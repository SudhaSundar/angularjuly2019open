import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { EventsListService } from './events-list.service';
@Component({
    templateUrl:'./create-event.component.html',
    styles:[`    
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent{

    constructor(private route:Router,private eventService:EventsListService){

    }
    saveEvent(data){
        this.eventService.saveForm(data);
        this.route.navigate(['/events']);
    }
}