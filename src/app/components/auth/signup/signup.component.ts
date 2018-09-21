import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.pug',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
      .catch(
        error => this.error = error.message
      );
  }
}
