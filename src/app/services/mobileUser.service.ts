import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MobileUserService {
    users:string[];
 
    constructor(public http:HttpClient){
        this.users= []
    }
    getAllMobileUsers(){
        return this.http.get('/api/mobile-user/get-all',
        {
            headers: { 'Content-Type': 'application/json'}
        }
        )
    }
    signupMobileUser(mobileUser:any){
        return this.http.post('/api/mobile-user/signup',mobileUser,
        {
            headers: { 'Content-Type': 'application/json'}
        }
        )
    }
    login(userName:string,password:string){
        return this.http.post('/api/mobile-user/auth',
        {
            userName, password
        },
        {
            headers: { 'Content-Type': 'application/json'}
        }
        )
    }
}