import { Component } from '@angular/core';
import{FormGroup, FormControl , Validators} from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _AuthService:AuthService, private _Router:Router)
  {

  }
  isLoading:boolean=false;
  apiError:string='';
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })
  handelRegister(registerForm:FormGroup)
  {
    this.isLoading=true;
    if(registerForm.valid)
    {
this._AuthService.register(registerForm.value).subscribe({
  next:(response)=>
    {
     if(response.message === "success")

    {
this.isLoading=false;      
this ._Router.navigate(['/login']) 
    }
    
  },
  error:(err)=>{
    this.isLoading=false
  // console.log(err.error.errors.msg)
  this.apiError=err.error.errors.msg;
  }
})
    }
    console.log(registerForm.value)
  
  }
}
