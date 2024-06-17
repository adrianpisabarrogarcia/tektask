import { routes } from './app.routes';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!sessionStorage.getItem('userToken')) {
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }
  return true;
};
