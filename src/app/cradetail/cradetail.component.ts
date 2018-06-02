import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cradetail',
  templateUrl: './cradetail.component.html',
  styleUrls: ['./cradetail.component.css']
})
export class CradetailComponent implements OnInit {

  id:number;
  name:string;
  year:string;


  constructor(private router:ActivatedRoute) { }

  ngOnInit() 
  {
    this.id=this.router.snapshot.params['id'];
    this.name=this.router.snapshot.params['name'];
    this.year=this.router.snapshot.queryParams['year'];

    this.router.params.subscribe((param:Params)=>{
      this.id=+param['id'];
      this.name=param['name'];
    })


  }

}
