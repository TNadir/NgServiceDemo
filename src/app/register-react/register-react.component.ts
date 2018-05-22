import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-react',
  templateUrl: './register-react.component.html',
  styleUrls: ['./register-react.component.css']
})
export class RegisterReactComponent implements OnInit {

  constructor() { }


 form:FormGroup;

  ngOnInit() {
    this.form=new FormGroup({
     
      email:new FormControl('',[Validators.required,Validators.email]),
      psw:new FormControl('',Validators.required),
      ctr:new FormControl('',Validators.required),
      answ:new FormControl('',Validators.required),


    });
  }

}
