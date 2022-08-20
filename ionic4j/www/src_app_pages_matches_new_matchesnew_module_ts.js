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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_pages_matches_new_matchesnew_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/matches/new/matchesnew.page */ 92024);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 51284);





const routes = [
    {
        path: '',
        component: src_app_pages_matches_new_matchesnew_page__WEBPACK_IMPORTED_MODULE_0__.MatchesNewPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__.UserRouteAccessService],
    },
];
let MatchesNewPageRoutingModule = class MatchesNewPageRoutingModule {
};
MatchesNewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matchesnew_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchesnew.page.html?ngResource */ 34302);
/* harmony import */ var _matchesnew_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesnew.page.scss?ngResource */ 22000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_match_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/match/match.service */ 82661);
/* harmony import */ var src_app_services_match_match_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match/match.model */ 58772);
/* harmony import */ var src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/team/team.service */ 40790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 11898);













let MatchesNewPage = class MatchesNewPage {
    constructor(matchService, teamService, navController, toastController, router, translateService, screenOrientation, fb) {
        this.matchService = matchService;
        this.teamService = teamService;
        this.navController = navController;
        this.toastController = toastController;
        this.router = router;
        this.translateService = translateService;
        this.screenOrientation = screenOrientation;
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
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.match = this.fb.group({
            local: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            visitante: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            fecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.router.navigate(['/tabs/matches']).then(() => { window.location.reload(); });
                    ;
                }
            }
        });
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.onSaveFinalize())).subscribe({
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__.ScreenOrientation },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
MatchesNewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-matchesnew',
        template: _matchesnew_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matchesnew_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchesNewPage);



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

module.exports = ".padre {\n  display: flex;\n  justify-content: center;\n}\n\n.new-match {\n  --background: #fbdb5c;\n  white-space: normal;\n  color: rgba(0, 0, 0, 0.75);\n  margin-top: 5px;\n}\n\n.cancel {\n  --background: #f06243;\n  white-space: normal;\n  --color: #000;\n  margin-top: 5px;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n  margin-left: 17px;\n}\n\n.grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #7aee80 0%, #71dd76 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXNuZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUdBLDREQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFJRiIsImZpbGUiOiJtYXRjaGVzbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5ldy1tYXRjaCB7XG4gIC0tYmFja2dyb3VuZDogI2ZiZGI1YztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jYW5jZWwge1xuICAtLWJhY2tncm91bmQ6ICNmMDYyNDM7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC0tY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbn1cbi5ncmlkMSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY29udGFpZXItbG9naW4ge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ucm93MSB7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzdhZWU4MCAwJSwgIzcxZGQ3NiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM3YWVlODAgMCUsICM3MWRkNzYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzdhZWU4MCAwJSwgIzcxZGQ3NiAxMDAlKTtcbn1cblxuLnJvdzIge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 34302:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/new/matchesnew.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row class=\"row1\">\n      <ion-col> </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row2\">\n      <ion-col> </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-slide>\n    <div class=\"contaier-login\">\n      <ion-grid>\n        <form [formGroup]=\"match\" (ngSubmit)=\"save()\" novalidate>\n          <ion-row>\n            <ion-col>\n              <h1>{{ 'CREAR_NUEVO_PARTIDO' | translate }}</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-select interface=\"popover\" formControlName=\"local\" placeholder=\"{{ 'EQUIPO_LOCAL' | translate }}:\">\n                    <ion-select-option *ngFor=\"let team of teams;\">{{ team.name }}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <div *ngIf=\"isSubmitted && errorControl.local.errors?.required\">\n                  <span class=\"error\"> {{ 'TL_OBLIGATORIO' | translate }}. </span>\n                </div>\n                <br />\n                <ion-item>\n                  <ion-select interface=\"popover\" formControlName=\"visitante\" placeholder=\"{{ 'EQUIPO_VISITANTE' | translate }}:\">\n                    <ion-select-option *ngFor=\"let team of teams;\">{{ team.name }}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <div *ngIf=\"isSubmitted && errorControl.visitante.errors?.required\">\n                  <span class=\"error\"> {{ 'TV_OBLIGATORIO' | translate }}. </span>\n                </div>\n                <mat-error class=\"error\" *ngIf=\"checarSiNoSonIguales()\">{{ 'DIFERENTE' | translate }}.</mat-error>\n\n                <br />\n                <ion-item>\n                  <ion-datetime locale=\"es-ES\" [min]=\"defaultDate\" formControlName=\"fecha\" minuteValues=\"0,15,30,45\" first-day-of-week=\"1\">\n                    <span slot=\"time-label\">Hora</span>\n                  </ion-datetime>\n                </ion-item>\n                <div *ngIf=\"isSubmitted && errorControl.fecha.errors?.required\">\n                  <span class=\"error\"> {{ 'FECHA_OBLIGATORIA' | translate }}. </span>\n                </div>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"padre\">\n                <ion-button class=\"new-match\" type=\"submit\" block fill=\"solid\">{{ 'AÑADIR_PARTIDO' | translate }}</ion-button>\n                <ion-button class=\"cancel\" [routerLink]=\"['/tabs/matches']\" fill=\"solid\">{{ 'CANCEL_BUTTON' | translate }}</ion-button>\n              </div></ion-col\n            >\n          </ion-row>\n        </form>\n      </ion-grid>\n    </div>\n  </ion-slide>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_new_matchesnew_module_ts.js.map