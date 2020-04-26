import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../books/book';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';

  getBooks() {
    return this.http.get<IBook[]>(`${this.baseUrl}/books`);
  }

  getBook(id) {
    return this.http.get<any>(`${this.baseUrl}/books/${id}`);
  }

  addBook(book: any) {
    return this.http.post(`${this.baseUrl}/books`, book);
  }

  updateBook(book: any) {
    return this.http.put(`${this.baseUrl}/books/${book.id}`, book);
  }

  saveBook(book: any) {
    if (book.id) {
      return this.updateBook(book);
    } else {
      return this.addBook(book);
    }
  }

  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
}
