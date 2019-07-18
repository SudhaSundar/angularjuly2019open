import {IUser} from './user.model';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthService{

    currentUser:IUser;

    isAuthenticated(){
        return !!this.currentUser;  //undefined or instance
    }
    
    loginFormValidation(userName:string,password:string){
        this.currentUser={
            id:1,
            userName:userName,
            firstName:'Sabari',
            lastName: 'Balaji'
        };
    }
}
