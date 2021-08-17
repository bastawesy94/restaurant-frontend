import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "src/app/services/restaurant.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(public restaurantService:RestaurantService) { }

  restaurants:any=[];
  ngOnInit(): void {
    this.restaurantService.getAllRestaurants()
          .subscribe(restaurants=>{
            this.restaurants= restaurants
            console.log(restaurants)
          })
  }

}
