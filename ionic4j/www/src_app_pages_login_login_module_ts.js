"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    },
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login/login.service */ 58762);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 11898);








let LoginPage = class LoginPage {
    constructor(translateService, loginService, toastController, navController, screenOrientation) {
        this.translateService = translateService;
        this.loginService = loginService;
        this.toastController = toastController;
        this.navController = navController;
        this.screenOrientation = screenOrientation;
        // The account fields for the login form.
        this.account = {
            username: '',
            password: '',
            rememberMe: false,
        };
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    ngOnInit() {
        this.translateService.get('LOGIN_ERROR').subscribe(value => {
            this.loginErrorString = value;
        });
    }
    doLogin() {
        this.loginService.login(this.account).then(() => {
            this.navController.navigateRoot('/tabs');
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Unable to log in
            this.account.password = '';
            const toast = yield this.toastController.create({
                message: this.loginErrorString,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        }));
    }
};
LoginPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".padre {\n  display: flex;\n  justify-content: center;\n}\n\n.redo {\n  float: right;\n  --background: #bebebe;\n  position: absolute !important;\n  top: -2px !important;\n  right: 2px !important;\n}\n\n.grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #4cb050 0%, #42a046 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\n.icon-login {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  --background: #fbdb5c;\n  color: rgba(0, 0, 0, 0.75);\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFHQSw0REFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUdGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmVkbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC0tYmFja2dyb3VuZDogI2JlYmViZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IC0ycHggIWltcG9ydGFudDtcclxuICByaWdodDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyaWQxIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY29udGFpZXItbG9naW4ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbi5yb3cxIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzRjYjA1MCAwJSwgIzQyYTA0NiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzRjYjA1MCAwJSwgIzQyYTA0NiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0Y2IwNTAgMCUsICM0MmEwNDYgMTAwJSk7XHJcbn1cclxuXHJcbi5yb3cyIHtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmljb24tbG9naW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJkYjVjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-grid class=\"grid1\">\r\n    <ion-row class=\"row1\">\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"row2\">\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-slide>\r\n    <div class=\"contaier-login\">\r\n      <ion-grid>\r\n        <form (submit)=\"doLogin()\">\r\n          <ion-row>\r\n            <ion-button class=\"redo\" [routerLink]=\"['/']\"><ion-icon name=\"arrow-redo\"></ion-icon></ion-button>\r\n            <ion-col>\r\n              <h1>{{ 'LOGIN_TITLE' | translate }}</h1>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-icon name=\"person\" class=\"icon-login\"></ion-icon>\r\n                  <ion-input\r\n                    name=\"user\"\r\n                    type=\"string\"\r\n                    [(ngModel)]=\"account.username\"\r\n                    required\r\n                    placeholder=\"{{ 'EMAIL' | translate }}\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-icon name=\"lock-closed\" class=\"icon-login\"></ion-icon>\r\n                  <ion-input\r\n                    name=\"password\"\r\n                    type=\"password\"\r\n                    [(ngModel)]=\"account.password\"\r\n                    required\r\n                    placeholder=\"{{ 'PASSWORD' | translate }}\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label>{{ 'REMEMBER_ME' | translate }}</ion-label>\r\n                  <ion-toggle [(ngModel)]=\"account.rememberMe\" name=\"rememberMe\"></ion-toggle>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" class=\"button\" fill=\"solid\" id=\"login\"> {{ 'LOGIN_BUTTON' | translate }} </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-slide>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map