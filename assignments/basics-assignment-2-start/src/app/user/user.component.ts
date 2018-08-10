import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = 'UserName';

  constructor() { }

  ngOnInit() {
  }

  userEmpty() {
    return this.userName === '';
  }

  resetUserName() {
    this.userName = '';
  }
}
