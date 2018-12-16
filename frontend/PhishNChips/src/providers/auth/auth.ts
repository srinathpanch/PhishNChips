import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  readonly isTeacher: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.isTeacher.next(email == 'teacher');
      resolve();
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.isTeacher.next(false);
      resolve();
    });
  }

}
