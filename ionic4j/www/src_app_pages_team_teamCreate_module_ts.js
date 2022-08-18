"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_team_teamCreate_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _teamCreate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamCreate.page.html?ngResource */ 18093);
/* harmony import */ var _teamCreate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamCreate.page.scss?ngResource */ 60216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/team/team.service */ 40790);
/* harmony import */ var src_app_services_team_team_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/team/team.model */ 15723);
/* harmony import */ var src_app_services_auth_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/account.service */ 150);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);












let TeamCreatePage = class TeamCreatePage {
    constructor(teamService, navController, toastController, translateService, router, accountService, fb) {
        this.teamService = teamService;
        this.navController = navController;
        this.toastController = toastController;
        this.translateService = translateService;
        this.router = router;
        this.accountService = accountService;
        this.fb = fb;
        this.isSaving = false;
        this.isSubmitted = false;
        this.team = this.fb.group({
            name: [''],
        });
    }
    ngOnInit() {
        this.team = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toastCreado = yield this.toastController.create({
                message: 'El equipo ha sido creado',
                duration: 2000,
                position: 'top',
                color: 'light',
            });
            this.isSaving = true;
            this.isSubmitted = true;
            if (!this.team.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                toastCreado.present();
            }
            const team = this.createFrom(this.team.value['name'], this.account.id);
            this.subscribeToSaveResponse(this.teamService.create(team));
            if (this.isSubmitted) {
                this.router.navigate(['/tabs/teamCreate']);
            }
        });
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.onSaveFinalize())).subscribe({
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
TeamCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _teamCreate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamCreate.page */ 81824);




const routes = [
    {
        path: '',
        component: _teamCreate_page__WEBPACK_IMPORTED_MODULE_0__.TeamCreatePage,
    },
];
let TeamCreatePageRoutingModule = class TeamCreatePageRoutingModule {
};
TeamCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeamCreatePageRoutingModule);



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

/***/ 60216:
/*!************************************************************!*\
  !*** ./src/app/pages/team/teamCreate.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".new-team {\n  --background: #49ff43;\n  white-space: normal;\n  color: #000;\n  margin-bottom: 2000px;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n  margin-left: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW1DcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InRlYW1DcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy10ZWFtIHtcclxuICAtLWJhY2tncm91bmQ6ICM0OWZmNDM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMDAwcHg7XHJcbn1cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 18093:
/*!************************************************************!*\
  !*** ./src/app/pages/team/teamCreate.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ 'CREAR_EQUIPO' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<form [formGroup]=\"team\" (ngSubmit)=\"save()\">\r\n  <ion-item>\r\n    <ion-label>{{ 'NOMBRE_EQUIPO' | translate }}:</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"name\"></ion-input>\r\n  </ion-item>\r\n\r\n  <div *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\r\n    <span class=\"error\"> {{ 'NOMBRE_OB' | translate }}. </span>\r\n  </div>\r\n  <div *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\r\n    <span class=\"error\"> {{ 'NOMBRE_MINIMO' | translate }}. </span>\r\n  </div>\r\n\r\n  <ion-button type=\"submit\" block class=\"new-team\">{{ 'AÑADIR_EQUIPO' | translate }}</ion-button>\r\n</form>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_team_teamCreate_module_ts.js.map