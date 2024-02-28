import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // userName = this.router.navigate(['loginadmin', username]);

  // userNamenav = this.router.getCurrentNavigation();
  username: any;
  ngOnInit(): void {
    this.userName();
    // console.log(this.userName);
    // this.route.params.subscribe((params) => {
    //   this.username = params;
    // });
    // console.log('userNamenav', this.username);
  }
  userName() {
    console.log(this.UService.getEventData('paaa')());
    // console.log(this.username);
  }
  logout() {
    console.log('logout');
    this.UService.setToken('');
    this.router.navigate(['/'], {
      relativeTo: this.route,
    });
  }
}
