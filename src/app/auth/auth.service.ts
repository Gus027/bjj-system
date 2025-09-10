import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Simulação de login
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'fake-jwt-token');
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
