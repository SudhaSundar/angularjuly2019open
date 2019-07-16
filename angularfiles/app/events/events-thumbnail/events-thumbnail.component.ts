import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'events-list-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styles: [`
  .green{color:yellow !important}
  .bold{font-weight:bold !important}
  .thumbnail{min-height:210px}
  .pad-left{margin-left: 10px}
  .well div{color:#bbb}
  `]
})
export class EventsThumbnailComponent  {

  country:string="PAKISTAN";

 @Input('eve') event1;

 getEarlyStartStyle(){
   if(this.event1 && this.event1.time==='8:00 am')
   return 'green bold';
 }

 //@Output('outdata') event = new EventEmitter();

//  addlistener(){
//    console.log("Emitted");
//    this.event.emit("INDIA");
//  }
}
