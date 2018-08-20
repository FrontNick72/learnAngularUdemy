import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {
    console.log('element Ref', this.elementRef);
  }

  ngOnInit() {
  }
}
