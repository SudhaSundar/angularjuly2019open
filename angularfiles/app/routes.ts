import { Route } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { Error404Component } from './404.component';
import { ErrorRouteService } from './events/events-details/error-route.service';
import { UserComponent } from './user/user.component';
//http://localhost:4200/events
export const appRoute:Route[]=[
{path:'404',component:Error404Component},
{path:'events',component:EventsListComponent},
{path:'user/login',component:UserComponent},
{path:'events/:id',canActivate:[ErrorRouteService],component:EventDetailsComponent}
]