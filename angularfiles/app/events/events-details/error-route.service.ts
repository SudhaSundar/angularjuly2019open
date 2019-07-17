import  { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router'

import { EventsListService } from '../events-list.service';
import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class ErrorRouteService implements CanActivate{

    constructor(private eventListService:EventsListService,private route:Router){
    
    }
    canActivate(activate:ActivatedRouteSnapshot){

     // undefined
    console.log(this.eventListService.getEventByID(+activate.params['id']))
    console.log(!this.eventListService.getEventByID(+activate.params['id']))
    console.log(!!this.eventListService.getEventByID(+activate.params['id']))
      let eventExists =  !!this.eventListService.getEventByID(+activate.params['id']);
    
      if(!eventExists){
          return this.route.navigate(["/404"]);
      }

        return eventExists;  
    }
}   