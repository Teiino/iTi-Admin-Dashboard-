import { AdminComponent } from './admin/admin.component';
import {
  Component,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  OnInit,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SellerComponent } from './seller/seller.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { OneUserComponent } from './one-user/one-user.component';
import { UsersComponent } from './users/users.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
// import { ChartLineDemo } from './charts/chart-line-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminComponent,
    RegisterComponent,
    SellerComponent,
    SignInComponent,
    UserComponent,
    TestComponent,
    CommonModule,
    OneUserComponent,
    UsersComponent,
    RouterModule,
    AddCategoryComponent,
    AddBrandComponent,
    NavbarComponent,
    NgxSpinnerModule,
    HttpClientModule,
    // ChartLineDemo,
  ],
  providers: [UsersService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // userName: any = this.router.getCurrentNavigation();
  ngOnInit(): void {
    // console.log('from app', this.userName);
  }
  name: any;
  // userName = this.router.navigate(['loginadmin', username]);
  title = 'AdminDashboard';
  // username: any;
  getUser(username: any) {
    console.log(username);
  }
}
