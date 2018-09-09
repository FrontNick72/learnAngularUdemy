import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
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

  constructor() {}
}
