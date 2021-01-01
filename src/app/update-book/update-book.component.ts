import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: number;
  book: Book;
  booksForm = this.fb.group({
    id:[''],
    author:['',Validators.required],
    price:['', Validators.required],
    releaseDate:['',Validators.required],
    title:['',Validators.required]
  });

  constructor(private route: ActivatedRoute,private router: Router,
    private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    this.booksForm.patchValue(this.book);
    
    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }
  updateBook() {
    const  books = this.booksForm.value;
    console.log(this.booksForm.value);
    this.bookService.updateBook(this.id, books)
      .subscribe(data => {
        console.log(data);
        this.booksForm.reset();
        this.router.navigate(['/books'])
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateBook();    
  }

  }
