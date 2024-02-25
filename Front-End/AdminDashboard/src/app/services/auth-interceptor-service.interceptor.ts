import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorServiceInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  console.log('Request is on its way');
  return next(req);
};
