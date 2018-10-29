import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as fromApp from '../../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.pug',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {
  error: string;
  token: string;

constructor(private store: Store <fromApp.AppState>) {}

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({ username: email, password: password }));
  }
}
