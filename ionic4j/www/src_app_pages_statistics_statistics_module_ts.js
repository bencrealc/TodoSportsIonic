"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_statistics_statistics_module_ts"],{

/***/ 69764:
/*!***************************************************************!*\
  !*** ./src/app/pages/statistics/statistics-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPageRoutingModule": () => (/* binding */ StatisticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.page */ 38211);




const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_0__.StatisticsPage,
    },
];
let StatisticsPageRoutingModule = class StatisticsPageRoutingModule {
};
StatisticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatisticsPageRoutingModule);



/***/ }),

/***/ 84146:
/*!*******************************************************!*\
  !*** ./src/app/pages/statistics/statistics.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPageModule": () => (/* binding */ StatisticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics-routing.module */ 69764);
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.page */ 38211);








let StatisticsPageModule = class StatisticsPageModule {
};
StatisticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatisticsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_1__.StatisticsPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder],
    })
], StatisticsPageModule);



/***/ }),

/***/ 38211:
/*!*****************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPage": () => (/* binding */ StatisticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.page.html?ngResource */ 27517);
/* harmony import */ var _statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.page.scss?ngResource */ 98837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events/events.service */ 11716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var src_app_services_events_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events/event.model */ 76383);
/* harmony import */ var src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/events/enumerations/event-type.model */ 65724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_posesion_posesion_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/posesion/posesion.model */ 37479);
/* harmony import */ var src_app_services_posesion_posesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/posesion/posesion.service */ 60591);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 11898);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_auth_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth/account.service */ 150);

















let StatisticsPage = class StatisticsPage {
    constructor(pickerController, navController, eventsService, posesionService, toastController, translateService, fb, screenOrientation, route, accountService) {
        this.pickerController = pickerController;
        this.navController = navController;
        this.eventsService = eventsService;
        this.posesionService = posesionService;
        this.toastController = toastController;
        this.translateService = translateService;
        this.fb = fb;
        this.screenOrientation = screenOrientation;
        this.route = route;
        this.accountService = accountService;
        this.isSaving = false;
        this.eventTypeValues = Object.keys(src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType);
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    ngOnInit() {
        this.accountService.identity().then(account => {
            if (account != null) {
                this.account = account;
            }
        });
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
    }
    inicioButton() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const toastLocal = yield this.toastController.create({
                message: 'El equipo local ha obtenido la posesión',
                duration: 2000,
                position: 'top',
                color: 'light',
            });
            const toastVisit = yield this.toastController.create({
                message: 'El equipo visitante ha obtenido la posesión',
                duration: 2000,
                position: 'top',
                color: 'light',
            });
            const picker = yield this.pickerController.create({
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            //TODO Save
                            this.saveInicio(value['equipo']['value']);
                            if (value['equipo']['value'] == false) {
                                toastLocal.present();
                            }
                            else {
                                toastVisit.present();
                            }
                            console.log(value['equipo']['value'], new Date());
                        },
                    },
                ],
                columns: [
                    {
                        name: 'equipo',
                        options: [
                            { text: 'Local', value: false },
                            { text: 'Visitante', value: true },
                        ],
                    },
                ],
            });
            yield picker.present();
        });
    }
    eventosButton() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const picker = yield this.pickerController.create({
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            //TODO Save
                            this.save(value['evento']['value'], value['equipo']['value']);
                            console.log(value['equipo']['value']);
                            console.log(value['evento']['value']);
                        },
                    },
                ],
                columns: [
                    {
                        name: 'evento',
                        options: [
                            { text: 'Amarilla', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.AMARILLA },
                            { text: 'Roja', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.ROJA },
                            { text: 'Gol', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.GOL },
                            { text: 'Falta', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.FALTA },
                            { text: 'Tiro', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.TIRO },
                            { text: 'Corner', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.CORNER },
                            { text: 'Fuera de Juego', value: src_app_services_events_enumerations_event_type_model__WEBPACK_IMPORTED_MODULE_4__.EventType.FUERA_DE_JUEGO },
                        ],
                    },
                    {
                        name: 'equipo',
                        options: [
                            { text: 'Equipo local', value: false },
                            { text: 'Equipo visitante', value: true },
                        ],
                    },
                ],
            });
            yield picker.present();
        });
    }
    save(eventTypeValue, teamValue) {
        this.isSaving = true;
        const event = this.createFromForm(eventTypeValue, teamValue, this.id, this.account.id);
        this.subscribeToSaveResponse(this.eventsService.create(event));
    }
    saveInicio(teamValue) {
        this.isSaving = true;
        const posesion = this.createFromPosesion(teamValue, new Date().getTime(), this.id, this.account.id);
        this.subscribeToSaveResponse(this.posesionService.create(posesion));
    }
    saveFinal() {
        this.isSaving = true;
        //const teamValue = this.posesionService.query();
        const event = this.closeFromPosesion(null, new Date().getTime(), this.id, this.account.id);
        this.subscribeToSaveResponse(this.posesionService.close(event));
    }
    saveChange() {
        this.isSaving = true;
        //const teamValue = this.posesionService.query();
        const event = this.createFromPosesion(null, new Date().getTime(), this.id, this.account.id);
        this.subscribeToSaveResponse(this.posesionService.change(event));
    }
    createFromForm(eventTypeValue, teamValue, id, userId) {
        return Object.assign(Object.assign({}, new src_app_services_events_event_model__WEBPACK_IMPORTED_MODULE_3__.Event()), { eventType: eventTypeValue, team: teamValue, matchId: id, userId: userId });
    }
    createFromPosesion(teamValue, timeValue, id, userId) {
        return Object.assign(Object.assign({}, new src_app_services_posesion_posesion_model__WEBPACK_IMPORTED_MODULE_5__.Posesion()), { team: teamValue, start: timeValue, matchId: id, userId: userId });
    }
    closeFromPosesion(teamValue, timeValue, id, userId) {
        return Object.assign(Object.assign({}, new src_app_services_posesion_posesion_model__WEBPACK_IMPORTED_MODULE_5__.Posesion()), { team: teamValue, end: timeValue, matchId: id, userId: userId });
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.onSaveFinalize())).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveError(),
        });
    }
    onSaveSuccess() { }
    onSaveError() {
        // Api for inheritance.
    }
    onSaveFinalize() { }
};
StatisticsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PickerController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: src_app_services_posesion_posesion_service__WEBPACK_IMPORTED_MODULE_6__.PosesionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_auth_account_service__WEBPACK_IMPORTED_MODULE_8__.AccountService }
];
StatisticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-statistics',
        template: _statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatisticsPage);



