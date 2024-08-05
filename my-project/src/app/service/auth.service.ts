import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private tokenKey = 'auth_token';
  private userRoleSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
          this.decodeToken(response.token);
        })
      );
  }

  private decodeToken(token: string): void {
    const payload = JSON.parse(atob(token.split('.')[1]));
    this.userRoleSubject.next(payload.user.role);
  }
  
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getRole(): Observable<string | null> {
    return this.userRoleSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.userRoleSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
