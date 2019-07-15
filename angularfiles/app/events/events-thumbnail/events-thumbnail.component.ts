import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'events-list-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent  {

  country:string="PAKISTAN";

 @Input('eve') event1;

 //@Output('outdata') event = new EventEmitter();

//  addlistener(){
//    console.log("Emitted");
//    this.event.emit("INDIA");
//  }
}
