import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  Platform
} from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { ImagePicker, OutputType } from '@ionic-native/image-picker';
/**
 * Generated class for the QuestionAddAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-add-answer',
  templateUrl: 'question-add-answer.html'
})
export class QuestionAddAnswerPage {

  public base64Image : string;

  url = "http://34.238.153.148:8000/api/v1/image/upload";


  questionOptionList = [
    {
      title: 'Geography'
    },
    {
      title: 'Math'
    },
    {
      title: 'Chemistry'
    },
    {
      title: 'Physics'
    },
    {
      title: 'History'
    },
    {
      title: 'Informatics'
    }
  ];

  answer = {
    image: '',
    question: ''
  };
  answerModel = {
    image: '',
    question: ''
  };
  isAnswerSentSuccessfully = false;
  isFishingEmail = false;
  isBrokenBackEndSeb = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform,
    private photoProvider: ImagePicker,
    private camera: Camera,
    public http:HttpClient
  ) {

  this.addImage();
  }

  upload() {
    this.clearForm();
    this.isAnswerSentSuccessfully = true;
  }

  clearForm() {
    this.answer = Object.create(this.answerModel);
    this.isAnswerSentSuccessfully = false;
  }

  startCamera() {
    var options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64Image = imageData;
      // console.log(base64Image);

      this.upload_seb();

     }, (err) => {
      // Handle error
     });

  }

  upload_seb() {
    let headers = new Headers({ 'Content-Type': 'application/octet-stream' });
    let options = new RequestOptions({ headers: headers });

    var header = { "headers": {"Content-Type": "application/octet-stream"} };
    return new Promise((resolve, reject) => {
      this.http.post(this.url, this.base64Image, header)
      .toPromise()
      .then((response) =>
      {
        var jsonObj = JSON.parse(JSON.stringify(response));
        console.log('printing below');
        console.log(response);
        console.log(jsonObj.status);
        console.log(jsonObj.phishing);
        console.log(jsonObj.accuracy);

        if (jsonObj.phishing == 'False') {
            console.log('False!'); // not fishing
            this.clearForm();

            this.isAnswerSentSuccessfully = true;

        }
        else {

          console.log('True!'); // is finishing
          this.clearForm();
          this.isFishingEmail = true;


        }
      })
      .catch((error) =>
      {
//window.alert('There is an error: ' + JSON.stringify(error));
console.log(error);
window.alert(error);
    this.clearForm();
    this.isAnswerSentSuccessfully = true;

      // window.alert('API Error : ' +  error.status);
       // window.alert('API Error : ' + JSON.stringify(error));
      });
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionAddAnswerPage');
  }

  addImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add a picture',
      buttons: [
        {
          text: 'Use Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            console.log('Add Camera: Use Camera clicked');
            this.startCamera();
          }
        },
        {
          text: 'Add from Library',
          icon: !this.platform.is('ios') ? 'images' : null,
          handler: () => {
            console.log('Add Camera: Add from Library clicked');

          let options = {
              maximumImagesCount: 1,
              outputType: 1,
              DATA_URI:1
            };

            this.photoProvider.getPictures(options)
              .then((imageData) => {
                console.log(imageData[0]);
                this.base64Image =  imageData[0]
                console.log(this.base64Image);
                this.upload_seb();
          }
        );
      }
        },
        {
          text: 'Cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'cancel',
          handler: () => {
            console.log('Add photo: Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }


go_back(){

    this.navCtrl.push('HomePage');
}


}
