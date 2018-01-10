import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEnter(){
    this.resaltar(this.nuevoColor);
  }
  @HostListener('mouseleave') mouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color:string = "cyan"){
    this.el.nativeElement.style.backgroundColor=color;
  }
}
