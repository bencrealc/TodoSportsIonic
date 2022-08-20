"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_matches_data_matchdata_module_ts"],{

/***/ 95479:
/*!****************************************************************!*\
  !*** ./src/app/pages/matches/data/matchdata-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchDataPageRoutingModule": () => (/* binding */ MatchDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_pages_matches_data_matchdata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/matches/data/matchdata.page */ 11817);




const routes = [
    {
        path: '',
        component: src_app_pages_matches_data_matchdata_page__WEBPACK_IMPORTED_MODULE_0__.MatchDataPage,
    },
];
let MatchDataPageRoutingModule = class MatchDataPageRoutingModule {
};
MatchDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatchDataPageRoutingModule);



/***/ }),

/***/ 58243:
/*!********************************************************!*\
  !*** ./src/app/pages/matches/data/matchdata.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchDataPageModule": () => (/* binding */ MatchDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _matchdata_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchdata-routing.module */ 95479);
/* harmony import */ var src_app_pages_matches_data_matchdata_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/matches/data/matchdata.page */ 11817);









let MatchDataPageModule = class MatchDataPageModule {
};
MatchDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _matchdata_routing_module__WEBPACK_IMPORTED_MODULE_1__.MatchDataPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule],
        declarations: [src_app_pages_matches_data_matchdata_page__WEBPACK_IMPORTED_MODULE_2__.MatchDataPage],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder],
        exports: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule],
    })
], MatchDataPageModule);



/***/ }),

/***/ 11817:
/*!******************************************************!*\
  !*** ./src/app/pages/matches/data/matchdata.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchDataPage": () => (/* binding */ MatchDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matchdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchdata.page.html?ngResource */ 79908);
/* harmony import */ var _matchdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchdata.page.scss?ngResource */ 14143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_posesion_posesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posesion/posesion.service */ 60591);
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events/events.service */ 11716);