/***/ }),

/***/ 65724:
/*!******************************************************************!*\
  !*** ./src/app/services/events/enumerations/event-type.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventType": () => (/* binding */ EventType)
/* harmony export */ });
var EventType;
(function (EventType) {
    EventType["GOL"] = "GOL";
    EventType["FALTA"] = "FALTA";
    EventType["AMARILLA"] = "AMARILLA";
    EventType["ROJA"] = "ROJA";
    EventType["TIRO"] = "TIRO";
    EventType["CORNER"] = "CORNER";
    EventType["PENALTI"] = "PENALTI";
    EventType["FUERA_DE_JUEGO"] = "FUERA_DE_JUEGO";
})(EventType || (EventType = {}));


/***/ }),

/***/ 76383:
/*!************************************************!*\
  !*** ./src/app/services/events/event.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event)
/* harmony export */ });
class Event {
    constructor(id, eventType, team, matchId, userId) {
        this.id = id ? id : null;
        this.eventType = eventType ? eventType : null;
        this.team = team ? team : null;
        this.matchId = matchId ? matchId : null;
        this.userId = userId ? userId : null;
    }
}


/***/ }),

/***/ 37479:
/*!*****************************************************!*\
  !*** ./src/app/services/posesion/posesion.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Posesion": () => (/* binding */ Posesion)
/* harmony export */ });
//import dayjs from 'dayjs/esm';
class Posesion {
    constructor(id, team, start, end, matchId, userId) {
        this.id = id ? id : null;
        this.team = team ? team : null;
        this.start = start ? start : null;
        this.end = end ? end : null;
        this.matchId = matchId ? matchId : null;
        this.userId = userId ? userId : null;
    }
}


/***/ }),

/***/ 98837:
/*!******************************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".stats {\n  float: right;\n  --background: #bebebe;\n}\n\n.padre {\n  display: flex;\n  justify-content: center;\n}\n\n.poslocal-btn {\n  --background: #2d63c8;\n  font-size: 14px;\n  margin-top: 10px;\n  white-space: normal;\n  --color: #fff;\n}\n\n.posvisit-btn {\n  --background: #f06243;\n  font-size: 15px;\n  margin-top: 10px;\n  white-space: normal;\n  --color: #fff;\n}\n\n.cambio-btn {\n  --background: #ffff43;\n  font-size: 15px;\n  white-space: normal;\n  margin-top: 10px;\n  --color: #000;\n}\n\n.eventos-btn {\n  --background: #49ff43;\n  font-size: 15px;\n  margin-top: 10px;\n  --color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUtGIiwiZmlsZSI6InN0YXRpc3RpY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYmViZWJlO1xyXG59XHJcbi5wYWRyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc2xvY2FsLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMmQ2M2M4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG4ucG9zdmlzaXQtYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICNmMDYyNDM7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5jYW1iaW8tYnRuIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmNDM7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5ldmVudG9zLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNDlmZjQzO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 27517:
/*!******************************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"padre\">\r\n      <ion-title>{{ 'ESTADISTICAS' | translate }}</ion-title>\r\n      <ion-title\r\n        ><ion-button class=\"stats\" [routerLink]=\"['/tabs/matches']\"><ion-icon name=\"arrow-redo\"></ion-icon></ion-button\r\n      ></ion-title>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button (click)=\"inicioButton()\" expand=\"block\" size=\"large\" class=\"poslocal-btn\">{{ 'INICIO_POSESION' | translate }}</ion-button>\r\n\r\n  <ion-button (click)=\"eventosButton()\" expand=\"block\" size=\"large\" class=\"eventos-btn\">{{ 'EVENTOS' | translate }}</ion-button>\r\n\r\n  <ion-button (click)=\"saveChange()\" expand=\"block\" size=\"large\" class=\"cambio-btn\">{{ 'CAMBIO_POSESION' | translate }}</ion-button>\r\n\r\n  <ion-button (click)=\"saveFinal()\" expand=\"block\" size=\"large\" class=\"posvisit-btn\">{{ 'FIN_POSESION' | translate }}</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_statistics_statistics_module_ts.js.map