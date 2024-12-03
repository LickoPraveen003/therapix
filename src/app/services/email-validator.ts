import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailValue = control.value;
      if (emailValue && emailValue.includes('@') && emailValue.includes('.')) {
        return null;  // Valid email
      }
      return { invalidEmail: true };  // Custom error key
    };
  }
  