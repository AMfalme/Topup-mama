import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted : Boolean = false;
  registrationForm : FormGroup =new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  })
  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: [null, [Validators.required, ]],
      password: [null, Validators.required],
      password2: [null, Validators.required],
    });
  }

}
