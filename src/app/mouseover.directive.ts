import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseover]',
  standalone: true
})
export class MouseoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.changeBackgroundColor("yellow");

  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
