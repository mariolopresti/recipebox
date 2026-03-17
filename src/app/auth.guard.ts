import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Se l'utente non è loggato (Signal è null)
  if (!authService.currentUser()) {
    // Lo rimandiamo alla pagina di login
    return router.parseUrl('/login');
  }

  // Altrimenti può procedere
  return true;
};
