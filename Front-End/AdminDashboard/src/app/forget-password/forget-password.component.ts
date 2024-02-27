import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, FormsModule],
  providers: [UsersService],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  constructor(private UService: UsersService) {}

  forgetPass(d: any) {
    console.log(d);
    const email = { email: d };
    console.log(email);
    this.UService.forgerPassword(email).subscribe({
      complete: () => console.log('email sent'),
    });
  }
}
