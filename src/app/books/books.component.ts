import { Component, OnInit } from '@angular/core';
import {BooksApiService} from '../services/books-api.service';
import {IBook} from './book';
import {log} from 'util';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public loading = false;
  public books: IBook[];
  constructor(private api: BooksApiService) { }

  ngOnInit() {
    this.loading = true;
    this.api.getBooks().subscribe( (books: IBook[]) => {
      this.books = books;
      this.loading = false;
    });
  }

}
