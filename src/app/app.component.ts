import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
  // styles: [`
  //   h3 {
  //     color: darkblue;
  //   }
  // `]
})
export class AppComponent {
  name = 'Nikita';
  page: string;

  constructor() {}
}
