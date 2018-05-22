import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable()
export class CarsService {

  constructor(private consoleservice:ConsoleService) { }


  carList: { name: string, isSold: boolean }[] = [
    {
      name: "BMV",
      isSold: true
    },
    {
      name: "Mercedes",
      isSold: false
    }

  ]

  public addCar(name: string) {
    this.carList.push({
      name: name,
      isSold: false
    });
    this.consoleservice.log(`${name} added`);
  }


}
