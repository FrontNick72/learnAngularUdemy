import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;
  forbidden = 'test';

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  // forbiddenName(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === this.forbidden) {
  //     return {'forbiddenIsName': true};
  //   }

  //   return null;
  // }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === this.forbidden) {
          resolve({ 'forbiddenIsName': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value);

  }
}
