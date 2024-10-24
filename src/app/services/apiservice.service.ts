import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService<T> {
    private apiUrl = environment.apiUrl; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Create a new item
  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Read all items
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Read a single item by ID
  getById(id: number): Observable<T> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update an item by ID
  update(id: number, item: T): Observable<T> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<T>(url, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete an item by ID
  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
