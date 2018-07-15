import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
export class WSValidator {
  static password(control: AbstractControl): ValidationErrors | null {
      const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
      return pattern.test(control.value) ? null : { 'password': true };
  }

  static match(firstControlName: string, secondControlName: string) {
      return (control: AbstractControl): { [key: string]: any } => {
          const firstControl = control.get(firstControlName);
          const secondControl = control.get(secondControlName);

          if (firstControl.value !== secondControl.value) {
              secondControl.setErrors({ 'match': true });
          } else {
              return null;
          }
      };
  }
}
