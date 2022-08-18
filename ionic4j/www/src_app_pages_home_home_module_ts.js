"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 51284);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);









const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 12260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/account.service */ 150);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login/login.service */ 58762);







let HomePage = class HomePage {
    constructor(navController, accountService, loginService) {
        this.navController = navController;
        this.accountService = accountService;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.accountService.identity().then(account => {
            if (account === null) {
                this.goBackToHomePage();
            }
            else {
                this.account = account;
            }
        });
    }
    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }
    logout() {
        this.loginService.logout();
        this.goBackToHomePage();
    }
    goBackToHomePage() {
        this.navController.navigateBack('');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 51284:
/*!************************************************************!*\
  !*** ./src/app/services/auth/user-route-access.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRouteAccessService": () => (/* binding */ UserRouteAccessService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ 150);





let UserRouteAccessService = class UserRouteAccessService {
    constructor(router, navController, accountService // private stateStorageService: StateStorageService
    ) {
        this.router = router;
        this.navController = navController;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const authorities = route.data['authorities'];
        // We need to call the checkLogin / and so the accountService.identity() function, to ensure,
        // that the client has a principal too, if they already logged in by the server.
        // This could happen on a page refresh.
        return this.checkLogin(authorities, state.url);
    }
    checkLogin(authorities, url) {
        return this.accountService.identity().then(account => {
            if (!authorities || authorities.length === 0) {
                return true;
            }
            if (account) {
                const hasAnyAuthority = this.accountService.hasAnyAuthority(authorities);
                if (hasAnyAuthority) {
                    return true;
                }
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
                    console.error('User has not any of required authorities: ', authorities);
                }
                return false;
            }
            // this.stateStorageService.storeUrl(url);
            // this.router.navigate(['accessdenied']).then(() => {
            //     // only show the login dialog, if the user hasn't logged in yet
            //     if (!account) {
            //         // this.loginModalService.open();
            //         console.log('go to login page');
            //     }
            // });
            this.navController.navigateRoot('/accessdenied');
            return false;
        });
    }
};
UserRouteAccessService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
UserRouteAccessService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], UserRouteAccessService);



/***/ }),

/***/ 12260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".hipster {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url('logo_TodoSports.png') no-repeat center top;\n  background-size: contain;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url('logo_TodoSports.png') no-repeat center top;\n    background-size: contain;\n  }\n}\n\n.padre {\n  display: flex;\n  justify-content: center;\n}\n\nion-button {\n  white-space: normal;\n}\n\nion-title {\n  float: right;\n  padding-right: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQSwwRkFBQTs7QUFDQTtFQU1FO0lBQ0UsMkRBQUE7SUFDQSx3QkFBQTtFQUpGO0FBQ0Y7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBS0E7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFGRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXBzdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzQ3cHg7XG4gIGhlaWdodDogNDk3cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dvX1RvZG9TcG9ydHMucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLyogd2FpdCBhdXRvcHJlZml4ZXIgdXBkYXRlIHRvIGFsbG93IHNpbXBsZSBnZW5lcmF0aW9uIG9mIGhpZ2ggcGl4ZWwgZGVuc2l0eSBtZWRpYSBxdWVyeSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gIC5oaXBzdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nb19Ub2RvU3BvcnRzLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufVxuLnBhZHJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi10aXRsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogLTIwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"padre\">\r\n      <ion-title> {{ 'WELCOME_TITLE' | translate }}, {{account?.firstName}} </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"logout()\" id=\"logout\">\r\n          {{ 'LOGOUT_TITLE' | translate }}\r\n          <ion-icon slot=\"end\" name=\"log-out\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <p>{{ 'WELCOME_INTRO' | translate }}</p>\r\n\r\n  <span class=\"hipster\"></span>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map