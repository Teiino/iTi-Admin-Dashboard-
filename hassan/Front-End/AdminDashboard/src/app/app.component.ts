import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SellerComponent } from './seller/seller.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AdminDashboard';
}
