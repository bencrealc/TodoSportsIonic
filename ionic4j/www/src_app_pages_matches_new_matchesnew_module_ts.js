"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_matches_new_matchesnew_module_ts"],{

/***/ 11498:
/*!****************************************************************!*\
  !*** ./src/app/pages/matches/new/matchesnew-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesNewPageRoutingModule": () => (/* binding */ MatchesNewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_pages_matches_new_matchesnew_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/matches/new/matchesnew.page */ 92024);




const routes = [
    {
        path: '',
        component: src_app_pages_matches_new_matchesnew_page__WEBPACK_IMPORTED_MODULE_0__.MatchesNewPage,
    },
];
let MatchesNewPageRoutingModule = class MatchesNewPageRoutingModule {
};
MatchesNewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatchesNewPageRoutingModule);



/***/ }),

/***/ 73234:
/*!********************************************************!*\
  !*** ./src/app/pages/matches/new/matchesnew.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesNewPageModule": () => (/* binding */ MatchesNewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _matchesnew_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchesnew-routing.module */ 11498);
/* harmony import */ var src_app_pages_matches_new_matchesnew_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/matches/new/matchesnew.page */ 92024);








let MatchesNewPageModule = class MatchesNewPageModule {
};
MatchesNewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _matchesnew_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchesNewPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [src_app_pages_matches_new_matchesnew_page__WEBPACK_IMPORTED_MODULE_1__.MatchesNewPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder],
    })
], MatchesNewPageModule);



/***/ }),

/***/ 92024:
/*!******************************************************!*\
  !*** ./src/app/pages/matches/new/matchesnew.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesNewPage": () => (/* binding */ MatchesNewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matchesnew_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchesnew.page.html?ngResource */ 34302);
/* harmony import */ var _matchesnew_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesnew.page.scss?ngResource */ 22000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/match/match.service */ 82661);
/* harmony import */ var src_app_services_match_match_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match/match.model */ 58772);
/* harmony import */ var src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/team/team.service */ 40790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);












let MatchesNewPage = class MatchesNewPage {
    constructor(matchService, teamService, navController, toastController, router, translateService, fb) {
        this.matchService = matchService;
        this.teamService = teamService;
        this.navController = navController;
        this.toastController = toastController;
        this.router = router;
        this.translateService = translateService;
        this.fb = fb;
        this.isSaving = false;
        this.isSubmitted = false;
        this.fecha = new Date(new Date().setHours(new Date().getHours() + 26));
        this.defaultDate = this.fecha.toISOString();
        this.validarQueNoSeanIguales = (control) => {
            const local = control.get('local');
            const visitante = control.get('visitante');
            return local.value != visitante.value ? null : { SonIguales: true };
        };
        this.match = this.fb.group({
            local: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            visitante: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            fecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        }, {
            validators: this.validarQueNoSeanIguales,
        });
        this.teamService.get().subscribe({
            next: (res) => {
                var _a;
                this.teams = (_a = res.body) !== null && _a !== void 0 ? _a : [];
            },
        });
    }
    ngOnInit() { }
    checarSiNoSonIguales() {
        return this.match.hasError('SonIguales') && this.match.get('local').dirty && this.match.get('visitante').dirty;
    }
    get errorControl() {
        return this.match.controls;
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toastCreado = yield this.toastController.create({
                message: 'El partido ha sido creado',
                duration: 2000,
                position: 'top',
                color: 'light',
            });
            this.isSaving = true;
            this.isSubmitted = true;
            if (!this.match.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                const date = this.stringToDate(this.match.value['fecha']);
                const eqlocal = this.teams.find(item => item.name === this.match.value['local']);
                const visit = this.teams.find(item => item.name === this.match.value['visitante']);
                toastCreado.present();
                const match = this.createFrom(date, eqlocal.name, visit.name);
                this.subscribeToSaveResponse(this.matchService.create(match));
                if (this.isSubmitted) {
                    this.router.navigate(['/tabs/matches']);
                }
            }
        });
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.onSaveFinalize())).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveError(),
        });
    }
    createFrom(fecha, localId, awayId) {
        return Object.assign(Object.assign({}, new src_app_services_match_match_model__WEBPACK_IMPORTED_MODULE_3__.Match()), { localId: localId, awayId: awayId, matchDay: fecha });
    }
    stringToDate(dateFromIonDatetime) {
        //const dateFromIonDatetime = this.match.value['fecha']; //2022-08-18T22:48:00+02:00
        const [dateComponents, hora] = dateFromIonDatetime.split('T');
        const [timeComponents] = hora.split('+');
        const [year, month, day] = dateComponents.split('-');
        const [hours, minutes, seconds] = timeComponents.split(':');
        const date = new Date(+year, +month - 1, +day, +hours + 2, +minutes, +seconds);
        return date;
    }
    onSaveSuccess() { }
    onSaveError() {
        // Api for inheritance.
    }
    onSaveFinalize() { }
};
MatchesNewPage.ctorParameters = () => [
    { type: src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__.MatchService },
    { type: src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_4__.TeamService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
MatchesNewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-matchesnew',
        template: _matchesnew_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matchesnew_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchesNewPage);



/***/ }),

