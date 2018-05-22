import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input('newCarInput') _newCar: { name: string, isSold: boolean }


  constructor() { }

  ngOnInit() {
  }

  getClass() {

    return {
      'list-group-item-success': this._newCar.isSold,
      'list-group-item-warning': !this._newCar.isSold,
      'list-group-item': true
    }
  }

  actionBuy(val:string)
  {
    this._newCar.isSold=val==='bought'?true:false;
  }

}
