import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showedPassword: boolean;
  logClicks: Array<number> = [];
  increment: number;

  constructor() {
    this.showedPassword = false;
    this.increment = 0;
  }

  toggle() {
    this.logClicks.push(this.increment++);
    this.showedPassword = !this.showedPassword;
  }

  getBackground() {
    return this.increment >= 5 ? 'blue' : 'transparent';
  }
}
