import { Component } from '@angular/core';

//Metadata for your class
@Component({
selector: 'events-list',
template: `
<h1>{{label}}</h1>
<hr>

<events-list-thumbnail [eve]="eventdetails" ></events-list-thumbnail>
`,
styles: ['h1{color:yellow}']

})

// <events-list-thumbnail  (outdata)="call($event)" #thumbnail [eve]="eventdetails" (click)="call(thumbnail.country)"  ></events-list-thumbnail>
export class EventsListComponent{

    label:string="Angular Events";

    // call(data){
    //     this.label=data;
    // }

    eventdetails = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        }
      }
}