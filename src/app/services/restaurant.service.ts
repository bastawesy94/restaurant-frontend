import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestaurantService {
    restaurants:any[];
    constructor(public http:HttpClient){
        this.restaurants= []
    }
    getAllRestaurants(){
        return this.http.get('/api/restaurant/all',
        {
            headers: { 'Content-Type': 'application/json'}
        }
        )
    }
    addRestaurant(restaurant:any){
        return this.http.post('/api/restaurant/create',restaurant,
        {
            headers: { 'Content-Type': 'application/json', 'mobile-user-token': `${localStorage.getItem('token')}`}
        }
        )
    }
}