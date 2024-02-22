import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AdminDashboard';
}
