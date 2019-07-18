import { Component } from '@angular/core';
import {AuthService} from './auth.service';
@Component({
    templateUrl: './user.component.html',
    styles:[`
    em{float:right;color:#E05C65;padding-left:10px;}
    `]
})
export class UserComponent{
    userName;
    mouseOverLogin;
    constructor(private auth:AuthService){

    }

    loginForms(data){
        this.auth.loginFormValidation(data.userName,data.password);
    }

    onKey(){
        console.log(this.userName);
    }
}