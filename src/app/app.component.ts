import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: darkblue;
  //   }
  // `]
})
export class AppComponent {
  name = 'Nikita';
  page: string;

  constructor() {
    this.page = 'Recipes';
  }

  onChangedPage(page) {
    this.page = page;
  }
}
