import { HttpClient } from "@angular/common/http";
import { Book } from "../book/book";
import { Observable } from "rxjs";


export class addShoppingCarte {
    private URL : String = "https://localhost:8091/api/books";

    books : Book[];
    quantity : number[];

    constructor(private http: HttpClient){}


    getAllBooks (): Observable<Book[]> {
        return JSON.parse(localStorage.getItem('books'));
    }

    getAllQuantites() : number[] {
        return JSON.parse(localStorage.getItem('quantity'));
    }

    addBooks(book : Book, quantity : number){
        this.books.push(book);
        this.quantity.push(quantity);
        localStorage.setItem('books', JSON.stringify(this.books));
        localStorage.setItem('quantity', JSON.stringify(this.quantity));
    }
    calculate(Id: number){
        return this.http.get<number>(`${this.URL}/total-price/${Id}`);
      }
    
      
  remove (Id: number): void{
    localStorage.removeItem('books');
    localStorage.removeItem('quantity');
    
    let quan = [];
    let i = 0;
    this.books = this.books.filter( 
      book => {
        if (book.id != Id){
          quan.push(this.quantity[i]);
          i++;
          return book;
        }
      }
    );

    this.quantity = quan;
    console.log(this.books);
    localStorage.setItem('books',JSON.stringify(this.books));

  }
  buy(){
      localStorage.removeItem('books');
      localStorage.removeItem('quantity');
  }




} 