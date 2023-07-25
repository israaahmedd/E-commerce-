import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
shippingAdress:FormGroup=new FormGroup({
  detailes:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null),



})
constructor(private _CartService:CartService){}
navigateToPage(url:string){
  window.location.href= url;
}
handelSubmit(shippingAdress:FormGroup){
console.log(shippingAdress.value)
this._CartService.onlinePayment(shippingAdress.value,"64bda291270bce84aa782f97").subscribe({
  next:(response:any)=>{
     this.navigateToPage(response.session.url)
    // console.log(response.session.url)
    
  }
  ,
  error:(err)=>console.log(err)
})
}
}
