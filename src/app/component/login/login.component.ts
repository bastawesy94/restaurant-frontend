import { Component, OnInit } from '@angular/core';
import { MobileUserService } from "src/app/services/mobileUser.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public mobileUserService:MobileUserService, private router: Router) { 
    if(localStorage.getItem('token')) {
      this.router.navigate(['/'])
    }
  }

  userName:string= "";
  userPassword :string= "";
  ngOnInit(): void {
  }
  
  onSubmit(){
    this.mobileUserService.login(this.userName ,this.userPassword ).subscribe((res: any)=> {
      localStorage.setItem('token', res.data['mobile-user-token']);
      localStorage.setItem('userName', res.data['userName']);
      this.router.navigate(['/'])
    })
  }

}
