import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { CarsService } from '../Services/cars.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {



  carName = "";

  constructor(private carservice:CarsService) { }

  ngOnInit() {
  }


  onAddCar() {
    this.carservice.addCar(this.carName);
    this.carName = "";

  }

}
