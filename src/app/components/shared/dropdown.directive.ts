import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';
import { isComponent } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') private isOpen: boolean;

  constructor(private elementRef: ElementRef) {
    this.isOpen = false;
  }

  @HostListener('click') onclick() {
    this.isOpen = !this.isOpen;
  }
}
