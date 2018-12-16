webpackJsonp([8],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailsPageModule", function() { return QuestionDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_details__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionDetailsPageModule = /** @class */ (function () {
    function QuestionDetailsPageModule() {
    }
    QuestionDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__question_details__["a" /* QuestionDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question_details__["a" /* QuestionDetailsPage */]),
            ],
        })
    ], QuestionDetailsPageModule);
    return QuestionDetailsPageModule;
}());

//# sourceMappingURL=question-details.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuestionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionDetailsPage = /** @class */ (function () {
    function QuestionDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.question = {
            list: [],
            ids_fk: [],
            title: ''
        };
        this.showQuestion1 = false;
        this.showQuestion2 = false;
        this.showQuestion3 = false;
        this.showQuestion4 = false;
        this.showQuestion5 = false;
        this.resultsShowPlease = false;
        this.email1content = '';
        this.email2content = '';
        this.email3content = '';
        this.email4content = '';
        this.email5content = '';
        this.question1Answer = '';
        this.question2Answer = '';
        this.question3Answer = '';
        this.question4Answer = '';
        this.question5Answer = '';
        this.question1Key = '';
        this.question2Key = '';
        this.question3Key = '';
        this.question4Key = '';
        this.question5Key = '';
        this.totalScore = 5;
        this.points = 0;
        this.showQuestion1 = true;
        //window.alert(data);
        //window.alert("i am where i am supposed ot be! hallow hallow ha..low?");
        //window.alert(txt);
        //var txt = '[{"text":"John", "subject":30, "id":"New York"},{"text":"John2", "subject":30, "id":"New York"},{"text":"John3", "subject":30, "id":"New York"}]';
        //var txt = '{"created": "2018-12-09T01:45:33.865595", "user_id": 1, "emails": [{"accuracy": 99.99464106440428, "phishing": false, "id": 5, "text": "Its here - what youve all been waiting for. Hackkings 5.0 is this weekend! We hope youre all just as excited as us! This yearis Hackkings promises to be bigger and better than ever, but we couldnt have done any of it without our amazing sponsors. Theyll all be in attendance at the event if youd like to have a chat with them, so be sure to go up and say hi! If youid like a little background information, scroll down and read all about them, eive also included details on some of the challenges they!ll be hosting this Weekend, though a few are still a secret Each challenge comes with its own unique flavour, not to mention special prizes! If youd like to hear more about how these challenges are directly related to what our sponsors do, then as we said above: go talk to them on the day! Theyre all sliper friendly. If youd like us to pass your CV on to them, please reply to this email with it attached: pdf would be preferred, but please dont send us links to hosting sites. Lastly, and we cannot ropoat this onough, if yoWre under 18 and youve not yet received a consent form to sign, then please email us. We cannot allow you into the event without that form signed. D lingspam\u2014pus...tar.gz sms-spam-colle....zip Mohammad14J....arff"}, {"accuracy": 65.59773087501526, "phishing": true, "id": 9, "text": "Werbung Von: Christopher Levesque > An: Christopher Levesque > Ausblenden Aw: FYI 17. November 2018 urn 16:10 From: Christopher Levesque Sent: Saturday, November 17, 2018 10:39 AM Subject: FYI CL On behalf of Open Society Philanthropic Foundation (OSF). You have been selected alongside 24 others for an award\\grant. Reply for details."}, {"accuracy": 99.41974878311157, "phishing": true, "id": 6, "text": "IMPORTANT NOTICE. Latest Development Regarding the Irrevocable release of your payment. ATTN: Beneficiary. This is to inform you that your fund which was packaged through consignment has finally arrived in country successfully through the help of the United Nations office of the oversight service whose Unit headquarters is in Toronto Canada. It is currently under the custody of a security company, With this help from the UN office of the oversight service you are therefore required to acknowledge receipt of this mail. You are further advised to reconfirm your full names, your address, your cell phone number and copy of your ID. This is to enable us cross check with the list given to us by the UN and FBI to make sure we are corresponding with the rightful owner. Kindly reply for further details. Thank You."}, {"accuracy": 77, "phishing": false, "id": 1, "text": "Hello, Im Allison, the Graduate student representative. As you know, your time at Oxford is made easier and better because of the technology and services students have access to."}, {"accuracy": 98.28505497425795, "phishing": false, "id": 4, "text": "Bounty Nina Braithwaite Inbox x to George, Jack, Sebastian, me \\ have lust had confirmation from our finance team that your bounty will be paid toda the best, Nina Nina Braithwaite Marketing Manager +44 7554 011313 e: inap rai ilverraiite h c Thats great, thanks for letting me know. Many thanks. Thanks for"}]}';
        //var txt = '{"created":"2018-12-09T02:24:43.311326","user_id":1,"emails":[{"accuracy":65.59773087501526,"phishing":true,"id":9,"text":"Werbung Von: Christopher Levesque > An: Christopher Levesque > Ausblenden Aw: FYI 17. November 2018 urn 16:10 From: Christopher Levesque Sent: Saturday, November 17, 2018 10:39 AM Subject: FYI CL On behalf of Open Society Philanthropic Foundation (OSF). You have been selected alongside 24 others for an award\\grant. Reply for details."},{"accuracy":90.67505598068237,"phishing":true,"id":7,"text":"\"IJ vodafone UK 01:41 < Werbung Hello User, This is a system notification. There are many Undelivered messages from you frequent contacts, this messages will expired and get deleted from our main Server is not Verified. Please follow action below to Release Messages to Inbox. bttpx/l em@a01safeJinEprotection.out100k.com/2 1050/026authkey%3D! ADPmlloyapPrZaw&amp;data=01%7C01%7C sebastian.koehler%40kcl.ac.uk%7C024e9d8 a16514594b58e08d65b73baf6%7C8370cf1 sdata=BX7Jm5vHPvOzrvC0FeJ2VyZiWBNW"},{"accuracy":53,"phishing":true,"id":2,"text":"Can you do Tuesday at 11 am? Im in room 463 of the Wolfson building. Best regards, Ivan"},{"accuracy":77,"phishing":false,"id":1,"text":"Hello, Im Allison, the Graduate student representative. As you know, your time at Oxford is made easier and better because of the technology and services students have access to."},{"accuracy":99.41974878311157,"phishing":true,"id":6,"text":"IMPORTANT NOTICE. Latest Development Regarding the Irrevocable release of your payment. ATTN: Beneficiary. This is to inform you that your fund which was packaged through consignment has finally arrived in country successfully through the help of the United Nations office of the oversight service whose Unit headquarters is in Toronto Canada. It is currently under the custody of a security company, With this help from the UN office of the oversight service you are therefore required to acknowledge receipt of this mail. You are further advised to reconfirm your full names, your address, your cell phone number and copy of your ID. This is to enable us cross check with the list given to us by the UN and FBI to make sure we are corresponding with the rightful owner. Kindly reply for further details. Thank You."}]}';
        //var  txt = '{"created":"2018-12-09T02:24:43.311326","user_id":1,"emails":[{"accuracy":65.59773087501526,"phishing":true,"id":9,"text":"Werbung Von: Christopher Levesque > An: Christopher Levesque > Ausblenden Aw: FYI 17. November 2018 urn 16:10 From: Christopher Levesque Sent: Saturday, November 17, 2018 10:39 AM Subject: FYI CL On behalf of Open Society Philanthropic Foundation (OSF). You have been selected alongside 24 others for an award grant. Reply for details."},{"accuracy":90.67505598068237,"phishing":true,"id":7,"text":"\"IJ vodafone UK 01:41 < Werbung Hello User, This is a system notification. There are many Undelivered messages from you frequent contacts, this messages will expired and get deleted from our main Server is not Verified. Please follow action below to Release Messages to Inbox. bttpx/l em@a01safeJinEprotection.out100k.com/2 1050/026authkey%3D! ADPmlloyapPrZaw&amp;data=01%7C01%7C sebastian.koehler%40kcl.ac.uk%7C024e9d8 a16514594b58e08d65b73baf6%7C8370cf1 sdata=BX7Jm5vHPvOzrvC0FeJ2VyZiWBNW"},{"accuracy":53,"phishing":true,"id":2,"text":"Can you do Tuesday at 11 am? Im in room 463 of the Wolfson building. Best regards, Ivan"},{"accuracy":77,"phishing":false,"id":1,"text":"Hello, Im Allison, the Graduate student representative. As you know, your time at Oxford is made easier and better because of the technology and services students have access to."},{"accuracy":99.41974878311157,"phishing":true,"id":6,"text":"IMPORTANT NOTICE. Latest Development Regarding the Irrevocable release of your payment. ATTN: Beneficiary. This is to inform you that your fund which was packaged through consignment has finally arrived in country successfully through the help of the United Nations office of the oversight service whose Unit headquarters is in Toronto Canada. It is currently under the custody of a security company, With this help from the UN office of the oversight service you are therefore required to acknowledge receipt of this mail. You are further advised to reconfirm your full names, your address, your cell phone number and copy of your ID. This is to enable us cross check with the list given to us by the UN and FBI to make sure we are corresponding with the rightful owner. Kindly reply for further details. Thank You."}]}';
        var txt = '{"created":"2018-12-09T02:24:43.311326","user_id":1,"emails":[{"accuracy":65.59773087501526,"phishing":true,"id":9,"text":"Werbung Von: Christopher Levesque > An: Christopher Levesque > Ausblenden Aw: FYI 17. November 2018 urn 16:10 From: Christopher Levesque Sent: Saturday, November 17, 2018 10:39 AM Subject: FYI CL On behalf of Open Society Philanthropic Foundation (OSF). You have been selected alongside 24 others for an award grant. Reply for details."},{"accuracy":90.67505598068237,"phishing":true,"id":7,"text":"IJ vodafone UK 01:41 < Werbung Hello User, This is a system notification. There are many Undelivered messages from you frequent contacts, this messages will expired and get deleted from our main Server is not Verified. Please follow action below to Release Messages to Inbox. bttpx/l em@a01safeJinEprotection.out100k.com/2 1050/026authkey%3D! ADPmlloyapPrZaw&amp;data=01%7C01%7C sebastian.koehler%40kcl.ac.uk%7C024e9d8 a16514594b58e08d65b73baf6%7C8370cf1 sdata=BX7Jm5vHPvOzrvC0FeJ2VyZiWBNW"},{"accuracy":53,"phishing":true,"id":2,"text":"Can you do Tuesday at 11 am? Im in room 463 of the Wolfson building. Best regards, Ivan"},{"accuracy":77,"phishing":false,"id":1,"text":"Hello, Im Allison, the Graduate student representative. As you know, your time at Oxford is made easier and better because of the technology and services students have access to."},{"accuracy":99.41974878311157,"phishing":true,"id":6,"text":"IMPORTANT NOTICE. Latest Development Regarding the Irrevocable release of your payment. ATTN: Beneficiary. This is to inform you that your fund which was packaged through consignment has finally arrived in country successfully through the help of the United Nations office of the oversight service whose Unit headquarters is in Toronto Canada. It is currently under the custody of a security company, With this help from the UN office of the oversight service you are therefore required to acknowledge receipt of this mail. You are further advised to reconfirm your full names, your address, your cell phone number and copy of your ID. This is to enable us cross check with the list given to us by the UN and FBI to make sure we are corresponding with the rightful owner. Kindly reply for further details. Thank You."}]}';
        txt = txt.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        txt = txt.replace(/[\u0000-\u0019]+/g, "");
        txt = txt.replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\f/g, "\\f");
        console.log(txt);
        //list.push('123 123 DRINK 123 123 DRINk 123 1232 DRINK');
        var obj = JSON.parse(txt);
        console.log(obj);
        this.email1content = obj.emails[0].text;
        //console.log(this.email1content);
        this.email2content = obj.emails[1].text;
        this.email3content = obj.emails[2].text;
        this.email4content = obj.emails[3].text;
        this.email5content = obj.emails[4].text;
        this.question1Key = obj.emails[0].phishing;
        this.question2Key = obj.emails[1].phishing;
        this.question3Key = obj.emails[2].phishing;
        this.question4Key = obj.emails[3].phishing;
        this.question5Key = obj.emails[4].phishing;
        console.log('ha...low?' + this.question1Key);
        console.log(this.question2Key);
        console.log(this.question3Key);
        console.log(this.question4Key);
        console.log(this.question5Key);
        //obj.length + ', ' + obj[0].text + ", " + obj[1].text + ", " + obj[2].text;
        //  for (var i = 0; i < obj.length; i++)  {
        //  list.push(obj[i].text + "|||" + obj[i].id);
        //ids_fk.push(obj[i].id);
        //}
        var list = [];
        var ids_fk = [];
        var questionParam = 'Is this email phishing?';
        var questionTypeString = JSON.stringify(questionParam);
        var queryURL = '';
        // window.alert(questionTypeString);
        queryURL = 'http://34.238.153.148:8000/api/v1/training';
        ///34.238.153.148:8000/api/v1/training
        //window.alert('wtf');
        var getJSON = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status === 200) {
                    callback(null, xhr.response);
                }
                else {
                    callback(status, xhr.response);
                }
            };
            xhr.send();
        };
        getJSON(queryURL, function (err, data) {
            if (err !== null) {
                window.alert('Something went wrong: ' + err);
            }
            else {
                console.log(data);
            }
        });
        this.question.list = list;
        this.question.ids_fk = ids_fk;
    }
    QuestionDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionDetailsPage');
    };
    QuestionDetailsPage.prototype.addAnswer = function () {
        this.navCtrl.push('QuestionAddAnswerPage');
    };
    QuestionDetailsPage.prototype.showAnswer = function (stupidQuestionID) {
        //window.alert('too good: ' + stupidQuestionID);
        this.navCtrl.push('QuestionAnswersPage', { stupidQuestionID: stupidQuestionID });
    };
    QuestionDetailsPage.prototype.go_back = function () {
        this.navCtrl.push('HomePage');
    };
    QuestionDetailsPage.prototype.goToQuestion = function (question_number, value) {
        if (question_number == 2) {
            this.showQuestion2 = true;
            this.showQuestion1 = false;
            this.question1Answer = value;
            console.log(this.question1Answer);
        }
        if (question_number == 3) {
            this.showQuestion3 = true;
            this.showQuestion2 = false;
            this.question2Answer = value;
        }
        if (question_number == 4) {
            this.showQuestion4 = true;
            this.showQuestion3 = false;
            this.question3Answer = value;
        }
        if (question_number == 5) {
            this.showQuestion5 = true;
            this.showQuestion4 = false;
            this.question4Answer = value;
        }
        if (question_number == 6) {
            this.showQuestion5 = false;
            this.question5Answer = value;
            this.printResults();
        }
    };
    QuestionDetailsPage.prototype.printResults = function () {
        var countDumb = 0;
        // window.alert(this.question1Answer+ " " +  this.question1Key);
        // window.alert(this.question2Answer + " " +  this.question2Key);
        // window.alert(this.question3Answer + " " +  this.question3Key);
        // window.alert(this.question4Answer + " " +  this.question4Key);
        // window.alert(this.question5Answer + " " +  this.question5Key);
        if (this.question1Answer.toString() === this.question1Key.toString()) {
            //  window.alert('here1');
            countDumb++;
        }
        if (this.question2Answer.toString() === this.question2Key.toString()) {
            // window.alert('here2');
            countDumb++;
        }
        if (this.question3Answer.toString() === this.question3Key.toString()) {
            // window.alert('here3');
            countDumb++;
        }
        if (this.question4Answer.toString() === this.question4Key.toString()) {
            //window.alert('here4');
            countDumb++;
        }
        if (this.question5Answer.toString() === this.question5Key.toString()) {
            //window.alert('here5');
            countDumb++;
        }
        //window.alert(countDumb);
        this.resultsShowPlease = true;
        this.points = countDumb;
        var gradesAreOut = '43';
        //this.navCtrl.push('QuestionCorrectAnswerPage',gradesAreOut);
    };
    QuestionDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-details',template:/*ion-inline-start:"/Users/srinath/Desktop/HackKings5/frontend/EduKate/src/pages/question-details/question-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Training</ion-title>\n\n\n  <ion-buttons end>\n    <button ion-button icon-only (click)="addAnswer()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-buttons>\n  \n  </ion-navbar>\n\n\n\n\n</ion-header>\n\n<br/><br/>\n\n<br/><br/>\n\n<ion-content>\n\n    <ion-card>\n\n\n\n<ion-card-header style=\'font-size:2.8rem;\'   *ngIf="resultsShowPlease" >\n    Results: {{points}}/5\n</ion-card-header>\n\n\n\n\n\n<ion-card-header style=\'font-size:2.8rem;\'   *ngIf="showQuestion1" >\n      Email: 1/5\n</ion-card-header>\n<ion-card-header style=\'font-size:2.8rem;\'   *ngIf="showQuestion2" >\n    Email: 2/5\n</ion-card-header>\n\n<ion-card-header style=\'font-size:2.8rem;\'   *ngIf="showQuestion3" >\n    Email: 3/5\n</ion-card-header>\n\n<ion-card-header style=\'font-size:2.8rem;\'   *ngIf="showQuestion4" >\n    Email: 4/5\n</ion-card-header>\n\n<ion-card-header style=\'font-size:2.8rem;\'   *ngIf="showQuestion5" >\n    Email: 5/5 \n</ion-card-header>\n\n    </ion-card>\n\n        <button class="upload-button"  *ngIf="resultsShowPlease"  ion-button (click)="go_back()">Go Back...</button>\n\n\n<br/> <br/>\n  <ion-card  *ngIf="showQuestion1" > \n  <ion-card-content style=\'font-size:2rem;\' >\n      {{email1content}}\n  </ion-card-content>\n    </ion-card>\n\n  <ion-card  *ngIf="showQuestion2" > \n        <ion-card-content style=\'font-size:2rem;\' >\n            {{email2content}}\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card  *ngIf="showQuestion3" > \n        <ion-card-content style=\'font-size:2rem;\' >\n            {{email3content}}\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card  *ngIf="showQuestion4" > \n        <ion-card-content style=\'font-size:2rem;\' >\n            {{email4content}}\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card  *ngIf="showQuestion5" > \n        <ion-card-content style=\'font-size:2rem;\' >\n            {{email5content}}\n        </ion-card-content>\n    </ion-card>\n\n\n\n    \n    <br><br>\n\n    <ion-card *ngIf="showQuestion1"  >\n    <button ion-button color="danger" (click)="goToQuestion(2,true)" style=\'font-size:1.7rem;\'  >Phishing</button>\n    <button ion-button color="secondary"  (click)="goToQuestion(2,false)" style=\'font-size:1.7rem;\'  > Non-Phishing</button>\n    <button ion-button   (click)="goToQuestion(2,\'Idk\')"  style=\'font-size:1.7rem;\' >Don\'t Know </button>\n    </ion-card>\n\n    <ion-card *ngIf="showQuestion2"  >\n        <button ion-button color="danger" (click)="goToQuestion(3,true)" style=\'font-size:1.7rem;\'  >Phishing</button>\n        <button ion-button color="secondary"  (click)="goToQuestion(3,false)" style=\'font-size:1.7rem;\'  > Non-Phishing</button>\n        <button ion-button   (click)="goToQuestion(3,\'Idk\')"  style=\'font-size:1.7rem;\' >Don\'t Know </button>\n        </ion-card>\n\n\n        <ion-card *ngIf="showQuestion3"  >\n            <button ion-button color="danger" (click)="goToQuestion(4,true)" style=\'font-size:1.7rem;\'  >Phishing</button>\n            <button ion-button color="secondary"  (click)="goToQuestion(4,false)" style=\'font-size:1.7rem;\'  > Non-Phishing</button>\n            <button ion-button   (click)="goToQuestion(4,\'Idk\')"  style=\'font-size:1.7rem;\' >Don\'t Know </button>\n            </ion-card>\n\n\n            <ion-card *ngIf="showQuestion4"  >\n                <button ion-button color="danger" (click)="goToQuestion(5,true)" style=\'font-size:1.7rem;\'  >Phishing</button>\n                <button ion-button color="secondary"  (click)="goToQuestion(5,false)" style=\'font-size:1.7rem;\'  > Non-Phishing</button>\n                <button ion-button   (click)="goToQuestion(5,\'Idk\')"  style=\'font-size:1.7rem;\' >Don\'t Know </button>\n                </ion-card>\n\n\n                <ion-card *ngIf="showQuestion5"  >\n                    <button ion-button color="danger" (click)="goToQuestion(6,true)" style=\'font-size:1.7rem;\'  >Phishing</button>\n                    <button ion-button color="secondary"  (click)="goToQuestion(6,false)" style=\'font-size:1.7rem;\'  > Non-Phishing</button>\n                    <button ion-button   (click)="goToQuestion(6,\'Idk\')"  style=\'font-size:1.7rem;\' >Don\'t Know </button>\n                    </ion-card>\n  <ion-list>\n\n\n    <button ion-item *ngFor="let item of question.list; let idx = index"  (click)="showAnswer(item.split(\'|||\')[1] )">\n      {{ (idx+1) + \'. \' }}{{ item.split(\'|||\')[0] }}\n    </button>  \n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/srinath/Desktop/HackKings5/frontend/EduKate/src/pages/question-details/question-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], QuestionDetailsPage);
    return QuestionDetailsPage;
}());

//# sourceMappingURL=question-details.js.map

/***/ })

});
//# sourceMappingURL=8.js.map