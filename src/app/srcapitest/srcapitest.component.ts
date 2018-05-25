import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../Services/car-api.service';


interface Cars {

  Id: number,
  name: string,
  year: number

}

@Component({
  selector: 'app-srcapitest',
  templateUrl: './srcapitest.component.html',
  styleUrls: ['./srcapitest.component.css']
})
export class SrcapitestComponent implements OnInit {

  cars: Cars[] = [];
  carName: string = '';

  constructor(private carapi: CarApiService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.carapi.getCars().subscribe((cars: Cars[]) => {

      this.cars = cars;

    });
  }

  addCar() {
  
      
    this.carapi.addCar(this.carName).subscribe((car: Cars) => {

      this.cars.push(car);

    });

  }


updateCar(car:Cars){

car.year=3000;

  this.carapi.changeCar(car).subscribe((res) => {

 //console.log()

  });

}


}
