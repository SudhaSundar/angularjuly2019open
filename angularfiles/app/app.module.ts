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
import { UserComponent } from './user/user.component';
import {FormsModule}  from '@angular/forms';
import {AuthService} from './user/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes: Route[]
    RouterModule.forRoot(
      appRoute
    ),
    FormsModule
  ],
  providers: [EventsListService,ErrorRouteService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
