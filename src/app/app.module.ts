import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsComponent } from './cars/cars.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { RegisterReactComponent } from './register-react/register-react.component';
import { CarApiService } from './Services/car-api.service';
import {  HttpModule } from '@angular/http';
import { SrcapitestComponent } from './srcapitest/srcapitest.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CradetailComponent } from './cradetail/cradetail.component';
import { ColorDirective } from './Shared/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarsComponent,
    IndexComponent,
    RegisterComponent,
    RegisterReactComponent,
    SrcapitestComponent,
    HomeComponent,
    HeaderComponent,
    CradetailComponent,
    ColorDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [

    CarApiService

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
