import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [UsersService],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
  constructor(private UService: UsersService) {}
  consle() {
    console.log('newww');
  }
  regValidations = new FormGroup(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        ),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordMatchValidator }
  );
  passwordMatchValidator(control: AbstractControl) {
    // console.log(
    //   control.get('password')?.value,

    //   control.get('confirmPassword')?.value
    // );
    // console.log(control.get('password')?.value);
    if (
      !control.get('password')?.errors?.['required'] &&
      control.get('password')?.value !== control.get('confirmPassword')?.value
    ) {
      return { passwordNotMatch: true };
    }

    return null;
  }
  get Password() {
    return this.regValidations.controls.password;
  }
  get email() {
    return this.regValidations.controls.email;
  }
  get Password2() {
    return this.regValidations.controls.confirmPassword;
  }

  submit() {
    // console.log(this.regValidations);
    if (this.regValidations.valid) {
      if (this.Password.value == this.Password2.value) {
        alert('success');
        const obj = {
          email: this.regValidations.value.email,
          password: this.regValidations.value.password,
        };
        console.log(obj);
        this.UService.newPassword(obj).subscribe({
          complete: () => console.log('new password sent'),
        });
      } else {
        console.log("password doesn't match ");
      }
    } else alert('Failed');
  }
}
