import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "src/app/services/restaurant.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  constructor(public restaurantService:RestaurantService, private router: Router) { 
 
  }

  restaurant:any= {
    name : "" , 
    address: ""
  };
  ngOnInit(): void {
  }
  onSubmit(f:any){
    this.restaurantService.addRestaurant(this.restaurant)
          .subscribe(restaurants=>{
            console.log(restaurants)
            this.router.navigate(['/']);
          })
  }
}
