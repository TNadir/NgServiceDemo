import { Component, OnInit } from '@angular/core';
import { CarsService } from '../Services/cars.service';
import { ConsoleService } from '../Services/console.service';

@Component({

  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [
    CarsService,
    ConsoleService
  ]

})
export class IndexComponent implements OnInit {

  carList = [];

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.carList = this.service.carList;
  }





  addCar(name: string) {
    this.service.addCar(name);
    // this.carList.push({
    //   name: name,
    //   isSold: false
    // });

  }

}
