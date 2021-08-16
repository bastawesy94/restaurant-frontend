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
        return this.http.get<Response>('/api/mobile-user/all',
        {
            headers: { 'Content-Type': 'application/json'}
        }
        )
    }
}