import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }


  @HostListener('mouseenter')
  public onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.color = 'black';
  }

}
