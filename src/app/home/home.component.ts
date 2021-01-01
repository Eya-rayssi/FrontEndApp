import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book/book';
import { addShoppingCarte } from '../service/addShoppingCarte';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  cart: string[] = [];
  constructor(private bookService : BookService, private cartService : addShoppingCarte, private router : Router) { }

  ngOnInit(): void {
    this.bookService.getBooksList().subscribe(book =>
      {
        this.books = book;
      });
  }
    
  delete(book: Book): void{
    this.bookService.deleteBook(book).subscribe(() => { 
      console.log('book deleted')
    });
  }

  addToCart(id: number, quantity: number):void {
    this.bookService.getBook(id).subscribe(book => {
      this.cartService.addBooks(book,quantity)
      this.router.navigate(['/shopping-cart']);
      ;
    });
  }
  
}
