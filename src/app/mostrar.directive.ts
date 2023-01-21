import { Directive } from '@angular/core';

@Directive({
  selector: '[appMostrar]'
})
export class MostrarDirective {
  public title = 'CALCULAR';
  public showTitle: boolean = true;

  constructor() { }

}
