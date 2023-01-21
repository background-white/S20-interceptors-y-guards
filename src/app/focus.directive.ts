import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  constructor(private ElementRef: ElementRef) { 
  }

  ngOnInit(){
    this.ElementRef.nativeElement.focus();
  }

}
