import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  numOfCartItems=new BehaviorSubject(0);

  constructor( private _HttpClient: HttpClient) { 
    this.getLoggedUserCart().subscribe({
      next:(response)=>{console.log(response)
      this.numOfCartItems.next(response.numOfCartItems
        )
      }
      ,
      error:(err)=>console.log(err)
    })
  }
  headers:any=
  {token:localStorage.getItem('userToken')}

  getLoggedUserCart():Observable<any>
  {
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
       {
             headers:this.headers
       })
  }
  addToCart(productId:string):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:productId},{
    headers:this.headers
        })

  }
  removeCartItem(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
   {
    headers:this.headers
        })

  }
  updateItemCount(productId:string, count:number):Observable<any>
  {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {count:count},
    {
    headers:this.headers
        })

  }

  onlinePayment(shippingAdress:any,cartId:string):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:54569`,
    {
shippingAdress:shippingAdress
    },
    {
    headers:this.headers
        })

  }

}


