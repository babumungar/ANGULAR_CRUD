import { AsyncValidatorFn, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


export function alphabetsOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null; // If value is empty, don't perform validation
      }
      if (!/^[a-zA-Z]+$/.test(value)) {
        return { 'alphabetsOnly': true };
      }
    //   
      return null;
    };
  }