import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
    // setInterval(()=>{
    //   this.nxtFunc()
    // },3000)
  }

  @HostListener('click')
  nxtFunc() {
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName('item')
    // console.log(elm);
    // console.log(item);
    elm.append(item[0])
  }
}
