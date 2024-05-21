import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn } from '@angular/forms';
import { catchError } from 'rxjs';
import { BookServiceService } from 'src/app/services/book-service.service';
import { BookNameValidator } from 'src/app/vaidators/BookNameValidator.validator';
import { alphabetsOnlyValidator } from 'src/app/vaidators/alphabets-only.validator';
import { passwordValidator } from 'src/app/vaidators/password-validator.validator';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  bookForm!:FormGroup<any>;
  
  books:any;

  constructor(private fb: FormBuilder, private bookService: BookServiceService) {}

  ngOnInit(): void {
    //const bookNameAsyncValidator: AsyncValidatorFn = BookNameValidator.createValidator(this.bookService);
    this.bookForm = this.fb.group({
      bookName: ['', [Validators.required], [BookNameValidator.createValidator(this.bookService)] ]
    });
  }

  
  onSubmit(): void {
    /* if (this.bookForm.valid) {
      const bookName = this.bookForm.get('bookName').value;
      this.bookService.getBookByName(bookName).subscribe(book => {
        if (book) {
          console.log('Book details:', book);
        } else {
          console.log('Book not found');
        }
      });
    } */
    

    if (this.bookForm.valid) {
      /* const bookName = this.bookForm.get('bookName')?.value;
      this.bookService.getBookByName(bookName)
        .pipe(
          catchError((error) => {
            console.error('An error occurred:', error);
            // Optionally handle the error here, e.g., show an error message to the user
            return throwError('Something went wrong'); // Rethrow the error or return a default value
          })
        )
        .subscribe((data: any) => {
          this.books = data;
          console.log(this.books);
        }); */
        alert("Book Created successfully");
        location.reload();
    }
  }
}
function throwError(arg0: string): any {
  throw new Error('Function not implemented.');
}

