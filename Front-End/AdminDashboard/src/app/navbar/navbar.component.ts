import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    private UsersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  logout() {
    console.log('logout');
    this.UsersService.setToken('');
    this.router.navigate(['/'], {
      relativeTo: this.route,
    });
  }
}
