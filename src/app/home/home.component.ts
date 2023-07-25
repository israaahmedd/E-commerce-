import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  products:any[]=[];
  searchTerm:string='';
  constructor(private _ProductsService:ProductsService,
    private _CartService:CartService){}
  addToCart(poductId:string)
  {
this._CartService.addToCart(poductId).subscribe({

  next:(response)=>{ console.log(response)
    this._CartService.numOfCartItems.next(response.numOfCartItems)
  },
  error:(err)=> console.log(err)
})
  }
ngOnInit(): void {
  this._ProductsService.getProduct().subscribe
  ({
next:(response)=> this.products =response.data
  })
  
}
}
