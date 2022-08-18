"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_matches_matches_module_ts"],{

/***/ 29283:
/*!*********************************************************!*\
  !*** ./src/app/pages/matches/matches-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageRoutingModule": () => (/* binding */ MatchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 51284);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page */ 49289);





const routes = [
    {
        path: '',
        component: _matches_page__WEBPACK_IMPORTED_MODULE_1__.MatchesPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let MatchesPageRoutingModule = class MatchesPageRoutingModule {
};
MatchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MatchesPageRoutingModule);



/***/ }),

/***/ 73904:
/*!*************************************************!*\
  !*** ./src/app/pages/matches/matches.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageModule": () => (/* binding */ MatchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _matches_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches-routing.module */ 29283);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matches.page */ 49289);









let MatchesPageModule = class MatchesPageModule {
};
MatchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _matches_routing_module__WEBPACK_IMPORTED_MODULE_1__.MatchesPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule],
        declarations: [_matches_page__WEBPACK_IMPORTED_MODULE_2__.MatchesPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder],
        exports: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule],
    })
], MatchesPageModule);



/***/ }),

/***/ 49289:
/*!***********************************************!*\
  !*** ./src/app/pages/matches/matches.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPage": () => (/* binding */ MatchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.page.html?ngResource */ 82541);
/* harmony import */ var _matches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page.scss?ngResource */ 96954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/match/match.service */ 82661);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 99048);
/* harmony import */ var src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/team/team.service */ 40790);
/* harmony import */ var _services_auth_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/account.service */ 150);








let MatchesPage = class MatchesPage {
    constructor(accountService, matchService, teamService, modalService) {
        this.accountService = accountService;
        this.matchService = matchService;
        this.teamService = teamService;
        this.modalService = modalService;
        this.matches = [];
        this.isLoading = false;
        this.matchesFiltered = [];
        this.accountService.hasAuthority('ROLE_ADMIN').then(res => {
            this.admin = res;
            console.log(this.admin);
        });
    }
    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.isLoading = true;
        return this.matchService.getMatchesToplay().subscribe({
            next: (res) => {
                var _a, _b;
                this.isLoading = true;
                this.matches = (_a = res.body) !== null && _a !== void 0 ? _a : [];
                this.matchesFiltered = (_b = res.body) !== null && _b !== void 0 ? _b : [];
                console.log(this.matches);
            },
            error: () => {
                this.isLoading = false;
            },
        });
    }
    search(query) {
        this.matchesFiltered = this.matches.filter(match => {
            return match.localId.includes(query) || match.awayId.includes(query);
        });
    }
    trackId(_index, item) {
        return item.id;
    }
    stringToDate(matchDay) {
        //const dateFromIonDatetime = this.match.value['fecha']; //2022-08-18T22:48:00+02:00
        const [dia, hora] = matchDay.split('T');
        const [year, month, day] = dia.split('-');
        const [hours, minutes, seconds] = hora.split(':');
        return day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + 'h';
    }
    dateValue(matchDay) {
        var today = new Date();
        var partido = new Date(matchDay);
        partido.setHours(partido.getHours() - 2);
        partido.setMinutes(partido.getMinutes() - 5);
        var later = new Date(matchDay);
        later.setHours(later.getHours() + 3);
        var res = false;
        if (partido.getTime() <= today.getTime() && today.getTime() <= later.getTime()) {
            res = true;
        }
        return res;
    }
};
MatchesPage.ctorParameters = () => [
    { type: _services_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__.MatchService },
    { type: src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__.TeamService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal }
];
MatchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-matches',
        template: _matches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchesPage);



/***/ }),

/***/ 96954:
/*!************************************************************!*\
  !*** ./src/app/pages/matches/matches.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".padre {\n  display: flex;\n}\n\n.new-btn {\n  --background: #00cccc;\n  white-space: normal;\n}\n\n.stats {\n  --background: #e0fafa;\n  white-space: normal;\n  color: #959595;\n}\n\n.first {\n  background-color: #e0fafa;\n  color: #000;\n  border: 1px solid #eee;\n  padding: 5px 5px;\n  border-collapse: collapse;\n  justify-content: center;\n}\n\n.table-responsive {\n  font-family: \"Arial\";\n  margin: 25px auto;\n  border-collapse: collapse;\n  border: 1px solid #eee;\n  text-align: center;\n  white-space: normal;\n  border-bottom: 2px solid #00cccc;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05), 0px 30px 20px rgba(0, 0, 0, 0.05);\n}\n\n.second {\n  color: #959595;\n  border: 1px solid #eee;\n  padding: 5px 5px;\n  border-collapse: collapse;\n}\n\n.col {\n  width: 70px;\n  white-space: normal;\n  justify-content: center;\n}\n\n.colP {\n  width: 70px;\n  white-space: normal;\n  padding-top: 20px;\n  justify-content: center;\n}\n\n.col1 {\n  width: 70px;\n  white-space: normal;\n  font-size: 17px;\n  justify-content: center;\n  text-overflow: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9KQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFNRiIsImZpbGUiOiJtYXRjaGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5ldy1idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwY2NjYztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5zdGF0cyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTBmYWZhO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM5NTk1OTU7XHJcbn1cclxuLmZpcnN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmYWZhO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICBtYXJnaW46IDI1cHggYXV0bztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMGNjY2M7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwcHggMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXHJcbiAgICAwcHggMzBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnNlY29uZCB7XHJcbiAgY29sb3I6ICM5NTk1OTU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuLmNvbCB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbFAge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbDEge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 82541:
/*!************************************************************!*\
  !*** ./src/app/pages/matches/matches.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'PARTIDOS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"padre\" *ngIf=\"admin === true\">\n    <ion-button class=\"new-btn\" [routerLink]=\"['/matches/new']\">\n      <ion-icon icon=\"add-circle\"></ion-icon> {{ 'NUEVO_PARTIDO' | translate }}\n    </ion-button>\n  </div>\n  <div>\n    <ion-searchbar (ionChange)=\"search($event.target.value)\" showCancelButton=\"focus\" animated></ion-searchbar>\n  </div>\n\n  <div class=\"table-responsive\" id=\"entities\">\n    <ion-row class=\"first\">\n      <ion-col class=\"col1\">{{ 'EQUIPO_LOCAL' | translate }}</ion-col>\n      <ion-col class=\"col1\">{{ 'EQUIPO_VISITANTE' | translate }}</ion-col>\n      <ion-col class=\"col1\">{{ 'FECHA' | translate }}</ion-col>\n      <ion-col class=\"col1\">{{ 'ACCIONES' | translate }}</ion-col>\n    </ion-row>\n    <div *ngIf=\"matches?.length != 0\">\n      <ion-row *ngFor=\"let match of matchesFiltered; trackBy: trackId\" #slidingItem class=\"second\">\n        <ion-col class=\"colP\">{{ match.localId }}</ion-col>\n        <ion-col class=\"colP\">{{ match.awayId }}</ion-col>\n        <ion-col class=\"colP\">{{stringToDate(match.matchDay)}}</ion-col>\n\n        <ion-col class=\"col\">\n          <ion-button *ngIf=\"dateValue(match.matchDay)\" class=\"stats\" [routerLink]=\"['/stats/new/',match.id]\">\n            <ion-icon icon=\"football\"></ion-icon> {{ 'ANALIZAR' | translate }}</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div class=\"alert alert-warning\" id=\"no-result\" *ngIf=\"matches?.length === 0\">\n    <ion-title>No matches found</ion-title>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_matches_module_ts.js.map