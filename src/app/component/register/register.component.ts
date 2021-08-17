import { Component, OnInit } from '@angular/core';
import { MobileUserService } from "src/app/services/mobileUser.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user= {
    userName: '',
    mobileNumber: '',
    email: '',
    password: ''
  }
  constructor(private userService: MobileUserService, private router: Router) { 
    if(localStorage.getItem('token')) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

  onSubmit( ) {
    console.log(this.user)
    this.userService.signupMobileUser(this.user).subscribe((res: any)=> {
      console.log(res);
      this.router.navigate(['/login'])
    })
  }
}
