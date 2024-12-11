import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrl: './input-custom.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCustomComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputCustomComponent),
      multi: true,
    },
  ],
})
export class InputCustomComponent implements ControlValueAccessor {
  value: any = '';
  isDisabled = false;
  validationError: string | null = null;

  private onChange = (value: any) => { };
  public onTouched = () => { };
  private onValidatorChange?: () => void;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.validateControl(); 
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.value && this.value.length < 5) {
      return { minLength: 'Giá trị phải có ít nhất 5 ký tự' };
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  private validateControl(): void {
    const errors = this.validate({ value: this.value } as AbstractControl);
    this.validationError = errors?.['minLength'] || null;
    if (this.onValidatorChange) {
      this.onValidatorChange();
    }
  }
}
