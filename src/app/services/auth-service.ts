import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/login';

  currentUser = signal<User | null>(null);

  login(credentials: { username: string; password: string }): Observable<User> {
    // In un'app reale invieresti le credenziali al backend
    return this.http.post<User>(this.apiUrl, credentials).pipe(
      tap((user) => {
        // Se il login ha successo, salviamo l'utente nel Signal
        console.log("user logged in", user);
        this.currentUser.set(user);
      }),
    );
  }

  logout() {
    this.currentUser.set(null);
  }
}
