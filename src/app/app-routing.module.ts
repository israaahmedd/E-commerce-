import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},

  {path:'brands',component:BrandsComponent},
  {path:'login',component:LoginComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)},

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
