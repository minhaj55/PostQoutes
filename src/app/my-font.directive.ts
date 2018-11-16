import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyFont]'
})
export class MyFontDirective {

  constructor(ele: ElementRef) {
ele.nativeElement.style.color = '#82B028';
ele.nativeElement.style.fontFamily = 'Century Gothic ';
   }

}
