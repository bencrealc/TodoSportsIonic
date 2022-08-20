"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_matches_end_matchesEnd_module_ts"],{

/***/ 1170:
/*!****************************************************************!*\
  !*** ./src/app/pages/matches/end/matchesEnd-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesEndPageRoutingModule": () => (/* binding */ MatchesEndPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 51284);
/* harmony import */ var _matchesEnd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesEnd.page */ 33822);





const routes = [
    {
        path: '',
        component: _matchesEnd_page__WEBPACK_IMPORTED_MODULE_1__.MatchesEndPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let MatchesEndPageRoutingModule = class MatchesEndPageRoutingModule {
};
MatchesEndPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MatchesEndPageRoutingModule);



/***/ }),

/***/ 51803:
/*!********************************************************!*\
  !*** ./src/app/pages/matches/end/matchesEnd.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesEndPageModule": () => (/* binding */ MatchesEndPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _matchesEnd_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesEnd-routing.module */ 1170);
/* harmony import */ var _matchesEnd_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matchesEnd.page */ 33822);









let MatchesEndPageModule = class MatchesEndPageModule {
};
MatchesEndPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _matchesEnd_routing_module__WEBPACK_IMPORTED_MODULE_1__.MatchesEndPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule],
        declarations: [_matchesEnd_page__WEBPACK_IMPORTED_MODULE_2__.MatchesEndPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder],
        exports: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule],
    })
], MatchesEndPageModule);



/***/ }),

/***/ 33822:
/*!******************************************************!*\
  !*** ./src/app/pages/matches/end/matchesEnd.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesEndPage": () => (/* binding */ MatchesEndPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matchesEnd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchesEnd.page.html?ngResource */ 7299);
/* harmony import */ var _matchesEnd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesEnd.page.scss?ngResource */ 67523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/match/match.service */ 82661);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 99048);
/* harmony import */ var src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/team/team.service */ 40790);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 11898);








let MatchesEndPage = class MatchesEndPage {
    constructor(matchService, teamService, screenOrientation, modalService) {
        this.matchService = matchService;
        this.teamService = teamService;
        this.screenOrientation = screenOrientation;
        this.modalService = modalService;
        this.isLoading = false;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.isLoading = true;
        this.matchService.getMatchesFinished().subscribe({
            next: (res) => {
                var _a, _b;
                this.isLoading = false;
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
};
MatchesEndPage.ctorParameters = () => [
    { type: src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__.MatchService },
    { type: src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__.TeamService },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__.ScreenOrientation },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal }
];
MatchesEndPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-matchesEnd',
        template: _matchesEnd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matchesEnd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchesEndPage);



/***/ }),

/***/ 67523:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/end/matchesEnd.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".padre {\n  display: flex;\n}\n\n.new-btn {\n  --background: #00cccc;\n  white-space: normal;\n}\n\n.stats {\n  --background: #fbdb5c;\n  white-space: normal;\n  color: rgba(39, 37, 37, 0.75);\n}\n\n.first {\n  background-color: #7aee80;\n  color: #000;\n  border: 1px solid #abdfa9;\n  padding: 5px 5px;\n  border-collapse: collapse;\n}\n\n.table-responsive {\n  font-family: \"Arial\";\n  margin: 25px auto;\n  border-collapse: collapse;\n  border: 1px solid #eee;\n  text-align: center;\n  border-bottom: 2px solid #4cb050;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05), 0px 30px 20px rgba(0, 0, 0, 0.05);\n}\n\n.second {\n  color: #959595;\n  border: 1px solid #eee;\n  padding: 5px 5px;\n  border-collapse: collapse;\n}\n\n.list-divider {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  background: #ebeaea;\n  margin-top: 20px;\n}\n\n.normal-font {\n  font-size: 1rem;\n}\n\n.link {\n  text-decoration: underline;\n  color: #423ff8;\n  font-size: 1rem;\n}\n\n.colP {\n  width: 70px;\n  white-space: normal;\n  padding-top: 20px;\n  justify-content: center;\n}\n\n.col1 {\n  width: 70px;\n  white-space: normal;\n  font-size: 17px;\n  justify-content: center;\n  text-overflow: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXNFbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9KQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBU0YiLCJmaWxlIjoibWF0Y2hlc0VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkcmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5uZXctYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMGNjY2M7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4uc3RhdHMge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZGI1YztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNzUpO1xyXG59XHJcbi5maXJzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhZWU4MDtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTcxLCAyMjMsIDE2OSk7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICBtYXJnaW46IDI1cHggYXV0bztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGNiMDUwO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMHB4IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxyXG4gICAgMHB4IDMwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5zZWNvbmQge1xyXG4gIGNvbG9yOiAjOTU5NTk1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi5saXN0LWRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlYmVhZWE7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubm9ybWFsLWZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4ubGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IHJnYig2NiwgNjMsIDI0OCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5jb2xQIHtcclxuICB3aWR0aDogNzBweDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb2wxIHtcclxuICB3aWR0aDogNzBweDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7299:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/end/matchesEnd.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'PARTIDOS_FIN' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionChange)=\"search($event.target.value)\" showCancelButton=\"focus\" animated debounce=\"100\"></ion-searchbar>\n\n  <div class=\"table-responsive\" id=\"entities\">\n    <ion-row class=\"first\">\n      <ion-col class=\"col1\">{{ 'EQUIPO_LOCAL' | translate }}</ion-col>\n      <ion-col class=\"col1\">{{ 'EQUIPO_VISITANTE' | translate }}</ion-col>\n      <ion-col class=\"col1\">{{ 'FECHA' | translate }}</ion-col>\n      <ion-col class=\"col1\">{{ 'RESULTADOS' | translate }}</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let match of matchesFiltered\" class=\"second\">\n      <ion-col class=\"colP\">{{ match.localId }}</ion-col>\n      <ion-col class=\"colP\">{{ match.awayId }}</ion-col>\n      <ion-col class=\"colP\">{{stringToDate(match.matchDay)}}</ion-col>\n      <ion-col [routerLink]=\"['/match/end/',match.id]\"\n        ><ion-button class=\"stats\"><ion-icon name=\"open\"></ion-icon></ion-button\n      ></ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"alert alert-warning\" id=\"no-result\" *ngIf=\"matches?.length === 0\">\n    <ion-title>{{ 'NO_FOUND' | translate }}</ion-title>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_end_matchesEnd_module_ts.js.map