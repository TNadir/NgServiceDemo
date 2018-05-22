import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  

})
export class RegisterComponent implements OnInit {

@ViewChild('form') form:NgForm; 

  isSubmited=false;
  formdata={};
  constructor() { }

  ngOnInit() {
  }

  answers = [{
    name: "Yes",
    value: "yes"
  }
    ,
  {
    name: "No",
    value: "no"
  }]


  submitForm() {
      this.isSubmited=true;
    this.formdata=this.form.value;
    console.log("form: ", this.formdata);
  }

}
