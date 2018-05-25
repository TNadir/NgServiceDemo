import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'

@Injectable()
export class CarApiService {

  constructor(private http:Http) { }

  getCars()
  {

    return this.http.get('http://localhost:3000/cars')
    .map((response:Response)=> response.json());

  }

  addCar(carName:string)
  {

    const data = {

      name: carName,
      year: 2018

    };

    return this.http.post('http://localhost:3000/cars',data)
    .map((response:Response)=> response.json());

  }
  changeCar(car:any)
  {

    console.log(car);

    return this.http.put(`http://localhost:3000/cars/${car.id}`,car)
    .map((response:Response)=> response.json());

  }

}
