import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the QuestionCorrectAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-correct-answer',
  templateUrl: 'question-correct-answer.html'
})
export class QuestionCorrectAnswerPage {
  @ViewChild('pieChart') chartRef;

  chart: any;
  answer = { question: 'Training Marks' };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let answer = this.navParams.get('gradesAreOut');
    window.alert(answer);
    if (answer) {
      this.answer = answer;
    }
  }

  createChart() {
    let chartData = [
      {
        label: 'Correct',
        dataPoint: 120
      },
      {
        label: 'Wrong',
        dataPoint: 8
      }
    ];

    let dataPoints = chartData.map(val => val.dataPoint);
    let labels = chartData.map(val => val.label);

    console.log('data', dataPoints, labels);

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: dataPoints ,
            backgroundColor:['#a9d8fd','#b9f6ca']
          }
        ]
      }
    });
  }

  ionViewDidLoad() {
    this.createChart();
  }
}
