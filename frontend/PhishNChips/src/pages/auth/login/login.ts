import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AuthProvider } from '../../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData;
  userDataModel = { email: '', password: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider,
    public http:HttpClient
  ) {
    this.clearForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.authProvider
      .login(this.userData.email, this.userData.password)
      .then(() => {

       // window.alert(this.userData.email);
       // window.alert(this.userData.password);

  
        this.sendToServer('http://34.238.153.148:8000/api/v1/login','{"username":"' + this.userData.email +  '","password":"' + this.userData.password +  '"}');

      })
      .catch(err => {
        console.log('error happened on login', err);
      });
  }

  signUp() {
    this.navCtrl.push('SignUpPage');
  }

  forgotPassword() {
    this.navCtrl.push('ForgotPasswordPage');
  }

  clearForm() {
    this.userData = Object.create(this.userDataModel);
  }

  sendToServer(url, data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var header = { "headers": {"Content-Type": "application/json"} };

    return new Promise((resolve, reject) => {
      this.http.post(url, data, header)
      .toPromise()
      .then((response) =>
      {
//window.alert(JSON.stringify(response));



this.clearForm();
this.navCtrl.setRoot('HomePage');

      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));

       // window.alert(JSON.stringify(error))
        //window.alert('Wrong Password');



        //This allows login on false password or issues, the code below should be deleted: 
        this.clearForm();
        this.navCtrl.setRoot('HomePage');
        
      });
    });
  }



}
