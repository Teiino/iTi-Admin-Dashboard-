import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http: any;
  constructor(private myUsers: HttpClient) {}
  private DB_URL = 'https://iti-angular-project.onrender.com/api/v1';
  private apiKey =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NWQzY2IzMzBjMjkxNTcyZWVmZmU3OTEiLCJSb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDgzNzg5MzgsImV4cCI6MTcxNjE1NDkzOH0.2THZS0V9wGxCvMWO1pm-zPFm27SBEFDPcLYMAcnC55A';
  private apiKeydelet =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NWQzYzQ1NTQ2NWNjNGIxYWIxYjdhNTciLCJSb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDgzNzc2NjIsImV4cCI6MTcxNjE1MzY2Mn0.b-RHEJAVqSMG0TclBAUBIn-y-Em-QiMY017x3McEJqg';

  getStats() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.apiKey);
    return this.myUsers.get(`${this.DB_URL}/admin/getusers`, {
      headers: headers,
    });
  }
  deleteUser(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.apiKeydelet);
    return this.myUsers.get(`${this.DB_URL}/admin/getusers/${id}`, {
      headers: headers,
    });
  }

  addNewStudent(student: any) {
    return this.myUsers.post(`${this.DB_URL}/users/signup`, student);
  }
  login(user: any) {
    return this.myUsers.post(`${this.DB_URL}/users/login`, user);
  }

  addNewCategory(category: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.apiKey);
    return this.myUsers.post(
      `${this.DB_URL}/categories`,

      category,
      {
        headers: headers,
      }
    );
  }

  getCategories() {
    return this.myUsers.get(`${this.DB_URL}/categories`);
  }
  getBrands() {
    return this.myUsers.get(`${this.DB_URL}/brands`);
  }

  addNewBrand(category: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.apiKey);
    return this.myUsers.post(
      `${this.DB_URL}/brands`,

      category,
      {
        headers: headers,
      }
    );
  }
}
