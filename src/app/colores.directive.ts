import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColores]'
})
export class ColoresDirective {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.backgroundColor = 'yellow'
   }

}
