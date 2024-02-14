import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  years: number[] = [];
  days: number[] = [];
  inputName: string = '';

  registerValidation = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])
    ),
    phone: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(011|012|010)\d{8}$/),
      ])
    ),
  });
  constructor() {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    console.log(this.days);
    for (let i = 1990; i <= currentYear; i++) {
      this.years.push(i);
    }

    for (let i = 1; i <= 31; i++) {
      // console.log(i);
      this.days.push(i);
    }
  }
  get nameValid() {
    //true || false
    return this.registerValidation.controls['name'];
  }
  get emailValid() {
    //true || false
    return this.registerValidation.controls['email'];
  }
  get phoneValid() {
    //true || false
    return this.registerValidation.controls['phone'];
  }
  submit() {
    console.log(this.registerValidation);

    if (this.registerValidation.valid) {
      alert('sucsess');
    } else {
      alert('invaild data');
    }
  }
}
