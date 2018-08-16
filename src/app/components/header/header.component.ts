import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() page = new EventEmitter<string>();

  onChangePage(event) {
    console.log('event', event.target.getAttribute('href'));
    event.preventDefault();
    const pageName = event.target.getAttribute('href');

    this.page.emit(pageName);
  }
}
