import { Component,Input } from '@angular/core';
import {ISession} from './events.model'
@Component({
    selector: 'session-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionListComponent{

  @Input('ses') sessions:ISession[]; 
}