import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html'
})
export class StudentsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider
  ) {
    this.authProvider.isTeacher.subscribe(val => {
      if (!val) {
        this.navCtrl.setRoot('HomePage');
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }
}
