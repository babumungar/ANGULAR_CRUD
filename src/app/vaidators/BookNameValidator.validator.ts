// book-name.validator.ts
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BookServiceService } from '../services/book-service.service';

export class BookNameValidator {
    static createValidator(bookService: BookServiceService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return bookService.getBookByName(control.value).pipe(
          map(response => {
            return response && response.available === true ? { BookNameValidator: true } : null;
          }),
          catchError(() => of(null)) // Handle errors gracefully
        );
      };
    }
  }
