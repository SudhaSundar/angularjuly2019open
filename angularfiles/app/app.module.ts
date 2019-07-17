import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventsListService } from './events/events-list.service';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import {RouterModule} from '@angular/router';
import { appRoute } from './routes';
import { Error404Component } from './404.component';
import { ErrorRouteService } from './events/events-details/error-route.service';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes: Route[]
    RouterModule.forRoot(
      appRoute
    )
  ],
  providers: [EventsListService,ErrorRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
