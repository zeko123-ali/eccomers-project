import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {


if (localStorage.getItem('mytoken') !== null) {
if (req.url.includes('cart') ||req.url.includes('order')) {
    req=req.clone({
  setHeaders:{

     token:localStorage.getItem('mytoken') !

  }
})
}
}

  return next(req);
};
