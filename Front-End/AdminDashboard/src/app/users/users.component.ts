import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private UService: UsersService) {}
  users: any;
  ngOnInit() {
    console.log(this.UService.GetAllUsers());
    // this.UService.GetAllUsers().subscribe(
    // {
    //   next: (users) => {
    //     // console.log(users);
    //     this.users = users;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
    console.log(
      this.UService.GetAllUsersAth().subscribe({
        next: (usersdata) => {
          console.log(usersdata);
          this.users = usersdata;
        },
        error: (error) => {
          console.log(error);
        },
      })
    );
  }
  consle(d: any) {
    console.log(d);
  }
}
