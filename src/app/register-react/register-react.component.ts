import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-react',
  templateUrl: './register-react.component.html',
  styleUrls: ['./register-react.component.css']
})
export class RegisterReactComponent implements OnInit {

  constructor() { }


  form: FormGroup;
  formData: {};
  isSubmited = false;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({

        email: new FormControl('', [Validators.required, Validators.email]),
        psw: new FormControl('', [Validators.required, Validators.maxLength(5)])
      }),

      ctr: new FormControl('ru', Validators.required),
      answ: new FormControl('no', Validators.required)
    });
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

    this.isSubmited = this.form.valid;

    if (this.isSubmited) {
      this.formData = this.form.value;
    }

  }


}
