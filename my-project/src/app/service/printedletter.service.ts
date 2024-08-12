import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintedletterService {

  private apiUrl = 'http://localhost:5000/api/printed-letters';

  constructor(private http: HttpClient) { }

  // Create a new printed letter
  createPrintedLetter(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Get all printed letters
  getAllPrintedLetters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a printed letter by ID
  getPrintedLetterById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Update a printed letter by ID
  updatePrintedLetter(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a printed letter by ID
  deletePrintedLetter(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Handle errors from HTTP requests
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
