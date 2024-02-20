import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private myUsers: HttpClient) {}
  private DB_URL = 'https://jsonplaceholder.typicode.com/users';
  GetAllUsers() {
    return this.myUsers.get(this.DB_URL);
  }
}
