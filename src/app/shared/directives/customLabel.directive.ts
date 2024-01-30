import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private _htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private _el: ElementRef<HTMLElement>) {
    this._htmlElement = _el;
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this._htmlElement) return;
    this._htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this._htmlElement) return;
    if (!this._errors) {
      this._htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this._htmlElement.nativeElement.innerText = 'Este campo es requerido.';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors['minlength']['requiredLegth'];
      const current = this._errors['minlength']['actualLength'];
      this._htmlElement.nativeElement.innerText = `Mínimo ${current}/${min} caracteres.`;
      return;
    }

    if (errors.includes('email')) {
      this._htmlElement.nativeElement.innerText = 'Introduce un email valido.';
      return;
    }
  }
}
