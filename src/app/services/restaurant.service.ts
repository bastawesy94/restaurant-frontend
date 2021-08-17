import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestaurantService {
    restaurants:any[];
    constructor(public http:HttpClient){
        this.restaurants= []
    }
    getAllRestaurants(){
        return this.http.get('/api/restaurant/get-all',
        {
            headers: { 'Content-Type': 'application/json'}
        }
        )
    }
    addRestaurant(restaurant:any){
        return this.http.post('/api/restaurant/add',restaurant,
        {
            headers: { 'Content-Type': 'application/json', 'mobile-user-token': `${localStorage.getItem('token')}`}
        }
        )
    }
    removeRestaurant(restaurantId:any){
        return this.http.delete('/api/restaurant/remove/'+ restaurantId,
        {
            headers: { 'Content-Type': 'application/json', 'mobile-user-token': `${localStorage.getItem('token')}`}
        })
    }
}