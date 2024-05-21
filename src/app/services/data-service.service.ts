import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  private apiUrl = 'http://localhost:9090/booksproject/getAll'
 // private apiUrl = 'https://api.github.com/users/{username}'
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
