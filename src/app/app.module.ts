import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponenet } from './componenets/sandbox/sandbox.component';
import {FormsModule} from '@angular/forms'
import { MobileUserService } from './services/mobileUser.service';
import { RestaurantService } from './services/restaurant.service';

import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { EditRestaurantComponent } from './component/edit-restaurant/edit-restaurant.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { AuthGuard } from './auth.guard'

const appRoutes:Routes = [
  {path: '' , component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'register' , component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'restaurants' , component:RestaurantsComponent},
  {path: 'add-restaurant' , component:AddRestaurantComponent,canActivate: [AuthGuard]},
]
@NgModule({
  declarations: [
    AppComponent,
    SandboxComponenet,
    RestaurantsComponent,
    EditRestaurantComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [MobileUserService,RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
