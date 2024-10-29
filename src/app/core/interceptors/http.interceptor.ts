import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.clone({
    withCredentials: true,
    headers: req.headers
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', 'true'),
  });

  return next(modifiedRequest);
};
