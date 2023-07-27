import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import {ProductdetailsComponent } from './productdetails/productdetails.component';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{CarouselModule}from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { HeaderInterceptor } from './header.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandsComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    LoginComponent,
    NotfoundComponent,
    FooterComponent,
    SignupComponent,
    ProductdetailsComponent,
    MainSliderComponent,
    CheckoutComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    CarouselModule,
    FormsModule
  
  ],
  providers: [
// {
// provide:HTTP_INTERCEPTORS,
// useClass:HeaderInterceptor,
// multi:true
// },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
