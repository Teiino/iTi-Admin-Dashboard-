import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // console.log('route', route);
  // console.log('state', state);
  // console.log(localStorage.getItem('token') ? true : false);
  return localStorage.getItem('token') ? true : false;
};
