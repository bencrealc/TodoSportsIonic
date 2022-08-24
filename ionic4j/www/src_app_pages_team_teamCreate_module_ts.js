"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_team_teamCreate_module_ts"],{

/***/ 60216:
/*!************************************************************!*\
  !*** ./src/app/pages/team/teamCreate.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".error {\n  color: red;\n  font-size: 12px;\n  margin-left: 17px;\n}\n\n.padre {\n  display: flex;\n  justify-content: center;\n}\n\n.redo {\n  float: right;\n  --background: #bebebe;\n  position: absolute !important;\n  top: -2px !important;\n  right: 2px !important;\n}\n\n.grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #7aee80 0%, #71dd76 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  --background: #fbdb5c;\n  color: rgba(0, 0, 0, 0.75);\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW1DcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUdBLDREQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFJRiIsImZpbGUiOiJ0ZWFtQ3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG4ucGFkcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWRvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWJhY2tncm91bmQ6ICNiZWJlYmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0ycHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xufVxuLmdyaWQxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jb250YWllci1sb2dpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5yb3cxIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjN2FlZTgwIDAlLCAjNzFkZDc2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzdhZWU4MCAwJSwgIzcxZGQ3NiAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjN2FlZTgwIDAlLCAjNzFkZDc2IDEwMCUpO1xufVxuXG4ucm93MiB7XG4gIGhlaWdodDogNTAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6ICNmYmRiNWM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG5pb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 18093:
/*!************************************************************!*\
  !*** ./src/app/pages/team/teamCreate.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-grid class=\"grid1\">\r\n    <ion-row class=\"row1\">\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"row2\">\r\n      <ion-col> </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-slide>\r\n    <div class=\"contaier-login\">\r\n      <ion-grid>\r\n        <form [formGroup]=\"team\" (ngSubmit)=\"save()\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <h1>{{ 'CREAR_EQUIPO' | translate }}</h1>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-input formControlName=\"name\" type=\"text\" placeholder=\"{{ 'NOMBRE_EQUIPO' | translate }}\"></ion-input>\r\n              </ion-item>\r\n              <div *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\r\n                <span class=\"error\"> {{ 'NOMBRE_OB' | translate }}. </span>\r\n              </div>\r\n              <div *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\r\n                <span class=\"error\"> {{ 'NOMBRE_MINIMO' | translate }}. </span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" block class=\"new-team\" fill=\"solid\"> {{ 'AÑADIR_EQUIPO' | translate }} </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-slide>\r\n</ion-content>\r\n";

/***/ }),

/***/ 77371:
/*!*************************************************!*\
  !*** ./src/app/pages/team/teamCreate.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamCreatePageModule": () => (/* binding */ TeamCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _teams_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams-routing.module */ 3673);
/* harmony import */ var _teamCreate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamCreate.page */ 81824);








let TeamCreatePageModule = class TeamCreatePageModule {
};
TeamCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _teams_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeamCreatePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_teamCreate_page__WEBPACK_IMPORTED_MODULE_1__.TeamCreatePage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder],
    })
], TeamCreatePageModule);



/***/ }),

/***/ 81824:
/*!***********************************************!*\
  !*** ./src/app/pages/team/teamCreate.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamCreatePage": () => (/* binding */ TeamCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _teamCreate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamCreate.page.html?ngResource */ 18093);
/* harmony import */ var _teamCreate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamCreate.page.scss?ngResource */ 60216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/team/team.service */ 40790);
/* harmony import */ var src_app_services_team_team_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/team/team.model */ 15723);
/* harmony import */ var src_app_services_auth_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/account.service */ 150);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 11898);













let TeamCreatePage = class TeamCreatePage {
    constructor(teamService, navController, toastController, translateService, router, accountService, screenOrientation, fb) {
        this.teamService = teamService;
        this.navController = navController;
        this.toastController = toastController;
        this.translateService = translateService;
        this.router = router;
        this.accountService = accountService;
        this.screenOrientation = screenOrientation;
        this.fb = fb;
        this.isSaving = false;
        this.isSubmitted = false;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.teamService.get().subscribe({
            next: (res) => {
                var _a;
                this.teams = (_a = res.body) !== null && _a !== void 0 ? _a : [];
            },
        });
    }
    ngOnInit() {
        this.team = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]],
        });
        this.accountService.identity().then(account => {
            if (account != null) {
                this.account = account;
            }
        });
    }
    get errorControl() {
        return this.team.controls;
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toastCreado = yield this.toastController.create({
                message: 'El equipo ha sido creado',
                duration: 2000,
                position: 'top',
                color: 'light',
            });
            const toastDuplicate = yield this.toastController.create({
                message: 'El equipo ya existe',
                duration: 2000,
                position: 'top',
                color: 'danger',
            });
            this.isSaving = true;
            this.isSubmitted = true;
            if (!this.team.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                const equipo = this.createFrom(this.team.value['name'], this.account.id);
                if (this.isSubmitted) {
                    var equal = false;
                    if (this.teams.filter(x => x.name === equipo.name).length != 0) {
                        equal = true;
                        toastDuplicate.present();
                    }
                    if (this.isSubmitted && equal === false) {
                        this.teams.push(equipo);
                        toastCreado.present();
                        this.subscribeToSaveResponse(this.teamService.create(equipo));
                        this.router.navigate(['/tabs/teamCreate']);
                        this.team.reset();
                    }
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
    createFrom(name, userId) {
        return Object.assign(Object.assign({}, new src_app_services_team_team_model__WEBPACK_IMPORTED_MODULE_3__.Team()), { name: name, userId: userId });
    }
    onSaveSuccess() { }
    onSaveError() {
        // Api for inheritance.
    }
    onSaveFinalize() { }
};
TeamCreatePage.ctorParameters = () => [
    { type: src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__.TeamService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__.ScreenOrientation },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
TeamCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-teamCreate',
        template: _teamCreate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_teamCreate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamCreatePage);



/***/ }),

/***/ 3673:
/*!****************************************************!*\
  !*** ./src/app/pages/team/teams-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamCreatePageRoutingModule": () => (/* binding */ TeamCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/user-route-access.service */ 51284);
/* harmony import */ var _teamCreate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamCreate.page */ 81824);





const routes = [
    {
        path: '',
        component: _teamCreate_page__WEBPACK_IMPORTED_MODULE_1__.TeamCreatePage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [src_app_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let TeamCreatePageRoutingModule = class TeamCreatePageRoutingModule {
};
TeamCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TeamCreatePageRoutingModule);



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

/***/ 15723:
/*!*********************************************!*\
  !*** ./src/app/services/team/team.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Team": () => (/* binding */ Team)
/* harmony export */ });
class Team {
    constructor(id, name, matches, userId) {
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.matches = matches ? matches : null;
        this.userId = userId ? userId : null;
    }
}


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
    getByName(name) {
        return this.http.get(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/teams/' + name, { observe: 'response' });
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



/***/ })

}]);
//# sourceMappingURL=src_app_pages_team_teamCreate_module_ts.js.map