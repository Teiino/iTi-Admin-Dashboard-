import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(private UService: UsersService) {}
  ngOnInit() {
    console.log(this.UService.GetAllUsers());
  }
}
