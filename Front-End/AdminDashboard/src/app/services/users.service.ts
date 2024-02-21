import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http: any;
  constructor(private myUsers: HttpClient) {}
  private DB_URL = 'https://iti-angular-project.onrender.com/api/v1';
  private APItoken =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NWQzY2IzMzBjMjkxNTcyZWVmZmU3OTEiLCJSb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDgzNzg5MzgsImV4cCI6MTcxNjE1NDkzOH0.2THZS0V9wGxCvMWO1pm-zPFm27SBEFDPcLYMAcnC55A';
  GetAllUsers() {
    return this.myUsers.get(this.DB_URL);
  }
  GetAllUsersAth() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.APItoken);
    return this.myUsers.get(this.DB_URL + '/admin/getusers', {
      headers: headers,
    });
  }
  postRegester(userRegester: any) {
    console.log(userRegester);
    return this.myUsers.post(this.DB_URL + '/users/signup', userRegester);
  }
}
