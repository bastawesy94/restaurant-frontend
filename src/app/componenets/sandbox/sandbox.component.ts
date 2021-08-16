import { Component } from "@angular/core";
import { MobileUserService } from "src/app/services/mobileUser.service";
@Component({
    selector: 'sandbox',
    template: `
    <div class= "form-contaier">
        <h1>Register Now</h1>
        <form novalidate #f="ngForm" (ngSubmit)= "onSubmit(f)">
            <div>
                <label>User Name</label>
                <input 
                    type= "text" 
                    class= "form-control"
                    [(ngModel)]= "user.userName"
                    name= "name"
                    #userName= "ngModel"
                    minlength= "6"
                    required
                >
                 <div *ngIf= "userName.errors?.required && userName.touched" class= "alert alert-danger">User Name Is Required .</div>
                 <div *ngIf= "userName.errors?.minlength && userName.touched" class= "alert alert-danger">User Name must be at least 6 letters .</div>

            </div>
            <div>
                <label>Mobile Number</label>
                <input 
                    type= "number"
                    class= "form-control" 
                    [(ngModel)]= "user.mobileNumber"
                    name= "mobileNumber"
                    #mobileNumber= "ngModel"
                    minlength= "6"
                    required
                    >
                    <div *ngIf= "mobileNumber.errors?.required && mobileNumber.touched" class= "alert alert-danger">Mobile Number Is Required .</div>
                    <div *ngIf= "mobileNumber.errors?.minlength && mobileNumber.touched" class= "alert alert-danger">Mobile Number  must be at least 6 letters .</div>    
            </div>
            <div>
                <label>User Email</label>
                <input 
                    type= "text"
                    class= "form-control" 
                    [(ngModel)]= "user.email"
                    name= "email"
                    #email= "ngModel"
                    minlength= "6"
                    required
                    >
                    <div *ngIf= "email.errors?.required && email.touched" class= "alert alert-danger">Email Is Required .</div>
                    <div *ngIf= "email.errors?.minlength && email.touched" class= "alert alert-danger">Email must be at least 6 letters .</div>        
            </div>
            <div>
                <label>Password</label>
                <input 
                    type= "password"
                    class= "form-control"
                    [(ngModel)]= "user.password"
                    name= "password"
                    #password= "ngModel"
                    minlength= "6"
                    required
                >
                <div *ngIf= "password.errors?.required && password.touched" class= "alert alert-danger">Password Is Required .</div>
                <div *ngIf= "password.errors?.minlength && password.touched" class= "alert alert-danger">Password must be at least 6 letters .</div>        
            </div>
            <input type="submit" value= "Submit" class="btn btn-success">
        </form>
    </div>
    <div *ngFor= "let item of mobileUsers">
        <div>
            <ul class= "list-group ">
            <li>name : {{item.userName}}</li>
            </ul>
        </div>    
    </div>        
        `,
    styleUrls:['./sandbox.component.css']    
})

export class SandboxComponenet{
    mobileUsers:any;
    constructor(public mobileUserService:MobileUserService){
      const result = this.mobileUserService.getAllMobileUsers()
      .subscribe(resp => {
        console.log(resp)
        this.mobileUsers = { ...resp.body };
    });
    }
    user = {
        userName : "",
        mobileNumber : "",
        email : "",
        password : "",
    }
    onSubmit(f:any){
        const {value , valid} = f
        if(valid)
            console.log(value)    
        console.log('FORM IS INVALID')
    }
}