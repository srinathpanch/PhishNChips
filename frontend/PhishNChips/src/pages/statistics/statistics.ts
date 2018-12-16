import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Chart } from 'chart.js';


/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {   
   @ViewChild('barCanvas') barCanvas;
   @ViewChild('lineCanvas') lineCanvas;
 
   correct_1 = 0;
   correct_2 = 0;
   stupid1= 0;
  
barChart: any;
lineChart: any;


  public technologies              : any = {
    "technologies" : [
                       {
                          'technology' : 'Mobile: Ionic/Angular',
                          'time'       : 50,
                          'color'      : 'rgba(206, 61, 95, 0.5)',
                          'hover'      : 'rgba(199, 108, 129, 0.5)'
                       },
                       {
                          'technology' : 'Front-end: Sass/CSS',
                          'time'       : 15,
                          'color'      : 'rgba(83, 131, 185, 0.5)',
                          'hover'      : 'rgba(122, 160, 202, 0.5)'
                       },
                       {
                          'technology' : 'Server: PHP/MySQL',
                          'time'       : 10,
                          'color'      : 'rgba(198, 147, 194, 0.5)',
                          'hover'      : 'rgba(200, 166, 197, 0.5)'
                       },
                       {
                          'technology' : 'Code Documentation',
                          'time'       : 5,
                          'color'      : 'rgba(54, 116, 152, 0.5)',
                          'hover'      : 'rgba(103, 139, 160, 0.5)'
                       },
                       {
                          'technology' : 'Knowledge: Blogging',
                          'time'       : 10,
                          'color'      : 'rgba(152, 54, 145, 0.5)',
                          'hover'      : 'rgba(152, 89, 149, 0.5)',
                       },
                       {
                          'technology' : 'SEO/Online Marketing',
                          'time'       : 10,
                          'color'      : 'rgba(192, 192, 192, 0.5)',
                          'hover'      : 'rgba(220, 220, 220, 0.5)'
                       }
   ]
};
public pieChartEl                : any;
public barChartEl                : any;
public lineChartEl               : any;
public chartLabels               : any    = [];
public chartValues               : any    = [];
public chartColours              : any    = [];
public chartHoverColours         : any    = [];
public chartLoadingEl            : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  updateCorrect1(whatever) {

    window.alert(whatever);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');

    var queryURL = '';
    // window.alert(questionTypeString);
       queryURL = 'http://34.238.153.148:8000/api/v1/training/statistics';
 
 
     ///34.238.153.148:8000/api/v1/training
 
 //window.alert('wtf');
 
  var getJSON = function(url, callback) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.responseType = 'json';
   xhr.onload = function() {
     var status = xhr.status;
     if (status === 200) {
       callback(null, xhr.response);
     } else {
       callback(status, xhr.response);
     }
   };
   xhr.send();
  };
 

  
getJSON(queryURL,
 function(err, data) {
   if (err !== null) {
 window.alert('Something went wrong: ' + err);
   } else {
     
 console.log(data.total_correct);
 //this.correct_1 = data.total_correct;
 console.log(data.total_wrong);
//this.updateCorrect1(data.total_correct);

   }
 });

 

    //[{"count": 26, "subject": "Chemistry"}, {"count": 10, "subject": "Geography"}, {"count": 11, "subject": "History"}, {"count": 3, "subject": "Informatics"}, {"count": 4, "subject": "Math"}, {"count": 5, "subject": "Physics"}]
    this.barChart = new Chart(this.barCanvas.nativeElement, {
 

      type: 'bar',
      data: {
          labels: ["Correct", "Wrong"],
          datasets: [{
              label: '# of Questions',
              data: [1,4],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });

  
 
this.lineChart = new Chart(this.lineCanvas.nativeElement, {

    type: 'line',
    data: {
        labels: ["1 Nov", "9 Nov", "17 Nov", "23 Nov", "27 Nov", "1 Dec ", "8 Dec"],
        datasets: [
            {
                label: "My results",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            }
        ]
    }

});

  }







}
