import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
export class SignInComponent implements OnInit {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  // counter = signal('');
  // userName = 'ahmed ayhia updateeeee ';
  // @Output() myEvent = new EventEmitter();
  // fire() {
  //   this.counter.update(() => 'ahmed data from login');
  // }
  // emitEvent() {
  //   const dataToSend = { message: 'Hello from child!' };
  //   this.UService.getEventData(dataToSend);
  //   // this.UService.sendEventData(this.ahmed);
  // }
  ngOnInit() {
    /** spinner starts on init */
    // this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 500);
  }
  email = '';
  password = '';
  red = false;
  isEmailValid = false;
  emailinput = 'emailinput';
  passwordinput = 'passinput';
  // user: any = {
  //   email: 'ahmedabdozeko@gmail.com',
  //   password: '123456',
  // };
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
      Validators.minLength(5),
    ]),
  });
  get emailvalid() {
    console.log('This is emailvalid get');

    return this.regValidation.controls['email'];
  }
  get passwordvalid() {
    console.log('This is password valid get');

    return this.regValidation.controls['password'];
  }
  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 3000);
  // }
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
      const userLogin = {
        email: this.emailvalid.value,
        password: this.passwordvalid.value,
      };

      // this.emailinput = 'emailinput';
      // this.passwordinput = 'passinput';
      // console.log(this.regValidation.controls.email.valid);
      // alert('login sucsess');
      // this.goToItems();
      // this.router.navigate(['loginadmin'], { relativeTo: this.route });
      this.UService.login(userLogin).subscribe({
        next: (data: any) => {
          // const data = data.token;
          console.log(data);
          this.UService.setToken(data.body.token);
          if (data.body.role === 'admin') {
            this.router.navigate(
              [`loginadmin/${data.body.userName}/${data.body.role}/dashboard`],
              {
                relativeTo: this.route,
              }
            );
          } else {
            this.router.navigate([`loginuser/${data.body.userName}`], {
              relativeTo: this.route,
            });
            // this.myEvent.emit(data.body.role);
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

function NavigationExtras(counter: WritableSignal<string>) {
  return counter;
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
