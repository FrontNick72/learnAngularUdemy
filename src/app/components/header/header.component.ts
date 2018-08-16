import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() page = new EventEmitter<string>();

  onChangePage(pageName: string) {
    this.page.emit(pageName);
  }
}
