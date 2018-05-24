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


@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarsComponent,
    IndexComponent,
    RegisterComponent,
    RegisterReactComponent,
    SrcapitestComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [

    CarApiService

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
