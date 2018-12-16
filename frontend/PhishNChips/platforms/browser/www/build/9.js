webpackJsonp([9],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(200);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuItems = [
            {
                title: 'Camera',
                image: 'https://cdn.georgechalhoub.com/hackkings5/camera.png',
                isTeacherOnly: false,
                goTo: 'QuestionAddAnswerPage'
            },
            {
                title: 'Statistics',
                image: 'https://cdn.georgechalhoub.com/oxfordhack2018/bars-chart.png',
                isTeacherOnly: false,
                goTo: 'StatisticsPage'
            },
            {
                title: 'Training',
                image: 'https://cdn.georgechalhoub.com/hackkings5/training.png',
                isTeacherOnly: false,
                goTo: 'QuestionDetailsPage'
            },
            {
                title: 'Settings',
                image: 'https://cdn.georgechalhoub.com/oxfordhack2018/settings.png',
                isTeacherOnly: false,
                goTo: 'SettingsPage'
            }
        ];
        this.isTeacher = false;
        this.isPortrait = false;
        authProvider.isTeacher.subscribe(function (val) {
            console.log('isTeacher', val);
            _this.isTeacher = val;
        });
        this.handleScreenSize();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.handleScreenSize = function () {
        var _this = this;
        window.onresize = function (event) {
            _this.applyOrientation();
        };
        this.applyOrientation();
    };
    HomePage.prototype.applyOrientation = function () {
        if (window.innerHeight > window.innerWidth) {
            this.isPortrait = true;
            console.log('true');
        }
        else {
            console.log('false');
            this.isPortrait = false;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/srinath/Desktop/HackKings5/frontend/EduKate/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Main Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="wrapper">\n    <ng-container *ngFor="let item of menuItems">\n      <div\n        [ngClass]="{ \'portrait-item-menu\': isPortrait, \'landscape-item-menu\': !isPortrait }"\n        class="item-menu"\n        (click)="goTo(item.goTo)"\n        *ngIf="isTeacher || !item.isTeacherOnly"\n      >\n        <img\n          [ngClass]="{ \'portrait-item-menu-image\': isPortrait, \'landscape-item-menu-image\': !isPortrait }"\n          class="item-menu-image"\n          [src]="item.image"\n          alt=""\n        />\n        <span class="item-menu-title">{{ item.title }}</span>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/srinath/Desktop/HackKings5/frontend/EduKate/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map