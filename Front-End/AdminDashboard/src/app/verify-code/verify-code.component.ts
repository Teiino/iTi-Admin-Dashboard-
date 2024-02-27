import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [UsersService],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css',
})
export class VerifyCodeComponent {
  constructor(private UService: UsersService) {}
  // passwordVerify
  consle() {
    console.log('aaaaa');
  }
  sendVrify(code: any) {
    const restCode = {
      restCode: code,
    };
    return this.UService.passwordVerify(restCode).subscribe({
      complete: () => console.log('code sent'),
    });
  }
}
