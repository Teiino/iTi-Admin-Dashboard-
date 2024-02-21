import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(private UService: UsersService) {}
  ngOnInit() {
    console.log(this.UService.GetAllUsers());
  }
}
