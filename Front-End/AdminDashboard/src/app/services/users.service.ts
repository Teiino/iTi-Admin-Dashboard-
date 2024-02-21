import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http: any;
  constructor(private myUsers: HttpClient) {}
  private DB_URL = 'https://jsonplaceholder.typicode.com/users';
  GetAllUsers() {
    return this.myUsers.get(this.DB_URL);
  }
  GetAllUsersAth() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.apiKey);
    return this.myUsers.get(`${this.DB_URL}/admin/getusers`, {
      headers: headers,
    });
  }

  addNewStudent(student: any) {
    return this.myUsers.post(`${this.DB_URL}/users/signup`, student);
  }
}
