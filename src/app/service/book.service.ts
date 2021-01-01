import { Observable } from "rxjs";
import { Book } from "../book/book";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root'})

  export class BookService {
  
    private URL: string = 'http://localhost:8091/api/books';
  
    constructor(private http: HttpClient) { }
  
    getBooksList(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.URL}/all`);
    }  
    
    getBook(id: number): Observable<any> {
      return this.http.get(`${this.URL}/get/${id}`);
    }
  
    addBook(book: Book) {
      return this.http.post(`${this.URL}/add`, book);
    }
  
    updateBook(book: Book) {
      return this.http.put(`${this.URL}/update`, book);
    }
  
    deleteBook(book: Book) {
      return this.http.post(`${this.URL}/delete`, book);
    }
  
   
  }