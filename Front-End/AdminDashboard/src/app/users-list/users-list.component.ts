import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  users: any;
  dataUsers: any;
  consle(d: any) {
    console.log(d);
  }
  // id: any = this.route.snapshot.root;
  ngOnInit() {
    // location.reload();
    // console.log(this.id);

    this.UService.getStats().subscribe({
      next: (data: any) => {
        // console.log(data);
        console.log(data.body);
        this.dataUsers = data.body.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  togle: any = true;
  togleUser() {
    this.togle = false;
  }

  deleteUser(id: any, name: any) {
    if (confirm(`are you sure you want delete user ${name} `)) {
      this.UService.deleteUser(id).subscribe();
    }
  }
}
