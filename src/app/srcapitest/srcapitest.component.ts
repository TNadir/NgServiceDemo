import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../Services/car-api.service';

@Component({
  selector: 'app-srcapitest',
  templateUrl: './srcapitest.component.html',
  styleUrls: ['./srcapitest.component.css']
})
export class SrcapitestComponent implements OnInit {

  cars=[];
  constructor(private carapi: CarApiService) { }

  ngOnInit() {
  
  }

  onSubmit() {
    this.carapi.getCars().subscribe((response) => {

      this.cars=response.json();

    });
  }
}
