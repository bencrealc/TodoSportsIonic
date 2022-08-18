"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome_welcome_module_ts"],{

/***/ 62282:
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 28544);








const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage,
    },
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage],
    })
], WelcomePageModule);



/***/ }),

/***/ 28544:
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 69196);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 69233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/account.service */ 150);






let WelcomePage = class WelcomePage {
    constructor(accountService, navController) {
        this.accountService = accountService;
        this.navController = navController;
    }
    ngOnInit() {
        this.accountService.identity().then(account => {
            if (account) {
                this.navController.navigateRoot('/tabs');
            }
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 69233:
/*!************************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".hipster {\n  display: block;\n  width: 350px;\n  height: 350px;\n  margin: 20px auto;\n  background: url('logo_TodoSports.png') no-repeat center top;\n  background-size: contain;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url('logo_TodoSports.png') no-repeat center top;\n    background-size: contain;\n  }\n}\n\n.padre {\n  text-align: center;\n}\n\n.ini {\n  margin-top: 35px;\n  margin-bottom: 15px;\n  --background: #fbdb5c;\n  padding-right: 13px;\n  color: rgba(0, 0, 0, 0.75);\n}\n\n.reg {\n  margin-top: 35px;\n  margin-bottom: 15px;\n  --background: #fbdb5c;\n  padding-left: 13px;\n  color: rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUEsMEZBQUE7O0FBQ0E7RUFNRTtJQUNFLDJEQUFBO0lBQ0Esd0JBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0Usa0JBQUE7QUFMRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFIRiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXBzdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dvX1RvZG9TcG9ydHMucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLyogd2FpdCBhdXRvcHJlZml4ZXIgdXBkYXRlIHRvIGFsbG93IHNpbXBsZSBnZW5lcmF0aW9uIG9mIGhpZ2ggcGl4ZWwgZGVuc2l0eSBtZWRpYSBxdWVyeSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gIC5oaXBzdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nb19Ub2RvU3BvcnRzLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufVxuXG4ucGFkcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5pIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmJkYjVjO1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5yZWcge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6ICNmYmRiNWM7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4iXX0= */";

/***/ }),

/***/ 69196:
/*!************************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title> {{ 'WELCOME_INIC' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <span class=\"hipster\"></span>\r\n  <div class=\"padre\">\r\n    <ion-button class=\"ini\" routerLink=\"/login\" id=\"signIn\">{{ 'LOGIN' | translate }}</ion-button>\r\n\r\n    <ion-button class=\"reg\" routerLink=\"/signup\">{{ 'SIGNUP' | translate }}</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome_welcome_module_ts.js.map