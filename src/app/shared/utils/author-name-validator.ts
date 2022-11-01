import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function authorNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const regExp = new RegExp(/^[A-Za-z0-9\s]+$/);
    const authorNameIsValid = regExp.test(control.value);

    return !authorNameIsValid
      ? { authorNameIsNotValid: { value: control.value } }
      : null;
  };
}
