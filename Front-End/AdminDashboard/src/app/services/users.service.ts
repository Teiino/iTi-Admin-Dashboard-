import {
  HttpClient,
  HttpHeaders,
  HttpEventType,
  HttpParams,
  HttpContext,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService {
  http: any;
  // intercept(
  //   req: HttpRequest<any>,
  //   handler: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   console.log('Request URL: ' + req.url);
  //   return handler.handle(req);
  // }
  constructor(
    private myUsers: HttpClient,
    private spinner: NgxSpinnerService
  ) {}
  private DB_URL = 'https://iti-angular-project.onrender.com/api/v1';
  // private userLogin = {
  //   email: 'admin2@gmail.com',
  //   password: '123456',
  // };
  private token = `Bearer ${localStorage.getItem('token')}`;

  getStats() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers
      .get(`${this.DB_URL}/admin/getusers`, {
        headers: headers,
        observe: 'events',
      })
      .pipe(
        tap((e) => {
          if (e.type === HttpEventType.Sent) {
            // Handle sent event
            this.spinner.show();
            console.log('sending ......');
          }
          if (e.type === HttpEventType.Response) {
            this.spinner.hide();

            console.log('response ......');
            console.log(e);
            // Handle response event
          }
        })
      );
  }
  tesst(): Observable<any> {
    return this.myUsers
      .get(`${this.DB_URL}/categories`, {
        observe: 'events',
      })
      .pipe(
        tap((e) => {
          if (e.type === HttpEventType.Sent) {
            // Handle sent event
            this.spinner.show();
            console.log('sending ......');
          }
          if (e.type === HttpEventType.Response) {
            this.spinner.hide();

            console.log('response ......');
            console.log(e);
            // Handle response event
          }
        })
      );
  }
  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 3000);
  // }

  deleteUser(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers
      .delete(`${this.DB_URL}/admin/getusers/${id}`, {
        observe: 'events',
        headers: headers,
      })
      .pipe(
        tap((e) => {
          if (e.type == HttpEventType.Sent) {
            this.spinner.show();
            console.log('sendingggggg...');
          }
          if (e.type === HttpEventType.Response) {
            this.spinner.hide();
            console.log(e);
            // this.getStats().subscribe();
            location.reload();
          }
        })
      );
  }

  deleteCategory(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers
      .delete(`${this.DB_URL}/categories/${id}`, {
        observe: 'events',
        headers: headers,
      })
      .pipe(
        tap((e) => {
          if (e.type == HttpEventType.Sent) {
            this.spinner.show();
            console.log('sendingggggg...');
          }
          if (e.type === HttpEventType.Response) {
            this.spinner.hide();
            console.log(e);
            // this.getStats().subscribe();
            location.reload();
          }
        })
      );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  addNewStudent(student: any) {
    return this.myUsers.post(`${this.DB_URL}/users/signup`, student);
  }
  login(user: any) {
    console.log(user);

    return this.myUsers
      .post(`${this.DB_URL}/users/login`, user, {
        observe: 'events',
      })
      .pipe(
        tap((e) => {
          if (e.type === HttpEventType.Sent) {
            // Handle sent event
            this.spinner.show();
            console.log('sending ......');
          }
          if (e.type === HttpEventType.Response) {
            this.spinner.hide();

            console.log('response ......');
            console.log(e);
            // Handle response event
          }
        })
      );
  }

  addNewCategory(category: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers.post(
      `${this.DB_URL}/categories`,

      category,
      {
        headers: headers,
      }
    );
  }

  getCategories() {
    return this.myUsers.get(`${this.DB_URL}/categories`, {
      observe: 'events',
    });
  }
  getBrands() {
    return this.myUsers.get(`${this.DB_URL}/brands`);
  }

  addNewBrand(category: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers.post(
      `${this.DB_URL}/brands`,

      category,
      {
        headers: headers,
      }
    );
  }
}
