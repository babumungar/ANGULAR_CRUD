import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appAlphabetsOnlyValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AlphabetsOnlyValidatorDirective, multi: true }]
})
export class AlphabetsOnlyValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^[a-zA-Z\s]+$/.test(value)) {
      return { 'alphabetsOnly': true };
    }
    return null;
  }

  
  // validate(control: AbstractControl<any, any>): ValidationErrors | null {
  //   throw new Error('Method not implemented.');
  // }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
