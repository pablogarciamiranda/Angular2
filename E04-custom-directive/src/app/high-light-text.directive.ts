import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLightText]'
})
export class HighLightTextDirective {

  private elementRef: ElementRef

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  @HostListener('mouseenter') onmouseenter(){
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onmouseleave(){
    this.elementRef.nativeElement.style.backgroundColor = null ;
  }
}