/***/ 58772:
/*!***********************************************!*\
  !*** ./src/app/services/match/match.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "getMatchIdentifier": () => (/* binding */ getMatchIdentifier)
/* harmony export */ });
class Match {
    constructor(id, local, localId, away, awayId, matchDay, events, posesion) {
        this.id = id ? id : null;
        this.local = local ? local : null;
        this.localId = localId ? localId : null;
        this.away = away ? away : null;
        this.awayId = awayId ? awayId : null;
        this.matchDay = matchDay ? matchDay : null;
        this.events = events ? events : null;
        this.posesion = posesion ? posesion : null;
    }
}
function getMatchIdentifier(match) {
    return match.id;
}


/***/ }),

/***/ 82661:
/*!*************************************************!*\
  !*** ./src/app/services/match/match.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchService": () => (/* binding */ MatchService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ 45146);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





let MatchService = class MatchService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    get() {
        return this.http.get(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/matches', { observe: 'response' });
    }
    getMatchesFinished() {
        return this.http.get(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/matchesfinished', { observe: 'response' });
    }
    getMatchesToplay() {
        return this.http.get(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/matchestoplay', { observe: 'response' });
    }
    create(match) {
        return this.apiService.post('matches', match, { observe: 'response' });
    }
};
MatchService.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
MatchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
MatchService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], MatchService);



/***/ }),

/***/ 40790:
/*!***********************************************!*\
  !*** ./src/app/services/team/team.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamService": () => (/* binding */ TeamService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ 45146);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





let TeamService = class TeamService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    create(team) {
        return this.apiService.post('teams', team, { observe: 'response' });
    }
    get() {
        return this.http.get(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/teams', { observe: 'response' });
    }
    getById(id) {
        return this.http.get(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/teams/' + id, { observe: 'response' });
    }
};
TeamService.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
TeamService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
TeamService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], TeamService);



/***/ }),

/***/ 22000:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/new/matchesnew.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".new-match {\n  --background: #49ff43;\n  white-space: normal;\n  color: #000;\n  margin-bottom: 200px;\n}\n\n.cancel {\n  --background: #f06243;\n  white-space: normal;\n  --color: #000;\n  margin-bottom: 200px;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n  margin-left: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXNuZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGIiwiZmlsZSI6Im1hdGNoZXNuZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1tYXRjaCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNDlmZjQzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuLmNhbmNlbCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjA2MjQzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgLS1jb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 34302:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/new/matchesnew.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ 'CREAR_NUEVO_PARTIDO' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<form [formGroup]=\"match\" (ngSubmit)=\"save()\" novalidate>\r\n  <ion-item>\r\n    <ion-select interface=\"popover\" formControlName=\"local\" placeholder=\"{{ 'EQUIPO_LOCAL' | translate }}:\">\r\n      <ion-select-option *ngFor=\"let team of teams;\">{{ team.name }}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <div *ngIf=\"isSubmitted && errorControl.local.errors?.required\">\r\n    <span class=\"error\"> {{ 'TL_OBLIGATORIO' | translate }}. </span>\r\n  </div>\r\n\r\n  <ion-item>\r\n    <ion-select interface=\"popover\" formControlName=\"visitante\" placeholder=\"{{ 'EQUIPO_VISITANTE' | translate }}:\">\r\n      <ion-select-option *ngFor=\"let team of teams;\">{{ team.name }}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <div *ngIf=\"isSubmitted && errorControl.visitante.errors?.required\">\r\n    <span class=\"error\"> {{ 'TV_OBLIGATORIO' | translate }}. </span>\r\n  </div>\r\n  <mat-error class=\"error\" *ngIf=\"checarSiNoSonIguales()\">{{ 'DIFERENTE' | translate }}.</mat-error>\r\n\r\n  <ion-item>\r\n    <ion-datetime [min]=\"defaultDate\" formControlName=\"fecha\" minuteValues=\"0,15,30,45\" first-day-of-week=\"1\"> </ion-datetime>\r\n  </ion-item>\r\n  <div *ngIf=\"isSubmitted && errorControl.fecha.errors?.required\">\r\n    <span class=\"error\"> {{ 'FECHA_OBLIGATORIA' | translate }}. </span>\r\n  </div>\r\n\r\n  <ion-button class=\"new-match\" type=\"submit\" block>{{ 'AÑADIR_PARTIDO' | translate }}</ion-button>\r\n  <ion-button class=\"cancel\" [routerLink]=\"['/tabs/matches']\">{{ 'CANCEL_BUTTON' | translate }}</ion-button>\r\n</form>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_new_matchesnew_module_ts.js.map