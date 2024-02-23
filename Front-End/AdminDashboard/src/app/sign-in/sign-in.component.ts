import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  ActivatedRoute,
  NavigationExtras,
  Router,
  RouterModule,
} from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  email = '';
  password = '';
  red = false;
  isEmailValid = false;
  emailinput = 'emailinput';
  passwordinput = 'passinput';
  user: any = {
    email: 'admin2@gmail.com',
    password: '123456',
  };
  goToItems() {
    this.router.navigate(['loginadmin'], { relativeTo: this.route });
  }
  regValidation = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(30),
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
  get emailvalid() {
    console.log('This is emailvalid get');

    return this.regValidation.controls['email'].valid;
  }
  get passwordvalid() {
    console.log('This is password valid get');

    return this.regValidation.controls['password'].valid;
  }
  // login(e: any, p: any) {

  //   console.log(e,p);
  //   console.log(this.regValidation);
  //   const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
  //   if (!test || !this.emailvalid) {
  //     this.red = true;
  //   }
  //     console.log("test= "+ test);
  //     console.log("emailvalid= "+ this.emailvalid);
  //     console.log("red= "+this.red);

  login() {
    // const EmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
    // console.log(EmailValid);
    console.log(this.regValidation);
    if (this.regValidation.status == 'VALID') {
      this.emailinput = 'emailinput';
      this.passwordinput = 'passinput';
      console.log(this.regValidation.controls.email.valid);
      // alert('login sucsess');
      // this.goToItems();
      // this.router.navigate(['loginadmin'], { relativeTo: this.route });
      this.UService.login(this.user).subscribe({
        next: (data) => {
          // const data = data.token;
          console.log(data);
        },
        complete: () => {
          // alert('login sucsess');
          if (true) {
            this.router.navigate(['loginadmin/dashboard'], {
              relativeTo: this.route,
            });
          } else {
            this.router.navigate(['loginuser'], { relativeTo: this.route });
          }
        },
      });
    } else {
      if (this.regValidation.controls.email.valid == false) {
        this.emailinput = 'failedEmailinput';
      }
      if (this.regValidation.controls.password.valid == false) {
        this.passwordinput = 'passwordinput1';
      }

      this.emailinput = 'failedEmailinput';
      console.log(console.error('INvalid'));

      // this.regValidation.markAllAsTouched()
    }
  }

  // if (EmailValid) {
  //   this.isEmailValid = true;
  //   console.log("Here we go");

  // }
  //else {
  //   // this.isEmailValid = false;

  // }
}

// }
//  login() {
//   const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
//   if (emailValid) {
//     this.isEmailValid = true;
//     // Other login logic...
//   } else {
//     this.isEmailValid = false;
//     // Handle invalid email...
//   }
// }