let MatchDataPage = class MatchDataPage {
    constructor(navController, toastController, translateService, route, posesionService, eventService) {
        this.navController = navController;
        this.toastController = toastController;
        this.translateService = translateService;
        this.route = route;
        this.posesionService = posesionService;
        this.eventService = eventService;
        this.eLocal = [];
        this.eAway = [];
        this.pLocal = [];
        this.pAway = [];
        this.posesionLocal = 0;
        this.posesionAway = 0;
        this.golesLocal = 0;
        this.golesAway = 0;
        this.faltasLocal = 0;
        this.faltasAway = 0;
        this.amarillasLocal = 0;
        this.amarillasAway = 0;
        this.rojasLocal = 0;
        this.rojasAway = 0;
        this.tirosLocal = 0;
        this.tirosAway = 0;
        this.cornerLocal = 0;
        this.cornerAway = 0;
        this.penaltiLocal = 0;
        this.penaltiAway = 0;
        this.offsideLocal = 0;
        this.offsideAway = 0;
        this.users = 0;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
        this.loadAll();
    }
    loadAll() {
        this.loadEvents();
        this.loadPosesion();
    }
    loadPosesion() {
        this.posesionService.getPosesion('local', this.id).subscribe({
            next: (res) => {
                var _a;
                this.pLocal = (_a = res.body) !== null && _a !== void 0 ? _a : [];
                console.log(this.pLocal);
            },
        });
        this.posesionService.getPosesion('away', this.id).subscribe({
            next: (res) => {
                var _a;
                this.pAway = (_a = res.body) !== null && _a !== void 0 ? _a : [];
                console.log(this.pAway);
                this.sumPosesion();
            },
        });
    }
    loadEvents() {
        this.eventService.getEvents('local', this.id).subscribe({
            next: (res) => {
                var _a;
                this.eLocal = (_a = res.body) !== null && _a !== void 0 ? _a : [];
                console.log(this.eLocal);
                this.golesLocal = this.eLocal.filter(e => e.eventType === 'GOL').length;
                this.faltasLocal = this.eLocal.filter(e => e.eventType === 'FALTA').length;
                this.amarillasLocal = this.eLocal.filter(e => e.eventType === 'AMARILLA').length;
                this.rojasLocal = this.eLocal.filter(e => e.eventType === 'ROJA').length;
                this.tirosLocal = this.eLocal.filter(e => e.eventType === 'TIRO').length;
                this.cornerLocal = this.eLocal.filter(e => e.eventType === 'CORNER').length;
                this.penaltiLocal = this.eLocal.filter(e => e.eventType === 'PENALTI').length;
                this.offsideLocal = this.eLocal.filter(e => e.eventType === 'FUERA_DE_JUEGO').length;
            },
        });
        this.eventService.getEvents('away', this.id).subscribe({
            next: (res) => {
                var _a;
                this.eAway = (_a = res.body) !== null && _a !== void 0 ? _a : [];
                this.golesAway = this.eAway.filter(e => e.eventType === 'GOL').length;
                this.faltasAway = this.eAway.filter(e => e.eventType === 'FALTA').length;
                this.amarillasAway = this.eAway.filter(e => e.eventType === 'AMARILLA').length;
                this.rojasAway = this.eAway.filter(e => e.eventType === 'ROJA').length;
                this.tirosAway = this.eAway.filter(e => e.eventType === 'TIRO').length;
                this.cornerAway = this.eAway.filter(e => e.eventType === 'CORNER').length;
                this.penaltiAway = this.eAway.filter(e => e.eventType === 'PENALTI').length;
                this.offsideAway = this.eAway.filter(e => e.eventType === 'FUERA_DE_JUEGO').length;
            },
        });
        this.eventService.getUsers(this.id).subscribe({
            next: (res) => {
                var _a;
                this.users = (_a = res.body) !== null && _a !== void 0 ? _a : 0;
                console.log(this.users);
                this.average();
            },
        });
    }
    average() {
        if (this.users != 0) {
            this.golesLocal = Math.round(this.golesLocal / this.users);
            this.golesAway = Math.round(this.golesAway / this.users);
            this.faltasLocal = Math.round(this.faltasLocal / this.users);
            this.faltasAway = Math.round(this.faltasAway / this.users);
            this.amarillasLocal = Math.round(this.amarillasLocal / this.users);
            this.amarillasAway = Math.round(this.amarillasAway / this.users);
            this.rojasLocal = Math.round(this.rojasLocal / this.users);
            this.rojasAway = Math.round(this.rojasAway / this.users);
            this.tirosLocal = Math.round(this.tirosLocal / this.users);
            this.tirosAway = Math.round(this.tirosAway / this.users);
            this.cornerLocal = Math.round(this.cornerLocal / this.users);
            this.cornerAway = Math.round(this.cornerAway / this.users);
            this.penaltiLocal = Math.round(this.penaltiLocal / this.users);
            this.penaltiAway = Math.round(this.penaltiAway / this.users);
            this.offsideLocal = Math.round(this.offsideLocal / this.users);
            this.offsideAway = Math.round(this.offsideAway / this.users);
        }
    }
    sumPosesion() {
        for (let i = 0; i < this.pLocal.length; i++) {
            if (this.pLocal[i].end === null) {
                this.posesionLocal = this.posesionLocal + 0;
            }
            else {
                this.posesionLocal = this.posesionLocal + (new Date(this.pLocal[i].end).getTime() - new Date(this.pLocal[i].start).getTime());
            }
            console.log('Posesion ' + this.posesionLocal);
        }
        for (let i = 0; i < this.pAway.length; i++) {
            if (this.pAway[i].end === null) {
                this.posesionAway = this.posesionAway + 0;
            }
            else {
                this.posesionAway = this.posesionAway + (new Date(this.pAway[i].end).getTime() - new Date(this.pAway[i].start).getTime());
            }
        }
        var total = this.posesionLocal + this.posesionAway;
        this.posesionLocal = Math.round((this.posesionLocal * 100) / total);
        console.log(this.posesionLocal);
        this.posesionAway = Math.round((this.posesionAway * 100) / total);
        console.log(this.posesionAway);
    }
};
MatchDataPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_posesion_posesion_service__WEBPACK_IMPORTED_MODULE_2__.PosesionService },
    { type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
MatchDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-matchdata',
        template: _matchdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matchdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchDataPage);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 14143:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/data/matchdata.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".padre {\n  display: flex;\n}\n\n.data {\n  float: right;\n  --background: #bebebe;\n}\n\n.first {\n  color: #000;\n  padding: 12px 5px;\n  justify-content: center;\n  white-space: normal;\n}\n\n.table-responsive {\n  font-family: \"Arial\";\n  margin: 25px auto;\n  text-align: center;\n}\n\n.second {\n  color: #959595;\n  margin-top: 15px;\n  background-size: 50% 50%;\n}\n\n.col {\n  color: #000;\n  font-size: 19px;\n  width: 70px;\n  border-radius: 8px;\n  border-style: outset;\n  border-color: #6bc06f;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-image: linear-gradient(to bottom right, #cdf3cc, #8de48d);\n}\n\n.col1 {\n  font-size: 19px;\n  justify-content: center;\n  height: 60px;\n  border-radius: 8px;\n  border-style: outset;\n  border-color: #6bc06f;\n  white-space: normal;\n  background-image: linear-gradient(to bottom right, #cdf3cc, #8de48d);\n}\n\n.colTeam {\n  font-size: 19px;\n  white-space: normal;\n  margin-top: 8px;\n  border-radius: 8px;\n  height: 35px;\n  color: #000;\n  border-style: inset;\n  background-image: linear-gradient(to bottom right, #f3cccc, #e48d8d);\n  border-color: #c06b6b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvRUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRUFBQTtFQUNBLHFCQUFBO0FBTUYiLCJmaWxlIjoibWF0Y2hkYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZGF0YSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC0tYmFja2dyb3VuZDogI2JlYmViZTtcclxufVxyXG5cclxuLmZpcnN0IHtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICBtYXJnaW46IDI1cHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlY29uZCB7XHJcbiAgY29sb3I6ICM5NTk1OTU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xyXG59XHJcbi5jb2wge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICB3aWR0aDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmJjMDZmO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigyMDUsIDI0MywgMjA0KSwgcmdiKDE0MSwgMjI4LCAxNDEpKTtcclxufVxyXG4uY29sMSB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmJjMDZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDIwNSwgMjQzLCAyMDQpLCByZ2IoMTQxLCAyMjgsIDE0MSkpO1xyXG59XHJcbi5jb2xUZWFtIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigyNDMsIDIwNCwgMjA0KSwgcmdiKDIyOCwgMTQxLCAxNDEpKTtcclxuICBib3JkZXItY29sb3I6ICNjMDZiNmI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 79908:
