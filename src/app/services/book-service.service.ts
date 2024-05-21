import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of, delay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private books = [
    { name: 'marvel', available: true },
    { name: 'disney', available: true },
    { name: 'harrypotter', available: true },
    { name: 'lordoftherings', available: false } // Example of an unavailable book
  ];

  //private checkApiUrl = 'https://api.example.com/check-book-name';
  private getApiUrl = 'http://localhost:9090/booksproject/getbyname';


  constructor(private http: HttpClient) {}

 /*  checkBookName(bookName: string): Observable<{ available: boolean }> {
    return this.http.get<{ available: boolean }>(`${this.checkApiUrl}?bookName=${bookName}`).pipe(
      map(response => ({ available: response.available })),
      catchError(() => of({ available: true })) // Assume available if there's an error
    );
  } */
  getBookByName(bookName: string): Observable<any> {
    console.log("hi");
    return of(null).pipe(
      delay(2000),
      switchMap(() => this.http.get<any>(`${this.getApiUrl}?bookName=${bookName}`)),
      catchError(error => {
        console.error('Error fetching book by name', error);
        return of(null);
      })
    );
  }

 /*  getBookByName(bookName: string): Observable<any> {
    console.log("Checking book name:", bookName);
    const book = this.books.find(b => b.name.toLowerCase() === bookName.toLowerCase());
    return of(book ? { available: book.available } : null);
  } */
}
