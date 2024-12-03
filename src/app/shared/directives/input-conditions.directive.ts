import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputConditions]'  // Apply this directive using 'inputConditions'
})
export class InputConditionsDirective {

  @Input() inputConditions: string = '';  // Define input type to control validation

  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const key = event.key;

    // Define allowed keys for each input type
    switch (this.inputConditions) {
      case 'numberOnly':
        if (!this.isNumberKey(key) && !this.isControlKey(key)) {
          event.preventDefault();  // Block non-number keys
        }
        break;

      case 'alphaOnly':
        if (!this.isAlphaKey(key) && !this.isControlKey(key)) {
          event.preventDefault();  // Block non-alphabet keys
        }
        break;

      case 'alphanumericOnly':
        if (!this.isAlphanumericKey(key) && !this.isControlKey(key)) {
          event.preventDefault();  // Block non-alphanumeric keys
        }
        break;

      default:
        break;
    }
  }

  // Helper method to check if the key is a number
  private isNumberKey(key: string): boolean {
    return /^[0-9]$/.test(key);
  }

  // Helper method to check if the key is an alphabet letter
  private isAlphaKey(key: string): boolean {
    return /^[a-zA-Z]$/.test(key);
  }

  // Helper method to check if the key is alphanumeric (letters and numbers)
  private isAlphanumericKey(key: string): boolean {
    return /^[a-zA-Z0-9]$/.test(key);
  }

  // Helper method to check if the key is a control key (e.g., backspace, delete)
  private isControlKey(key: string): boolean {
    const controlKeys = [
      'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'
    ];
    return controlKeys.includes(key);
  }
}
