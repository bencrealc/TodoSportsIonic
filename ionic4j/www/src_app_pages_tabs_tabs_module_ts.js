"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 74436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  white-space: normal;\n}\n\n.top-44 {\n  height: 64px;\n  bottom: 64px !important;\n}\n\nion-tab-button {\n  --color-selected: #33752e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4udG9wLTQ0IHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3R0b206IDY0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjMzM3NTJlO1xufVxuIl19 */";

/***/ }),

/***/ 97867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" class=\"top-44\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label> {{ 'INICIO' | translate }} </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"matches\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label> {{ 'PARTIDOS' | translate }} </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"matchesEnd\">\n      <ion-icon name=\"football\"></ion-icon>\n      <ion-label> {{ 'PARTIDOS_FIN' | translate }} </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"teamCreate\" *ngIf=\"admin ===true\">\n      <ion-icon name=\"shirt\"></ion-icon>\n      <ion-label> {{ 'CREAR_EQUIPOS' | translate }} </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 64101);
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.router.module */ 64607);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage],
    })
], TabsPageModule);



/***/ }),

/***/ 64101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 97867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 74436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/account.service */ 150);





let TabsPage = class TabsPage {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountService.hasAuthority('ROLE_ADMIN').then(res => {
            this.admin = res;
        });
    }
    ngOnInit() { }
};
TabsPage.ctorParameters = () => [
    { type: _services_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 64607:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 64101);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 57994)).then(m => m.HomePageModule),
                    },
                ],
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../account/account.module */ 36868)).then(m => m.AccountPageModule),
                    },
                ],
            },
            {
                path: 'matches',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_user-route-access_service_ts-src_app_services_match_match_servi-375a90"), __webpack_require__.e("src_app_pages_matches_matches_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../matches/matches.module */ 73904)).then(m => m.MatchesPageModule),
                    },
                ],
            },
            {
                path: 'teamCreate',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_team_teamCreate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../team/teamCreate.module */ 77371)).then(m => m.TeamCreatePageModule),
                    },
                ],
            },
            {
                path: 'matchesEnd',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_user-route-access_service_ts-src_app_services_match_match_servi-375a90"), __webpack_require__.e("src_app_pages_matches_end_matchesEnd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../matches/end/matchesEnd.module */ 51803)).then(m => m.MatchesEndPageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map