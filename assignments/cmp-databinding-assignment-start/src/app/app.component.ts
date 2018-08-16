import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ref;
  increment: number;

  constructor() {
    this.increment = 0;
  }

  onStartingGame() {
    this.ref = setInterval(() => {
      this.increment += 1;
    }, 1000);
  }

  onStoppingGame() {
    clearInterval(this.ref);
  }
}
