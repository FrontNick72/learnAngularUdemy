import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultLevel = 'advanced';

  user = {
    email: '',
    level: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.user.email = this.form.value.email;
    this.user.level = this.form.value.level;
    this.user.password = this.form.value.password;

    this.submitted = true;
    this.form.reset();
  }
}
