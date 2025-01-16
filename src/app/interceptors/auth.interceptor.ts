import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const protectedRoutes = [
    'api/logout',
    'api/add_recipe',
    'api/edit_recipe',
    'api/delete_recipe',
    'api/my_recipes',
  ]
  const shouldIntercept = protectedRoutes.some(route => req.url.includes(route));
  if(shouldIntercept) {
    const token = localStorage.getItem('token');
    const newreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(newreq);
  }
  return next(req);
};