/*!*******************************************************************!*\
  !*** ./src/app/pages/matches/data/matchdata.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ 'DATOS_PARTIDO' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"padre\">\r\n  <ion-title\r\n    ><ion-button class=\"data\" [routerLink]=\"['/tabs/matchesEnd']\"><ion-icon name=\"arrow-redo\"></ion-icon></ion-button\r\n  ></ion-title>\r\n</div>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <div class=\"table-responsive\" id=\"entities\">\r\n      <ion-row class=\"first\">\r\n        <ion-col class=\"col1\">{{ 'EQUIPO_LOCAL' | translate }}</ion-col>\r\n        <ion-col></ion-col>\r\n        <ion-col class=\"col1\">{{ 'EQUIPO_VISITANTE' | translate }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ golesLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'GOLES' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ golesAway}}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ tirosLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'TIROS' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ tirosAway }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ faltasLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'FALTAS' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ faltasAway }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ amarillasLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'AMARILLAS' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ amarillasAway }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ rojasLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'ROJAS' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ rojasAway }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ offsideLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'FUERA_JUEGO' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ offsideAway }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ cornerLocal }}</ion-col>\r\n        <ion-col class=\"col\">{{ 'CORNERS' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ cornerAway }}</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"second\">\r\n        <ion-col class=\"colTeam\">{{ posesionLocal }} %</ion-col>\r\n        <ion-col class=\"col\">{{ 'POSESION' | translate }}</ion-col>\r\n        <ion-col class=\"colTeam\">{{ posesionAway }} %</ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_data_matchdata_module_ts.js.map