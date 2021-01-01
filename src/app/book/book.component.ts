import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  quantite: string;
  name: string;
  books: any;
  book:any;
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    
  
}
