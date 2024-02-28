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
import { Injectable, OnInit, effect, signal } from '@angular/core';
import { signalSetFn } from '@angular/core/primitives/signals';
import { ChildActivationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService implements OnInit {
  http: any;
  ngOnInit(): void {
    // this.sentData();
  }
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
  private eventDataSubject = new Subject<any>();
  eventData$ = this.eventDataSubject.asObservable();
  dataus: any = '';
  // private userSignal = signal('ana init signal');
  getEventData(data: any) {
    console.log(data);
    this.eventDataSubject.next(data);
    // console.log(data);
    // this.dataus = data;
    // this.userSignal.update(() => data);
    // this.userSignal.set('set data new');
    // console.log('get', this.userSignal());
    // this.dataus = this.userSignal();
    // console.log(this.dataus);
    // this.eventDataSubject.next(data);
    // return this.dataus;
    // this.dataus = data;
    // console.log(this.dataus);
    // this.sentData(this.dataus);
    // const aa = data;
    // console.log(aa);
    // return function sentzeko() {
    // console.log(aa);
    // return aa;
    // };
  }
  // getuser(){

  //   return function sentzeko(){

  //   }
  // }
  // sentdata = 'sentData runnnnn';
  // userEffect = effect(() => console.log(this.userSignal()));
  sentData() {
    // console.log(object);
    // const onlyRead = dd;
    // console.log(this.dataus);
    // console.log('sent', this.dataus);
    // console.log(this.userSignal());
    // return { message: this.dataus };
    // console.log(onlyRead);
    // return onlyRead;
  }
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
  forgerPassword(email: any) {
    return this.myUsers.post(`${this.DB_URL}/users/fPasswored`, email);
  }
  passwordVerify(code: any) {
    return this.myUsers.post(`${this.DB_URL}/users/fPassworedVerify`, code);
  }
  newPassword(password: any) {
    return this.myUsers.post(`${this.DB_URL}/users/restPasswordForF`, password);
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
  editeUser(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers
      .get(`${this.DB_URL}/admin/getusers/${id}`, {
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
            // location.reload();
          }
        })
      );
  }

  updateUser(id: any, obj: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers
      .patch(`${this.DB_URL}/admin/getusers/${id}`, obj, {
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
            // location.reload();
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
            console.log('response ......');
            console.log(e);
            this.spinner.hide();
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

  addNewProduct(product: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers.post(
      `${this.DB_URL}/products`,

      product,
      {
        headers: headers,
      }
    );
  }
  deleteProduct(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    return this.myUsers.delete(
      `${this.DB_URL}/products/${id}`,

      {
        headers: headers,
      }
    );
  }
  getAllProduct() {
    let headers = new HttpHeaders();
    return this.myUsers
      .get(`${this.DB_URL}/products`, {
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
            console.log('response ......');
            console.log(e);
            this.spinner.hide();
            // Handle response event
          }
        })
      );
  }
}
