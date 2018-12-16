import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuItems = [
    {
      title: 'Camera',
      image:
        'https://cdn.georgechalhoub.com/hackkings5/camera.png',
      isTeacherOnly: false,
      goTo: 'QuestionAddAnswerPage'
    },
    {
      title: 'Statistics',
      image:
        'https://cdn.georgechalhoub.com/oxfordhack2018/bars-chart.png',
      isTeacherOnly: false,
      goTo: 'StatisticsPage'
    },
    {
      title: 'Training',
      image:
        'https://cdn.georgechalhoub.com/hackkings5/training.png',
      isTeacherOnly: false,
      goTo: 'QuestionDetailsPage'
    },
    {
      title: 'Settings',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/settings.png',
      isTeacherOnly: false,
      goTo: 'SettingsPage'
    },
    {
      title: 'AboutUs',
      image: 'https://cdn.georgechalhoub.com/hackkings5/info.png',
      isTeacherOnly: false,
      goTo: 'AboutUsPage'
    }
  ];

  isTeacher = false;
  isPortrait = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    authProvider: AuthProvider
  ) {
    authProvider.isTeacher.subscribe(val => {
      console.log('isTeacher', val);
      this.isTeacher = val;
    });

    this.handleScreenSize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goTo(page: string) {
    this.navCtrl.push(page);
  }

  handleScreenSize() {
    window.onresize = event => {
      this.applyOrientation();
    };
    
    this.applyOrientation();
  }

  applyOrientation() {
    if (window.innerHeight > window.innerWidth) {
      this.isPortrait = true;
      console.log('true');
    } else {
      console.log('false');
      this.isPortrait = false;
    }
  }
}
