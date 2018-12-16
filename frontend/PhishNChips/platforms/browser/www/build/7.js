webpackJsonp([7],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListPageModule", function() { return QuestionListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_list__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionListPageModule = /** @class */ (function () {
    function QuestionListPageModule() {
    }
    QuestionListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__question_list__["a" /* QuestionListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question_list__["a" /* QuestionListPage */]),
            ],
        })
    ], QuestionListPageModule);
    return QuestionListPageModule;
}());

//# sourceMappingURL=question-list.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListPage; });
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
 * Generated class for the QuestionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionListPage = /** @class */ (function () {
    function QuestionListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isPortrait = false;
        this.questions = [
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
        // this will add a placeholder image
        this.questions.map(function (val) {
            // val.image =     'https://activegrowth.com/wp-content/uploads/2017/05/ga-alternatives-featured-2.png';
            return val;
        });
        this.handleScreenSize();
    }
    QuestionListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionListPage');
    };
    QuestionListPage.prototype.addAnswer = function () {
        this.navCtrl.push('QuestionAddAnswerPage');
    };
    QuestionListPage.prototype.viewQuestionDetails = function (question) {
        this.navCtrl.push('QuestionDetailsPage', { question: question });
    };
    QuestionListPage.prototype.handleScreenSize = function () {
        var _this = this;
        window.onresize = function (event) {
            _this.applyOrientation();
        };
        this.applyOrientation();
    };
    QuestionListPage.prototype.applyOrientation = function () {
        if (window.innerHeight > window.innerWidth) {
            this.isPortrait = true;
            console.log('true');
        }
        else {
            console.log('false');
            this.isPortrait = false;
        }
    };
    QuestionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-list',template:/*ion-inline-start:"/Users/srinath/Desktop/HackKings5/frontend/EduKate/src/pages/question-list/question-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Question List</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="wrapper">\n    <ng-container *ngFor="let item of questions">\n      <div\n        [ngClass]="{\n          \'portrait-item-menu\': isPortrait,\n          \'landscape-item-menu\': !isPortrait\n        }"\n        class="item-menu"\n        (click)="viewQuestionDetails(item)"\n      >\n        <img\n          [ngClass]="{\n            \'portrait-item-menu-image\': isPortrait,\n            \'landscape-item-menu-image\': !isPortrait\n          }"\n          class="item-menu-image"\n          [src]="item.image"\n          alt=""\n        />\n        <span class="item-menu-title">{{ item.title }}</span>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/srinath/Desktop/HackKings5/frontend/EduKate/src/pages/question-list/question-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], QuestionListPage);
    return QuestionListPage;
}());

//# sourceMappingURL=question-list.js.map

/***/ })

});
//# sourceMappingURL=7.js.map