import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NavbarComponent,
    SideBarComponent,
    UsersListComponent,
    RouterModule,
  ],
  providers: [UsersService],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  username: any = this.route.snapshot.root.children[0].params['username'];
  role: any = this.route.snapshot.root.children[0].params['role'];
  ngOnInit(): void {
    console.log(this.username);
  }
}
