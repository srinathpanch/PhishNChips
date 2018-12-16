import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-list',
  templateUrl: 'question-list.html'
})
export class QuestionListPage {
  isPortrait=false;
  questions = [
    {
      title: 'Geography',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/globe.png'
    },
    {
      title: 'Math',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/abacus.png'
    },
    {
      title: 'Chemistry',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/test-tubes.png'
    },
    {
      title: 'Physics',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/physics.png'
    },
    {
      title: 'History',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/gladiator.png'
    },
    {
      title: 'Informatics',
      image: 'https://cdn.georgechalhoub.com/oxfordhack2018/analytics.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this will add a placeholder image
    this.questions.map(val => {
     // val.image =     'https://activegrowth.com/wp-content/uploads/2017/05/ga-alternatives-featured-2.png';
      return val; 
    });

    this.handleScreenSize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionListPage');
  }

  addAnswer() {
    this.navCtrl.push('QuestionAddAnswerPage');
  }

  viewQuestionDetails(question) {
    this.navCtrl.push('QuestionDetailsPage', { question });
  }

  handleScreenSize() {
    window.onresize = event => {
      this.applyOrientation();
    };
    
    this.applyOrientation();
  }

  private applyOrientation() {
    if (window.innerHeight > window.innerWidth) {
      this.isPortrait = true;
      console.log('true');
    } else {
      console.log('false');
      this.isPortrait = false;
    }
  }
}
