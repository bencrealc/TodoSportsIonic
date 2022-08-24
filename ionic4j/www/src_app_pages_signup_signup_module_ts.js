"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 62124:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".padre {\n  display: flex;\n  justify-content: center;\n}\n\n.redo {\n  float: right;\n  --background: #bebebe;\n  position: absolute !important;\n  top: -2px !important;\n  right: 2px !important;\n}\n\n.grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #4cb050 0%, #42a046 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\n.icon-signup {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  --background: #fbdb5c;\n  color: rgba(0, 0, 0, 0.75);\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdEQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBR0EsNERBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFHRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZHJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5yZWRvIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYmViZWJlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogLTJweCAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAycHggIWltcG9ydGFudDtcclxufVxyXG4uZ3JpZDEge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWllci1sb2dpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLnJvdzEge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNGNiMDUwIDAlLCAjNDJhMDQ2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNGNiMDUwIDAlLCAjNDJhMDQ2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzRjYjA1MCAwJSwgIzQyYTA0NiAxMDAlKTtcclxufVxyXG5cclxuLnJvdzIge1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uaWNvbi1zaWdudXAge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJkYjVjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 45722:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n      <ion-col> </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row2\">\n      <ion-col> </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-slide>\n    <div class=\"contaier-login\">\n      <ion-grid>\n        <form (submit)=\"doSignup()\">\n          <ion-row>\n            <ion-button class=\"redo\" [routerLink]=\"['/']\"><ion-icon name=\"arrow-redo\"></ion-icon></ion-button>\n            <ion-col>\n              <h1>{{ 'SIGNUP_TITLE' | translate }}</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-input\n                    name=\"login\"\n                    type=\"string\"\n                    [(ngModel)]=\"account.login\"\n                    required\n                    placeholder=\"{{ 'USERNAME' | translate }}\"\n                  ></ion-input>\n                </ion-item>\n                <br />\n                <ion-item>\n                  <ion-input\n                    name=\"firstName\"\n                    type=\"string\"\n                    [(ngModel)]=\"account.firstName\"\n                    required\n                    placeholder=\"{{ 'FIRST_NAME' | translate }}\"\n                  ></ion-input>\n                </ion-item>\n                <br />\n                <ion-item>\n                  <ion-input\n                    name=\"lastName\"\n                    type=\"string\"\n                    [(ngModel)]=\"account.lastName\"\n                    required\n                    placeholder=\"{{ 'LAST_NAME' | translate }}\"\n                  ></ion-input>\n                </ion-item>\n                <br />\n                <ion-item>\n                  <ion-input\n                    name=\"email\"\n                    type=\"email\"\n                    [(ngModel)]=\"account.email\"\n                    required\n                    placeholder=\"{{ 'EMAIL' | translate }}\"\n                  ></ion-input>\n                </ion-item>\n                <br />\n                <ion-item>\n                  <ion-input\n                    name=\"password\"\n                    type=\"password\"\n                    [(ngModel)]=\"account.password\"\n                    required\n                    placeholder=\"{{ 'PASSWORD' | translate }}\"\n                  ></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" class=\"button\" fill=\"solid\"> {{ 'SIGNUP_BUTTON' | translate }} </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n    </div>\n  </ion-slide>\n</ion-content>\n";

/***/ }),

/***/ 17110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 64374);








const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage,
    },
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage],
    })
], SignupPageModule);



/***/ }),

/***/ 64374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 45722);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 62124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 11898);









let SignupPage = class SignupPage {
    constructor(navController, userService, router, toastController, screenOrientation, translateService) {
        this.navController = navController;
        this.userService = userService;
        this.router = router;
        this.toastController = toastController;
        this.screenOrientation = screenOrientation;
        this.translateService = translateService;
        // The account fields for the signup form
        this.account = {
            login: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            langKey: 'es',
        };
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe(values => {
            this.signupErrorString = values.SIGNUP_ERROR;
            this.signupSuccessString = values.SIGNUP_SUCCESS;
            this.existingUserError = values.EXISTING_USER_ERROR;
            this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
        });
    }
    ngOnInit() { }
    doSignup() {
        // Attempt to login in through our User service
        this.userService.signup(this.account).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.signupSuccessString,
                duration: 3000,
                position: 'top',
            });
            toast.present();
            this.router.navigate(['/tabs/home']);
        }), (response) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Unable to sign up
            const error = JSON.parse(response.error);
            let displayError = this.signupErrorString;
            if (response.status === 400 && error.type.includes('already-used')) {
                displayError = this.existingUserError;
            }
            else if (response.status === 400 &&
                error.message === 'error.validation' &&
                error.fieldErrors[0].field === 'password' &&
                error.fieldErrors[0].message === 'Size') {
                displayError = this.invalidPasswordError;
            }
            const toast = yield this.toastController.create({
                message: displayError,
                duration: 3000,
                position: 'middle',
            });
            toast.present();
        }));
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ 45146);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ 58762);






let UserService = class UserService {
    constructor(apiService, loginService) {
        this.apiService = apiService;
        this.loginService = loginService;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    login(accountInfo) {
        this.loginService
            .login(accountInfo)
            .then(res => {
            this.loggedIn(res);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(res);
        })
            .catch(err => {
            console.error('ERROR', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
        });
    }
    findAll() {
        return this.apiService.get('users');
    }
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    signup(accountInfo) {
        return this.apiService.post('register', accountInfo, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    }
    /**
     * Log the user out, which forgets the session
     */
    logout() {
        this.loginService.logout();
        this.user = null;
    }
    /**
     * Process a login/signup response to store user data
     */
    loggedIn(resp) {
        this.user = resp.user;
    }
};
UserService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map