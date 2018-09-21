import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

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
export class AppComponent implements OnInit {
  name = 'Nikita';
  page: string;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBQQT8qgSJb8ztnb5H8mbAzOlPnSQLQabo',
      authDomain: 'ng-recipy-book.firebaseapp.com',
    });
  }
}
