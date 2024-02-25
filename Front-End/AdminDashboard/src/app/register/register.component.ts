import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersComponent,
    RouterModule,
  ],
  providers: [UsersService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  years: number[] = [];
  days: number[] = [];
  inputName: string = '';

  registerValidation = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Za-z0-9][A-Za-z0-9 .-_]*[A-Za-z0-9]$'),
      ]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
      day: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
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
      Password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
          ),
        ])
      ),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        ),
      ]),
    },
    { validators: this.passwordMatchValidator }
  );
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  Password: any;

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    // console.log(this.days);
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
  get PasswordValid() {
    //true || false
    return this.registerValidation.controls['Password'];
  }
  get confirmPasswordValid() {
    //true || false
    return this.registerValidation.controls['confirmPassword'];
  }
  console() {
    console.log('consle');
  }
  passwordMatchValidator(control: AbstractControl) {
    if (
      !control.get('Password')?.errors?.['required'] &&
      control.get('Password')?.value !== control.get('confirmPassword')?.value
    ) {
      return { passwordNotMatch: true };
    }

    return null;
  }
  userObj: any;
  newDate: any;
  newDateFormat: any;
  submit() {
    console.log(this.inputName);

    if (this.registerValidation.valid) {
      this.newDate = new Date(
        `${this.registerValidation.value.year}-${this.registerValidation.value.month}-${this.registerValidation.value.day}`
      );

      const year = this.newDate.getFullYear();
      const month = String(this.newDate.getMonth() + 1).padStart(2, '0');
      const day = String(this.newDate.getDate()).padStart(2, '0');
      this.newDateFormat = `${year}-${month}-${day}`;
      console.log(this.newDateFormat);

      this.userObj = {
        name: this.registerValidation.value.name,
        email: this.registerValidation.value.email,
        password: this.registerValidation.value.Password,
        gender: this.registerValidation.value.gender,
        dateOfBirth: this.newDateFormat,
        phonenumber: this.registerValidation.value.phone,
        address: {
          street: this.registerValidation.value.street,
          city: this.registerValidation.value.city,
          country: this.registerValidation.value.country,
        },
      };

      console.log(this.userObj);

      this.UService.addNewStudent(this.userObj).subscribe({
        complete: () => {
          alert('Added Successfully');
        },
      });
      this.router.navigate(['/'], {
        relativeTo: this.route,
      });
      this.router.navigate(['/'], {
        relativeTo: this.route,
      });
      console.log(this.registerValidation.value);
      alert('sucsess');
    } else {
      console.log(this.registerValidation.value.name);
      // console.log(this.registerValidation);
      // console.log(this.registerValidation.controls['gender']);

      alert('invaild data');
    }
  }
}
