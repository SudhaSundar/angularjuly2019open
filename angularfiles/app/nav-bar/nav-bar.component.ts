import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service'
@Component({
  selector: 'events-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  authService:AuthService;
  constructor( authService:AuthService ) {
    this.authService = authService;
   }

  ngOnInit() {
  }

}
