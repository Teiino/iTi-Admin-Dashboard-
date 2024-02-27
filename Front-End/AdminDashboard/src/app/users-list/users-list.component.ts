import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  constructor(private UService: UsersService) {}
  users: any;
  dataUsers: any;
  consle(d: any) {
    console.log(d);
  }

  ngOnInit() {
    console.log('ass');

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
  deleteUser(id: any, name: any) {
    if (confirm(`are you sure you want delete user ${name} `)) {
      this.UService.deleteUser(id).subscribe();
    }
  }
}
