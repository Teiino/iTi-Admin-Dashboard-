import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  constructor(private UService: UsersService) {}
  users: any;
  dataUsers: any;
  ngOnInit() {
    console.log('ass');

    this.UService.getStats().subscribe({
      next: (data) => {
        console.log(data);
        this.dataUsers = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
