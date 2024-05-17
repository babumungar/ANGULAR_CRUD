import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // If the value is empty, don't perform validation
    }

    const hasAlphabet = /[a-zA-Z]/.test(value);
    const hasDigit = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const valid = hasAlphabet && hasDigit && hasSpecialCharacter;
    return valid ? null : { passwordStrength: true };
  };
}
