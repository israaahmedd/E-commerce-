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
import { authGuard } from './auth.guard';



const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'about',canActivate:[authGuard],component:AboutComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'checkout',canActivate:[authGuard],component:CheckoutComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
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
