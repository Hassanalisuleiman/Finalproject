// src/app/services/letter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
  private apiUrl = 'http://localhost:5000/api/letters';

  constructor(private http: HttpClient) { }

  generateLetter(letter: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/generate`, letter);
  }

  getLetters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

