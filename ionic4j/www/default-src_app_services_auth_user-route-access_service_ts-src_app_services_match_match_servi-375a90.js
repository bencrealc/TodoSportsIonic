"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_auth_user-route-access_service_ts-src_app_services_match_match_servi-375a90"],{

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

/***/ 34152:
/*!**********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/createPopper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ 35414);
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ 85888);
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ 53462);
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ 3664);
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ 48732);
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ 87628);
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ 92845);
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ 70337);
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ 29010);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ 18292);
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ 19282);
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ 57112);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ 37155);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ 65912);














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 19229:
/*!****************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 37155);

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ 70492:
/*!*****************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 37155);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ 20845);


function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

/***/ }),

/***/ 31309:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ 36619);
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ 56690);
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ 53462);
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ 3664);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ 50957);
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ 48732);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ 37155);
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 70492);
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ 58635);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ 19229);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ 78924);
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ 2051);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ 20845);















function getInnerBoundingClientRect(element) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ 35414:
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 70492);
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNodeScroll.js */ 89032);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ 78924);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 37155);
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ 74784);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ 50957);
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isScrollParent.js */ 12197);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ 20845);









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ 48732:
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 80881);

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ 50957:
/*!**************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 37155);

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ 56690:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ 50957);
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ 48732);
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ 74784);
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ 84572);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ 20845);




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ 35842:
/*!****************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ 85888:
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 70492);
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ 78924:
/*!*******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ 89032:
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ 84572);
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 80881);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 37155);
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ 35842);




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ 3664:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindow.js */ 80881);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ 78924);
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ 48732);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 37155);
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTableElement.js */ 12878);
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getParentNode.js */ 58635);







function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ 58635:
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ 78924);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ 50957);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 37155);



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback

  );
}

/***/ }),

/***/ 71350:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ 58635);
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ 12197);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ 78924);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 37155);




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ 36619:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 80881);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ 50957);
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ 74784);



function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ 80881:
/*!*****************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ 84572:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 80881);

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ 74784:
/*!***************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 70492);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ 50957);
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ 84572);



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ 37155:
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 80881);


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ 12197:
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ 48732);

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ 12878:
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ 78924);

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ 53462:
/*!*************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ 71350);
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ 58635);
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ 80881);
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ 12197);




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ 65912:
/*!***************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/enums.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "write": () => (/* binding */ write)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ 34937:
/*!*******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ 78924);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ 37155);

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ 33807:
/*!*************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ 18292);
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ 85888);
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/contains.js */ 19229);
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ 3664);
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ 63774);
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ 33309);
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ 74088);
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ 69572);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ 37155);









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ 15940:
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ 3664);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ 80881);
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ 50957);
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ 48732);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ 18292);
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ 90211);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ 20845);







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ 36544:
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ 80881);
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ 76898:
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ 30218);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ 18292);
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ 39308);
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ 57112);
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ 76254);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ 90211);






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ 48685:
/*!**************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "distanceAndSkiddingToXY": () => (/* binding */ distanceAndSkiddingToXY)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ 18292);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 65912);

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ 51580:
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ 72254);


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ 81493:
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ 18292);
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ 63774);
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ 6069);
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ 33309);
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ 85888);
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ 3664);
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ 57112);
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ 90211);
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ 67179);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ 20845);












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ 73982:
/*!*********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/popper-lite.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ 34152);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ 57112);
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ 36544);
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ 51580);
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ 15940);
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ 34937);





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 76254:
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ 90211);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ 57112);
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ 18292);




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ 72254:
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ 18292);
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ 90211);
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ 63774);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ 65912);




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ 92845:
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ 57112:
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ 31309);
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ 50957);
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ 70492);
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ 72254);
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ 2051);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 65912);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ 37155);
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ 74088);
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ 69572);








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ 69572:
/*!*******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ 63272:
/*!**********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/format.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ 6069:
/*!**************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ 18292:
/*!********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ 67179:
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ 63774:
/*!****************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ 30218:
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ 39308:
/*!*********************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ 90211:
/*!****************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ 20845:
/*!********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/math.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ 19282:
/*!***************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ 74088:
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ 67179);

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ 87628:
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 65912);
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ 2051:
/*!********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ 29010:
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ 70337:
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ 63272);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 65912);


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ 33309:
/*!**********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/within.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "within": () => (/* binding */ within),
/* harmony export */   "withinMaxClamp": () => (/* binding */ withinMaxClamp)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 20845);

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ 31662:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/BehaviorSubject.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BehaviorSubject": () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 8872);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    }
    getValue() {
        const { hasError, thrownError, _value } = this;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    }
    next(value) {
        super.next((this._value = value));
    }
}


/***/ }),

/***/ 39565:
/*!***********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPLETE_NOTIFICATION": () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   "createNotification": () => (/* binding */ createNotification),
/* harmony export */   "errorNotification": () => (/* binding */ errorNotification),
/* harmony export */   "nextNotification": () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind,
        value,
        error,
    };
}


/***/ }),

/***/ 94648:
/*!************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 73888);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 1870);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 32362);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 62094);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 8986);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 88970);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 75351);







class Observable {
    constructor(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
            const { operator, source } = this;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        this._subscribe(subscriber)
                    :
                        this._trySubscribe(subscriber));
        });
        return subscriber;
    }
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
                next: (value) => {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            this.subscribe(subscriber);
        });
    }
    _subscribe(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    }
    [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
        return this;
    }
    pipe(...operations) {
        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => (value = x), (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) || (isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value));
}


/***/ }),

/***/ 6246:
/*!***********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 72584);

class Scheduler {
    constructor(schedulerActionCtor, now = Scheduler.now) {
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;


/***/ }),

/***/ 8872:
/*!*********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/Subject.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousSubject": () => (/* binding */ AnonymousSubject),
/* harmony export */   "Subject": () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ 94648);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ 1870);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 81587);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ 66289);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ 75351);





class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        this.closed = false;
        this.currentObservers = null;
        this.observers = [];
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    _throwIfClosed() {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
        }
    }
    next(value) {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
            this._throwIfClosed();
            if (!this.isStopped) {
                if (!this.currentObservers) {
                    this.currentObservers = Array.from(this.observers);
                }
                for (const observer of this.currentObservers) {
                    observer.next(value);
                }
            }
        });
    }
    error(err) {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
            this._throwIfClosed();
            if (!this.isStopped) {
                this.hasError = this.isStopped = true;
                this.thrownError = err;
                const { observers } = this;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    }
    complete() {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
            this._throwIfClosed();
            if (!this.isStopped) {
                this.isStopped = true;
                const { observers } = this;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    }
    unsubscribe() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    }
    get observed() {
        var _a;
        return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    _trySubscribe(subscriber) {
        this._throwIfClosed();
        return super._trySubscribe(subscriber);
    }
    _subscribe(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    }
    _innerSubscribe(subscriber) {
        const { hasError, isStopped, observers } = this;
        if (hasError || isStopped) {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
            this.currentObservers = null;
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
        });
    }
    _checkFinalizedStatuses(subscriber) {
        const { hasError, thrownError, isStopped } = this;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    }
    asObservable() {
        const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    }
    error(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    }
    complete() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    _subscribe(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
}


/***/ }),

/***/ 73888:
/*!************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_OBSERVER": () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber),
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 88970);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 1870);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 8986);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 91757);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 85104);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 39565);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 24520);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 75351);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(destination) {
        super();
        this.isStopped = false;
        if (destination) {
            this.destination = destination;
            if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
                destination.add(this);
            }
        }
        else {
            this.destination = EMPTY_OBSERVER;
        }
    }
    static create(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    }
    next(value) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
        }
        else {
            this._next(value);
        }
    }
    error(err) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (this.isStopped) {
            handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (!this.closed) {
            this.isStopped = true;
            super.unsubscribe();
            this.destination = null;
        }
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    }
    _complete() {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
class ConsumerObserver {
    constructor(partialObserver) {
        this.partialObserver = partialObserver;
    }
    next(value) {
        const { partialObserver } = this;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    }
    error(err) {
        const { partialObserver } = this;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    }
    complete() {
        const { partialObserver } = this;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    }
}
class SafeSubscriber extends Subscriber {
    constructor(observerOrNext, error, complete) {
        super();
        let partialObserver;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            let context;
            if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
                context = Object.create(observerOrNext);
                context.unsubscribe = () => this.unsubscribe();
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context),
                    error: observerOrNext.error && bind(observerOrNext.error, context),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        this.destination = new ConsumerObserver(partialObserver);
    }
}
function handleUnhandledError(error) {
    if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
    }
    else {
        (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    const { onStoppedNotification } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
    onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
    closed: true,
    next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
    error: defaultErrorHandler,
    complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
};


/***/ }),

/***/ 1870:
/*!**************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_SUBSCRIPTION": () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   "Subscription": () => (/* binding */ Subscription),
/* harmony export */   "isSubscription": () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 88970);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 56469);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 66289);



class Subscription {
    constructor(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    unsubscribe() {
        let errors;
        if (!this.closed) {
            this.closed = true;
            const { _parentage } = this;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    for (const parent of _parentage) {
                        parent.remove(this);
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            const { initialTeardown: initialFinalizer } = this;
            if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
                }
            }
            const { _finalizers } = this;
            if (_finalizers) {
                this._finalizers = null;
                for (const finalizer of _finalizers) {
                    try {
                        execFinalizer(finalizer);
                    }
                    catch (err) {
                        errors = errors !== null && errors !== void 0 ? errors : [];
                        if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
                            errors = [...errors, ...err.errors];
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
            }
        }
    }
    add(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    }
    _hasParent(parent) {
        const { _parentage } = this;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    }
    _addParent(parent) {
        const { _parentage } = this;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    }
    _removeParent(parent) {
        const { _parentage } = this;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
        }
    }
    remove(teardown) {
        const { _finalizers } = this;
        _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    }
}
Subscription.EMPTY = (() => {
    const empty = new Subscription();
    empty.closed = true;
    return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}


/***/ }),

/***/ 8986:
/*!********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};


/***/ }),

/***/ 92274:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/combineLatest.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest),
/* harmony export */   "combineLatestInit": () => (/* binding */ combineLatestInit)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/argsArgArrayOrObject */ 98663);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from */ 10883);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/identity */ 62347);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 77375);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 71970);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/createObject */ 19211);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 53868);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/executeSchedule */ 99345);









function combineLatest(...args) {
    const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
    const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
    const { args: observables, keys } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.argsArgArrayOrObject)(args);
    if (observables.length === 0) {
        return (0,_from__WEBPACK_IMPORTED_MODULE_2__.from)([], scheduler);
    }
    const result = new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(combineLatestInit(observables, scheduler, keys
        ?
            (values) => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.createObject)(keys, values)
        :
            _util_identity__WEBPACK_IMPORTED_MODULE_5__.identity));
    return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.mapOneOrManyArgs)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_5__.identity) {
    return (subscriber) => {
        maybeSchedule(scheduler, () => {
            const { length } = observables;
            const values = new Array(length);
            let active = length;
            let remainingFirstValues = length;
            for (let i = 0; i < length; i++) {
                maybeSchedule(scheduler, () => {
                    const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__.from)(observables[i], scheduler);
                    let hasFirstValue = false;
                    source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__.createOperatorSubscriber)(subscriber, (value) => {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, () => {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            }
        }, subscriber);
    };
}
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.executeSchedule)(subscription, scheduler, execute);
    }
    else {
        execute();
    }
}


/***/ }),

/***/ 82453:
/*!*******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/concat.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concat": () => (/* binding */ concat)
/* harmony export */ });
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/concatAll */ 39324);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/args */ 71970);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 10883);



function concat(...args) {
    return (0,_operators_concatAll__WEBPACK_IMPORTED_MODULE_0__.concatAll)()((0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, (0,_util_args__WEBPACK_IMPORTED_MODULE_2__.popScheduler)(args)));
}


/***/ }),

/***/ 78489:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/empty.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY": () => (/* binding */ EMPTY),
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 94648);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => subscriber.complete());
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => scheduler.schedule(() => subscriber.complete()));
}


/***/ }),

/***/ 10883:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/from.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "from": () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ 41120);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 12060);


function from(input, scheduler) {
    return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}


/***/ }),

/***/ 54668:
/*!**********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 17961);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 17234);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 88970);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 77375);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
    }
    const [add, remove] = isEventTarget(target)
        ? eventTargetMethods.map((methodName) => (handler) => target[methodName](eventName, handler, options))
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [];
    if (!add) {
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
            return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((subTarget) => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable((subscriber) => {
        const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
        add(handler);
        return () => remove(handler);
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return (methodName) => (handler) => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}


/***/ }),

/***/ 12060:
/*!**********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromArrayLike": () => (/* binding */ fromArrayLike),
/* harmony export */   "fromAsyncIterable": () => (/* binding */ fromAsyncIterable),
/* harmony export */   "fromInteropObservable": () => (/* binding */ fromInteropObservable),
/* harmony export */   "fromIterable": () => (/* binding */ fromIterable),
/* harmony export */   "fromPromise": () => (/* binding */ fromPromise),
/* harmony export */   "fromReadableStreamLike": () => (/* binding */ fromReadableStreamLike),
/* harmony export */   "innerFrom": () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 18677);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 17234);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 23435);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 69735);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 83993);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 41534);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 34369);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 33441);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 88970);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 91757);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 32362);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }

  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }

    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }

    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }

    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }

    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }

    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }

  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();

    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }

    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);

      if (subscriber.closed) {
        return;
      }
    }

    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}

function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;

  var e_1, _a;

  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);

        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    subscriber.complete();
  });
}

/***/ }),

/***/ 32464:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 59789);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 12060);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 78489);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 71970);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 10883);





function merge(...args) {
    const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
    const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
    const sources = args;
    return !sources.length
        ?
            _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY
        : sources.length === 1
            ?
                (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0])
            :
                (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}


/***/ }),

/***/ 81442:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/never.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEVER": () => (/* binding */ NEVER),
/* harmony export */   "never": () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 85104);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
    return NEVER;
}


/***/ }),

/***/ 36344:
/*!***************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "of": () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 71970);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 10883);


function of(...args) {
    const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
    return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
}


/***/ }),

/***/ 3860:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/race.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "race": () => (/* binding */ race),
/* harmony export */   "raceInit": () => (/* binding */ raceInit)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 12060);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/argsOrArgArray */ 120);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 53868);




function race(...sources) {
    sources = (0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_0__.argsOrArgArray)(sources);
    return sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(sources[0]) : new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(raceInit(sources));
}
function raceInit(sources) {
    return (subscriber) => {
        let subscriptions = [];
        for (let i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
            subscriptions.push((0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(sources[i]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, (value) => {
                if (subscriptions) {
                    for (let s = 0; s < subscriptions.length; s++) {
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        }
    };
}


/***/ }),

/***/ 56182:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 38442);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 36790);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 56517);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;

  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;

    if (due < 0) {
      due = 0;
    }

    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);

        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 47729:
/*!****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/observable/zip.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zip": () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./innerFrom */ 12060);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/argsOrArgArray */ 120);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty */ 78489);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 53868);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 71970);






function zip(...args) {
    const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
    const sources = (0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_1__.argsOrArgArray)(args);
    return sources.length
        ? new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable((subscriber) => {
            let buffers = sources.map(() => []);
            let completed = sources.map(() => false);
            subscriber.add(() => {
                buffers = completed = null;
            });
            for (let sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
                (0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.createOperatorSubscriber)(subscriber, (value) => {
                    buffers[sourceIndex].push(value);
                    if (buffers.every((buffer) => buffer.length)) {
                        const result = buffers.map((buffer) => buffer.shift());
                        subscriber.next(resultSelector ? resultSelector(...result) : result);
                        if (buffers.some((buffer, i) => !buffer.length && completed[i])) {
                            subscriber.complete();
                        }
                    }
                }, () => {
                    completed[sourceIndex] = true;
                    !buffers[sourceIndex].length && subscriber.complete();
                }));
            }
            return () => {
                buffers = completed = null;
            };
        })
        : _empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
}


/***/ }),

/***/ 53868:
/*!******************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorSubscriber": () => (/* binding */ OperatorSubscriber),
/* harmony export */   "createOperatorSubscriber": () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 73888);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        super(destination);
        this.onFinalize = onFinalize;
        this.shouldUnsubscribe = shouldUnsubscribe;
        this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : super._next;
        this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : super._error;
        this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : super._complete;
    }
    unsubscribe() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed } = this;
            super.unsubscribe();
            !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    }
}


/***/ }),

/***/ 39324:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/concatAll.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatAll": () => (/* binding */ concatAll)
/* harmony export */ });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ 59789);

function concatAll() {
    return (0,_mergeAll__WEBPACK_IMPORTED_MODULE_0__.mergeAll)(1);
}


/***/ }),

/***/ 69595:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 38442);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 56002);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 56182);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 56002:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayWhen": () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 82453);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 43633);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 13374);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapTo */ 20528);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 17961);





function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source) => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
    }
    return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => delayDurationSelector(value, index).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_4__.mapTo)(value)));
}


/***/ }),

/***/ 82207:
/*!********************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distinctUntilChanged": () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 62347);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
        let previousKey;
        let first = true;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, (value) => {
            const currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}


/***/ }),

/***/ 43973:
/*!*******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/endWith.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endWith": () => (/* binding */ endWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 82453);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/of */ 36344);


function endWith(...values) {
    return (source) => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(source, (0,_observable_of__WEBPACK_IMPORTED_MODULE_1__.of)(...values));
}


/***/ }),

/***/ 80725:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/filter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);


function filter(predicate, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        let index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (value) => predicate.call(thisArg, value, index++) && subscriber.next(value)));
    });
}


/***/ }),

/***/ 13374:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ignoreElements": () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 85104);



function ignoreElements() {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
    });
}


/***/ }),

/***/ 51245:
/*!***************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);


function map(project, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        let index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (value) => {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}


/***/ }),

/***/ 20528:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/mapTo.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapTo": () => (/* binding */ mapTo)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 51245);

function mapTo(value) {
    return (0,_map__WEBPACK_IMPORTED_MODULE_0__.map)(() => value);
}


/***/ }),

/***/ 59789:
/*!********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/mergeAll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeAll": () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ 17961);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ 62347);


function mergeAll(concurrent = Infinity) {
    return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(_util_identity__WEBPACK_IMPORTED_MODULE_1__.identity, concurrent);
}


/***/ }),

/***/ 19823:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeInternals": () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 99345);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    const buffer = [];
    let active = 0;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    const outerNext = (value) => (active < concurrent ? doInnerSub(value) : buffer.push(value));
    const doInnerSub = (value) => {
        expand && subscriber.next(value);
        active++;
        let innerComplete = false;
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (innerValue) => {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, () => {
            innerComplete = true;
        }, undefined, () => {
            if (innerComplete) {
                try {
                    active--;
                    while (buffer.length && active < concurrent) {
                        const bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, () => {
        isComplete = true;
        checkComplete();
    }));
    return () => {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}


/***/ }),

/***/ 17961:
/*!********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/mergeMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeMap": () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 51245);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ 19823);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 88970);





function mergeMap(project, resultSelector, concurrent = Infinity) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
        return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))), concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent));
}


/***/ }),

/***/ 27604:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/observeOn.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeOn": () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 99345);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);



function observeOn(scheduler, delay = 0) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (value) => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.complete(), delay), (err) => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.error(err), delay)));
    });
}


/***/ }),

/***/ 27066:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/share.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "share": () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/from */ 10883);
/* harmony import */ var _operators_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/take */ 43633);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 8872);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 73888);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79151);





function share(options = {}) {
    const { connector = () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject(), resetOnError = true, resetOnComplete = true, resetOnRefCountZero = true } = options;
    return (wrapperSource) => {
        let connection = null;
        let resetConnection = null;
        let subject = null;
        let refCount = 0;
        let hasCompleted = false;
        let hasErrored = false;
        const cancelReset = () => {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = null;
        };
        const reset = () => {
            cancelReset();
            connection = subject = null;
            hasCompleted = hasErrored = false;
        };
        const resetAndUnsubscribe = () => {
            const conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            const dest = (subject = subject !== null && subject !== void 0 ? subject : connector());
            subscriber.add(() => {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection) {
                connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
                    next: (value) => dest.next(value),
                    error: (err) => {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: () => {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    },
                });
                (0,_observable_from__WEBPACK_IMPORTED_MODULE_3__.from)(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
function handleReset(reset, on, ...args) {
    if (on === true) {
        reset();
        return null;
    }
    if (on === false) {
        return null;
    }
    return on(...args)
        .pipe((0,_operators_take__WEBPACK_IMPORTED_MODULE_4__.take)(1))
        .subscribe(() => reset());
}


/***/ }),

/***/ 43225:
/*!****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skip": () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 80725);

function skip(count) {
    return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}


/***/ }),

/***/ 92861:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/startWith.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startWith": () => (/* binding */ startWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/concat */ 82453);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 71970);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79151);



function startWith(...values) {
    const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(values);
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
        (scheduler ? (0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.concat)(values, source, scheduler) : (0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.concat)(values, source)).subscribe(subscriber);
    });
}


/***/ }),

/***/ 69138:
/*!***********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribeOn": () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);

function subscribeOn(scheduler, delay = 0) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
    });
}


/***/ }),

/***/ 19898:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/switchMap.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchMap": () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);



function switchMap(project, resultSelector) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        let innerSubscriber = null;
        let index = 0;
        let isComplete = false;
        const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (value) => {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            let innerIndex = 0;
            const outerIndex = index++;
            (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(value, outerIndex)).subscribe((innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (innerValue) => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
                innerSubscriber = null;
                checkComplete();
            })));
        }, () => {
            isComplete = true;
            checkComplete();
        }));
    });
}


/***/ }),

/***/ 43633:
/*!****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/take.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "take": () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 78489);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);



function take(count) {
    return count <= 0
        ?
            () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY
        : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
            let seen = 0;
            source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, (value) => {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}


/***/ }),

/***/ 93010:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 85104);




function takeUntil(notifier) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}


/***/ }),

/***/ 99421:
/*!***************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/tap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tap": () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 88970);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ 62347);




function tap(observerOrNext, error, complete) {
    const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete
        ?
            { next: observerOrNext, error, complete }
        : observerOrNext;
    return tapObserver
        ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
            var _a;
            (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            let isUnsub = true;
            source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, (value) => {
                var _a;
                (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                subscriber.next(value);
            }, () => {
                var _a;
                isUnsub = false;
                (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                subscriber.complete();
            }, (err) => {
                var _a;
                isUnsub = false;
                (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                subscriber.error(err);
            }, () => {
                var _a, _b;
                if (isUnsub) {
                    (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                }
                (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
            }));
        })
        :
            _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}


/***/ }),

/***/ 19923:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withLatestFrom": () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79151);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OperatorSubscriber */ 53868);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/identity */ 62347);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/noop */ 85104);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 71970);






function withLatestFrom(...inputs) {
    const project = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(inputs);
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
        const len = inputs.length;
        const otherValues = new Array(len);
        let hasValue = inputs.map(() => false);
        let ready = false;
        for (let i = 0; i < len; i++) {
            (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(inputs[i]).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, (value) => {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__.identity)) && (hasValue = null);
                }
            }, _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop));
        }
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, (value) => {
            if (ready) {
                const values = [value, ...otherValues];
                subscriber.next(project ? project(...values) : values);
            }
        }));
    });
}


/***/ }),

/***/ 93964:
/*!*************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleArray": () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 94648);

function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
        let i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}


/***/ }),

/***/ 86609:
/*!*********************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleAsyncIterable": () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 99345);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

/***/ }),

/***/ 65738:
/*!****************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleIterable": () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 94648);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ 83681);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 88970);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 99345);




function scheduleIterable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
        let iterator;
        (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
            (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
                let value;
                let done;
                try {
                    ({ value, done } = iterator.next());
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
    });
}


/***/ }),

/***/ 17094:
/*!******************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleObservable": () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 27604);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 69138);



function scheduleObservable(input, scheduler) {
    return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}


/***/ }),

/***/ 30270:
/*!***************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schedulePromise": () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 12060);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 27604);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 69138);



function schedulePromise(input, scheduler) {
    return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}


/***/ }),

/***/ 97455:
/*!**************************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleReadableStreamLike": () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86609);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 33441);


function scheduleReadableStreamLike(input, scheduler) {
    return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}


/***/ }),

/***/ 41120:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduled": () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ 17094);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ 30270);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ 93964);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ 65738);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86609);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ 69735);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ 23435);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 17234);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ 34369);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ 83993);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ 41534);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 33441);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ 97455);













function scheduled(input, scheduler) {
    if (input != null) {
        if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
            return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
        }
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
            return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
        }
        if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
            return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
        }
        if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
            return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
        }
        if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
            return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
        }
        if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
            return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
        }
    }
    throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}


/***/ }),

/***/ 86776:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 1870);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 11239:
/*!***********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 86776);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 51292);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 66289);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, _id, delay = 0) {
        return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(_scheduler, id, delay = 0) {
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, _delay) {
        let errored = false;
        let errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    unsubscribe() {
        if (!this.closed) {
            const { id, scheduler } = this;
            const { actions } = scheduler;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            super.unsubscribe();
        }
    }
}


/***/ }),

/***/ 97443:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 6246);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, now);
        this.actions = [];
        this._active = false;
        this._scheduled = undefined;
    }
    flush(action) {
        const { actions } = this;
        if (this._active) {
            actions.push(action);
            return;
        }
        let error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 38442:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 11239);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 97443);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 72584:
/*!*********************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateTimestampProvider": () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
    now() {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};


/***/ }),

/***/ 51292:
/*!****************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intervalProvider": () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
    setInterval(handler, timeout, ...args) {
        const { delegate } = intervalProvider;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval(handler, timeout, ...args);
        }
        return setInterval(handler, timeout, ...args);
    },
    clearInterval(handle) {
        const { delegate } = intervalProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};


/***/ }),

/***/ 24520:
/*!***************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutProvider": () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
    setTimeout(handler, timeout, ...args) {
        const { delegate } = timeoutProvider;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout(handler, timeout, ...args);
        }
        return setTimeout(handler, timeout, ...args);
    },
    clearTimeout(handle) {
        const { delegate } = timeoutProvider;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};


/***/ }),

/***/ 83681:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSymbolIterator": () => (/* binding */ getSymbolIterator),
/* harmony export */   "iterator": () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
const iterator = getSymbolIterator();


/***/ }),

/***/ 32362:
/*!*******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => (typeof Symbol === 'function' && Symbol.observable) || '@@observable')();


/***/ }),

/***/ 81587:
/*!******************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUnsubscribedError": () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 30436);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)((_super) => function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
});


/***/ }),

/***/ 56469:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 30436);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)((_super) => function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors
        ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}`
        : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
});


/***/ }),

/***/ 71970:
/*!***********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/args.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popNumber": () => (/* binding */ popNumber),
/* harmony export */   "popResultSelector": () => (/* binding */ popResultSelector),
/* harmony export */   "popScheduler": () => (/* binding */ popScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ 36790);


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}


/***/ }),

/***/ 98663:
/*!***************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/argsArgArrayOrObject.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsArgArrayOrObject": () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const { isArray } = Array;
const { getPrototypeOf, prototype: objectProto, keys: getKeys } = Object;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        const first = args[0];
        if (isArray(first)) {
            return { args: first, keys: null };
        }
        if (isPOJO(first)) {
            const keys = getKeys(first);
            return {
                args: keys.map((key) => first[key]),
                keys,
            };
        }
    }
    return { args: args, keys: null };
}
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}


/***/ }),

/***/ 120:
/*!*********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsOrArgArray": () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const { isArray } = Array;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}


/***/ }),

/***/ 66289:
/*!****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrRemove": () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
    if (arr) {
        const index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}


/***/ }),

/***/ 30436:
/*!***********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorClass": () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
    const _super = (instance) => {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    const ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}


/***/ }),

/***/ 19211:
/*!*******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/createObject.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createObject": () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
    return keys.reduce((result, key, i) => ((result[key] = values[i]), result), {});
}


/***/ }),

/***/ 75351:
/*!*******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "captureError": () => (/* binding */ captureError),
/* harmony export */   "errorContext": () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 8986);

let context = null;
function errorContext(cb) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
        const isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            const { errorThrown, error } = context;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}


/***/ }),

/***/ 99345:
/*!**********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeSchedule": () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
    const scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}


/***/ }),

/***/ 62347:
/*!***************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
    return x;
}


/***/ }),

/***/ 17234:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArrayLike": () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = ((x) => x && typeof x.length === 'number' && typeof x !== 'function');


/***/ }),

/***/ 83993:
/*!**********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAsyncIterable": () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 56517:
/*!*************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}


/***/ }),

/***/ 88970:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
    return typeof value === 'function';
}


/***/ }),

/***/ 69735:
/*!**************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInteropObservable": () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 32362);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);


function isInteropObservable(input) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}


/***/ }),

/***/ 34369:
/*!*****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIterable": () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 83681);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);


function isIterable(input) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}


/***/ }),

/***/ 23435:
/*!****************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);

function isPromise(value) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}


/***/ }),

/***/ 33441:
/*!***************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isReadableStreamLike": () => (/* binding */ isReadableStreamLike),
/* harmony export */   "readableStreamLikeToAsyncGenerator": () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 18677);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 88970);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();

    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());

        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }

        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 36790:
/*!******************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isScheduler": () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);

function isScheduler(value) {
    return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}


/***/ }),

/***/ 79151:
/*!***********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLift": () => (/* binding */ hasLift),
/* harmony export */   "operate": () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 88970);

function hasLift(source) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return (source) => {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}


/***/ }),

/***/ 77375:
/*!***********************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/mapOneOrManyArgs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapOneOrManyArgs": () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/map */ 51245);

const { isArray } = Array;
function callOrApply(fn, args) {
    return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__.map)(args => callOrApply(fn, args));
}


/***/ }),

/***/ 85104:
/*!***********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() { }


/***/ }),

/***/ 62094:
/*!***********************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 62347);

function pipe(...fns) {
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}


/***/ }),

/***/ 91757:
/*!***************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reportUnhandledError": () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 8986);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 24520);


function reportUnhandledError(err) {
    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
        const { onUnhandledError } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}


/***/ }),

/***/ 41534:
/*!*****************************************************************************!*\
  !*** ../node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInvalidObservableTypeError": () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
    return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}


/***/ }),

/***/ 18677:
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 99048:
/*!****************************************************************************!*\
  !*** ../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDismissReasons": () => (/* binding */ ModalDismissReasons),
/* harmony export */   "NgbAccordion": () => (/* binding */ NgbAccordion),
/* harmony export */   "NgbAccordionConfig": () => (/* binding */ NgbAccordionConfig),
/* harmony export */   "NgbAccordionModule": () => (/* binding */ NgbAccordionModule),
/* harmony export */   "NgbActiveModal": () => (/* binding */ NgbActiveModal),
/* harmony export */   "NgbAlert": () => (/* binding */ NgbAlert),
/* harmony export */   "NgbAlertConfig": () => (/* binding */ NgbAlertConfig),
/* harmony export */   "NgbAlertModule": () => (/* binding */ NgbAlertModule),
/* harmony export */   "NgbButtonLabel": () => (/* binding */ NgbButtonLabel),
/* harmony export */   "NgbButtonsModule": () => (/* binding */ NgbButtonsModule),
/* harmony export */   "NgbCalendar": () => (/* binding */ NgbCalendar),
/* harmony export */   "NgbCalendarBuddhist": () => (/* binding */ NgbCalendarBuddhist),
/* harmony export */   "NgbCalendarGregorian": () => (/* binding */ NgbCalendarGregorian),
/* harmony export */   "NgbCalendarHebrew": () => (/* binding */ NgbCalendarHebrew),
/* harmony export */   "NgbCalendarIslamicCivil": () => (/* binding */ NgbCalendarIslamicCivil),
/* harmony export */   "NgbCalendarIslamicUmalqura": () => (/* binding */ NgbCalendarIslamicUmalqura),
/* harmony export */   "NgbCalendarPersian": () => (/* binding */ NgbCalendarPersian),
/* harmony export */   "NgbCarousel": () => (/* binding */ NgbCarousel),
/* harmony export */   "NgbCarouselConfig": () => (/* binding */ NgbCarouselConfig),
/* harmony export */   "NgbCarouselModule": () => (/* binding */ NgbCarouselModule),
/* harmony export */   "NgbCheckBox": () => (/* binding */ NgbCheckBox),
/* harmony export */   "NgbCollapse": () => (/* binding */ NgbCollapse),
/* harmony export */   "NgbCollapseConfig": () => (/* binding */ NgbCollapseConfig),
/* harmony export */   "NgbCollapseModule": () => (/* binding */ NgbCollapseModule),
/* harmony export */   "NgbConfig": () => (/* binding */ NgbConfig),
/* harmony export */   "NgbDate": () => (/* binding */ NgbDate),
/* harmony export */   "NgbDateAdapter": () => (/* binding */ NgbDateAdapter),
/* harmony export */   "NgbDateNativeAdapter": () => (/* binding */ NgbDateNativeAdapter),
/* harmony export */   "NgbDateNativeUTCAdapter": () => (/* binding */ NgbDateNativeUTCAdapter),
/* harmony export */   "NgbDateParserFormatter": () => (/* binding */ NgbDateParserFormatter),
/* harmony export */   "NgbDatepicker": () => (/* binding */ NgbDatepicker),
/* harmony export */   "NgbDatepickerConfig": () => (/* binding */ NgbDatepickerConfig),
/* harmony export */   "NgbDatepickerContent": () => (/* binding */ NgbDatepickerContent),
/* harmony export */   "NgbDatepickerI18n": () => (/* binding */ NgbDatepickerI18n),
/* harmony export */   "NgbDatepickerI18nDefault": () => (/* binding */ NgbDatepickerI18nDefault),
/* harmony export */   "NgbDatepickerI18nHebrew": () => (/* binding */ NgbDatepickerI18nHebrew),
/* harmony export */   "NgbDatepickerKeyboardService": () => (/* binding */ NgbDatepickerKeyboardService),
/* harmony export */   "NgbDatepickerModule": () => (/* binding */ NgbDatepickerModule),
/* harmony export */   "NgbDatepickerMonth": () => (/* binding */ NgbDatepickerMonth),
/* harmony export */   "NgbDropdown": () => (/* binding */ NgbDropdown),
/* harmony export */   "NgbDropdownAnchor": () => (/* binding */ NgbDropdownAnchor),
/* harmony export */   "NgbDropdownConfig": () => (/* binding */ NgbDropdownConfig),
/* harmony export */   "NgbDropdownItem": () => (/* binding */ NgbDropdownItem),
/* harmony export */   "NgbDropdownMenu": () => (/* binding */ NgbDropdownMenu),
/* harmony export */   "NgbDropdownModule": () => (/* binding */ NgbDropdownModule),
/* harmony export */   "NgbDropdownToggle": () => (/* binding */ NgbDropdownToggle),
/* harmony export */   "NgbHighlight": () => (/* binding */ NgbHighlight),
/* harmony export */   "NgbInputDatepicker": () => (/* binding */ NgbInputDatepicker),
/* harmony export */   "NgbInputDatepickerConfig": () => (/* binding */ NgbInputDatepickerConfig),
/* harmony export */   "NgbModal": () => (/* binding */ NgbModal),
/* harmony export */   "NgbModalConfig": () => (/* binding */ NgbModalConfig),
/* harmony export */   "NgbModalModule": () => (/* binding */ NgbModalModule),
/* harmony export */   "NgbModalRef": () => (/* binding */ NgbModalRef),
/* harmony export */   "NgbModule": () => (/* binding */ NgbModule),
/* harmony export */   "NgbNav": () => (/* binding */ NgbNav),
/* harmony export */   "NgbNavConfig": () => (/* binding */ NgbNavConfig),
/* harmony export */   "NgbNavContent": () => (/* binding */ NgbNavContent),
/* harmony export */   "NgbNavItem": () => (/* binding */ NgbNavItem),
/* harmony export */   "NgbNavLink": () => (/* binding */ NgbNavLink),
/* harmony export */   "NgbNavModule": () => (/* binding */ NgbNavModule),
/* harmony export */   "NgbNavOutlet": () => (/* binding */ NgbNavOutlet),
/* harmony export */   "NgbNavPane": () => (/* binding */ NgbNavPane),
/* harmony export */   "NgbNavbar": () => (/* binding */ NgbNavbar),
/* harmony export */   "NgbPagination": () => (/* binding */ NgbPagination),
/* harmony export */   "NgbPaginationConfig": () => (/* binding */ NgbPaginationConfig),
/* harmony export */   "NgbPaginationEllipsis": () => (/* binding */ NgbPaginationEllipsis),
/* harmony export */   "NgbPaginationFirst": () => (/* binding */ NgbPaginationFirst),
/* harmony export */   "NgbPaginationLast": () => (/* binding */ NgbPaginationLast),
/* harmony export */   "NgbPaginationModule": () => (/* binding */ NgbPaginationModule),
/* harmony export */   "NgbPaginationNext": () => (/* binding */ NgbPaginationNext),
/* harmony export */   "NgbPaginationNumber": () => (/* binding */ NgbPaginationNumber),
/* harmony export */   "NgbPaginationPages": () => (/* binding */ NgbPaginationPages),
/* harmony export */   "NgbPaginationPrevious": () => (/* binding */ NgbPaginationPrevious),
/* harmony export */   "NgbPanel": () => (/* binding */ NgbPanel),
/* harmony export */   "NgbPanelContent": () => (/* binding */ NgbPanelContent),
/* harmony export */   "NgbPanelHeader": () => (/* binding */ NgbPanelHeader),
/* harmony export */   "NgbPanelTitle": () => (/* binding */ NgbPanelTitle),
/* harmony export */   "NgbPanelToggle": () => (/* binding */ NgbPanelToggle),
/* harmony export */   "NgbPopover": () => (/* binding */ NgbPopover),
/* harmony export */   "NgbPopoverConfig": () => (/* binding */ NgbPopoverConfig),
/* harmony export */   "NgbPopoverModule": () => (/* binding */ NgbPopoverModule),
/* harmony export */   "NgbProgressbar": () => (/* binding */ NgbProgressbar),
/* harmony export */   "NgbProgressbarConfig": () => (/* binding */ NgbProgressbarConfig),
/* harmony export */   "NgbProgressbarModule": () => (/* binding */ NgbProgressbarModule),
/* harmony export */   "NgbRadio": () => (/* binding */ NgbRadio),
/* harmony export */   "NgbRadioGroup": () => (/* binding */ NgbRadioGroup),
/* harmony export */   "NgbRating": () => (/* binding */ NgbRating),
/* harmony export */   "NgbRatingConfig": () => (/* binding */ NgbRatingConfig),
/* harmony export */   "NgbRatingModule": () => (/* binding */ NgbRatingModule),
/* harmony export */   "NgbSlide": () => (/* binding */ NgbSlide),
/* harmony export */   "NgbSlideEventDirection": () => (/* binding */ NgbSlideEventDirection),
/* harmony export */   "NgbSlideEventSource": () => (/* binding */ NgbSlideEventSource),
/* harmony export */   "NgbTimeAdapter": () => (/* binding */ NgbTimeAdapter),
/* harmony export */   "NgbTimepicker": () => (/* binding */ NgbTimepicker),
/* harmony export */   "NgbTimepickerConfig": () => (/* binding */ NgbTimepickerConfig),
/* harmony export */   "NgbTimepickerI18n": () => (/* binding */ NgbTimepickerI18n),
/* harmony export */   "NgbTimepickerModule": () => (/* binding */ NgbTimepickerModule),
/* harmony export */   "NgbToast": () => (/* binding */ NgbToast),
/* harmony export */   "NgbToastConfig": () => (/* binding */ NgbToastConfig),
/* harmony export */   "NgbToastHeader": () => (/* binding */ NgbToastHeader),
/* harmony export */   "NgbToastModule": () => (/* binding */ NgbToastModule),
/* harmony export */   "NgbTooltip": () => (/* binding */ NgbTooltip),
/* harmony export */   "NgbTooltipConfig": () => (/* binding */ NgbTooltipConfig),
/* harmony export */   "NgbTooltipModule": () => (/* binding */ NgbTooltipModule),
/* harmony export */   "NgbTypeahead": () => (/* binding */ NgbTypeahead),
/* harmony export */   "NgbTypeaheadConfig": () => (/* binding */ NgbTypeaheadConfig),
/* harmony export */   "NgbTypeaheadModule": () => (/* binding */ NgbTypeaheadModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 94648);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36344);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8872);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54668);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 56182);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 31662);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 92274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 81442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 47729);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 32464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 43973);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 93010);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80725);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 43633);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 51245);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 92861);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 82207);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 19898);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 99421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 19923);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 69595);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 17961);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 43225);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 27066);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @popperjs/core */ 76898);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @popperjs/core */ 81493);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @popperjs/core */ 33807);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @popperjs/core */ 73982);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @popperjs/core */ 48685);










function NgbAccordion_ng_template_0_ng_template_2_Template(rf, ctx) {}

function NgbAccordion_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPanelToggle", panel_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", panel_r3.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", panel_r3.titleTpl == null ? null : panel_r3.titleTpl.templateRef);
  }
}

function NgbAccordion_ng_template_2_ng_template_2_Template(rf, ctx) {}

function NgbAccordion_ng_template_2_div_3_ng_template_2_Template(rf, ctx) {}

function NgbAccordion_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbRef", function NgbAccordion_ng_template_2_div_3_Template_div_ngbRef_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const panel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return panel_r5.panelDiv = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_div_3_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const panel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", panel_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", panel_r5.id + "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (panel_r5.contentTpl == null ? null : panel_r5.contentTpl.templateRef) || null);
  }
}

const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    opened: a1
  };
};

function NgbAccordion_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbAccordion_ng_template_2_div_3_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const panel_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("accordion-item " + (panel_r5.cardClass || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("accordion-header " + (panel_r5.type ? "bg-" + panel_r5.type : ctx_r2.type ? "bg-" + ctx_r2.type : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", panel_r5.id, "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (panel_r5.headerTpl == null ? null : panel_r5.headerTpl.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, panel_r5, panel_r5.isOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.destroyOnHide || panel_r5.isOpen || panel_r5.transitionRunning);
  }
}

function NgbAlert_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbAlert_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r1.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c3 = ["*"];

function NgbCarousel_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbCarousel_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const slide_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r5.focus();
      return ctx_r5.select(slide_r4.id, ctx_r5.NgbSlideEventSource.INDICATOR);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.id === ctx_r0.activeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "slide-" + slide_r4.id)("aria-controls", "slide-" + slide_r4.id)("aria-selected", slide_r4.id === ctx_r0.activeId);
  }
}

function NgbCarousel_div_3_ng_template_3_Template(rf, ctx) {}

function NgbCarousel_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbCarousel_div_3_ng_template_3_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const c_r9 = ctx.count;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "slide-" + slide_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](i_r8 + 1)(c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", slide_r7.tplRef);
  }
}

function NgbCarousel_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbCarousel_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.arrowLeft();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function NgbCarousel_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbCarousel_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.arrowRight();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

const _c10 = ["ngbDatepickerDayView", ""];
const _c11 = ["month"];
const _c12 = ["year"];

function NgbDatepickerNavigationSelect_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.i18n.getMonthFullName(m_r4, ctx_r1.date == null ? null : ctx_r1.date.year));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.i18n.getMonthShortName(m_r4, ctx_r1.date == null ? null : ctx_r1.date.year));
  }
}

function NgbDatepickerNavigationSelect_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const y_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.i18n.getYearNumerals(y_r5));
  }
}

function NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-datepicker-navigation-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template_ngb_datepicker_navigation_select_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r2.select.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r0.date)("disabled", ctx_r0.disabled)("months", ctx_r0.selectBoxes.months)("years", ctx_r0.selectBoxes.years);
  }
}

function NgbDatepickerNavigation_4_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
  }
}

function NgbDatepickerNavigation_4_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
  }
}

function NgbDatepickerNavigation_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerNavigation_4_ng_template_0_div_0_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbDatepickerNavigation_4_ng_template_0_div_3_Template, 1, 0, "div", 9);
  }

  if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.i18n.getMonthLabel(month_r5.firstDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 !== ctx_r4.months.length - 1);
  }
}

function NgbDatepickerNavigation_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerNavigation_4_ng_template_0_Template, 4, 3, "ng-template", 8);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.months);
  }
}

const _c29 = ["defaultDayTemplate"];
const _c30 = ["content"];

function NgbDatepicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
  }

  if (rf & 2) {
    const date_r8 = ctx.date;
    const currentMonth_r9 = ctx.currentMonth;
    const selected_r10 = ctx.selected;
    const disabled_r11 = ctx.disabled;
    const focused_r12 = ctx.focused;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", date_r8)("currentMonth", currentMonth_r9)("selected", selected_r10)("disabled", disabled_r11)("focused", focused_r12);
  }
}

function NgbDatepicker_ng_template_2_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const month_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.i18n.getMonthLabel(month_r14.firstDate), " ");
  }
}

function NgbDatepicker_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepicker_ng_template_2_div_0_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-datepicker-month", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const month_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.navigation === "none" || ctx_r13.displayMonths > 1 && ctx_r13.navigation === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("month", month_r14.firstDate);
  }
}

function NgbDatepicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepicker_ng_template_2_div_0_Template, 3, 2, "div", 8);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.model.months);
  }
}

function NgbDatepicker_ngb_datepicker_navigation_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-datepicker-navigation", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("navigate", function NgbDatepicker_ngb_datepicker_navigation_5_Template_ngb_datepicker_navigation_navigate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.onNavigateEvent($event);
    })("select", function NgbDatepicker_ngb_datepicker_navigation_5_Template_ngb_datepicker_navigation_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r20.onNavigateDateSelect($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r4.model.firstDate)("months", ctx_r4.model.months)("disabled", ctx_r4.model.disabled)("showSelect", ctx_r4.model.navigation === "select")("prevDisabled", ctx_r4.model.prevDisabled)("nextDisabled", ctx_r4.model.nextDisabled)("selectBoxes", ctx_r4.model.selectBoxes);
  }
}

function NgbDatepicker_ng_template_8_Template(rf, ctx) {}

function NgbDatepicker_ng_template_9_Template(rf, ctx) {}

function NgbDatepickerMonth_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.i18n.getWeekLabel());
  }
}

function NgbDatepickerMonth_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const weekday_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekday_r4);
  }
}

function NgbDatepickerMonth_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_div_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbDatepickerMonth_div_0_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datepicker.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.viewModel.weekdays);
  }
}

function NgbDatepickerMonth_ng_template_1_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const week_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.i18n.getWeekNumerals(week_r5.number));
  }
}

function NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template(rf, ctx) {}

function NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    const day_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.datepicker.dayTemplate)("ngTemplateOutletContext", day_r10.context);
  }
}

function NgbDatepickerMonth_ng_template_1_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDatepickerMonth_ng_template_1_div_0_div_2_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const day_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      ctx_r14.doSelect(day_r10);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_Template, 1, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", day_r10.context.disabled)("hidden", day_r10.hidden)("ngb-dp-today", day_r10.context.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", day_r10.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", day_r10.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !day_r10.hidden);
  }
}

function NgbDatepickerMonth_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_ng_template_1_div_0_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbDatepickerMonth_ng_template_1_div_0_div_2_Template, 2, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const week_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.datepicker.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r5.days);
  }
}

function NgbDatepickerMonth_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerMonth_ng_template_1_div_0_Template, 3, 2, "div", 7);
  }

  if (rf & 2) {
    const week_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !week_r5.collapsed);
  }
}

const _c31 = ["dialog"];
const _c32 = ["ngbNavOutlet", ""];

function NgbNavOutlet_ng_template_0_div_0_ng_template_1_Template(rf, ctx) {}

const _c33 = function (a0) {
  return {
    $implicit: a0
  };
};

function NgbNavOutlet_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbNavOutlet_ng_template_0_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1)("nav", ctx_r2.nav)("role", ctx_r2.paneRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c33, item_r1.active || ctx_r2.isPanelTransitioning(item_r1)));
  }
}

function NgbNavOutlet_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbNavOutlet_ng_template_0_div_0_Template, 2, 7, "div", 1);
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isPanelInDom() || ctx_r0.isPanelTransitioning(item_r1));
  }
}

function NgbPagination_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "...");
  }
}

function NgbPagination_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_10_span_1_Template, 2, 0, "span", 14);
  }

  if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const currentPage_r20 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r19, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r19 === currentPage_r20);
  }
}

function NgbPagination_ng_template_12_li_0_a_1_ng_template_1_Template(rf, ctx) {}

const _c42 = function (a1) {
  return {
    disabled: true,
    currentPage: a1
  };
};

function NgbPagination_ng_template_12_li_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_12_li_0_a_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c42, page_r22));
  }
}

function NgbPagination_ng_template_12_li_0_a_2_ng_template_1_Template(rf, ctx) {}

const _c43 = function (a0, a1, a2) {
  return {
    disabled: a0,
    $implicit: a1,
    currentPage: a2
  };
};

function NgbPagination_ng_template_12_li_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_ng_template_12_li_0_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      ctx_r32.selectPage(pageNumber_r26);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_12_li_0_a_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const disabled_r24 = ctx_r35.disabled;
    const page_r22 = ctx_r35.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", disabled_r24 ? "-1" : null)("aria-disabled", disabled_r24 ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c43, disabled_r24, pageNumber_r26, page_r22));
  }
}

function NgbPagination_ng_template_12_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPagination_ng_template_12_li_0_a_1_Template, 2, 4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_ng_template_12_li_0_a_2_Template, 2, 8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pageNumber_r26 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const page_r22 = ctx_r37.$implicit;
    const disabled_r24 = ctx_r37.disabled;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === page_r22)("disabled", ctx_r25.isEllipsis(pageNumber_r26) || disabled_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", pageNumber_r26 === page_r22 ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.isEllipsis(pageNumber_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r25.isEllipsis(pageNumber_r26));
  }
}

function NgbPagination_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbPagination_ng_template_12_li_0_Template, 3, 7, "li", 16);
  }

  if (rf & 2) {
    const pages_r23 = ctx.pages;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pages_r23);
  }
}

function NgbPagination_li_15_ng_template_2_Template(rf, ctx) {}

const _c46 = function (a0, a1) {
  return {
    disabled: a0,
    currentPage: a1
  };
};

function NgbPagination_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_15_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r39.selectPage(1);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_15_ng_template_2_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r14.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r14.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r14.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r14.tplFirst == null ? null : ctx_r14.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c46, ctx_r14.previousDisabled(), ctx_r14.page));
  }
}

function NgbPagination_li_16_ng_template_2_Template(rf, ctx) {}

const _c49 = function (a0) {
  return {
    disabled: a0
  };
};

function NgbPagination_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_16_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r42.selectPage(ctx_r42.page - 1);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_16_ng_template_2_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r15.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r15.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r15.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r15.tplPrevious == null ? null : ctx_r15.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c49, ctx_r15.previousDisabled()));
  }
}

function NgbPagination_ng_template_17_Template(rf, ctx) {}

function NgbPagination_li_18_ng_template_2_Template(rf, ctx) {}

function NgbPagination_li_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_18_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r45.selectPage(ctx_r45.page + 1);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_18_ng_template_2_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r17.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r17.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r17.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r17.tplNext == null ? null : ctx_r17.tplNext.templateRef) || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c46, ctx_r17.nextDisabled(), ctx_r17.page));
  }
}

function NgbPagination_li_19_ng_template_2_Template(rf, ctx) {}

function NgbPagination_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPagination_li_19_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r48.selectPage(ctx_r48.pageCount);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_li_19_ng_template_2_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r18.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r18.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r18.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r18.tplLast == null ? null : ctx_r18.tplLast.templateRef) || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c46, ctx_r18.nextDisabled(), ctx_r18.page));
  }
}

const _c54 = function (a0, a1, a2) {
  return {
    $implicit: a0,
    pages: a1,
    disabled: a2
  };
};

function NgbPopoverWindow_h3_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.title);
  }
}

function NgbPopoverWindow_h3_1_ng_template_3_Template(rf, ctx) {}

function NgbPopoverWindow_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPopoverWindow_h3_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbPopoverWindow_h3_1_ng_template_3_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : _r1)("ngTemplateOutletContext", ctx_r0.context);
  }
}

function NgbProgressbar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.getValue() / ctx_r0.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
  }
}

function NgbRating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const fill_r3 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fill_r3 === 100 ? "\u2605" : "\u2606");
  }
}

function NgbRating_ng_template_2_ng_template_3_Template(rf, ctx) {}

function NgbRating_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NgbRating_ng_template_2_Template_span_mouseenter_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const index_r4 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.enter(index_r4 + 1);
    })("click", function NgbRating_ng_template_2_Template_span_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const index_r4 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.handleClick(index_r4 + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbRating_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const index_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", index_r4 < ctx_r2.nextRate ? "*" : " ", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx_r2.isInteractive() ? "pointer" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.starTemplate || ctx_r2.starTemplateFromContent || _r0)("ngTemplateOutletContext", ctx_r2.contexts[index_r4]);
  }
}

function NgbTimepicker_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.changeHour(ctx_r8.hourStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r0.isSmallSize)("btn-lg", ctx_r0.isLargeSize)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled);
  }
}

function NgbTimepicker_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10.changeHour(-ctx_r10.hourStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}

function NgbTimepicker_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.changeMinute(ctx_r12.minuteStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r2.isSmallSize)("btn-lg", ctx_r2.isLargeSize)("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.disabled);
  }
}

function NgbTimepicker_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.changeMinute(-ctx_r14.minuteStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r3.isSmallSize)("btn-lg", ctx_r3.isLargeSize)("disabled", ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.disabled);
  }
}

function NgbTimepicker_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgbTimepicker_div_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_div_13_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r18.changeSecond(ctx_r18.secondStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r16.isSmallSize)("btn-lg", ctx_r16.isLargeSize)("disabled", ctx_r16.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.disabled);
  }
}

function NgbTimepicker_div_13_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_div_13_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r20.changeSecond(-ctx_r20.secondStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r17.isSmallSize)("btn-lg", ctx_r17.isLargeSize)("disabled", ctx_r17.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r17.disabled);
  }
}

function NgbTimepicker_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbTimepicker_div_13_button_1_Template, 4, 7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbTimepicker_div_13_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r22.updateSecond($event.target.value);
    })("blur", function NgbTimepicker_div_13_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r24.handleBlur();
    })("input", function NgbTimepicker_div_13_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r25.formatInput($event.target);
    })("keydown.ArrowUp", function NgbTimepicker_div_13_Template_input_keydown_ArrowUp_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r26.changeSecond(ctx_r26.secondStep);
      return $event.preventDefault();
    })("keydown.ArrowDown", function NgbTimepicker_div_13_Template_input_keydown_ArrowDown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r27.changeSecond(-ctx_r27.secondStep);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbTimepicker_div_13_button_3_Template, 4, 7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.spinners);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r5.isSmallSize)("form-control-lg", ctx_r5.isLargeSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.formatMinSec(ctx_r5.model == null ? null : ctx_r5.model.second))("readOnly", ctx_r5.readonlyInputs)("disabled", ctx_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.spinners);
  }
}

function NgbTimepicker_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
  }
}

function NgbTimepicker_div_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r28.i18n.getAfternoonPeriod());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
  }
}

function NgbTimepicker_div_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 28);
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r30.i18n.getMorningPeriod());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](0);
  }
}

function NgbTimepicker_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbTimepicker_div_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r31.toggleMeridian();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbTimepicker_div_15_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbTimepicker_div_15_ng_template_3_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r7.isSmallSize)("btn-lg", ctx_r7.isLargeSize)("disabled", ctx_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.model && ctx_r7.model.hour >= 12)("ngIfElse", _r29);
  }
}

function NgbToast_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
  }
}

function NgbToast_ng_template_2_ng_template_1_Template(rf, ctx) {}

function NgbToast_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbToast_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbToast_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.contentHeaderTpl || _r0);
  }
}

function NgbHighlight_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const part_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.highlightClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r1);
  }
}

function NgbHighlight_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const part_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r1);
  }
}

function NgbHighlight_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbHighlight_ng_template_0_span_0_Template, 2, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbHighlight_ng_template_0_ng_template_1_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const isOdd_r2 = ctx.odd;

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isOdd_r2)("ngIfElse", _r4);
  }
}

function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngb-highlight", 2);
  }

  if (rf & 2) {
    const result_r3 = ctx.result;
    const term_r4 = ctx.term;
    const formatter_r5 = ctx.formatter;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", formatter_r5(result_r3))("term", term_r4);
  }
}

function NgbTypeaheadWindow_ng_template_2_ng_template_1_Template(rf, ctx) {}

const _c87 = function (a0, a1, a2) {
  return {
    result: a0,
    term: a1,
    formatter: a2
  };
};

function NgbTypeaheadWindow_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NgbTypeaheadWindow_ng_template_2_Template_button_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const idx_r7 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.markActive(idx_r7);
    })("click", function NgbTypeaheadWindow_ng_template_2_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const result_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.select(result_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbTypeaheadWindow_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const result_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", idx_r7 === ctx_r2.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id + "-" + idx_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.resultTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c87, result_r6, ctx_r2.term, ctx_r2.formatter));
  }
}

function toInteger(value) {
  return parseInt(`${value}`, 10);
}

function toString(value) {
  return value !== undefined && value !== null ? `${value}` : '';
}

function getValueInRange(value, max, min = 0) {
  return Math.max(Math.min(value, max), min);
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return !isNaN(toInteger(value));
}

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isPromise(v) {
  return v && v.then;
}

function padNumber(value) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}

function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function hasClassName(element, className) {
  return element && element.className && element.className.split && element.className.split(/\s+/).indexOf(className) >= 0;
}

function closest(element, selector) {
  if (!selector) {
    return null;
  }
  /*
   * In certain browsers (e.g. Edge 44.18362.449.0) HTMLDocument does
   * not support `Element.prototype.closest`. To emulate the correct behaviour
   * we return null when the method is missing.
   *
   * Note that in evergreen browsers `closest(document.documentElement, 'html')`
   * will return the document element whilst in Edge null will be returned. This
   * compromise was deemed good enough.
   */


  if (typeof element.closest === 'undefined') {
    return null;
  }

  return element.closest(selector);
}
/**
 * Force a browser reflow
 * @param element element where to apply the reflow
 */


function reflow(element) {
  return (element || document.body).getBoundingClientRect();
}
/**
 * Creates an observable where all callbacks are executed inside a given zone
 *
 * @param zone
 */


function runInZone(zone) {
  return source => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      const next = value => zone.run(() => observer.next(value));

      const error = e => zone.run(() => observer.error(e));

      const complete = () => zone.run(() => observer.complete());

      return source.subscribe({
        next,
        error,
        complete
      });
    });
  };
}

function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getTransitionDurationMs(element) {
  const {
    transitionDelay,
    transitionDuration
  } = window.getComputedStyle(element);
  const transitionDelaySec = parseFloat(transitionDelay);
  const transitionDurationSec = parseFloat(transitionDuration);
  return (transitionDelaySec + transitionDurationSec) * 1000;
}

const environment = {
  animation: true,
  transitionTimerDelayMs: 5
};

const noopFn = () => {};

const {
  transitionTimerDelayMs
} = environment;
const runningTransitions = new Map();

const ngbRunTransition = (zone, element, startFn, options) => {
  // Getting initial context from options
  let context = options.context || {}; // Checking if there are already running transitions on the given element.

  const running = runningTransitions.get(element);

  if (running) {
    switch (options.runningTransition) {
      // If there is one running and we want for it to 'continue' to run, we have to cancel the new one.
      // We're not emitting any values, but simply completing the observable (EMPTY).
      case 'continue':
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
      // If there is one running and we want for it to 'stop', we have to complete the running one.
      // We're simply completing the running one and not emitting any values and merging newly provided context
      // with the one coming from currently running transition.

      case 'stop':
        zone.run(() => running.transition$.complete());
        context = Object.assign(running.context, context);
        runningTransitions.delete(element);
    }
  } // Running the start function


  const endFn = startFn(element, options.animation, context) || noopFn; // If 'prefer-reduced-motion' is enabled, the 'transition' will be set to 'none'.
  // If animations are disabled, we have to emit a value and complete the observable
  // In this case we have to call the end function, but can finish immediately by emitting a value,
  // completing the observable and executing end functions synchronously.

  if (!options.animation || window.getComputedStyle(element).transitionProperty === 'none') {
    zone.run(() => endFn());
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined).pipe(runInZone(zone));
  } // Starting a new transition


  const transition$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  const finishTransition$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  const stop$ = transition$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.endWith)(true));
  runningTransitions.set(element, {
    transition$,
    complete: () => {
      finishTransition$.next();
      finishTransition$.complete();
    },
    context
  });
  const transitionDurationMs = getTransitionDurationMs(element); // 1. We have to both listen for the 'transitionend' event and have a 'just-in-case' timer,
  // because 'transitionend' event might not be fired in some browsers, if the transitioning
  // element becomes invisible (ex. when scrolling, making browser tab inactive, etc.). The timer
  // guarantees, that we'll release the DOM element and complete 'ngbRunTransition'.
  // 2. We need to filter transition end events, because they might bubble from shorter transitions
  // on inner DOM elements. We're only interested in the transition on the 'element' itself.

  zone.runOutsideAngular(() => {
    const transitionEnd$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(({
      target
    }) => target === element));
    const timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(transitionDurationMs + transitionTimerDelayMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stop$));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.race)(timer$, transitionEnd$, finishTransition$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stop$)).subscribe(() => {
      runningTransitions.delete(element);
      zone.run(() => {
        endFn();
        transition$.next();
        transition$.complete();
      });
    });
  });
  return transition$.asObservable();
};

const ngbCompleteTransition = element => {
  var _a;

  (_a = runningTransitions.get(element)) === null || _a === void 0 ? void 0 : _a.complete();
};

function measureCollapsingElementHeightPx(element) {
  // SSR fix for without injecting the PlatformId
  if (typeof navigator === 'undefined') {
    return '0px';
  }

  const {
    classList
  } = element;
  const hasShownClass = classList.contains('show');

  if (!hasShownClass) {
    classList.add('show');
  }

  element.style.height = '';
  const height = element.getBoundingClientRect().height + 'px';

  if (!hasShownClass) {
    classList.remove('show');
  }

  return height;
}

const ngbCollapsingTransition = (element, animation, context) => {
  let {
    direction,
    maxHeight
  } = context;
  const {
    classList
  } = element;

  function setInitialClasses() {
    classList.add('collapse');

    if (direction === 'show') {
      classList.add('show');
    } else {
      classList.remove('show');
    }
  } // without animations we just need to set initial classes


  if (!animation) {
    setInitialClasses();
    return;
  } // No maxHeight -> running the transition for the first time


  if (!maxHeight) {
    maxHeight = measureCollapsingElementHeightPx(element);
    context.maxHeight = maxHeight; // Fix the height before starting the animation

    element.style.height = direction !== 'show' ? maxHeight : '0px';
    classList.remove('collapse');
    classList.remove('collapsing');
    classList.remove('show');
    reflow(element); // Start the animation

    classList.add('collapsing');
  } // Start or revert the animation


  element.style.height = direction === 'show' ? maxHeight : '0px';
  return () => {
    setInitialClasses();
    classList.remove('collapsing');
    element.style.height = '';
  };
};
/**
 * Global ng-bootstrap config
 *
 * @since 8.0.0
 */


class NgbConfig {
  constructor() {
    this.animation = environment.animation;
  }

}

NgbConfig.ɵfac = function NgbConfig_Factory(t) {
  return new (t || NgbConfig)();
};

NgbConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbConfig,
  factory: NgbConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */


class NgbAccordionConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.closeOthers = false;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbAccordionConfig.ɵfac = function NgbAccordionConfig_Factory(t) {
  return new (t || NgbAccordionConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbAccordionConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbAccordionConfig,
  factory: NgbAccordionConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAccordionConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

let nextId$4 = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */

class NgbPanelHeader {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPanelHeader.ɵfac = function NgbPanelHeader_Factory(t) {
  return new (t || NgbPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPanelHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelHeader,
  selectors: [["ng-template", "ngbPanelHeader", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPanelHeader]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */


class NgbPanelTitle {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPanelTitle.ɵfac = function NgbPanelTitle_Factory(t) {
  return new (t || NgbPanelTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPanelTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelTitle,
  selectors: [["ng-template", "ngbPanelTitle", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPanelTitle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive that wraps the accordion panel content.
 */


class NgbPanelContent {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPanelContent.ɵfac = function NgbPanelContent_Factory(t) {
  return new (t || NgbPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPanelContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelContent,
  selectors: [["ng-template", "ngbPanelContent", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPanelContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */


class NgbPanel {
  constructor() {
    /**
     *  If `true`, the panel is disabled an can't be toggled.
     */
    this.disabled = false;
    /**
     *  An optional id for the panel that must be unique on the page.
     *
     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
     */

    this.id = `ngb-panel-${nextId$4++}`;
    this.isOpen = false;
    /* A flag to specified that the transition panel classes have been initialized */

    this.initClassDone = false;
    /* A flag to specified if the panel is currently being animated, to ensure its presence in the dom */

    this.transitionRunning = false;
    /**
     * An event emitted when the panel is shown, after the transition. It has no payload.
     *
     * @since 8.0.0
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the panel is hidden, after the transition. It has no payload.
     *
     * @since 8.0.0
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.titleTpl = this.titleTpls.first;
    this.headerTpl = this.headerTpls.first;
    this.contentTpl = this.contentTpls.first;
  }

}

NgbPanel.ɵfac = function NgbPanel_Factory(t) {
  return new (t || NgbPanel)();
};

NgbPanel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanel,
  selectors: [["ngb-panel"]],
  contentQueries: function NgbPanel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanelTitle, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanelHeader, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanelContent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTpls = _t);
    }
  },
  inputs: {
    disabled: "disabled",
    id: "id",
    title: "title",
    type: "type",
    cardClass: "cardClass"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngb-panel'
    }]
  }], null, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cardClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    titleTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanelTitle, {
        descendants: false
      }]
    }],
    headerTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanelHeader, {
        descendants: false
      }]
    }],
    contentTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanelContent, {
        descendants: false
      }]
    }]
  });
})();

class NgbRefDirective {
  constructor(_El) {
    this._El = _El;
    this.ngbRef = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngOnInit() {
    this.ngbRef.emit(this._El.nativeElement);
  }

  ngOnDestroy() {
    this.ngbRef.emit(null);
  }

}

NgbRefDirective.ɵfac = function NgbRefDirective_Factory(t) {
  return new (t || NgbRefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbRefDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbRefDirective,
  selectors: [["", "ngbRef", ""]],
  outputs: {
    ngbRef: "ngbRef"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRefDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbRef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    ngbRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */


class NgbAccordion {
  constructor(config, _ngZone, _changeDetector) {
    this._ngZone = _ngZone;
    this._changeDetector = _changeDetector;
    /**
     * An array or comma separated strings of panel ids that should be opened **initially**.
     *
     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
     * the `(panelChange)` event.
     */

    this.activeIds = [];
    /**
     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
     */

    this.destroyOnHide = true;
    /**
     * Event emitted right before the panel toggle happens.
     *
     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
     */

    this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the expanding animation is finished on the panel. The payload is the panel id.
     *
     * @since 8.0.0
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the collapsing animation is finished on the panel, and before the panel element is removed.
     * The payload is the panel id.
     *
     * @since 8.0.0
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.animation = config.animation;
    this.type = config.type;
    this.closeOtherPanels = config.closeOthers;
  }
  /**
   * Checks if a panel with a given id is expanded.
   */


  isExpanded(panelId) {
    return this.activeIds.indexOf(panelId) > -1;
  }
  /**
   * Expands a panel with a given id.
   *
   * Has no effect if the panel is already expanded or disabled.
   */


  expand(panelId) {
    this._changeOpenState(this._findPanelById(panelId), true);
  }
  /**
   * Expands all panels, if `[closeOthers]` is `false`.
   *
   * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
   */


  expandAll() {
    if (this.closeOtherPanels) {
      if (this.activeIds.length === 0 && this.panels.length) {
        this._changeOpenState(this.panels.first, true);
      }
    } else {
      this.panels.forEach(panel => this._changeOpenState(panel, true));
    }
  }
  /**
   * Collapses a panel with the given id.
   *
   * Has no effect if the panel is already collapsed or disabled.
   */


  collapse(panelId) {
    this._changeOpenState(this._findPanelById(panelId), false);
  }
  /**
   * Collapses all opened panels.
   */


  collapseAll() {
    this.panels.forEach(panel => {
      this._changeOpenState(panel, false);
    });
  }
  /**
   * Toggles a panel with the given id.
   *
   * Has no effect if the panel is disabled.
   */


  toggle(panelId) {
    const panel = this._findPanelById(panelId);

    if (panel) {
      this._changeOpenState(panel, !panel.isOpen);
    }
  }

  ngAfterContentChecked() {
    // active id updates
    if (isString(this.activeIds)) {
      this.activeIds = this.activeIds.split(/\s*,\s*/);
    } // update panels open states


    this.panels.forEach(panel => {
      panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1;
    }); // closeOthers updates

    if (this.activeIds.length > 1 && this.closeOtherPanels) {
      this._closeOthers(this.activeIds[0], false);

      this._updateActiveIds();
    } // Setup the initial classes here


    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this.panels.forEach(panel => {
        const panelElement = panel.panelDiv;

        if (panelElement) {
          if (!panel.initClassDone) {
            panel.initClassDone = true;
            ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
              animation: false,
              runningTransition: 'continue',
              context: {
                direction: panel.isOpen ? 'show' : 'hide'
              }
            });
          }
        } else {
          // Classes must be initialized next time it will be in the dom
          panel.initClassDone = false;
        }
      });
    });
  }

  _changeOpenState(panel, nextState) {
    if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
      let defaultPrevented = false;
      this.panelChange.emit({
        panelId: panel.id,
        nextState: nextState,
        preventDefault: () => {
          defaultPrevented = true;
        }
      });

      if (!defaultPrevented) {
        panel.isOpen = nextState;
        panel.transitionRunning = true;

        if (nextState && this.closeOtherPanels) {
          this._closeOthers(panel.id);
        }

        this._updateActiveIds();

        this._runTransitions(this.animation);
      }
    }
  }

  _closeOthers(panelId, enableTransition = true) {
    this.panels.forEach(panel => {
      if (panel.id !== panelId && panel.isOpen) {
        panel.isOpen = false;
        panel.transitionRunning = enableTransition;
      }
    });
  }

  _findPanelById(panelId) {
    return this.panels.find(p => p.id === panelId) || null;
  }

  _updateActiveIds() {
    this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
  }

  _runTransitions(animation) {
    // detectChanges is performed to ensure that all panels are in the dom (via transitionRunning = true)
    // before starting the animation
    this._changeDetector.detectChanges();

    this.panels.forEach(panel => {
      // When panel.transitionRunning is true, the transition needs to be started OR reversed,
      // The direction (show or hide) is choosen by each panel.isOpen state
      if (panel.transitionRunning) {
        const panelElement = panel.panelDiv;
        ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
          animation,
          runningTransition: 'stop',
          context: {
            direction: panel.isOpen ? 'show' : 'hide'
          }
        }).subscribe(() => {
          panel.transitionRunning = false;
          const {
            id
          } = panel;

          if (panel.isOpen) {
            panel.shown.emit();
            this.shown.emit(id);
          } else {
            panel.hidden.emit();
            this.hidden.emit(id);
          }
        });
      }
    });
  }

}

NgbAccordion.ɵfac = function NgbAccordion_Factory(t) {
  return new (t || NgbAccordion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbAccordionConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NgbAccordion.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbAccordion,
  selectors: [["ngb-accordion"]],
  contentQueries: function NgbAccordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPanel, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panels = _t);
    }
  },
  hostAttrs: ["role", "tablist", 1, "accordion"],
  hostVars: 1,
  hostBindings: function NgbAccordion_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", !ctx.closeOtherPanels);
    }
  },
  inputs: {
    animation: "animation",
    activeIds: "activeIds",
    closeOtherPanels: ["closeOthers", "closeOtherPanels"],
    destroyOnHide: "destroyOnHide",
    type: "type"
  },
  outputs: {
    panelChange: "panelChange",
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbAccordion"],
  decls: 3,
  vars: 1,
  consts: [["ngbPanelHeader", ""], ["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "accordion-button", 3, "ngbPanelToggle"], [3, "ngTemplateOutlet"], ["role", "tab", 3, "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tabpanel", 3, "id", "ngbRef", 4, "ngIf"], ["role", "tabpanel", 3, "id", "ngbRef"], [1, "accordion-body"]],
  template: function NgbAccordion_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbAccordion_ng_template_0_Template, 3, 3, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_Template, 4, 11, "ng-template", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    }
  },
  directives: function () {
    return [NgbPanelHeader, NgbPanelToggle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, NgbRefDirective];
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-accordion',
      exportAs: 'ngbAccordion',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'accordion',
        'role': 'tablist',
        '[attr.aria-multiselectable]': '!closeOtherPanels'
      },
      template: `
    <ng-template #t ngbPanelHeader let-panel>
      <button class="accordion-button" [ngbPanelToggle]="panel">
        {{panel.title}}<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
      </button>
    </ng-template>
    <ng-template ngFor let-panel [ngForOf]="panels">
      <div [class]="'accordion-item ' + (panel.cardClass || '')">
        <div role="tab" id="{{panel.id}}-header" [class]="'accordion-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')">
          <ng-template [ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
                       [ngTemplateOutletContext]="{$implicit: panel, opened: panel.isOpen}"></ng-template>
        </div>
        <div id="{{panel.id}}" (ngbRef)="panel.panelDiv = $event" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'"
             *ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning">
          <div class="accordion-body">
            <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
          </div>
        </div>
      </div>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: NgbAccordionConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    panels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbPanel]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeOtherPanels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['closeOthers']
    }],
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */


class NgbPanelToggle {
  constructor(accordion, panel) {
    this.accordion = accordion;
    this.panel = panel;
  }

  set ngbPanelToggle(panel) {
    if (panel) {
      this.panel = panel;
    }
  }

}

NgbPanelToggle.ɵfac = function NgbPanelToggle_Factory(t) {
  return new (t || NgbPanelToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbAccordion), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbPanel, 9));
};

NgbPanelToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPanelToggle,
  selectors: [["button", "ngbPanelToggle", ""]],
  hostAttrs: ["type", "button"],
  hostVars: 5,
  hostBindings: function NgbPanelToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbPanelToggle_click_HostBindingHandler() {
        return ctx.accordion.toggle(ctx.panel.id);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.panel.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.panel.isOpen)("aria-controls", ctx.panel.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", !ctx.panel.isOpen);
    }
  },
  inputs: {
    ngbPanelToggle: "ngbPanelToggle"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPanelToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[ngbPanelToggle]',
      host: {
        'type': 'button',
        '[disabled]': 'panel.disabled',
        '[class.collapsed]': '!panel.isOpen',
        '[attr.aria-expanded]': 'panel.isOpen',
        '[attr.aria-controls]': 'panel.id',
        '(click)': 'accordion.toggle(panel.id)'
      }
    }]
  }], function () {
    return [{
      type: NgbAccordion
    }, {
      type: NgbPanel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, {
    ngbPanelToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];

class NgbAccordionModule {}

NgbAccordionModule.ɵfac = function NgbAccordionModule_Factory(t) {
  return new (t || NgbAccordionModule)();
};

NgbAccordionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbAccordionModule,
  declarations: [NgbRefDirective, NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle]
});
NgbAccordionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbRefDirective, ...NGB_ACCORDION_DIRECTIVES],
      exports: NGB_ACCORDION_DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();

const ngbAlertFadingTransition = ({
  classList
}) => {
  classList.remove('show');
};
/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */


class NgbAlertConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.dismissible = true;
    this.type = 'warning';
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbAlertConfig.ɵfac = function NgbAlertConfig_Factory(t) {
  return new (t || NgbAlertConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbAlertConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbAlertConfig,
  factory: NgbAlertConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAlertConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */


class NgbAlert {
  constructor(config, _renderer, _element, _zone) {
    this._renderer = _renderer;
    this._element = _element;
    this._zone = _zone;
    /**
     * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
     *
     * @since 8.0.0
     */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dismissible = config.dismissible;
    this.type = config.type;
    this.animation = config.animation;
  }
  /**
   * Triggers alert closing programmatically (same as clicking on the close button (×)).
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(closed)` output
   *
   * @since 8.0.0
   */


  close() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbAlertFadingTransition, {
      animation: this.animation,
      runningTransition: 'continue'
    });
    transition.subscribe(() => this.closed.emit());
    return transition;
  }

  ngOnChanges(changes) {
    const typeChange = changes['type'];

    if (typeChange && !typeChange.firstChange) {
      this._renderer.removeClass(this._element.nativeElement, `alert-${typeChange.previousValue}`);

      this._renderer.addClass(this._element.nativeElement, `alert-${typeChange.currentValue}`);
    }
  }

  ngOnInit() {
    this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`);
  }

}

NgbAlert.ɵfac = function NgbAlert_Factory(t) {
  return new (t || NgbAlert)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbAlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbAlert.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbAlert,
  selectors: [["ngb-alert"]],
  hostAttrs: ["role", "alert", 1, "alert", "show"],
  hostVars: 4,
  hostBindings: function NgbAlert_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation)("alert-dismissible", ctx.dismissible);
    }
  },
  inputs: {
    animation: "animation",
    dismissible: "dismissible",
    type: "type"
  },
  outputs: {
    closed: "closed"
  },
  exportAs: ["ngbAlert"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c3,
  decls: 2,
  vars: 1,
  consts: function () {
    let i18n_1;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_2 = goog.getMsg("Close");
      i18n_1 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_2;
    } else {
      i18n_1 = $localize`:@@ngb.alert.close:Close`;
    }

    return [["type", "button", "class", "btn-close", "aria-label", i18n_1, 3, "click", 4, "ngIf"], ["type", "button", "aria-label", i18n_1, 1, "btn-close", 3, "click"]];
  },
  template: function NgbAlert_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbAlert_button_1_Template, 1, 0, "button", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismissible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  styles: ["ngb-alert{display:block}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAlert, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-alert',
      exportAs: 'ngbAlert',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'role': 'alert',
        'class': 'alert show',
        '[class.fade]': 'animation',
        '[class.alert-dismissible]': 'dismissible'
      },
      template: `
    <ng-content></ng-content>
    <button *ngIf="dismissible" type="button" class="btn-close" aria-label="Close" i18n-aria-label="@@ngb.alert.close"
      (click)="close()">
    </button>
    `,
      styles: ["ngb-alert{display:block}\n"]
    }]
  }], function () {
    return [{
      type: NgbAlertConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgbAlertModule {}

NgbAlertModule.ɵfac = function NgbAlertModule_Factory(t) {
  return new (t || NgbAlertModule)();
};

NgbAlertModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbAlertModule,
  declarations: [NgbAlert],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbAlert]
});
NgbAlertModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbAlertModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbAlert],
      exports: [NgbAlert],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();
/* eslint-disable */

/**
 * @deprecated 12.0.0 Please use native Angular code instead
 */


class NgbButtonLabel {}

NgbButtonLabel.ɵfac = function NgbButtonLabel_Factory(t) {
  return new (t || NgbButtonLabel)();
};

NgbButtonLabel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbButtonLabel,
  selectors: [["", "ngbButtonLabel", ""]],
  hostVars: 8,
  hostBindings: function NgbButtonLabel_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn", true)("active", ctx.active)("disabled", ctx.disabled)("focus", ctx.focused);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbButtonLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbButtonLabel]',
      host: {
        '[class.btn]': 'true',
        '[class.active]': 'active',
        '[class.disabled]': 'disabled',
        '[class.focus]': 'focused'
      }
    }]
  }], null, null);
})();
/* eslint-disable */

/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 *
 * @deprecated 12.0.0 Please use native Angular code instead
 */


class NgbCheckBox {
  constructor(_label, _cd) {
    this._label = _label;
    this._cd = _cd;
    /**
     * If `true`, the checkbox button will be disabled
     */

    this.disabled = false;
    /**
     * The form control value when the checkbox is checked.
     */

    this.valueChecked = true;
    /**
     * The form control value when the checkbox is unchecked.
     */

    this.valueUnChecked = false;

    this.onChange = _ => {};

    this.onTouched = () => {};
  }

  set focused(isFocused) {
    this._label.focused = isFocused;

    if (!isFocused) {
      this.onTouched();
    }
  }

  onInputChange($event) {
    const modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
    this.onChange(modelToPropagate);
    this.onTouched();
    this.writeValue(modelToPropagate);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._label.disabled = isDisabled;
  }

  writeValue(value) {
    this.checked = value === this.valueChecked;
    this._label.active = this.checked; // label won't be updated, if it is inside the OnPush component when [ngModel] changes

    this._cd.markForCheck();
  }

}

NgbCheckBox.ɵfac = function NgbCheckBox_Factory(t) {
  return new (t || NgbCheckBox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbButtonLabel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NgbCheckBox.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbCheckBox,
  selectors: [["", "ngbButton", "", "type", "checkbox"]],
  hostVars: 2,
  hostBindings: function NgbCheckBox_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbCheckBox_change_HostBindingHandler($event) {
        return ctx.onInputChange($event);
      })("focus", function NgbCheckBox_focus_HostBindingHandler() {
        return ctx.focused = true;
      })("blur", function NgbCheckBox_blur_HostBindingHandler() {
        return ctx.focused = false;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("checked", ctx.checked)("disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    valueChecked: "valueChecked",
    valueUnChecked: "valueUnChecked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbCheckBox),
    multi: true
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCheckBox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbButton][type=checkbox]',
      host: {
        '[checked]': 'checked',
        '[disabled]': 'disabled',
        '(change)': 'onInputChange($event)',
        '(focus)': 'focused = true',
        '(blur)': 'focused = false'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbCheckBox),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: NgbButtonLabel
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueUnChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/* eslint-disable */


let nextId$3 = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 *
 * @deprecated 12.0.0 Please use native Angular code instead
 */

class NgbRadioGroup {
  constructor() {
    this._radios = new Set();
    this._value = null;
    /**
     * Name of the radio group applied to radio input elements.
     *
     * Will be applied to all radio input elements inside the group,
     * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
     *
     * If not provided, will be generated in the `ngb-radio-xx` format.
     */

    this.name = `ngb-radio-${nextId$3++}`;

    this.onChange = _ => {};

    this.onTouched = () => {};
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }

  onRadioChange(radio) {
    this.writeValue(radio.value);
    this.onChange(radio.value);
  }

  onRadioValueUpdate() {
    this._updateRadiosValue();
  }

  register(radio) {
    this._radios.add(radio);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this._disabled = isDisabled;

    this._updateRadiosDisabled();
  }

  unregister(radio) {
    this._radios.delete(radio);
  }

  writeValue(value) {
    this._value = value;

    this._updateRadiosValue();
  }

  _updateRadiosValue() {
    this._radios.forEach(radio => radio.updateValue(this._value));
  }

  _updateRadiosDisabled() {
    this._radios.forEach(radio => radio.updateDisabled());
  }

}

NgbRadioGroup.ɵfac = function NgbRadioGroup_Factory(t) {
  return new (t || NgbRadioGroup)();
};

NgbRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbRadioGroup,
  selectors: [["", "ngbRadioGroup", ""]],
  hostAttrs: ["role", "radiogroup"],
  inputs: {
    name: "name"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbRadioGroup),
    multi: true
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbRadioGroup]',
      host: {
        'role': 'radiogroup'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbRadioGroup),
        multi: true
      }]
    }]
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 *
 * @deprecated 12.0.0 Please use native Angular code instead
 */


class NgbRadio {
  constructor(_group, _label, _renderer, _element, _cd) {
    this._group = _group;
    this._label = _label;
    this._renderer = _renderer;
    this._element = _element;
    this._cd = _cd;
    this._value = null;

    this._group.register(this);

    this.updateDisabled();
  }
  /**
   * The form control value when current radio button is checked.
   */


  set value(value) {
    this._value = value;
    const stringValue = value ? value.toString() : '';

    this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);

    this._group.onRadioValueUpdate();
  }
  /**
   * If `true`, current radio button will be disabled.
   */


  set disabled(isDisabled) {
    this._disabled = isDisabled !== false;
    this.updateDisabled();
  }

  set focused(isFocused) {
    if (this._label) {
      this._label.focused = isFocused;
    }

    if (!isFocused) {
      this._group.onTouched();
    }
  }

  get checked() {
    return this._checked;
  }

  get disabled() {
    return this._group.disabled || this._disabled;
  }

  get value() {
    return this._value;
  }

  get nameAttr() {
    return this.name || this._group.name;
  }

  ngOnDestroy() {
    this._group.unregister(this);
  }

  onChange() {
    this._group.onRadioChange(this);
  }

  updateValue(value) {
    // label won't be updated, if it is inside the OnPush component when [ngModel] changes
    if (this.value !== value) {
      this._cd.markForCheck();
    }

    this._checked = this.value === value;
    this._label.active = this._checked;
  }

  updateDisabled() {
    this._label.disabled = this.disabled;
  }

}

NgbRadio.ɵfac = function NgbRadio_Factory(t) {
  return new (t || NgbRadio)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbRadioGroup), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbButtonLabel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NgbRadio.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbRadio,
  selectors: [["", "ngbButton", "", "type", "radio"]],
  hostVars: 3,
  hostBindings: function NgbRadio_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbRadio_change_HostBindingHandler() {
        return ctx.onChange();
      })("focus", function NgbRadio_focus_HostBindingHandler() {
        return ctx.focused = true;
      })("blur", function NgbRadio_blur_HostBindingHandler() {
        return ctx.focused = false;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.nameAttr);
    }
  },
  inputs: {
    name: "name",
    value: "value",
    disabled: "disabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRadio, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbButton][type=radio]',
      host: {
        '[checked]': 'checked',
        '[disabled]': 'disabled',
        '[name]': 'nameAttr',
        '(change)': 'onChange()',
        '(focus)': 'focused = true',
        '(blur)': 'focused = false'
      }
    }]
  }], function () {
    return [{
      type: NgbRadioGroup
    }, {
      type: NgbButtonLabel
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/* eslint-disable */


const NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
/**
 * @deprecated 12.0.0 Please use native Angular code instead
 */

class NgbButtonsModule {}

NgbButtonsModule.ɵfac = function NgbButtonsModule_Factory(t) {
  return new (t || NgbButtonsModule)();
};

NgbButtonsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbButtonsModule,
  declarations: [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio],
  exports: [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio]
});
NgbButtonsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbButtonsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: NGB_BUTTON_DIRECTIVES,
      exports: NGB_BUTTON_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * Defines the carousel slide transition direction.
 */


var NgbSlideEventDirection;

(function (NgbSlideEventDirection) {
  NgbSlideEventDirection["START"] = "start";
  NgbSlideEventDirection["END"] = "end";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));

const isBeingAnimated = ({
  classList
}) => {
  return classList.contains('carousel-item-start') || classList.contains('carousel-item-end');
};

const removeDirectionClasses = classList => {
  classList.remove('carousel-item-start');
  classList.remove('carousel-item-end');
};

const removeClasses = classList => {
  removeDirectionClasses(classList);
  classList.remove('carousel-item-prev');
  classList.remove('carousel-item-next');
};

const ngbCarouselTransitionIn = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;

  if (!animation) {
    removeDirectionClasses(classList);
    removeClasses(classList);
    classList.add('active');
    return;
  }

  if (isBeingAnimated(element)) {
    // Revert the transition
    removeDirectionClasses(classList);
  } else {
    // For the 'in' transition, a 'pre-class' is applied to the element to ensure its visibility
    classList.add('carousel-item-' + (direction === NgbSlideEventDirection.START ? 'next' : 'prev'));
    reflow(element);
    classList.add('carousel-item-' + direction);
  }

  return () => {
    removeClasses(classList);
    classList.add('active');
  };
};

const ngbCarouselTransitionOut = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;

  if (!animation) {
    removeDirectionClasses(classList);
    removeClasses(classList);
    classList.remove('active');
    return;
  } //  direction is left or right, depending on the way the slide goes out.


  if (isBeingAnimated(element)) {
    // Revert the transition
    removeDirectionClasses(classList);
  } else {
    classList.add('carousel-item-' + direction);
  }

  return () => {
    removeClasses(classList);
    classList.remove('active');
  };
};
/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */


class NgbCarouselConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.interval = 5000;
    this.wrap = true;
    this.keyboard = true;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbCarouselConfig.ɵfac = function NgbCarouselConfig_Factory(t) {
  return new (t || NgbCarouselConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbCarouselConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCarouselConfig,
  factory: NgbCarouselConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCarouselConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

let nextId$2 = 0;
/**
 * A directive that wraps the individual carousel slide.
 */

class NgbSlide {
  constructor(tplRef) {
    this.tplRef = tplRef;
    /**
     * Slide id that must be unique for the entire document.
     *
     * If not provided, will be generated in the `ngb-slide-xx` format.
     */

    this.id = `ngb-slide-${nextId$2++}`;
    /**
     * An event emitted when the slide transition is finished
     *
     * @since 8.0.0
     */

    this.slid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

}

NgbSlide.ɵfac = function NgbSlide_Factory(t) {
  return new (t || NgbSlide)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbSlide.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbSlide,
  selectors: [["ng-template", "ngbSlide", ""]],
  inputs: {
    id: "id"
  },
  outputs: {
    slid: "slid"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbSlide, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbSlide]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */


class NgbCarousel {
  constructor(config, _platformId, _ngZone, _cd, _container) {
    this._platformId = _platformId;
    this._ngZone = _ngZone;
    this._cd = _cd;
    this._container = _container;
    this.NgbSlideEventSource = NgbSlideEventSource;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(0);
    this._mouseHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this._focused$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this._pauseOnHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this._pauseOnFocus$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this._pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this._wrap$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    /**
     * An event emitted just before the slide transition starts.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     */

    this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted right after the slide transition is completed.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     *
     * @since 8.0.0
     */

    this.slid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /*
     * Keep the ids of the panels currently transitionning
     * in order to allow only the transition revertion
     */

    this._transitionIds = null;
    this.animation = config.animation;
    this.interval = config.interval;
    this.wrap = config.wrap;
    this.keyboard = config.keyboard;
    this.pauseOnHover = config.pauseOnHover;
    this.pauseOnFocus = config.pauseOnFocus;
    this.showNavigationArrows = config.showNavigationArrows;
    this.showNavigationIndicators = config.showNavigationIndicators;
  }
  /**
   * Time in milliseconds before the next slide is shown.
   */


  set interval(value) {
    this._interval$.next(value);
  }

  get interval() {
    return this._interval$.value;
  }
  /**
   * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
   */


  set wrap(value) {
    this._wrap$.next(value);
  }

  get wrap() {
    return this._wrap$.value;
  }
  /**
   * If `true`, will pause slide switching when mouse cursor hovers the slide.
   *
   * @since 2.2.0
   */


  set pauseOnHover(value) {
    this._pauseOnHover$.next(value);
  }

  get pauseOnHover() {
    return this._pauseOnHover$.value;
  }
  /**
   * If `true`, will pause slide switching when the focus is inside the carousel.
   */


  set pauseOnFocus(value) {
    this._pauseOnFocus$.next(value);
  }

  get pauseOnFocus() {
    return this._pauseOnFocus$.value;
  }

  set mouseHover(value) {
    this._mouseHover$.next(value);
  }

  get mouseHover() {
    return this._mouseHover$.value;
  }

  set focused(value) {
    this._focused$.next(value);
  }

  get focused() {
    return this._focused$.value;
  }

  arrowLeft() {
    this.focus();
    this.prev(NgbSlideEventSource.ARROW_LEFT);
  }

  arrowRight() {
    this.focus();
    this.next(NgbSlideEventSource.ARROW_RIGHT);
  }

  ngAfterContentInit() {
    // setInterval() doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.isPlatformBrowser)(this._platformId)) {
      this._ngZone.runOutsideAngular(() => {
        const hasNextSlide$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.slide.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(slideEvent => slideEvent.current), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(this.activeId)), this._wrap$, this.slides.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(null))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([currentSlideId, wrap]) => {
          const slideArr = this.slides.toArray();

          const currentSlideIdx = this._getSlideIdxById(currentSlideId);

          return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, hasNextSlide$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([pause, pauseOnHover, mouseHover, pauseOnFocus, focused, interval, hasNextSlide]) => pause || pauseOnHover && mouseHover || pauseOnFocus && focused || !hasNextSlide ? 0 : interval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(interval => interval > 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(interval, interval) : rxjs__WEBPACK_IMPORTED_MODULE_20__.NEVER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe(() => this._ngZone.run(() => this.next(NgbSlideEventSource.TIMER)));
      });
    }

    this.slides.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe(() => {
      var _a;

      (_a = this._transitionIds) === null || _a === void 0 ? void 0 : _a.forEach(id => ngbCompleteTransition(this._getSlideElement(id)));
      this._transitionIds = null;

      this._cd.markForCheck(); // The following code need to be done asynchronously, after the dom becomes stable,
      // otherwise all changes will be undone.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        for (const {
          id
        } of this.slides) {
          const element = this._getSlideElement(id);

          if (id === this.activeId) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }
      });
    });
  }

  ngAfterContentChecked() {
    let activeSlide = this._getSlideById(this.activeId);

    this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : '';
  }

  ngAfterViewInit() {
    // Initialize the 'active' class (not managed by the template)
    if (this.activeId) {
      const element = this._getSlideElement(this.activeId);

      if (element) {
        element.classList.add('active');
      }
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
  }
  /**
   * Navigates to a slide with the specified identifier.
   */


  select(slideId, source) {
    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
  }
  /**
   * Navigates to the previous slide.
   */


  prev(source) {
    this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.END, source);
  }
  /**
   * Navigates to the next slide.
   */


  next(source) {
    this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.START, source);
  }
  /**
   * Pauses cycling through the slides.
   */


  pause() {
    this._pause$.next(true);
  }
  /**
   * Restarts cycling through the slides from start to end.
   */


  cycle() {
    this._pause$.next(false);
  }
  /**
   * Set the focus on the carousel.
   */


  focus() {
    this._container.nativeElement.focus();
  }

  _cycleToSelected(slideIdx, direction, source) {
    const transitionIds = this._transitionIds;

    if (transitionIds && (transitionIds[0] !== slideIdx || transitionIds[1] !== this.activeId)) {
      // Revert prevented
      return;
    }

    let selectedSlide = this._getSlideById(slideIdx);

    if (selectedSlide && selectedSlide.id !== this.activeId) {
      this._transitionIds = [this.activeId, slideIdx];
      this.slide.emit({
        prev: this.activeId,
        current: selectedSlide.id,
        direction: direction,
        paused: this._pause$.value,
        source
      });
      const options = {
        animation: this.animation,
        runningTransition: 'stop',
        context: {
          direction
        }
      };
      const transitions = [];

      const activeSlide = this._getSlideById(this.activeId);

      if (activeSlide) {
        const activeSlideTransition = ngbRunTransition(this._ngZone, this._getSlideElement(activeSlide.id), ngbCarouselTransitionOut, options);
        activeSlideTransition.subscribe(() => {
          activeSlide.slid.emit({
            isShown: false,
            direction,
            source
          });
        });
        transitions.push(activeSlideTransition);
      }

      const previousId = this.activeId;
      this.activeId = selectedSlide.id;

      const nextSlide = this._getSlideById(this.activeId);

      const transition = ngbRunTransition(this._ngZone, this._getSlideElement(selectedSlide.id), ngbCarouselTransitionIn, options);
      transition.subscribe(() => {
        nextSlide === null || nextSlide === void 0 ? void 0 : nextSlide.slid.emit({
          isShown: true,
          direction,
          source
        });
      });
      transitions.push(transition);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.zip)(...transitions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        this._transitionIds = null;
        this.slid.emit({
          prev: previousId,
          current: selectedSlide.id,
          direction: direction,
          paused: this._pause$.value,
          source
        });
      });
    } // we get here after the interval fires or any external API call like next(), prev() or select()


    this._cd.markForCheck();
  }

  _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
    const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);

    const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);

    return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.END : NgbSlideEventDirection.START;
  }

  _getSlideById(slideId) {
    return this.slides.find(slide => slide.id === slideId) || null;
  }

  _getSlideIdxById(slideId) {
    const slide = this._getSlideById(slideId);

    return slide != null ? this.slides.toArray().indexOf(slide) : -1;
  }

  _getNextSlide(currentSlideId) {
    const slideArr = this.slides.toArray();

    const currentSlideIdx = this._getSlideIdxById(currentSlideId);

    const isLastSlide = currentSlideIdx === slideArr.length - 1;
    return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
  }

  _getPrevSlide(currentSlideId) {
    const slideArr = this.slides.toArray();

    const currentSlideIdx = this._getSlideIdxById(currentSlideId);

    const isFirstSlide = currentSlideIdx === 0;
    return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
  }

  _getSlideElement(slideId) {
    return this._container.nativeElement.querySelector(`#slide-${slideId}`);
  }

}

NgbCarousel.ɵfac = function NgbCarousel_Factory(t) {
  return new (t || NgbCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbCarousel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbCarousel,
  selectors: [["ngb-carousel"]],
  contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbSlide, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    }
  },
  hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
  hostVars: 3,
  hostBindings: function NgbCarousel_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() {
        return ctx.keyboard && ctx.arrowLeft();
      })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() {
        return ctx.keyboard && ctx.arrowRight();
      })("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() {
        return ctx.mouseHover = true;
      })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() {
        return ctx.mouseHover = false;
      })("focusin", function NgbCarousel_focusin_HostBindingHandler() {
        return ctx.focused = true;
      })("focusout", function NgbCarousel_focusout_HostBindingHandler() {
        return ctx.focused = false;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", "slide-" + ctx.activeId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "block");
    }
  },
  inputs: {
    animation: "animation",
    activeId: "activeId",
    interval: "interval",
    wrap: "wrap",
    keyboard: "keyboard",
    pauseOnHover: "pauseOnHover",
    pauseOnFocus: "pauseOnFocus",
    showNavigationArrows: "showNavigationArrows",
    showNavigationIndicators: "showNavigationIndicators"
  },
  outputs: {
    slide: "slide",
    slid: "slid"
  },
  exportAs: ["ngbCarousel"],
  decls: 6,
  vars: 6,
  consts: function () {
    let i18n_4;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc Currently selected slide number read by screen reader
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__5 = goog.getMsg(" Slide {$interpolation} of {$interpolation_1} ", {
        "interpolation": "\uFFFD0\uFFFD",
        "interpolation_1": "\uFFFD1\uFFFD"
      });
      i18n_4 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__5;
    } else {
      i18n_4 = $localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;
    }

    let i18n_6;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__7 = goog.getMsg("Previous");
      i18n_6 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__7;
    } else {
      i18n_6 = $localize`:@@ngb.carousel.previous:Previous`;
    }

    let i18n_8;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__9 = goog.getMsg("Next");
      i18n_8 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__9;
    } else {
      i18n_8 = $localize`:@@ngb.carousel.next:Next`;
    }

    return [["role", "tablist", 1, "carousel-indicators"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], ["class", "carousel-control-prev", "type", "button", 3, "click", 4, "ngIf"], ["class", "carousel-control-next", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], [1, "visually-hidden"], i18n_4, [3, "ngTemplateOutlet"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], i18n_6, ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], i18n_8];
  },
  template: function NgbCarousel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbCarousel_button_1_Template, 1, 5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbCarousel_div_3_Template, 4, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgbCarousel_button_4_Template, 4, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbCarousel_button_5_Template, 4, 0, "button", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visually-hidden", !ctx.showNavigationIndicators);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigationArrows);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigationArrows);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCarousel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-carousel',
      exportAs: 'ngbCarousel',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'carousel slide',
        '[style.display]': '"block"',
        'tabIndex': '0',
        '(keydown.arrowLeft)': 'keyboard && arrowLeft()',
        '(keydown.arrowRight)': 'keyboard && arrowRight()',
        '(mouseenter)': 'mouseHover = true',
        '(mouseleave)': 'mouseHover = false',
        '(focusin)': 'focused = true',
        '(focusout)': 'focused = false',
        '[attr.aria-activedescendant]': `'slide-' + activeId`
      },
      template: `
    <div class="carousel-indicators" [class.visually-hidden]="!showNavigationIndicators" role="tablist">
      <button type="button" data-bs-target *ngFor="let slide of slides" [class.active]="slide.id === activeId"
          role="tab" [attr.aria-labelledby]="'slide-' + slide.id" [attr.aria-controls]="'slide-' + slide.id"
          [attr.aria-selected]="slide.id === activeId"
          (click)="focus();select(slide.id, NgbSlideEventSource.INDICATOR);"></button>
    </div>
    <div class="carousel-inner">
      <div *ngFor="let slide of slides; index as i; count as c" class="carousel-item" [id]="'slide-' + slide.id" role="tabpanel">
        <span class="visually-hidden" i18n="Currently selected slide number read by screen reader@@ngb.carousel.slide-number">
          Slide {{i + 1}} of {{c}}
        </span>
        <ng-template [ngTemplateOutlet]="slide.tplRef"></ng-template>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" (click)="arrowLeft()" *ngIf="showNavigationArrows">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden" i18n="@@ngb.carousel.previous">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" (click)="arrowRight()" *ngIf="showNavigationArrows">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden" i18n="@@ngb.carousel.next">Next</span>
    </button>
  `
    }]
  }], function () {
    return [{
      type: NgbCarouselConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    slides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbSlide]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    interval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    wrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showNavigationArrows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showNavigationIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    slid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

var NgbSlideEventSource;

(function (NgbSlideEventSource) {
  NgbSlideEventSource["TIMER"] = "timer";
  NgbSlideEventSource["ARROW_LEFT"] = "arrowLeft";
  NgbSlideEventSource["ARROW_RIGHT"] = "arrowRight";
  NgbSlideEventSource["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));

const NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];

class NgbCarouselModule {}

NgbCarouselModule.ɵfac = function NgbCarouselModule_Factory(t) {
  return new (t || NgbCarouselModule)();
};

NgbCarouselModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbCarouselModule,
  declarations: [NgbCarousel, NgbSlide],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbCarousel, NgbSlide]
});
NgbCarouselModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: NGB_CAROUSEL_DIRECTIVES,
      exports: NGB_CAROUSEL_DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [NgbCollapse](#/components/collapse/api#NgbCollapse) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all collapses used in the application.
 */


class NgbCollapseConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbCollapseConfig.ɵfac = function NgbCollapseConfig_Factory(t) {
  return new (t || NgbCollapseConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbCollapseConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCollapseConfig,
  factory: NgbCollapseConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCollapseConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */


class NgbCollapse {
  constructor(_element, config, _zone) {
    this._element = _element;
    this._zone = _zone;
    /**
     * If `true`, will collapse the element or show it otherwise.
     */

    this.collapsed = false;
    this.ngbCollapseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the collapse element is shown, after the transition. It has no payload.
     *
     * @since 8.0.0
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the collapse element is hidden, after the transition. It has no payload.
     *
     * @since 8.0.0
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.animation = config.animation;
  }

  ngOnInit() {
    this._runTransition(this.collapsed, false);
  }

  ngOnChanges({
    collapsed
  }) {
    if (!collapsed.firstChange) {
      this._runTransitionWithEvents(this.collapsed, this.animation);
    }
  }
  /**
   * Triggers collapsing programmatically.
   *
   * If there is a collapsing transition running already, it will be reversed.
   * If the animations are turned off this happens synchronously.
   *
   * @since 8.0.0
   */


  toggle(open = this.collapsed) {
    this.collapsed = !open;
    this.ngbCollapseChange.next(this.collapsed);

    this._runTransitionWithEvents(this.collapsed, this.animation);
  }

  _runTransition(collapsed, animation) {
    return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, {
      animation,
      runningTransition: 'stop',
      context: {
        direction: collapsed ? 'hide' : 'show'
      }
    });
  }

  _runTransitionWithEvents(collapsed, animation) {
    this._runTransition(collapsed, animation).subscribe(() => {
      if (collapsed) {
        this.hidden.emit();
      } else {
        this.shown.emit();
      }
    });
  }

}

NgbCollapse.ɵfac = function NgbCollapse_Factory(t) {
  return new (t || NgbCollapse)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCollapseConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbCollapse.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbCollapse,
  selectors: [["", "ngbCollapse", ""]],
  inputs: {
    animation: "animation",
    collapsed: ["ngbCollapse", "collapsed"]
  },
  outputs: {
    ngbCollapseChange: "ngbCollapseChange",
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbCollapse"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCollapse, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbCollapse]',
      exportAs: 'ngbCollapse'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NgbCollapseConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngbCollapse']
    }],
    ngbCollapseChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgbCollapseModule {}

NgbCollapseModule.ɵfac = function NgbCollapseModule_Factory(t) {
  return new (t || NgbCollapseModule)();
};

NgbCollapseModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbCollapseModule,
  declarations: [NgbCollapse],
  exports: [NgbCollapse]
});
NgbCollapseModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCollapseModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbCollapse],
      exports: [NgbCollapse]
    }]
  }], null, null);
})();
/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * @since 3.0.0
 */


class NgbDate {
  constructor(year, month, day) {
    this.year = isInteger(year) ? year : null;
    this.month = isInteger(month) ? month : null;
    this.day = isInteger(day) ? day : null;
  }
  /**
   * A **static method** that creates a new date object from the `NgbDateStruct`,
   *
   * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
   *
   * If the `date` is already of `NgbDate` type, the method will return the same object.
   */


  static from(date) {
    if (date instanceof NgbDate) {
      return date;
    }

    return date ? new NgbDate(date.year, date.month, date.day) : null;
  }
  /**
   * Checks if the current date is equal to another date.
   */


  equals(other) {
    return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
  }
  /**
   * Checks if the current date is before another date.
   */


  before(other) {
    if (!other) {
      return false;
    }

    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day < other.day;
      } else {
        return this.month < other.month;
      }
    } else {
      return this.year < other.year;
    }
  }
  /**
   * Checks if the current date is after another date.
   */


  after(other) {
    if (!other) {
      return false;
    }

    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day > other.day;
      } else {
        return this.month > other.month;
      }
    } else {
      return this.year > other.year;
    }
  }

}

function isChangedDate(prev, next) {
  return !dateComparator(prev, next);
}

function isChangedMonth(prev, next) {
  return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}

function dateComparator(prev, next) {
  return !prev && !next || !!prev && !!next && prev.equals(next);
}

function checkMinBeforeMax(minDate, maxDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}

function checkDateInRange(date, minDate, maxDate) {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }

  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }

  return date || null;
}

function isDateSelectable(date, state) {
  const {
    minDate,
    maxDate,
    disabled,
    markDisabled
  } = state; // clang-format off

  return !(date === null || date === undefined || disabled || markDisabled && markDisabled(date, {
    year: date.year,
    month: date.month
  }) || minDate && date.before(minDate) || maxDate && date.after(maxDate)); // clang-format on
}

function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
  if (!date) {
    return [];
  }

  let months = calendar.getMonths(date.year);

  if (minDate && date.year === minDate.year) {
    const index = months.findIndex(month => month === minDate.month);
    months = months.slice(index);
  }

  if (maxDate && date.year === maxDate.year) {
    const index = months.findIndex(month => month === maxDate.month);
    months = months.slice(0, index + 1);
  }

  return months;
}

function generateSelectBoxYears(date, minDate, maxDate) {
  if (!date) {
    return [];
  }

  const start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
  const end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
  const length = end - start + 1;
  const numbers = Array(length);

  for (let i = 0; i < length; i++) {
    numbers[i] = start + i;
  }

  return numbers;
}

function nextMonthDisabled(calendar, date, maxDate) {
  const nextDate = Object.assign(calendar.getNext(date, 'm'), {
    day: 1
  });
  return maxDate != null && nextDate.after(maxDate);
}

function prevMonthDisabled(calendar, date, minDate) {
  const prevDate = Object.assign(calendar.getPrev(date, 'm'), {
    day: 1
  });
  return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
}

function buildMonths(calendar, date, state, i18n, force) {
  const {
    displayMonths,
    months
  } = state; // move old months to a temporary array

  const monthsToReuse = months.splice(0, months.length); // generate new first dates, nullify or reuse months

  const firstDates = Array.from({
    length: displayMonths
  }, (_, i) => {
    const firstDate = Object.assign(calendar.getNext(date, 'm', i), {
      day: 1
    });
    months[i] = null;

    if (!force) {
      const reusedIndex = monthsToReuse.findIndex(month => month.firstDate.equals(firstDate)); // move reused month back to months

      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }

    return firstDate;
  }); // rebuild nullified months

  firstDates.forEach((firstDate, i) => {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
    }
  });
  return months;
}

function buildMonth(calendar, date, state, i18n, month = {}) {
  const {
    dayTemplateData,
    minDate,
    maxDate,
    firstDayOfWeek,
    markDisabled,
    outsideDays,
    weekdayWidth,
    weekdaysVisible
  } = state;
  const calendarToday = calendar.getToday();
  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];
  date = getFirstViewDate(calendar, date, firstDayOfWeek); // clearing weekdays, if not visible

  if (!weekdaysVisible) {
    month.weekdays.length = 0;
  } // month has weeks


  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    let weekObject = month.weeks[week];

    if (!weekObject) {
      weekObject = month.weeks[week] = {
        number: 0,
        days: [],
        collapsed: true
      };
    }

    const days = weekObject.days; // week has days

    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0 && weekdaysVisible) {
        month.weekdays[day] = i18n.getWeekdayLabel(calendar.getWeekday(date), weekdayWidth);
      }

      const newDate = new NgbDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);
      const ariaLabel = i18n.getDayAriaLabel(newDate); // marking date as disabled

      let disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));

      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {
          month: month.number,
          year: month.year
        });
      } // today


      let today = newDate.equals(calendarToday); // adding user-provided data to the context

      let contextUserData = dayTemplateData ? dayTemplateData(newDate, {
        month: month.number,
        year: month.year
      }) : undefined; // saving first date of the month

      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      } // saving last date of the month


      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }

      let dayObject = days[day];

      if (!dayObject) {
        dayObject = days[day] = {};
      }

      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number,
        currentYear: month.year,
        disabled,
        focused: false,
        selected: false,
        today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;
      date = nextDate;
    }

    weekObject.number = calendar.getWeekNumber(days.map(day => day.date), firstDayOfWeek); // marking week as collapsed

    weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
  }

  return month;
}

function getFirstViewDate(calendar, date, firstDayOfWeek) {
  const daysPerWeek = calendar.getDaysPerWeek();
  const firstMonthDate = new NgbDate(date.year, date.month, 1);
  const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}

function fromJSDate(jsDate) {
  return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}

function toJSDate(date) {
  const jsDate = new Date(date.year, date.month - 1, date.day, 12); // this is done avoid 30 -> 1930 conversion

  if (!isNaN(jsDate.getTime())) {
    jsDate.setFullYear(date.year);
  }

  return jsDate;
}

function NGB_DATEPICKER_CALENDAR_FACTORY() {
  return new NgbCalendarGregorian();
}
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 */


class NgbCalendar {}

NgbCalendar.ɵfac = function NgbCalendar_Factory(t) {
  return new (t || NgbCalendar)();
};

NgbCalendar.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendar,
  factory: function () {
    return NGB_DATEPICKER_CALENDAR_FACTORY();
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
    }]
  }], null, null);
})();

class NgbCalendarGregorian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }

  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  getWeeksPerMonth() {
    return 6;
  }

  getNext(date, period = 'd', number = 1) {
    let jsDate = toJSDate(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();

    switch (period) {
      case 'y':
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;

      case 'm':
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;

        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }

        break;

      case 'd':
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;

      default:
        return date;
    }

    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      // this means the destination month has less days than the initial month
      // let's go back to the end of the previous month:
      jsDate.setDate(0);
    }

    return fromJSDate(jsDate);
  }

  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }

  getWeekday(date) {
    let jsDate = toJSDate(date);
    let day = jsDate.getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

    return day === 0 ? 7 : day;
  }

  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }

    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toJSDate(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday

    const time = jsDate.getTime();
    jsDate.setMonth(0); // Compare with Jan 1

    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
  }

  getToday() {
    return fromJSDate(new Date());
  }

  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    } // year 0 doesn't exist in Gregorian calendar


    if (date.year === 0) {
      return false;
    }

    const jsDate = toJSDate(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }

}

NgbCalendarGregorian.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarGregorian_BaseFactory;
  return function NgbCalendarGregorian_Factory(t) {
    return (ɵNgbCalendarGregorian_BaseFactory || (ɵNgbCalendarGregorian_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarGregorian)))(t || NgbCalendarGregorian);
  };
}();

NgbCalendarGregorian.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarGregorian,
  factory: NgbCalendarGregorian.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarGregorian, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

function NGB_DATEPICKER_18N_FACTORY(locale) {
  return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */


class NgbDatepickerI18n {
  /**
   * Returns the text label to display above the day view.
   *
   * @since 9.1.0
   */
  getMonthLabel(date) {
    return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
  }
  /**
   * Returns the textual representation of a day that is rendered in a day cell.
   *
   * @since 3.0.0
   */


  getDayNumerals(date) {
    return `${date.day}`;
  }
  /**
   * Returns the textual representation of a week number rendered by datepicker.
   *
   * @since 3.0.0
   */


  getWeekNumerals(weekNumber) {
    return `${weekNumber}`;
  }
  /**
   * Returns the textual representation of a year that is rendered in the datepicker year select box.
   *
   * @since 3.0.0
   */


  getYearNumerals(year) {
    return `${year}`;
  }
  /**
   * Returns the week label to display in the heading of the month view.
   *
   * @since 9.1.0
   */


  getWeekLabel() {
    return '';
  }

}

NgbDatepickerI18n.ɵfac = function NgbDatepickerI18n_Factory(t) {
  return new (t || NgbDatepickerI18n)();
};

NgbDatepickerI18n.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18n,
  factory: function NgbDatepickerI18n_Factory(t) {
    let r = null;

    if (t) {
      r = new t();
    } else {
      r = NGB_DATEPICKER_18N_FACTORY(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
    }

    return r;
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerI18n, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_18N_FACTORY,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
    }]
  }], null, null);
})();
/**
 * A service providing default implementation for the datepicker i18n.
 * It can be used as a base implementation if necessary.
 *
 * @since 9.1.0
 */


class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
  constructor(_locale) {
    super();
    this._locale = _locale;
    this._monthsShort = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleMonthNames)(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Abbreviated);
    this._monthsFull = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleMonthNames)(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Wide);
  }

  getWeekdayLabel(weekday, width) {
    const weekdaysStartingOnSunday = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleDayNames)(this._locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, width === undefined ? _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short : width);
    const weekdays = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);
    return weekdays[weekday - 1] || '';
  }

  getMonthShortName(month) {
    return this._monthsShort[month - 1] || '';
  }

  getMonthFullName(month) {
    return this._monthsFull[month - 1] || '';
  }

  getDayAriaLabel(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(jsDate, 'fullDate', this._locale);
  }

}

NgbDatepickerI18nDefault.ɵfac = function NgbDatepickerI18nDefault_Factory(t) {
  return new (t || NgbDatepickerI18nDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};

NgbDatepickerI18nDefault.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18nDefault,
  factory: NgbDatepickerI18nDefault.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerI18nDefault, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();

class NgbDatepickerService {
  constructor(_calendar, _i18n) {
    this._calendar = _calendar;
    this._i18n = _i18n;
    this._VALIDATORS = {
      dayTemplateData: dayTemplateData => {
        if (this._state.dayTemplateData !== dayTemplateData) {
          return {
            dayTemplateData
          };
        }
      },
      displayMonths: displayMonths => {
        displayMonths = toInteger(displayMonths);

        if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
          return {
            displayMonths
          };
        }
      },
      disabled: disabled => {
        if (this._state.disabled !== disabled) {
          return {
            disabled
          };
        }
      },
      firstDayOfWeek: firstDayOfWeek => {
        firstDayOfWeek = toInteger(firstDayOfWeek);

        if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
          return {
            firstDayOfWeek
          };
        }
      },
      focusVisible: focusVisible => {
        if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
          return {
            focusVisible
          };
        }
      },
      markDisabled: markDisabled => {
        if (this._state.markDisabled !== markDisabled) {
          return {
            markDisabled
          };
        }
      },
      maxDate: date => {
        const maxDate = this.toValidDate(date, null);

        if (isChangedDate(this._state.maxDate, maxDate)) {
          return {
            maxDate
          };
        }
      },
      minDate: date => {
        const minDate = this.toValidDate(date, null);

        if (isChangedDate(this._state.minDate, minDate)) {
          return {
            minDate
          };
        }
      },
      navigation: navigation => {
        if (this._state.navigation !== navigation) {
          return {
            navigation
          };
        }
      },
      outsideDays: outsideDays => {
        if (this._state.outsideDays !== outsideDays) {
          return {
            outsideDays
          };
        }
      },
      weekdays: weekdays => {
        const weekdayWidth = weekdays === true || weekdays === false ? _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short : weekdays;
        const weekdaysVisible = weekdays === true || weekdays === false ? weekdays : true;

        if (this._state.weekdayWidth !== weekdayWidth || this._state.weekdaysVisible !== weekdaysVisible) {
          return {
            weekdayWidth,
            weekdaysVisible
          };
        }
      }
    };
    this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._dateSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._state = {
      dayTemplateData: null,
      markDisabled: null,
      maxDate: null,
      minDate: null,
      disabled: false,
      displayMonths: 1,
      firstDate: null,
      firstDayOfWeek: 1,
      lastDate: null,
      focusDate: null,
      focusVisible: false,
      months: [],
      navigation: 'select',
      outsideDays: 'visible',
      prevDisabled: false,
      nextDisabled: false,
      selectedDate: null,
      selectBoxes: {
        years: [],
        months: []
      },
      weekdayWidth: _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short,
      weekdaysVisible: true
    };
  }

  get model$() {
    return this._model$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(model => model.months.length > 0));
  }

  get dateSelect$() {
    return this._dateSelect$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(date => date !== null));
  }

  set(options) {
    let patch = Object.keys(options).map(key => this._VALIDATORS[key](options[key])).reduce((obj, part) => Object.assign(Object.assign({}, obj), part), {});

    if (Object.keys(patch).length > 0) {
      this._nextState(patch);
    }
  }

  focus(date) {
    const focusedDate = this.toValidDate(date, null);

    if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
      this._nextState({
        focusDate: date
      });
    }
  }

  focusSelect() {
    if (isDateSelectable(this._state.focusDate, this._state)) {
      this.select(this._state.focusDate, {
        emitEvent: true
      });
    }
  }

  open(date) {
    const firstDate = this.toValidDate(date, this._calendar.getToday());

    if (firstDate != null && !this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
      this._nextState({
        firstDate
      });
    }
  }

  select(date, options = {}) {
    const selectedDate = this.toValidDate(date, null);

    if (selectedDate != null && !this._state.disabled) {
      if (isChangedDate(this._state.selectedDate, selectedDate)) {
        this._nextState({
          selectedDate
        });
      }

      if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
        this._dateSelect$.next(selectedDate);
      }
    }
  }

  toValidDate(date, defaultValue) {
    const ngbDate = NgbDate.from(date);

    if (defaultValue === undefined) {
      defaultValue = this._calendar.getToday();
    }

    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
  }

  getMonth(struct) {
    for (let month of this._state.months) {
      if (struct.month === month.number && struct.year === month.year) {
        return month;
      }
    }

    throw new Error(`month ${struct.month} of year ${struct.year} not found`);
  }

  _nextState(patch) {
    const newState = this._updateState(patch);

    this._patchContexts(newState);

    this._state = newState;

    this._model$.next(this._state);
  }

  _patchContexts(state) {
    const {
      months,
      displayMonths,
      selectedDate,
      focusDate,
      focusVisible,
      disabled,
      outsideDays
    } = state;
    state.months.forEach(month => {
      month.weeks.forEach(week => {
        week.days.forEach(day => {
          // patch focus flag
          if (focusDate) {
            day.context.focused = focusDate.equals(day.date) && focusVisible;
          } // calculating tabindex


          day.tabindex = !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1; // override context disabled

          if (disabled === true) {
            day.context.disabled = true;
          } // patch selection flag


          if (selectedDate !== undefined) {
            day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
          } // visibility


          if (month.number !== day.date.month) {
            day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
          }
        });
      });
    });
  }

  _updateState(patch) {
    // patching fields
    const state = Object.assign({}, this._state, patch);
    let startDate = state.firstDate; // min/max dates changed

    if ('minDate' in patch || 'maxDate' in patch) {
      checkMinBeforeMax(state.minDate, state.maxDate);
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
    } // disabled


    if ('disabled' in patch) {
      state.focusVisible = false;
    } // initial rebuild via 'select()'


    if ('selectedDate' in patch && this._state.months.length === 0) {
      startDate = state.selectedDate;
    } // terminate early if only focus visibility was changed


    if ('focusVisible' in patch) {
      return state;
    } // focus date changed


    if ('focusDate' in patch) {
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      startDate = state.focusDate; // nothing to rebuild if only focus changed and it is still visible

      if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
        return state;
      }
    } // first date changed


    if ('firstDate' in patch) {
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.firstDate;
    } // rebuilding months


    if (startDate) {
      const forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch || 'weekdaysVisible' in patch;
      const months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild); // updating months and boundary dates

      state.months = months;
      state.firstDate = months[0].firstDate;
      state.lastDate = months[months.length - 1].lastDate; // reset selected date if 'markDisabled' returns true

      if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
        state.selectedDate = null;
      } // adjusting focus after months were built


      if ('firstDate' in patch) {
        if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
          state.focusDate = startDate;
        }
      } // adjusting months/years for the select box navigation


      const yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
      const monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;

      if (state.navigation === 'select') {
        // years ->  boundaries (min/max were changed)
        if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
          state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
        } // months -> when current year or boundaries change


        if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
          state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
        }
      } else {
        state.selectBoxes = {
          years: [],
          months: []
        };
      } // updating navigation arrows -> boundaries change (min/max) or month/year changes


      if ((state.navigation === 'arrows' || state.navigation === 'select') && (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
        state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
        state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
      }
    }

    return state;
  }

}

NgbDatepickerService.ɵfac = function NgbDatepickerService_Factory(t) {
  return new (t || NgbDatepickerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbDatepickerI18n));
};

NgbDatepickerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerService,
  factory: NgbDatepickerService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: NgbCalendar
    }, {
      type: NgbDatepickerI18n
    }];
  }, null);
})(); // clang-format on


var NavigationEvent;

(function (NavigationEvent) {
  NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
  NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */


class NgbDatepickerConfig {
  constructor() {
    this.displayMonths = 1;
    this.firstDayOfWeek = 1;
    this.navigation = 'select';
    this.outsideDays = 'visible';
    this.showWeekNumbers = false;
    this.weekdays = _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Short;
  }

}

NgbDatepickerConfig.ɵfac = function NgbDatepickerConfig_Factory(t) {
  return new (t || NgbDatepickerConfig)();
};

NgbDatepickerConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerConfig,
  factory: NgbDatepickerConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */


class NgbDateAdapter {}

NgbDateAdapter.ɵfac = function NgbDateAdapter_Factory(t) {
  return new (t || NgbDateAdapter)();
};

NgbDateAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateAdapter,
  factory: function () {
    return NGB_DATEPICKER_DATE_ADAPTER_FACTORY();
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
    }]
  }], null, null);
})();

class NgbDateStructAdapter extends NgbDateAdapter {
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  fromModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */


  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }

}

NgbDateStructAdapter.ɵfac = /* @__PURE__ */function () {
  let ɵNgbDateStructAdapter_BaseFactory;
  return function NgbDateStructAdapter_Factory(t) {
    return (ɵNgbDateStructAdapter_BaseFactory || (ɵNgbDateStructAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateStructAdapter)))(t || NgbDateStructAdapter);
  };
}();

NgbDateStructAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateStructAdapter,
  factory: NgbDateStructAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateStructAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class NgbDatepickerDayView {
  constructor(i18n) {
    this.i18n = i18n;
  }

  isMuted() {
    return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
  }

}

NgbDatepickerDayView.ɵfac = function NgbDatepickerDayView_Factory(t) {
  return new (t || NgbDatepickerDayView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};

NgbDatepickerDayView.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerDayView,
  selectors: [["", "ngbDatepickerDayView", ""]],
  hostAttrs: [1, "btn-light"],
  hostVars: 10,
  hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
    }
  },
  inputs: {
    currentMonth: "currentMonth",
    date: "date",
    disabled: "disabled",
    focused: "focused",
    selected: "selected"
  },
  attrs: _c10,
  decls: 1,
  vars: 1,
  template: function NgbDatepickerDayView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.i18n.getDayNumerals(ctx.date));
    }
  },
  styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView].outside{opacity:.5}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerDayView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[ngbDatepickerDayView]',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'btn-light',
        '[class.bg-primary]': 'selected',
        '[class.text-white]': 'selected',
        '[class.text-muted]': 'isMuted()',
        '[class.outside]': 'isMuted()',
        '[class.active]': 'focused'
      },
      template: `{{ i18n.getDayNumerals(date) }}`,
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView].outside{opacity:.5}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    currentMonth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgbDatepickerNavigationSelect {
  constructor(i18n, _renderer) {
    this.i18n = i18n;
    this._renderer = _renderer;
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._month = -1;
    this._year = -1;
  }

  changeMonth(month) {
    this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
  }

  changeYear(year) {
    this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
  }

  ngAfterViewChecked() {
    if (this.date) {
      if (this.date.month !== this._month) {
        this._month = this.date.month;

        this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
      }

      if (this.date.year !== this._year) {
        this._year = this.date.year;

        this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
      }
    }
  }

}

NgbDatepickerNavigationSelect.ɵfac = function NgbDatepickerNavigationSelect_Factory(t) {
  return new (t || NgbDatepickerNavigationSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

NgbDatepickerNavigationSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerNavigationSelect,
  selectors: [["ngb-datepicker-navigation-select"]],
  viewQuery: function NgbDatepickerNavigationSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthSelect = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearSelect = _t.first);
    }
  },
  inputs: {
    date: "date",
    disabled: "disabled",
    months: "months",
    years: "years"
  },
  outputs: {
    select: "select"
  },
  decls: 6,
  vars: 4,
  consts: function () {
    let i18n_13;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_14 = goog.getMsg("Select month");
      i18n_13 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_14;
    } else {
      i18n_13 = $localize`:@@ngb.datepicker.select-month:Select month`;
    }

    let i18n_15;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_16 = goog.getMsg("Select month");
      i18n_15 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_16;
    } else {
      i18n_15 = $localize`:@@ngb.datepicker.select-month:Select month`;
    }

    let i18n_17;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_18 = goog.getMsg("Select year");
      i18n_17 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_18;
    } else {
      i18n_17 = $localize`:@@ngb.datepicker.select-year:Select year`;
    }

    let i18n_19;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_20 = goog.getMsg("Select year");
      i18n_19 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_20;
    } else {
      i18n_19 = $localize`:@@ngb.datepicker.select-year:Select year`;
    }

    return [["aria-label", i18n_13, "title", i18n_15, 1, "form-select", 3, "disabled", "change"], ["month", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", i18n_17, "title", i18n_19, 1, "form-select", 3, "disabled", "change"], ["year", ""], [3, "value"]];
  },
  template: function NgbDatepickerNavigationSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) {
        return ctx.changeMonth($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbDatepickerNavigationSelect_option_2_Template, 2, 3, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbDatepickerNavigationSelect_Template_select_change_3_listener($event) {
        return ctx.changeYear($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbDatepickerNavigationSelect_option_5_Template, 2, 2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"]],
  styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerNavigationSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-datepicker-navigation-select',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <select #month
      [disabled]="disabled"
      class="form-select"
      i18n-aria-label="@@ngb.datepicker.select-month" aria-label="Select month"
      i18n-title="@@ngb.datepicker.select-month" title="Select month"
      (change)="changeMonth($any($event).target.value)">
        <option *ngFor="let m of months" [attr.aria-label]="i18n.getMonthFullName(m, date?.year)"
                [value]="m">{{ i18n.getMonthShortName(m, date?.year) }}</option>
    </select><select #year
      [disabled]="disabled"
      class="form-select"
      i18n-aria-label="@@ngb.datepicker.select-year" aria-label="Select year"
      i18n-title="@@ngb.datepicker.select-year" title="Select year"
      (change)="changeYear($any($event).target.value)">
        <option *ngFor="let y of years" [value]="y">{{ i18n.getYearNumerals(y) }}</option>
    </select>
  `,
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    months: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    years: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['month', {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    yearSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['year', {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();

class NgbDatepickerNavigation {
  constructor(i18n) {
    this.i18n = i18n;
    this.navigation = NavigationEvent;
    this.months = [];
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onClickPrev(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.PREV);
  }

  onClickNext(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.NEXT);
  }

}

NgbDatepickerNavigation.ɵfac = function NgbDatepickerNavigation_Factory(t) {
  return new (t || NgbDatepickerNavigation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};

NgbDatepickerNavigation.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerNavigation,
  selectors: [["ngb-datepicker-navigation"]],
  inputs: {
    date: "date",
    disabled: "disabled",
    months: "months",
    showSelect: "showSelect",
    prevDisabled: "prevDisabled",
    nextDisabled: "nextDisabled",
    selectBoxes: "selectBoxes"
  },
  outputs: {
    navigate: "navigate",
    select: "select"
  },
  decls: 8,
  vars: 4,
  consts: function () {
    let i18n_21;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_22 = goog.getMsg("Previous month");
      i18n_21 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_22;
    } else {
      i18n_21 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
    }

    let i18n_23;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_24 = goog.getMsg("Previous month");
      i18n_23 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_24;
    } else {
      i18n_23 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
    }

    let i18n_25;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_26 = goog.getMsg("Next month");
      i18n_25 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_26;
    } else {
      i18n_25 = $localize`:@@ngb.datepicker.next-month:Next month`;
    }

    let i18n_27;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_28 = goog.getMsg("Next month");
      i18n_27 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_28;
    } else {
      i18n_27 = $localize`:@@ngb.datepicker.next-month:Next month`;
    }

    return [[1, "ngb-dp-arrow"], ["type", "button", "aria-label", i18n_21, "title", i18n_23, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "disabled", "click"], [1, "ngb-dp-navigation-chevron"], ["class", "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select", 4, "ngIf"], [4, "ngIf"], [1, "ngb-dp-arrow", "right"], ["type", "button", "aria-label", i18n_25, "title", i18n_27, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "disabled", "click"], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select"], ["ngFor", "", 3, "ngForOf"], ["class", "ngb-dp-arrow", 4, "ngIf"], [1, "ngb-dp-month-name"]];
  },
  template: function NgbDatepickerNavigation_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDatepickerNavigation_Template_button_click_1_listener($event) {
        return ctx.onClickPrev($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template, 1, 4, "ngb-datepicker-navigation-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgbDatepickerNavigation_4_Template, 1, 1, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDatepickerNavigation_Template_button_click_6_listener($event) {
        return ctx.onClickNext($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextDisabled);
    }
  },
  directives: [NgbDatepickerNavigationSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf],
  styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerNavigation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-datepicker-navigation',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="ngb-dp-arrow">
      <button type="button" class="btn btn-link ngb-dp-arrow-btn" (click)="onClickPrev($event)" [disabled]="prevDisabled"
              i18n-aria-label="@@ngb.datepicker.previous-month" aria-label="Previous month"
              i18n-title="@@ngb.datepicker.previous-month" title="Previous month">
        <span class="ngb-dp-navigation-chevron"></span>
      </button>
    </div>
    <ngb-datepicker-navigation-select *ngIf="showSelect" class="ngb-dp-navigation-select"
      [date]="date"
      [disabled] = "disabled"
      [months]="selectBoxes.months"
      [years]="selectBoxes.years"
      (select)="select.emit($event)">
    </ngb-datepicker-navigation-select>

    <ng-template *ngIf="!showSelect" ngFor let-month [ngForOf]="months" let-i="index">
      <div class="ngb-dp-arrow" *ngIf="i > 0"></div>
      <div class="ngb-dp-month-name">
        {{ i18n.getMonthLabel(month.firstDate) }}
      </div>
      <div class="ngb-dp-arrow" *ngIf="i !== months.length - 1"></div>
    </ng-template>
    <div class="ngb-dp-arrow right">
      <button type="button" class="btn btn-link ngb-dp-arrow-btn" (click)="onClickNext($event)" [disabled]="nextDisabled"
              i18n-aria-label="@@ngb.datepicker.next-month" aria-label="Next month"
              i18n-title="@@ngb.datepicker.next-month" title="Next month">
        <span class="ngb-dp-navigation-chevron"></span>
      </button>
    </div>
    `,
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    months: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prevDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectBoxes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

var Key;

(function (Key) {
  Key[Key["Tab"] = 9] = "Tab";
  Key[Key["Enter"] = 13] = "Enter";
  Key[Key["Escape"] = 27] = "Escape";
  Key[Key["Space"] = 32] = "Space";
  Key[Key["PageUp"] = 33] = "PageUp";
  Key[Key["PageDown"] = 34] = "PageDown";
  Key[Key["End"] = 35] = "End";
  Key[Key["Home"] = 36] = "Home";
  Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
  Key[Key["ArrowUp"] = 38] = "ArrowUp";
  Key[Key["ArrowRight"] = 39] = "ArrowRight";
  Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
/**
 * A service that represents the keyboard navigation.
 *
 * Default keyboard shortcuts [are documented in the overview](#/components/datepicker/overview#keyboard-shortcuts)
 *
 * @since 5.2.0
 */


class NgbDatepickerKeyboardService {
  /**
   * Processes a keyboard event.
   */
  processKey(event, datepicker) {
    const {
      state,
      calendar
    } = datepicker;
    /* eslint-disable-next-line deprecation/deprecation */

    switch (event.which) {
      case Key.PageUp:
        datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
        break;

      case Key.PageDown:
        datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
        break;

      case Key.End:
        datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
        break;

      case Key.Home:
        datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
        break;

      case Key.ArrowLeft:
        datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', 1));
        break;

      case Key.ArrowUp:
        datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', calendar.getDaysPerWeek()));
        break;

      case Key.ArrowRight:
        datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', 1));
        break;

      case Key.ArrowDown:
        datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', calendar.getDaysPerWeek()));
        break;

      case Key.Enter:
      case Key.Space:
        datepicker.focusSelect();
        break;

      default:
        return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

}

NgbDatepickerKeyboardService.ɵfac = function NgbDatepickerKeyboardService_Factory(t) {
  return new (t || NgbDatepickerKeyboardService)();
};

NgbDatepickerKeyboardService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerKeyboardService,
  factory: NgbDatepickerKeyboardService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerKeyboardService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * A directive that marks the content template that customizes the way datepicker months are displayed
 *
 * @since 5.3.0
 */


class NgbDatepickerContent {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbDatepickerContent.ɵfac = function NgbDatepickerContent_Factory(t) {
  return new (t || NgbDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbDatepickerContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDatepickerContent,
  selectors: [["ng-template", "ngbDatepickerContent", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbDatepickerContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */


class NgbDatepicker {
  constructor(_service, _calendar, i18n, config, cd, _elementRef, _ngbDateAdapter, _ngZone) {
    this._service = _service;
    this._calendar = _calendar;
    this.i18n = i18n;
    this._elementRef = _elementRef;
    this._ngbDateAdapter = _ngbDateAdapter;
    this._ngZone = _ngZone;
    this._controlValue = null;
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._publicState = {};
    /**
     * An event emitted right before the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */

    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 5.2.0
     */

    this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.onChange = _ => {};

    this.onTouched = () => {};

    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showWeekNumbers', 'startDate', 'weekdays'].forEach(input => this[input] = config[input]);

    _service.dateSelect$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed$)).subscribe(date => {
      this.dateSelect.emit(date);
    });

    _service.model$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed$)).subscribe(model => {
      const newDate = model.firstDate;
      const oldDate = this.model ? this.model.firstDate : null; // update public state

      this._publicState = {
        maxDate: model.maxDate,
        minDate: model.minDate,
        firstDate: model.firstDate,
        lastDate: model.lastDate,
        focusedDate: model.focusDate,
        months: model.months.map(viewModel => viewModel.firstDate)
      };
      let navigationPrevented = false; // emitting navigation event if the first month changes

      if (!newDate.equals(oldDate)) {
        this.navigate.emit({
          current: oldDate ? {
            year: oldDate.year,
            month: oldDate.month
          } : null,
          next: {
            year: newDate.year,
            month: newDate.month
          },
          preventDefault: () => navigationPrevented = true
        }); // can't prevent the very first navigation

        if (navigationPrevented && oldDate !== null) {
          this._service.open(oldDate);

          return;
        }
      }

      const newSelectedDate = model.selectedDate;
      const newFocusedDate = model.focusDate;
      const oldFocusedDate = this.model ? this.model.focusDate : null;
      this.model = model; // handling selection change

      if (isChangedDate(newSelectedDate, this._controlValue)) {
        this._controlValue = newSelectedDate;
        this.onTouched();
        this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
      } // handling focus change


      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        this.focus();
      }

      cd.markForCheck();
    });
  }
  /**
   *  Returns the readonly public state of the datepicker
   *
   * @since 5.2.0
   */


  get state() {
    return this._publicState;
  }
  /**
   *  Returns the calendar service used in the specific datepicker instance.
   *
   *  @since 5.3.0
   */


  get calendar() {
    return this._calendar;
  }
  /**
   *  Focuses on given date.
   */


  focusDate(date) {
    this._service.focus(NgbDate.from(date));
  }
  /**
   *  Selects focused date.
   */


  focusSelect() {
    this._service.focusSelect();
  }

  focus() {
    this._ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      const elementToFocus = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');

      if (elementToFocus) {
        elementToFocus.focus();
      }
    });
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */


  navigateTo(date) {
    this._service.open(NgbDate.from(date ? date.day ? date : Object.assign(Object.assign({}, date), {
      day: 1
    }) : null));
  }

  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      const focusIns$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._contentEl.nativeElement, 'focusin');
      const focusOuts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._contentEl.nativeElement, 'focusout');
      const {
        nativeElement
      } = this._elementRef; // we're changing 'focusVisible' only when entering or leaving months view
      // and ignoring all focus events where both 'target' and 'related' target are day cells

      (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(focusIns$, focusOuts$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(({
        target,
        relatedTarget
      }) => !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day') && nativeElement.contains(target) && nativeElement.contains(relatedTarget))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed$)).subscribe(({
        type
      }) => this._ngZone.run(() => this._service.set({
        focusVisible: type === 'focusin'
      })));
    });
  }

  ngOnDestroy() {
    this._destroyed$.next();
  }

  ngOnInit() {
    if (this.model === undefined) {
      const inputs = {};
      ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays', 'weekdays'].forEach(name => inputs[name] = this[name]);

      this._service.set(inputs);

      this.navigateTo(this.startDate);
    }

    if (!this.dayTemplate) {
      this.dayTemplate = this._defaultDayTemplate;
    }
  }

  ngOnChanges(changes) {
    const inputs = {};
    ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays', 'weekdays'].filter(name => name in changes).forEach(name => inputs[name] = this[name]);

    this._service.set(inputs);

    if ('startDate' in changes) {
      const {
        currentValue,
        previousValue
      } = changes.startDate;

      if (isChangedMonth(previousValue, currentValue)) {
        this.navigateTo(this.startDate);
      }
    }
  }

  onDateSelect(date) {
    this._service.focus(date);

    this._service.select(date, {
      emitEvent: true
    });
  }

  onNavigateDateSelect(date) {
    this._service.open(date);
  }

  onNavigateEvent(event) {
    switch (event) {
      case NavigationEvent.PREV:
        this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));

        break;

      case NavigationEvent.NEXT:
        this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));

        break;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this._service.set({
      disabled
    });
  }

  writeValue(value) {
    this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));

    this._service.select(this._controlValue);
  }

}

NgbDatepicker.ɵfac = function NgbDatepicker_Factory(t) {
  return new (t || NgbDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbDatepicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepicker,
  selectors: [["ngb-datepicker"]],
  contentQueries: function NgbDatepicker_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDatepickerContent, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    }
  },
  viewQuery: function NgbDatepicker_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c29, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c30, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._defaultDayTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentEl = _t.first);
    }
  },
  inputs: {
    dayTemplate: "dayTemplate",
    dayTemplateData: "dayTemplateData",
    displayMonths: "displayMonths",
    firstDayOfWeek: "firstDayOfWeek",
    footerTemplate: "footerTemplate",
    markDisabled: "markDisabled",
    maxDate: "maxDate",
    minDate: "minDate",
    navigation: "navigation",
    outsideDays: "outsideDays",
    showWeekNumbers: "showWeekNumbers",
    startDate: "startDate",
    weekdays: "weekdays"
  },
  outputs: {
    navigate: "navigate",
    dateSelect: "dateSelect"
  },
  exportAs: ["ngbDatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDatepicker),
    multi: true
  }, NgbDatepickerService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 10,
  vars: 5,
  consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select", 4, "ngIf"], [1, "ngb-dp-content"], ["content", ""], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], ["class", "ngb-dp-month", 4, "ngFor", "ngForOf"], [1, "ngb-dp-month"], ["class", "ngb-dp-month-name", 4, "ngIf"], [3, "month"], [1, "ngb-dp-month-name"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select"]],
  template: function NgbDatepicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbDatepicker_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbDatepicker_ngb_datepicker_navigation_5_Template, 1, 7, "ngb-datepicker-navigation", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgbDatepicker_ng_template_8_Template, 0, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgbDatepicker_ng_template_9_Template, 0, 0, "ng-template", 6);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navigation !== "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-dp-months", !ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx.contentTemplate == null ? null : ctx.contentTemplate.templateRef) || _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerTemplate);
    }
  },
  directives: function () {
    return [NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet];
  },
  styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--bs-light)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--bs-light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      exportAs: 'ngbDatepicker',
      selector: 'ngb-datepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-template #defaultDayTemplate let-date="date" let-currentMonth="currentMonth" let-selected="selected"
                 let-disabled="disabled" let-focused="focused">
      <div ngbDatepickerDayView
        [date]="date"
        [currentMonth]="currentMonth"
        [selected]="selected"
        [disabled]="disabled"
        [focused]="focused">
      </div>
    </ng-template>

    <ng-template #defaultContentTemplate>
      <div *ngFor="let month of model.months; let i = index;" class="ngb-dp-month">
        <div *ngIf="navigation === 'none' || (displayMonths > 1 && navigation === 'select')" class="ngb-dp-month-name">
          {{ i18n.getMonthLabel(month.firstDate) }}
        </div>
        <ngb-datepicker-month [month]="month.firstDate"></ngb-datepicker-month>
      </div>
    </ng-template>

    <div class="ngb-dp-header">
      <ngb-datepicker-navigation *ngIf="navigation !== 'none'"
        [date]="model.firstDate!"
        [months]="model.months"
        [disabled]="model.disabled"
        [showSelect]="model.navigation === 'select'"
        [prevDisabled]="model.prevDisabled"
        [nextDisabled]="model.nextDisabled"
        [selectBoxes]="model.selectBoxes"
        (navigate)="onNavigateEvent($event)"
        (select)="onNavigateDateSelect($event)">
      </ngb-datepicker-navigation>
    </div>

    <div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
      <ng-template [ngTemplateOutlet]="contentTemplate?.templateRef || defaultContentTemplate"></ng-template>
    </div>

    <ng-template [ngTemplateOutlet]="footerTemplate"></ng-template>
  `,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDatepicker),
        multi: true
      }, NgbDatepickerService],
      styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--bs-light)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--bs-light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerService
    }, {
      type: NgbCalendar
    }, {
      type: NgbDatepickerI18n
    }, {
      type: NgbDatepickerConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NgbDateAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _defaultDayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['defaultDayTemplate', {
        static: true
      }]
    }],
    _contentEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        static: true
      }]
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbDatepickerContent, {
        static: true
      }]
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dayTemplateData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outsideDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    weekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dateSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */


class NgbDatepickerMonth {
  constructor(i18n, datepicker, _keyboardService, _service) {
    this.i18n = i18n;
    this.datepicker = datepicker;
    this._keyboardService = _keyboardService;
    this._service = _service;
  }
  /**
   * The first date of month to be rendered.
   *
   * This month must one of the months present in the
   * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
   */


  set month(month) {
    this.viewModel = this._service.getMonth(month);
  }

  onKeyDown(event) {
    this._keyboardService.processKey(event, this.datepicker);
  }

  doSelect(day) {
    if (!day.context.disabled && !day.hidden) {
      this.datepicker.onDateSelect(day.date);
    }
  }

}

NgbDatepickerMonth.ɵfac = function NgbDatepickerMonth_Factory(t) {
  return new (t || NgbDatepickerMonth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepicker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerKeyboardService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDatepickerService));
};

NgbDatepickerMonth.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbDatepickerMonth,
  selectors: [["ngb-datepicker-month"]],
  hostAttrs: ["role", "grid"],
  hostBindings: function NgbDatepickerMonth_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgbDatepickerMonth_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    month: "month"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "ngb-dp-week ngb-dp-weekdays", "role", "row", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], ["class", "ngb-dp-weekday ngb-dp-showweek small", 4, "ngIf"], ["class", "ngb-dp-weekday small", "role", "columnheader", 4, "ngFor", "ngForOf"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["class", "ngb-dp-week", "role", "row", 4, "ngIf"], ["role", "row", 1, "ngb-dp-week"], ["class", "ngb-dp-week-number small text-muted", 4, "ngIf"], ["class", "ngb-dp-day", "role", "gridcell", 3, "disabled", "tabindex", "hidden", "ngb-dp-today", "click", 4, "ngFor", "ngForOf"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "tabindex", "click"], [3, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbDatepickerMonth_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbDatepickerMonth_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbDatepickerMonth_ng_template_1_Template, 1, 1, "ng-template", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewModel.weekdays.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewModel.weeks);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  styles: ["ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#0dcaf0;color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--bs-light)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerMonth, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-datepicker-month',
      host: {
        'role': 'grid',
        '(keydown)': 'onKeyDown($event)'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div *ngIf="viewModel.weekdays.length > 0" class="ngb-dp-week ngb-dp-weekdays" role="row">
      <div *ngIf="datepicker.showWeekNumbers" class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
      <div *ngFor="let weekday of viewModel.weekdays" class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
    </div>
    <ng-template ngFor let-week [ngForOf]="viewModel.weeks">
      <div *ngIf="!week.collapsed" class="ngb-dp-week" role="row">
        <div *ngIf="datepicker.showWeekNumbers" class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
        <div *ngFor="let day of week.days" (click)="doSelect(day); $event.preventDefault()" class="ngb-dp-day" role="gridcell"
             [class.disabled]="day.context.disabled"
             [tabindex]="day.tabindex"
             [class.hidden]="day.hidden"
             [class.ngb-dp-today]="day.context.today"
             [attr.aria-label]="day.ariaLabel">
          <ng-template [ngIf]="!day.hidden">
            <ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context"></ng-template>
          </ng-template>
        </div>
      </div>
    </ng-template>
  `,
      styles: ["ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#0dcaf0;color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--bs-light)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}\n"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }, {
      type: NgbDatepicker
    }, {
      type: NgbDatepickerKeyboardService
    }, {
      type: NgbDatepickerService
    }];
  }, {
    month: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const isContainedIn = (element, array) => array ? array.some(item => item.contains(element)) : false;

const matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null; // we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID


const isMobile = (() => {
  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;

  const isAndroid = () => /Android/.test(navigator.userAgent);

  return typeof navigator !== 'undefined' ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
})(); // setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
// when tapping on the triggering element


const wrapAsyncForMobile = fn => isMobile ? () => setTimeout(() => fn(), 100) : fn;

function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
  // closing on ESC and outside clicks
  if (type) {
    zone.runOutsideAngular(wrapAsyncForMobile(() => {
      const shouldCloseOnClick = event => {
        const element = event.target;

        if (event.button === 2 || isContainedIn(element, ignoreElements)) {
          return false;
        }

        if (type === 'inside') {
          return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
        } else if (type === 'outside') {
          return !isContainedIn(element, insideElements);
        } else
          /* if (type === true) */
          {
            return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
          }
      };

      const escapes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(document, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(closed$),
      /* eslint-disable-next-line deprecation/deprecation */
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Escape), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(e => e.preventDefault())); // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
      // because on 'mouseup' DOM nodes might be detached

      const mouseDowns$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(document, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(shouldCloseOnClick), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(closed$));
      const closeableClicks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(document, 'mouseup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.withLatestFrom)(mouseDowns$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(([_, shouldClose]) => shouldClose), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(closed$));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.race)([escapes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(_ => 0
      /* ESCAPE */
      )), closeableClicks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(_ => 1
      /* CLICK */
      ))]).subscribe(source => zone.run(() => close(source)));
    }));
  }
}

const FOCUSABLE_ELEMENTS_SELECTOR = ['a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])', 'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'].join(', ');
/**
 * Returns first and last focusable elements inside of a given element based on specific CSS selector
 */

function getFocusableBoundaryElements(element) {
  const list = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)).filter(el => el.tabIndex !== -1);
  return [list[0], list[list.length - 1]];
}
/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * @param zone Angular zone
 * @param element The element around which focus will be trapped inside
 * @param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * @param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 */


const ngbFocusTrap = (zone, element, stopFocusTrap$, refocusOnClick = false) => {
  zone.runOutsideAngular(() => {
    // last focused element
    const lastFocusedElement$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'focusin').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stopFocusTrap$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(e => e.target)); // 'tab' / 'shift+tab' stream

    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stopFocusTrap$),
    /* eslint-disable-next-line deprecation/deprecation */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Tab), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.withLatestFrom)(lastFocusedElement$)).subscribe(([tabEvent, focusedElement]) => {
      const [first, last] = getFocusableBoundaryElements(element);

      if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
        last.focus();
        tabEvent.preventDefault();
      }

      if (focusedElement === last && !tabEvent.shiftKey) {
        first.focus();
        tabEvent.preventDefault();
      }
    }); // inside click

    if (refocusOnClick) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(element, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(stopFocusTrap$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.withLatestFrom)(lastFocusedElement$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(arr => arr[1])).subscribe(lastFocusedElement => lastFocusedElement.focus());
    }
  });
};

const placementSeparator = /\s+/;
const spacesRegExp = /  +/gi;
const startPrimaryPlacement = /^start/;
const endPrimaryPlacement = /^end/;
const startSecondaryPlacement = /-(top|left)$/;
const endSecondaryPlacement = /-(bottom|right)$/;

function getPopperClassPlacement(placement) {
  const newPlacement = placement.replace(startPrimaryPlacement, 'left').replace(endPrimaryPlacement, 'right').replace(startSecondaryPlacement, '-start').replace(endSecondaryPlacement, '-end');
  return newPlacement;
}

const popperStartPrimaryPlacement = /^left/;
const popperEndPrimaryPlacement = /^right/;
const popperStartSecondaryPlacement = /^start/;
const popperEndSecondaryPlacement = /^end/;

function getBootstrapBaseClassPlacement(baseClass, placement) {
  let [primary, secondary] = placement.split('-');
  const newPrimary = primary.replace(popperStartPrimaryPlacement, 'start').replace(popperEndPrimaryPlacement, 'end');
  let classnames = [newPrimary];

  if (secondary) {
    let newSecondary = secondary;

    if (primary === 'left' || primary === 'right') {
      newSecondary = newSecondary.replace(popperStartSecondaryPlacement, 'top').replace(popperEndSecondaryPlacement, 'bottom');
    }

    classnames.push(`${newPrimary}-${newSecondary}`);
  }

  if (baseClass) {
    classnames = classnames.map(classname => `${baseClass}-${classname}`);
  }

  return classnames.join(' ');
}
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'start', 'end',
 *   'top-start', 'top-end',
 *   'bottom-start', 'bottom-end',
 *   'start-top', 'start-bottom',
 *   'end-top', 'end-bottom'.
 * */


function getPopperOptions({
  placement,
  baseClass
}) {
  let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator); // No need to consider left and right here, as start and end are enough, and it is used for 'auto' placement only

  const allowedPlacements = ['top', 'bottom', 'start', 'end', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'start-top', 'start-bottom', 'end-top', 'end-bottom']; // replace auto placement with other placements

  let hasAuto = placementVals.findIndex(val => val === 'auto');

  if (hasAuto >= 0) {
    allowedPlacements.forEach(function (obj) {
      if (placementVals.find(val => val.search('^' + obj) !== -1) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  }

  const popperPlacements = placementVals.map(_placement => {
    return getPopperClassPlacement(_placement);
  });
  let mainPlacement = popperPlacements.shift();
  const bsModifier = {
    name: 'bootstrapClasses',
    enabled: !!baseClass,
    phase: 'write',

    fn({
      state
    }) {
      const bsClassRegExp = new RegExp(baseClass + '-[a-z]+', 'gi');
      const popperElement = state.elements.popper;
      const popperPlacement = state.placement;
      let className = popperElement.className; // Remove old bootstrap classes

      className = className.replace(bsClassRegExp, ''); // Add current placements

      className += ` ${getBootstrapBaseClassPlacement(baseClass, popperPlacement)}`; // Remove multiple spaces

      className = className.trim().replace(spacesRegExp, ' '); // Reassign

      popperElement.className = className;
    }

  };
  return {
    placement: mainPlacement,
    modifiers: [bsModifier, _popperjs_core__WEBPACK_IMPORTED_MODULE_26__["default"], _popperjs_core__WEBPACK_IMPORTED_MODULE_27__["default"], _popperjs_core__WEBPACK_IMPORTED_MODULE_28__["default"], {
      enabled: true,
      name: 'flip',
      options: {
        fallbackPlacements: popperPlacements
      }
    }, {
      enabled: true,
      name: 'preventOverflow',
      phase: 'main',
      fn: function () {}
    }]
  };
}

function noop(arg) {
  return arg;
}

function ngbPositioning() {
  let popperInstance = null;
  return {
    createPopper(positioningOption) {
      if (!popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption));
        popperInstance = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_29__.createPopper)(positioningOption.hostElement, positioningOption.targetElement, popperOptions);
      }
    },

    update() {
      if (popperInstance) {
        popperInstance.update();
      }
    },

    setOptions(positioningOption) {
      if (popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption));
        popperInstance.setOptions(popperOptions);
      }
    },

    destroy() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }

  };
}
/**
 * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepicker inputs used in the application.
 *
 * @since 5.2.0
 */


class NgbInputDatepickerConfig extends NgbDatepickerConfig {
  constructor() {
    super(...arguments);
    this.autoClose = true;
    this.placement = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
    this.restoreFocus = true;
  }

}

NgbInputDatepickerConfig.ɵfac = /* @__PURE__ */function () {
  let ɵNgbInputDatepickerConfig_BaseFactory;
  return function NgbInputDatepickerConfig_Factory(t) {
    return (ɵNgbInputDatepickerConfig_BaseFactory || (ɵNgbInputDatepickerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbInputDatepickerConfig)))(t || NgbInputDatepickerConfig);
  };
}();

NgbInputDatepickerConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbInputDatepickerConfig,
  factory: NgbInputDatepickerConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbInputDatepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgbDateISOParserFormatter();
}
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */


class NgbDateParserFormatter {}

NgbDateParserFormatter.ɵfac = function NgbDateParserFormatter_Factory(t) {
  return new (t || NgbDateParserFormatter)();
};

NgbDateParserFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateParserFormatter,
  factory: function () {
    return NGB_DATEPICKER_PARSER_FORMATTER_FACTORY();
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateParserFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
    }]
  }], null, null);
})();

class NgbDateISOParserFormatter extends NgbDateParserFormatter {
  parse(value) {
    if (value != null) {
      const dateParts = value.trim().split('-');

      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger(dateParts[0]),
          month: null,
          day: null
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }

    return null;
  }

  format(date) {
    return date ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}` : '';
  }

}

NgbDateISOParserFormatter.ɵfac = /* @__PURE__ */function () {
  let ɵNgbDateISOParserFormatter_BaseFactory;
  return function NgbDateISOParserFormatter_Factory(t) {
    return (ɵNgbDateISOParserFormatter_BaseFactory || (ɵNgbDateISOParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateISOParserFormatter)))(t || NgbDateISOParserFormatter);
  };
}();

NgbDateISOParserFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateISOParserFormatter,
  factory: NgbDateISOParserFormatter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateISOParserFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */


class NgbInputDatepicker {
  constructor(_parserFormatter, _elRef, _vcRef, _renderer, _ngZone, _calendar, _dateAdapter, _document, _changeDetector, config) {
    this._parserFormatter = _parserFormatter;
    this._elRef = _elRef;
    this._vcRef = _vcRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._calendar = _calendar;
    this._dateAdapter = _dateAdapter;
    this._document = _document;
    this._changeDetector = _changeDetector;
    this._cRef = null;
    this._disabled = false;
    this._elWithFocus = null;
    this._model = null;
    this._positioning = ngbPositioning();
    this._destroyCloseHandlers$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 1.1.1
     */

    this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted right after the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */

    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event fired after closing datepicker window.
     *
     * @since 4.2.0
     */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this._onChange = _ => {};

    this._onTouched = () => {};

    this._validatorChange = () => {};

    ['autoClose', 'container', 'positionTarget', 'placement'].forEach(input => this[input] = config[input]);
    this._zoneSubscription = _ngZone.onStable.subscribe(() => this._positioning.update());
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = value === '' || value && value !== 'false';

    if (this.isOpen()) {
      this._cRef.instance.setDisabledState(this._disabled);
    }
  }

  registerOnChange(fn) {
    this._onChange = fn;
  }

  registerOnTouched(fn) {
    this._onTouched = fn;
  }

  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  validate(c) {
    const {
      value
    } = c;

    if (value != null) {
      const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));

      if (!ngbDate) {
        return {
          'ngbDate': {
            invalid: value
          }
        };
      }

      if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
        return {
          'ngbDate': {
            minDate: {
              minDate: this.minDate,
              actual: value
            }
          }
        };
      }

      if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
        return {
          'ngbDate': {
            maxDate: {
              maxDate: this.maxDate,
              actual: value
            }
          }
        };
      }
    }

    return null;
  }

  writeValue(value) {
    this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));

    this._writeModelValue(this._model);
  }

  manualDateChange(value, updateView = false) {
    const inputValueChanged = value !== this._inputValue;

    if (inputValueChanged) {
      this._inputValue = value;
      this._model = this._fromDateStruct(this._parserFormatter.parse(value));
    }

    if (inputValueChanged || !updateView) {
      this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === '' ? null : value);
    }

    if (updateView && this._model) {
      this._writeModelValue(this._model);
    }
  }

  isOpen() {
    return !!this._cRef;
  }
  /**
   * Opens the datepicker popup.
   *
   * If the related form control contains a valid date, the corresponding month will be opened.
   */


  open() {
    if (!this.isOpen()) {
      this._cRef = this._vcRef.createComponent(NgbDatepicker);

      this._applyPopupStyling(this._cRef.location.nativeElement);

      this._applyDatepickerInputs(this._cRef.instance);

      this._subscribeForDatepickerOutputs(this._cRef.instance);

      this._cRef.instance.ngOnInit();

      this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model)); // date selection event handling


      this._cRef.instance.registerOnChange(selectedDate => {
        this.writeValue(selectedDate);

        this._onChange(selectedDate);

        this._onTouched();
      });

      this._cRef.changeDetectorRef.detectChanges();

      this._cRef.instance.setDisabledState(this.disabled);

      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
      } // focus handling


      this._elWithFocus = this._document.activeElement;
      ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);

      this._cRef.instance.focus();

      let hostElement;

      if (isString(this.positionTarget)) {
        hostElement = this._document.querySelector(this.positionTarget);
      } else if (this.positionTarget instanceof HTMLElement) {
        hostElement = this.positionTarget;
      } else {
        hostElement = this._elRef.nativeElement;
      }

      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        if (this._cRef) {
          this._positioning.createPopper({
            hostElement,
            targetElement: this._cRef.location.nativeElement,
            placement: this.placement,
            appendToBody: this.container === 'body'
          });
        }
      });

      if (this.positionTarget && !hostElement) {
        throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
      }

      this._setCloseHandlers();
    }
  }
  /**
   * Closes the datepicker popup.
   */


  close() {
    if (this.isOpen()) {
      this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));

      this._cRef = null;

      this._destroyCloseHandlers$.next();

      this.closed.emit();

      this._changeDetector.markForCheck(); // restore focus


      let elementToFocus = this._elWithFocus;

      if (isString(this.restoreFocus)) {
        elementToFocus = this._document.querySelector(this.restoreFocus);
      } else if (this.restoreFocus !== undefined) {
        elementToFocus = this.restoreFocus;
      } // in IE document.activeElement can contain an object without 'focus()' sometimes


      if (elementToFocus && elementToFocus['focus']) {
        elementToFocus.focus();
      } else {
        this._document.body.focus();
      }

      this._positioning.destroy();
    }
  }
  /**
   * Toggles the datepicker popup.
   */


  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */


  navigateTo(date) {
    if (this.isOpen()) {
      this._cRef.instance.navigateTo(date);
    }
  }

  onBlur() {
    this._onTouched();
  }

  onFocus() {
    this._elWithFocus = this._elRef.nativeElement;
  }

  ngOnChanges(changes) {
    if (changes['minDate'] || changes['maxDate']) {
      this._validatorChange();

      if (this.isOpen()) {
        if (changes['minDate']) {
          this._cRef.instance.minDate = this.minDate;
        }

        if (changes['maxDate']) {
          this._cRef.instance.maxDate = this.maxDate;
        }

        this._cRef.instance.ngOnChanges(changes);
      }
    }

    if (changes['datepickerClass']) {
      const {
        currentValue,
        previousValue
      } = changes['datepickerClass'];

      this._applyPopupClass(currentValue, previousValue);
    }

    if (changes['autoClose'] && this.isOpen()) {
      this._setCloseHandlers();
    }
  }

  ngOnDestroy() {
    this.close();

    this._zoneSubscription.unsubscribe();
  }

  _applyDatepickerInputs(datepickerInstance) {
    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekNumbers', 'weekdays'].forEach(optionName => {
      if (this[optionName] !== undefined) {
        datepickerInstance[optionName] = this[optionName];
      }
    });
    datepickerInstance.startDate = this.startDate || this._model;
  }

  _applyPopupClass(newClass, oldClass) {
    var _a;

    const popupEl = (_a = this._cRef) === null || _a === void 0 ? void 0 : _a.location.nativeElement;

    if (popupEl) {
      if (newClass) {
        this._renderer.addClass(popupEl, newClass);
      }

      if (oldClass) {
        this._renderer.removeClass(popupEl, oldClass);
      }
    }
  }

  _applyPopupStyling(nativeElement) {
    this._renderer.addClass(nativeElement, 'dropdown-menu');

    this._renderer.addClass(nativeElement, 'show');

    if (this.container === 'body') {
      this._renderer.addClass(nativeElement, 'ngb-dp-body');
    }

    this._applyPopupClass(this.datepickerClass);
  }

  _subscribeForDatepickerOutputs(datepickerInstance) {
    datepickerInstance.navigate.subscribe(navigateEvent => this.navigate.emit(navigateEvent));
    datepickerInstance.dateSelect.subscribe(date => {
      this.dateSelect.emit(date);

      if (this.autoClose === true || this.autoClose === 'inside') {
        this.close();
      }
    });
  }

  _writeModelValue(model) {
    const value = this._parserFormatter.format(model);

    this._inputValue = value;

    this._renderer.setProperty(this._elRef.nativeElement, 'value', value);

    if (this.isOpen()) {
      this._cRef.instance.writeValue(this._dateAdapter.toModel(model));

      this._onTouched();
    }
  }

  _fromDateStruct(date) {
    const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
    return this._calendar.isValid(ngbDate) ? ngbDate : null;
  }

  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();

    ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
  }

}

NgbInputDatepicker.ɵfac = function NgbInputDatepicker_Factory(t) {
  return new (t || NgbInputDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDateParserFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbInputDatepickerConfig));
};

NgbInputDatepicker.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbInputDatepicker,
  selectors: [["input", "ngbDatepicker", ""]],
  hostVars: 1,
  hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgbInputDatepicker_input_HostBindingHandler($event) {
        return ctx.manualDateChange($event.target.value);
      })("change", function NgbInputDatepicker_change_HostBindingHandler($event) {
        return ctx.manualDateChange($event.target.value, true);
      })("focus", function NgbInputDatepicker_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function NgbInputDatepicker_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    autoClose: "autoClose",
    datepickerClass: "datepickerClass",
    dayTemplate: "dayTemplate",
    dayTemplateData: "dayTemplateData",
    displayMonths: "displayMonths",
    firstDayOfWeek: "firstDayOfWeek",
    footerTemplate: "footerTemplate",
    markDisabled: "markDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    navigation: "navigation",
    outsideDays: "outsideDays",
    placement: "placement",
    restoreFocus: "restoreFocus",
    showWeekNumbers: "showWeekNumbers",
    startDate: "startDate",
    container: "container",
    positionTarget: "positionTarget",
    weekdays: "weekdays",
    disabled: "disabled"
  },
  outputs: {
    dateSelect: "dateSelect",
    navigate: "navigate",
    closed: "closed"
  },
  exportAs: ["ngbDatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
    multi: true
  }, {
    provide: NgbDatepickerConfig,
    useExisting: NgbInputDatepickerConfig
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbInputDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[ngbDatepicker]',
      exportAs: 'ngbDatepicker',
      host: {
        '(input)': 'manualDateChange($event.target.value)',
        '(change)': 'manualDateChange($event.target.value, true)',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
        '[disabled]': 'disabled'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]
    }]
  }], function () {
    return [{
      type: NgbDateParserFormatter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: NgbCalendar
    }, {
      type: NgbDateAdapter
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NgbInputDatepickerConfig
    }];
  }, {
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    datepickerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dayTemplateData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outsideDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    positionTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    weekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgbCalendarHijri extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }

  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  getWeeksPerMonth() {
    return 6;
  }

  getNext(date, period = 'd', number = 1) {
    date = new NgbDate(date.year, date.month, date.day);

    switch (period) {
      case 'y':
        date = this._setYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;

      case 'm':
        date = this._setMonth(date, date.month + number);
        date.day = 1;
        return date;

      case 'd':
        return this._setDay(date, date.day + number);

      default:
        return date;
    }
  }

  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }

  getWeekday(date) {
    const day = this.toGregorian(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

    return day === 0 ? 7 : day;
  }

  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }

    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = this.toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday

    const time = jsDate.getTime();
    const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1)); // Compare with Muharram 1

    return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
  }

  getToday() {
    return this.fromGregorian(new Date());
  }

  isValid(date) {
    return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
  }

  _setDay(date, day) {
    day = +day;
    let mDays = this.getDaysPerMonth(date.month, date.year);

    if (day <= 0) {
      while (day <= 0) {
        date = this._setMonth(date, date.month - 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
        day += mDays;
      }
    } else if (day > mDays) {
      while (day > mDays) {
        day -= mDays;
        date = this._setMonth(date, date.month + 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
      }
    }

    date.day = day;
    return date;
  }

  _setMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
  }

  _setYear(date, year) {
    date.year = +year;
    return date;
  }

}

NgbCalendarHijri.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarHijri_BaseFactory;
  return function NgbCalendarHijri_Factory(t) {
    return (ɵNgbCalendarHijri_BaseFactory || (ɵNgbCalendarHijri_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarHijri)))(t || NgbCalendarHijri);
  };
}();

NgbCalendarHijri.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarHijri,
  factory: NgbCalendarHijri.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarHijri, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Checks if islamic year is a leap year
 */


function isIslamicLeapYear(hYear) {
  return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 */


function isGregorianLeapYear$1(gDate) {
  const year = gDate.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 */


function getIslamicMonthStart(hYear, hMonth) {
  return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 */


function getIslamicYearStart(year) {
  return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}

function mod$1(a, b) {
  return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */


const GREGORIAN_EPOCH$1 = 1721425.5;
const ISLAMIC_EPOCH = 1948439.5;

class NgbCalendarIslamicCivil extends NgbCalendarHijri {
  /**
   * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
   * `gDate` is a JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    const gYear = gDate.getFullYear(),
          gMonth = gDate.getMonth(),
          gDay = gDate.getDate();
    let julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gDate) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay) + 0.5;
    const days = julianDay - ISLAMIC_EPOCH;
    const hYear = Math.floor((30 * days + 10646) / 10631.0);
    let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
    hMonth = Math.min(hMonth, 11);
    const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
    return new NgbDate(hYear, hMonth + 1, hDay);
  }
  /**
   * Returns the equivalent JS date value for a give input islamic(civil) date.
   * `hDate` is an islamic(civil) date to be converted to Gregorian.
   */


  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
    const wjd = Math.floor(julianDay - 0.5) + 0.5,
          depoch = wjd - GREGORIAN_EPOCH$1,
          quadricent = Math.floor(depoch / 146097),
          dqc = mod$1(depoch, 146097),
          cent = Math.floor(dqc / 36524),
          dcent = mod$1(dqc, 36524),
          quad = Math.floor(dcent / 1461),
          dquad = mod$1(dcent, 1461),
          yindex = Math.floor(dquad / 365);
    let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;

    if (!(cent === 4 || yindex === 4)) {
      year++;
    }

    const gYearStart = GREGORIAN_EPOCH$1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    const yearday = wjd - gYearStart;
    const tjd = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear$1(new Date(year, 3, 1)) ? -1 : -2) + 1);
    const leapadj = wjd < tjd ? 0 : isGregorianLeapYear$1(new Date(year, 3, 1)) ? 1 : 2;
    const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
    const tjd2 = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear$1(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
    const day = wjd - tjd2 + 1;
    return new Date(year, month - 1, day);
  }
  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */


  getDaysPerMonth(month, year) {
    year = year + Math.floor(month / 13);
    month = (month - 1) % 12 + 1;
    let length = 29 + month % 2;

    if (month === 12 && isIslamicLeapYear(year)) {
      length++;
    }

    return length;
  }

}

NgbCalendarIslamicCivil.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarIslamicCivil_BaseFactory;
  return function NgbCalendarIslamicCivil_Factory(t) {
    return (ɵNgbCalendarIslamicCivil_BaseFactory || (ɵNgbCalendarIslamicCivil_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarIslamicCivil)))(t || NgbCalendarIslamicCivil);
  };
}();

NgbCalendarIslamicCivil.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarIslamicCivil,
  factory: NgbCalendarIslamicCivil.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarIslamicCivil, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */


const GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
const GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
const HIJRI_BEGIN = 1300;
const HIJRI_END = 1600;
const ONE_DAY = 1000 * 60 * 60 * 24;
const MONTH_LENGTH = [// 1300-1304
'101010101010', '110101010100', '111011001001', '011011010100', '011011101010', // 1305-1309
'001101101100', '101010101101', '010101010101', '011010101001', '011110010010', // 1310-1314
'101110101001', '010111010100', '101011011010', '010101011100', '110100101101', // 1315-1319
'011010010101', '011101001010', '101101010100', '101101101010', '010110101101', // 1320-1324
'010010101110', '101001001111', '010100010111', '011010001011', '011010100101', // 1325-1329
'101011010101', '001011010110', '100101011011', '010010011101', '101001001101', // 1330-1334
'110100100110', '110110010101', '010110101100', '100110110110', '001010111010', // 1335-1339
'101001011011', '010100101011', '101010010101', '011011001010', '101011101001', // 1340-1344
'001011110100', '100101110110', '001010110110', '100101010110', '101011001010', // 1345-1349
'101110100100', '101111010010', '010111011001', '001011011100', '100101101101', // 1350-1354
'010101001101', '101010100101', '101101010010', '101110100101', '010110110100', // 1355-1359
'100110110110', '010101010111', '001010010111', '010101001011', '011010100011', // 1360-1364
'011101010010', '101101100101', '010101101010', '101010101011', '010100101011', // 1365-1369
'110010010101', '110101001010', '110110100101', '010111001010', '101011010110', // 1370-1374
'100101010111', '010010101011', '100101001011', '101010100101', '101101010010', // 1375-1379
'101101101010', '010101110101', '001001110110', '100010110111', '010001011011', // 1380-1384
'010101010101', '010110101001', '010110110100', '100111011010', '010011011101', // 1385-1389
'001001101110', '100100110110', '101010101010', '110101010100', '110110110010', // 1390-1394
'010111010101', '001011011010', '100101011011', '010010101011', '101001010101', // 1395-1399
'101101001001', '101101100100', '101101110001', '010110110100', '101010110101', // 1400-1404
'101001010101', '110100100101', '111010010010', '111011001001', '011011010100', // 1405-1409
'101011101001', '100101101011', '010010101011', '101010010011', '110101001001', // 1410-1414
'110110100100', '110110110010', '101010111001', '010010111010', '101001011011', // 1415-1419
'010100101011', '101010010101', '101100101010', '101101010101', '010101011100', // 1420-1424
'010010111101', '001000111101', '100100011101', '101010010101', '101101001010', // 1425-1429
'101101011010', '010101101101', '001010110110', '100100111011', '010010011011', // 1430-1434
'011001010101', '011010101001', '011101010100', '101101101010', '010101101100', // 1435-1439
'101010101101', '010101010101', '101100101001', '101110010010', '101110101001', // 1440-1444
'010111010100', '101011011010', '010101011010', '101010101011', '010110010101', // 1445-1449
'011101001001', '011101100100', '101110101010', '010110110101', '001010110110', // 1450-1454
'101001010110', '111001001101', '101100100101', '101101010010', '101101101010', // 1455-1459
'010110101101', '001010101110', '100100101111', '010010010111', '011001001011', // 1460-1464
'011010100101', '011010101100', '101011010110', '010101011101', '010010011101', // 1465-1469
'101001001101', '110100010110', '110110010101', '010110101010', '010110110101', // 1470-1474
'001011011010', '100101011011', '010010101101', '010110010101', '011011001010', // 1475-1479
'011011100100', '101011101010', '010011110101', '001010110110', '100101010110', // 1480-1484
'101010101010', '101101010100', '101111010010', '010111011001', '001011101010', // 1485-1489
'100101101101', '010010101101', '101010010101', '101101001010', '101110100101', // 1490-1494
'010110110010', '100110110101', '010011010110', '101010010111', '010101000111', // 1495-1499
'011010010011', '011101001001', '101101010101', '010101101010', '101001101011', // 1500-1504
'010100101011', '101010001011', '110101000110', '110110100011', '010111001010', // 1505-1509
'101011010110', '010011011011', '001001101011', '100101001011', '101010100101', // 1510-1514
'101101010010', '101101101001', '010101110101', '000101110110', '100010110111', // 1515-1519
'001001011011', '010100101011', '010101100101', '010110110100', '100111011010', // 1520-1524
'010011101101', '000101101101', '100010110110', '101010100110', '110101010010', // 1525-1529
'110110101001', '010111010100', '101011011010', '100101011011', '010010101011', // 1530-1534
'011001010011', '011100101001', '011101100010', '101110101001', '010110110010', // 1535-1539
'101010110101', '010101010101', '101100100101', '110110010010', '111011001001', // 1540-1544
'011011010010', '101011101001', '010101101011', '010010101011', '101001010101', // 1545-1549
'110100101001', '110101010100', '110110101010', '100110110101', '010010111010', // 1550-1554
'101000111011', '010010011011', '101001001101', '101010101010', '101011010101', // 1555-1559
'001011011010', '100101011101', '010001011110', '101000101110', '110010011010', // 1560-1564
'110101010101', '011010110010', '011010111001', '010010111010', '101001011101', // 1565-1569
'010100101101', '101010010101', '101101010010', '101110101000', '101110110100', // 1570-1574
'010110111001', '001011011010', '100101011010', '101101001010', '110110100100', // 1575-1579
'111011010001', '011011101000', '101101101010', '010101101101', '010100110101', // 1580-1584
'011010010101', '110101001010', '110110101000', '110111010100', '011011011010', // 1585-1589
'010101011011', '001010011101', '011000101011', '101100010101', '101101001010', // 1590-1594
'101110010101', '010110101010', '101010101110', '100100101110', '110010001111', // 1595-1599
'010100100111', '011010010101', '011010101010', '101011010110', '010101011101', // 1600
'001010011101'];

function getDaysDiff(date1, date2) {
  // Ignores the time part in date1 and date2:
  const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diff = Math.abs(time1 - time2);
  return Math.round(diff / ONE_DAY);
}

class NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
  /**
  * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
  * `gdate` is s JS Date to be converted to Hijri.
  */
  fromGregorian(gDate) {
    let hDay = 1,
        hMonth = 0,
        hYear = 1300;
    let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);

    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
      let year = 1300;

      for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
        for (let j = 0; j < 12; j++) {
          let numOfDays = +MONTH_LENGTH[i][j] + 29;

          if (daysDiff <= numOfDays) {
            hDay = daysDiff + 1;

            if (hDay > numOfDays) {
              hDay = 1;
              j++;
            }

            if (j > 11) {
              j = 0;
              year++;
            }

            hMonth = j;
            hYear = year;
            return new NgbDate(hYear, hMonth + 1, hDay);
          }

          daysDiff = daysDiff - numOfDays;
        }
      }

      return null;
    } else {
      return super.fromGregorian(gDate);
    }
  }
  /**
  * Converts the current Hijri date to Gregorian.
  */


  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    let gDate = new Date(GREGORIAN_FIRST_DATE);
    let dayDiff = hDay - 1;

    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
        for (let m = 0; m < 12; m++) {
          dayDiff += +MONTH_LENGTH[y][m] + 29;
        }
      }

      for (let m = 0; m < hMonth; m++) {
        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
      }

      gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
    } else {
      gDate = super.toGregorian(hDate);
    }

    return gDate;
  }
  /**
  * Returns the number of days in a specific Hijri hMonth.
  * `hMonth` is 1 for Muharram, 2 for Safar, etc.
  * `hYear` is any Hijri hYear.
  */


  getDaysPerMonth(hMonth, hYear) {
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      const pos = hYear - HIJRI_BEGIN;
      return +MONTH_LENGTH[pos][hMonth - 1] + 29;
    }

    return super.getDaysPerMonth(hMonth, hYear);
  }

}

NgbCalendarIslamicUmalqura.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarIslamicUmalqura_BaseFactory;
  return function NgbCalendarIslamicUmalqura_Factory(t) {
    return (ɵNgbCalendarIslamicUmalqura_BaseFactory || (ɵNgbCalendarIslamicUmalqura_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarIslamicUmalqura)))(t || NgbCalendarIslamicUmalqura);
  };
}();

NgbCalendarIslamicUmalqura.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarIslamicUmalqura,
  factory: NgbCalendarIslamicUmalqura.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarIslamicUmalqura, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 */


function toGregorian$2(jalaliDate) {
  let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
  let date = julianToGregorian(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 */


function fromGregorian$2(gdate) {
  let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return julianToJalali(g2d);
}

function setJalaliYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}

function setJalaliMonth(date, month) {
  month = +month;
  date.year = date.year + Math.floor((month - 1) / 12);
  date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
  return date;
}

function setJalaliDay(date, day) {
  let mDays = getDaysPerMonth(date.month, date.year);

  if (day <= 0) {
    while (day <= 0) {
      date = setJalaliMonth(date, date.month - 1);
      mDays = getDaysPerMonth(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setJalaliMonth(date, date.month + 1);
      mDays = getDaysPerMonth(date.month, date.year);
    }
  }

  date.day = day;
  return date;
}

function mod(a, b) {
  return a - b * Math.floor(a / b);
}

function div(a, b) {
  return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */


function jalCal(jalaliYear) {
  // Jalali years starting the 33-year rule.
  let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  const breaksLength = breaks.length;
  const gYear = jalaliYear + 621;
  let leapJ = -14;
  let jp = breaks[0];

  if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
    throw new Error('Invalid Jalali year ' + jalaliYear);
  } // Find the limiting years for the Jalali year jalaliYear.


  let jump;

  for (let i = 1; i < breaksLength; i += 1) {
    const jm = breaks[i];
    jump = jm - jp;

    if (jalaliYear < jm) {
      break;
    }

    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }

  let n = jalaliYear - jp; // Find the number of leap years from AD 621 to the beginning
  // of the current Jalali year in the Persian calendar.

  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);

  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  } // And the same in the Gregorian calendar (until the year gYear).


  const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150; // Determine the Gregorian date of Farvardin the 1st.

  const march = 20 + leapJ - leapG; // Find how many years have passed since the last leap year.

  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }

  let leap = mod(mod(n + 1, 33) - 1, 4);

  if (leap === -1) {
    leap = 4;
  }

  return {
    leap: leap,
    gy: gYear,
    march: march
  };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */


function julianToGregorian(julianDayNumber) {
  let j = 4 * julianDayNumber + 139361631;
  j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gDay = div(mod(i, 153), 5) + 1;
  const gMonth = mod(div(i, 153), 12) + 1;
  const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
  return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */


function gregorianToJulian(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */


function julianToJalali(julianDayNumber) {
  let gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
  ,
      jalaliYear = gy - 621,
      r = jalCal(jalaliYear),
      gregorianDay = gregorianToJulian(gy, 3, r.march),
      jalaliDay,
      jalaliMonth,
      numberOfDays; // Find number of days that passed since 1 Farvardin.

  numberOfDays = julianDayNumber - gregorianDay;

  if (numberOfDays >= 0) {
    if (numberOfDays <= 185) {
      // The first 6 months.
      jalaliMonth = 1 + div(numberOfDays, 31);
      jalaliDay = mod(numberOfDays, 31) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    } else {
      // The remaining months.
      numberOfDays -= 186;
    }
  } else {
    // Previous Jalali year.
    jalaliYear -= 1;
    numberOfDays += 179;

    if (r.leap === 1) {
      numberOfDays += 1;
    }
  }

  jalaliMonth = 7 + div(numberOfDays, 30);
  jalaliDay = mod(numberOfDays, 30) + 1;
  return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */


function jalaliToJulian(jYear, jMonth, jDay) {
  let r = jalCal(jYear);
  return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 */


function getDaysPerMonth(month, year) {
  if (month <= 6) {
    return 31;
  }

  if (month <= 11) {
    return 30;
  }

  if (jalCal(year).leap === 0) {
    return 30;
  }

  return 29;
}

class NgbCalendarPersian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }

  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  getWeeksPerMonth() {
    return 6;
  }

  getNext(date, period = 'd', number = 1) {
    date = new NgbDate(date.year, date.month, date.day);

    switch (period) {
      case 'y':
        date = setJalaliYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;

      case 'm':
        date = setJalaliMonth(date, date.month + number);
        date.day = 1;
        return date;

      case 'd':
        return setJalaliDay(date, date.day + number);

      default:
        return date;
    }
  }

  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }

  getWeekday(date) {
    const day = toGregorian$2(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

    return day === 0 ? 7 : day;
  }

  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }

    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian$2(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday

    const time = jsDate.getTime();
    const startDate = toGregorian$2(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
  }

  getToday() {
    return fromGregorian$2(new Date());
  }

  isValid(date) {
    return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian$2(date).getTime());
  }

}

NgbCalendarPersian.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarPersian_BaseFactory;
  return function NgbCalendarPersian_Factory(t) {
    return (ɵNgbCalendarPersian_BaseFactory || (ɵNgbCalendarPersian_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarPersian)))(t || NgbCalendarPersian);
  };
}();

NgbCalendarPersian.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarPersian,
  factory: NgbCalendarPersian.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarPersian, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

const PARTS_PER_HOUR = 1080;
const PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
const PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
const PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
const BAHARAD = 11 * PARTS_PER_HOUR + 204;
const HEBREW_DAY_ON_JAN_1_1970 = 2092591;
const GREGORIAN_EPOCH = 1721425.5;

function isGregorianLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function numberOfFirstDayInYear(year) {
  let monthsBeforeYear = Math.floor((235 * year - 234) / 19);
  let fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
  let dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
  let timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
  let dayOfWeek = dayNumber % 7; // 0 == Monday

  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    dayNumber++;
    dayOfWeek = dayNumber % 7;
  }

  if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
    dayNumber += 2;
  } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
    dayNumber++;
  }

  return dayNumber;
}

function getDaysInGregorianMonth(month, year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isGregorianLeapYear(year)) {
    days[1]++;
  }

  return days[month - 1];
}

function getHebrewMonths(year) {
  return isHebrewLeapYear(year) ? 13 : 12;
}
/**
 * Returns the number of days in a specific Hebrew year.
 * `year` is any Hebrew year.
 */


function getDaysInHebrewYear(year) {
  return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}

function isHebrewLeapYear(year) {
  if (year != null) {
    let b = (year * 12 + 17) % 19;
    return b >= (b < 0 ? -7 : 12);
  }

  return false;
}
/**
 * Returns the number of days in a specific Hebrew month.
 * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
 * `year` is any Hebrew year.
 */


function getDaysInHebrewMonth(month, year) {
  let yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
  let yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
  let leapYear = isHebrewLeapYear(year);
  let daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];

  if (yearType > 0) {
    daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
  }

  if (yearType > 1) {
    daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
  }

  return daysInMonth[month - 1];
}

function getDayNumberInHebrewYear(date) {
  let numberOfDay = 0;

  for (let i = 1; i < date.month; i++) {
    numberOfDay += getDaysInHebrewMonth(i, date.year);
  }

  return numberOfDay + date.day;
}

function setHebrewMonth(date, val) {
  let after = val >= 0;

  if (!after) {
    val = -val;
  }

  while (val > 0) {
    if (after) {
      if (val > getHebrewMonths(date.year) - date.month) {
        val -= getHebrewMonths(date.year) - date.month + 1;
        date.year++;
        date.month = 1;
      } else {
        date.month += val;
        val = 0;
      }
    } else {
      if (val >= date.month) {
        date.year--;
        val -= date.month;
        date.month = getHebrewMonths(date.year);
      } else {
        date.month -= val;
        val = 0;
      }
    }
  }

  return date;
}

function setHebrewDay(date, val) {
  let after = val >= 0;

  if (!after) {
    val = -val;
  }

  while (val > 0) {
    if (after) {
      if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
        val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
        date.year++;
        date.month = 1;
        date.day = 1;
      } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
        val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
        date.month++;
        date.day = 1;
      } else {
        date.day += val;
        val = 0;
      }
    } else {
      if (val >= date.day) {
        val -= date.day;
        date.month--;

        if (date.month === 0) {
          date.year--;
          date.month = getHebrewMonths(date.year);
        }

        date.day = getDaysInHebrewMonth(date.month, date.year);
      } else {
        date.day -= val;
        val = 0;
      }
    }
  }

  return date;
}
/**
 * Returns the equivalent Hebrew date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Hebrew date.
 */


function fromGregorian$1(gdate) {
  const date = new Date(gdate);
  const gYear = date.getFullYear(),
        gMonth = date.getMonth(),
        gDay = date.getDate();
  let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gYear) ? -1 : -2) + gDay);
  julianDay = Math.floor(julianDay + 0.5);
  let daysSinceHebEpoch = julianDay - 347997;
  let monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
  let hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
  let firstDayOfThisYear = numberOfFirstDayInYear(hYear);
  let dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;

  while (dayOfYear < 1) {
    hYear--;
    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  }

  let hMonth = 1;
  let hDay = dayOfYear;

  while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
    hDay -= getDaysInHebrewMonth(hMonth, hYear);
    hMonth++;
  }

  return new NgbDate(hYear, hMonth, hDay);
}
/**
 * Returns the equivalent JS date value for a given Hebrew date.
 * `hebrewDate` is an Hebrew date to be converted to Gregorian.
 */


function toGregorian$1(hebrewDate) {
  const hYear = hebrewDate.year;
  const hMonth = hebrewDate.month;
  const hDay = hebrewDate.day;
  let days = numberOfFirstDayInYear(hYear);

  for (let i = 1; i < hMonth; i++) {
    days += getDaysInHebrewMonth(i, hYear);
  }

  days += hDay;
  let diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
  let after = diffDays >= 0;

  if (!after) {
    diffDays = -diffDays;
  }

  let gYear = 1970;
  let gMonth = 1;
  let gDay = 1;

  while (diffDays > 0) {
    if (after) {
      if (diffDays >= (isGregorianLeapYear(gYear) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear) ? 366 : 365;
        gYear++;
      } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        gMonth++;
      } else {
        gDay += diffDays;
        diffDays = 0;
      }
    } else {
      if (diffDays >= (isGregorianLeapYear(gYear - 1) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear - 1) ? 366 : 365;
        gYear--;
      } else {
        if (gMonth > 1) {
          gMonth--;
        } else {
          gMonth = 12;
          gYear--;
        }

        if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
          diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        } else {
          gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
          diffDays = 0;
        }
      }
    }
  }

  return new Date(gYear, gMonth - 1, gDay);
}

function hebrewNumerals(numerals) {
  if (!numerals) {
    return '';
  }

  const hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
  const hArray10_19 = ['\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6', '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'];
  const hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
  const hArray100_900 = ['', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea', '\u05ea\u05ea\u05e7'];
  const hArray1000_9000 = ['', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1', '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'];
  const geresh = '\u05f3',
        gershaim = '\u05f4';
  let mem = 0;
  let result = [];
  let step = 0;

  while (numerals > 0) {
    let m = numerals % 10;

    if (step === 0) {
      mem = m;
    } else if (step === 1) {
      if (m !== 1) {
        result.unshift(hArray20_90[m], hArray0_9[mem]);
      } else {
        result.unshift(hArray10_19[mem]);
      }
    } else if (step === 2) {
      result.unshift(hArray100_900[m]);
    } else {
      if (m !== 5) {
        result.unshift(hArray1000_9000[m], geresh, ' ');
      }

      break;
    }

    numerals = Math.floor(numerals / 10);

    if (step === 0 && numerals === 0) {
      result.unshift(hArray0_9[m]);
    }

    step++;
  }

  result = result.join('').split('');

  if (result.length === 1) {
    result.push(geresh);
  } else if (result.length > 1) {
    result.splice(result.length - 1, 0, gershaim);
  }

  return result.join('');
}
/**
 * @since 3.2.0
 */


class NgbCalendarHebrew extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }

  getMonths(year) {
    if (year && isHebrewLeapYear(year)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
  }

  getWeeksPerMonth() {
    return 6;
  }

  isValid(date) {
    if (date != null) {
      let b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
      b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
      b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
      return b && !isNaN(toGregorian$1(date).getTime());
    }

    return false;
  }

  getNext(date, period = 'd', number = 1) {
    date = new NgbDate(date.year, date.month, date.day);

    switch (period) {
      case 'y':
        date.year += number;
        date.month = 1;
        date.day = 1;
        return date;

      case 'm':
        date = setHebrewMonth(date, number);
        date.day = 1;
        return date;

      case 'd':
        return setHebrewDay(date, number);

      default:
        return date;
    }
  }

  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }

  getWeekday(date) {
    const day = toGregorian$1(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

    return day === 0 ? 7 : day;
  }

  getWeekNumber(week, firstDayOfWeek) {
    const date = week[week.length - 1];
    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
  }

  getToday() {
    return fromGregorian$1(new Date());
  }
  /**
   * @since 3.4.0
   */


  toGregorian(date) {
    return fromJSDate(toGregorian$1(date));
  }
  /**
   * @since 3.4.0
   */


  fromGregorian(date) {
    return fromGregorian$1(toJSDate(date));
  }

}

NgbCalendarHebrew.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarHebrew_BaseFactory;
  return function NgbCalendarHebrew_Factory(t) {
    return (ɵNgbCalendarHebrew_BaseFactory || (ɵNgbCalendarHebrew_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarHebrew)))(t || NgbCalendarHebrew);
  };
}();

NgbCalendarHebrew.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarHebrew,
  factory: NgbCalendarHebrew.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarHebrew, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

const WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
const MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
const MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * @since 3.2.0
 */

class NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }

  getMonthFullName(month, year) {
    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || '' : MONTHS[month - 1] || '';
  }

  getWeekdayLabel(weekday, width) {
    return WEEKDAYS[weekday - 1] || '';
  }

  getDayAriaLabel(date) {
    return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
  }

  getDayNumerals(date) {
    return hebrewNumerals(date.day);
  }

  getWeekNumerals(weekNumber) {
    return hebrewNumerals(weekNumber);
  }

  getYearNumerals(year) {
    return hebrewNumerals(year);
  }

}

NgbDatepickerI18nHebrew.ɵfac = /* @__PURE__ */function () {
  let ɵNgbDatepickerI18nHebrew_BaseFactory;
  return function NgbDatepickerI18nHebrew_Factory(t) {
    return (ɵNgbDatepickerI18nHebrew_BaseFactory || (ɵNgbDatepickerI18nHebrew_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDatepickerI18nHebrew)))(t || NgbDatepickerI18nHebrew);
  };
}();

NgbDatepickerI18nHebrew.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18nHebrew,
  factory: NgbDatepickerI18nHebrew.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerI18nHebrew, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Returns the equivalent JS date value for a give input Buddhist date.
 * `date` is an Buddhist date to be converted to Gregorian.
 */


function toGregorian(date) {
  return new Date(date.year - 543, date.month - 1, date.day);
}
/**
 * Returns the equivalent Buddhist date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Buddhist.
 * utc to local
 */


function fromGregorian(gdate) {
  return new NgbDate(gdate.getFullYear() + 543, gdate.getMonth() + 1, gdate.getDate());
}
/**
 * @since 9.1.0
 */


class NgbCalendarBuddhist extends NgbCalendarGregorian {
  getToday() {
    return fromGregorian(new Date());
  }

  getNext(date, period = 'd', number = 1) {
    let jsDate = toGregorian(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();

    switch (period) {
      case 'y':
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;

      case 'm':
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;

        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }

        break;

      case 'd':
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;

      default:
        return date;
    }

    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      // this means the destination month has less days than the initial month
      // let's go back to the end of the previous month:
      jsDate.setDate(0);
    }

    return fromGregorian(jsDate);
  }

  getPrev(date, period = 'd', number = 1) {
    return this.getNext(date, period, -number);
  }

  getWeekday(date) {
    let jsDate = toGregorian(date);
    let day = jsDate.getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

    return day === 0 ? 7 : day;
  }

  getWeekNumber(week, firstDayOfWeek) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }

    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday

    const time = jsDate.getTime();
    jsDate.setMonth(0); // Compare with Jan 1

    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
  }

  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    } // year 0 doesn't exist in Gregorian calendar


    if (date.year === 0) {
      return false;
    }

    const jsDate = toGregorian(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year - 543 && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }

}

NgbCalendarBuddhist.ɵfac = /* @__PURE__ */function () {
  let ɵNgbCalendarBuddhist_BaseFactory;
  return function NgbCalendarBuddhist_Factory(t) {
    return (ɵNgbCalendarBuddhist_BaseFactory || (ɵNgbCalendarBuddhist_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbCalendarBuddhist)))(t || NgbCalendarBuddhist);
  };
}();

NgbCalendarBuddhist.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbCalendarBuddhist,
  factory: NgbCalendarBuddhist.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbCalendarBuddhist, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */


class NgbDateNativeAdapter extends NgbDateAdapter {
  /**
   * Converts a native `Date` to a `NgbDateStruct`.
   */
  fromModel(date) {
    return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
  }
  /**
   * Converts a `NgbDateStruct` to a native `Date`.
   */


  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
  }

  _fromNativeDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  _toNativeDate(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12); // avoid 30 -> 1930 conversion

    jsDate.setFullYear(date.year);
    return jsDate;
  }

}

NgbDateNativeAdapter.ɵfac = /* @__PURE__ */function () {
  let ɵNgbDateNativeAdapter_BaseFactory;
  return function NgbDateNativeAdapter_Factory(t) {
    return (ɵNgbDateNativeAdapter_BaseFactory || (ɵNgbDateNativeAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateNativeAdapter)))(t || NgbDateNativeAdapter);
  };
}();

NgbDateNativeAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateNativeAdapter,
  factory: NgbDateNativeAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateNativeAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * @since 3.2.0
 */


class NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
  _fromNativeDate(date) {
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate()
    };
  }

  _toNativeDate(date) {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day)); // avoid 30 -> 1930 conversion

    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }

}

NgbDateNativeUTCAdapter.ɵfac = /* @__PURE__ */function () {
  let ɵNgbDateNativeUTCAdapter_BaseFactory;
  return function NgbDateNativeUTCAdapter_Factory(t) {
    return (ɵNgbDateNativeUTCAdapter_BaseFactory || (ɵNgbDateNativeUTCAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateNativeUTCAdapter)))(t || NgbDateNativeUTCAdapter);
  };
}();

NgbDateNativeUTCAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDateNativeUTCAdapter,
  factory: NgbDateNativeUTCAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateNativeUTCAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class NgbDatepickerModule {}

NgbDatepickerModule.ɵfac = function NgbDatepickerModule_Factory(t) {
  return new (t || NgbDatepickerModule)();
};

NgbDatepickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbDatepickerModule,
  declarations: [NgbDatepicker, NgbDatepickerContent, NgbDatepickerMonth, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView, NgbInputDatepicker],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule],
  exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth]
});
NgbDatepickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDatepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbDatepicker, NgbDatepickerContent, NgbDatepickerMonth, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView, NgbInputDatepicker],
      exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */


class NgbDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.placement = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
  }

}

NgbDropdownConfig.ɵfac = function NgbDropdownConfig_Factory(t) {
  return new (t || NgbDropdownConfig)();
};

NgbDropdownConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbDropdownConfig,
  factory: NgbDropdownConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class NgbNavbar {}

NgbNavbar.ɵfac = function NgbNavbar_Factory(t) {
  return new (t || NgbNavbar)();
};

NgbNavbar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavbar,
  selectors: [["", 8, "navbar"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '.navbar'
    }]
  }], null, null);
})();
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */


class NgbDropdownItem {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this._disabled = false;
  }

  set disabled(value) {
    this._disabled = value === '' || value === true; // accept an empty attribute as true
  }

  get disabled() {
    return this._disabled;
  }

}

NgbDropdownItem.ɵfac = function NgbDropdownItem_Factory(t) {
  return new (t || NgbDropdownItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbDropdownItem.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownItem,
  selectors: [["", "ngbDropdownItem", ""]],
  hostAttrs: [1, "dropdown-item"],
  hostVars: 2,
  hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownItem]',
      host: {
        'class': 'dropdown-item',
        '[class.disabled]': 'disabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */


class NgbDropdownMenu {
  constructor(dropdown, _elementRef) {
    this.dropdown = dropdown;
    this.placement = 'bottom';
    this.isOpen = false;
    this.nativeElement = _elementRef.nativeElement;
  }

}

NgbDropdownMenu.ɵfac = function NgbDropdownMenu_Factory(t) {
  return new (t || NgbDropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbDropdownMenu.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownMenu,
  selectors: [["", "ngbDropdownMenu", ""]],
  contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDropdownItem, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
    }
  },
  hostVars: 5,
  hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Tab", function NgbDropdownMenu_keydown_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Shift.Tab", function NgbDropdownMenu_keydown_Shift_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-popper", ctx.placement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-menu", true)("show", ctx.dropdown.isOpen());
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownMenu]',
      host: {
        '[class.dropdown-menu]': 'true',
        '[class.show]': 'dropdown.isOpen()',
        '[attr.data-popper]': 'placement',
        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
        '(keydown.Home)': 'dropdown.onKeyDown($event)',
        '(keydown.End)': 'dropdown.onKeyDown($event)',
        '(keydown.Enter)': 'dropdown.onKeyDown($event)',
        '(keydown.Space)': 'dropdown.onKeyDown($event)',
        '(keydown.Tab)': 'dropdown.onKeyDown($event)',
        '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    menuItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbDropdownItem]
    }]
  });
})();
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */


class NgbDropdownAnchor {
  constructor(dropdown, _elementRef) {
    this.dropdown = dropdown;
    this.nativeElement = _elementRef.nativeElement;
  }

}

NgbDropdownAnchor.ɵfac = function NgbDropdownAnchor_Factory(t) {
  return new (t || NgbDropdownAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbDropdownAnchor.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownAnchor,
  selectors: [["", "ngbDropdownAnchor", ""]],
  hostAttrs: [1, "dropdown-toggle"],
  hostVars: 1,
  hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen());
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownAnchor]',
      host: {
        'class': 'dropdown-toggle',
        '[attr.aria-expanded]': 'dropdown.isOpen()'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */


class NgbDropdownToggle extends NgbDropdownAnchor {
  constructor(dropdown, elementRef) {
    super(dropdown, elementRef);
  }

}

NgbDropdownToggle.ɵfac = function NgbDropdownToggle_Factory(t) {
  return new (t || NgbDropdownToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbDropdownToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdownToggle,
  selectors: [["", "ngbDropdownToggle", ""]],
  hostAttrs: [1, "dropdown-toggle"],
  hostVars: 1,
  hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbDropdownToggle_click_HostBindingHandler() {
        return ctx.dropdown.toggle();
      })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Tab", function NgbDropdownToggle_keydown_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Shift.Tab", function NgbDropdownToggle_keydown_Shift_Tab_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen());
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: NgbDropdownAnchor,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdownToggle)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdownToggle]',
      host: {
        'class': 'dropdown-toggle',
        '[attr.aria-expanded]': 'dropdown.isOpen()',
        '(click)': 'dropdown.toggle()',
        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
        '(keydown.Home)': 'dropdown.onKeyDown($event)',
        '(keydown.End)': 'dropdown.onKeyDown($event)',
        '(keydown.Tab)': 'dropdown.onKeyDown($event)',
        '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
      },
      providers: [{
        provide: NgbDropdownAnchor,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdownToggle)
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbDropdown)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */


class NgbDropdown {
  constructor(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
    this._changeDetector = _changeDetector;
    this._document = _document;
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._destroyCloseHandlers$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._bodyContainer = null;
    this._positioning = ngbPositioning();
    /**
     * Defines whether or not the dropdown menu is opened initially.
     */

    this._open = false;
    /**
     * An event fired when the dropdown is opened or closed.
     *
     * The event payload is a `boolean`:
     * * `true` - the dropdown was opened
     * * `false` - the dropdown was closed
     */

    this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.placement = config.placement;
    this.container = config.container;
    this.autoClose = config.autoClose;
    this.display = ngbNavbar ? 'static' : 'dynamic';
    this._zoneSubscription = _ngZone.onStable.subscribe(() => {
      this._positionMenu();
    });
  }

  ngAfterContentInit() {
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._applyPlacementClasses();

      if (this._open) {
        this._setCloseHandlers();
      }
    });
  }

  ngOnChanges(changes) {
    if (changes.container && this._open) {
      this._applyContainer(this.container);
    }

    if (changes.placement && !changes.placement.firstChange) {
      this._positioning.setOptions({
        hostElement: this._anchor.nativeElement,
        targetElement: this._bodyContainer || this._menu.nativeElement,
        placement: this.placement,
        appendToBody: this.container === 'body'
      });

      this._applyPlacementClasses();
    }

    if (changes.dropdownClass) {
      const {
        currentValue,
        previousValue
      } = changes.dropdownClass;

      this._applyCustomDropdownClass(currentValue, previousValue);
    }

    if (changes.autoClose && this._open) {
      this.autoClose = changes.autoClose.currentValue;

      this._setCloseHandlers();
    }
  }
  /**
   * Checks if the dropdown menu is open.
   */


  isOpen() {
    return this._open;
  }
  /**
   * Opens the dropdown menu.
   */


  open() {
    if (!this._open) {
      this._open = true;

      this._applyContainer(this.container);

      this.openChange.emit(true);

      this._setCloseHandlers();

      if (this._anchor) {
        this._anchor.nativeElement.focus();

        if (this.display === 'dynamic') {
          this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
            this._positioning.createPopper({
              hostElement: this._anchor.nativeElement,
              targetElement: this._bodyContainer || this._menu.nativeElement,
              placement: this.placement,
              appendToBody: this.container === 'body'
            });

            this._applyPlacementClasses();
          });
        }
      }
    }
  }

  _setCloseHandlers() {
    this._destroyCloseHandlers$.next(); // destroy any existing close handlers


    ngbAutoClose(this._ngZone, this._document, this.autoClose, source => {
      this.close();

      if (source === 0
      /* ESCAPE */
      ) {
        this._anchor.nativeElement.focus();
      }
    }, this._destroyCloseHandlers$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], '.dropdown-item,.dropdown-divider');
  }
  /**
   * Closes the dropdown menu.
   */


  close() {
    if (this._open) {
      this._open = false;

      this._positioning.destroy();

      this._resetContainer();

      this._destroyCloseHandlers$.next();

      this.openChange.emit(false);

      this._changeDetector.markForCheck();
    }
  }
  /**
   * Toggles the dropdown menu.
   */


  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  ngOnDestroy() {
    this._resetContainer();

    this._destroyCloseHandlers$.next();

    this._zoneSubscription.unsubscribe();
  }

  onKeyDown(event) {
    /* eslint-disable-next-line deprecation/deprecation */
    const key = event.which;

    const itemElements = this._getMenuElements();

    let position = -1;
    let itemElement = null;

    const isEventFromToggle = this._isEventFromToggle(event);

    if (!isEventFromToggle && itemElements.length) {
      itemElements.forEach((item, index) => {
        if (item.contains(event.target)) {
          itemElement = item;
        }

        if (item === this._document.activeElement) {
          position = index;
        }
      });
    } // closing on Enter / Space


    if (key === Key.Space || key === Key.Enter) {
      if (itemElement && (this.autoClose === true || this.autoClose === 'inside')) {
        // Item is either a button or a link, so click will be triggered by the browser on Enter or Space.
        // So we have to register a one-time click handler that will fire after any user defined click handlers
        // to close the dropdown
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(itemElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => this.close());
      }

      return;
    }

    if (key === Key.Tab) {
      if (event.target && this.isOpen() && this.autoClose) {
        if (this._anchor.nativeElement === event.target) {
          if (this.container === 'body' && !event.shiftKey) {
            /* This case is special: user is using [Tab] from the anchor/toggle.
               User expects the next focusable element in the dropdown menu to get focus.
               But the menu is not a sibling to anchor/toggle, it is at the end of the body.
               Trick is to synchronously focus the menu element, and let the [keydown.Tab] go
               so that browser will focus the proper element (first one focusable in the menu) */
            this._renderer.setAttribute(this._menu.nativeElement, 'tabindex', '0');

            this._menu.nativeElement.focus();

            this._renderer.removeAttribute(this._menu.nativeElement, 'tabindex');
          } else if (event.shiftKey) {
            this.close();
          }

          return;
        } else if (this.container === 'body') {
          const focusableElements = this._menu.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);

          if (event.shiftKey && event.target === focusableElements[0]) {
            this._anchor.nativeElement.focus();

            event.preventDefault();
          } else if (!event.shiftKey && event.target === focusableElements[focusableElements.length - 1]) {
            this._anchor.nativeElement.focus();

            this.close();
          }
        } else {
          (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(event.target, 'focusout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(({
            relatedTarget
          }) => {
            if (!this._elementRef.nativeElement.contains(relatedTarget)) {
              this.close();
            }
          });
        }
      }

      return;
    } // opening / navigating


    if (isEventFromToggle || itemElement) {
      this.open();

      if (itemElements.length) {
        switch (key) {
          case Key.ArrowDown:
            position = Math.min(position + 1, itemElements.length - 1);
            break;

          case Key.ArrowUp:
            if (this._isDropup() && position === -1) {
              position = itemElements.length - 1;
              break;
            }

            position = Math.max(position - 1, 0);
            break;

          case Key.Home:
            position = 0;
            break;

          case Key.End:
            position = itemElements.length - 1;
            break;
        }

        itemElements[position].focus();
      }

      event.preventDefault();
    }
  }

  _isDropup() {
    return this._elementRef.nativeElement.classList.contains('dropup');
  }

  _isEventFromToggle(event) {
    return this._anchor.nativeElement.contains(event.target);
  }

  _getMenuElements() {
    const menu = this._menu;

    if (menu == null) {
      return [];
    }

    return menu.menuItems.filter(item => !item.disabled).map(item => item.elementRef.nativeElement);
  }

  _positionMenu() {
    const menu = this._menu;

    if (this.isOpen() && menu) {
      if (this.display === 'dynamic') {
        this._positioning.update();

        this._applyPlacementClasses();
      } else {
        this._applyPlacementClasses(this._getFirstPlacement(this.placement));
      }
    }
  }

  _getFirstPlacement(placement) {
    return Array.isArray(placement) ? placement[0] : placement.split(' ')[0];
  }

  _resetContainer() {
    const renderer = this._renderer;

    if (this._menu) {
      const dropdownElement = this._elementRef.nativeElement;
      const dropdownMenuElement = this._menu.nativeElement;
      renderer.appendChild(dropdownElement, dropdownMenuElement);
    }

    if (this._bodyContainer) {
      renderer.removeChild(this._document.body, this._bodyContainer);
      this._bodyContainer = null;
    }
  }

  _applyContainer(container = null) {
    this._resetContainer();

    if (container === 'body') {
      const renderer = this._renderer;
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div'); // Override some styles to have the positioning working

      renderer.setStyle(bodyContainer, 'position', 'absolute');
      renderer.setStyle(dropdownMenuElement, 'position', 'static');
      renderer.setStyle(bodyContainer, 'z-index', '1050');
      renderer.appendChild(bodyContainer, dropdownMenuElement);
      renderer.appendChild(this._document.body, bodyContainer);
    }

    this._applyCustomDropdownClass(this.dropdownClass);
  }

  _applyCustomDropdownClass(newClass, oldClass) {
    const targetElement = this.container === 'body' ? this._bodyContainer : this._elementRef.nativeElement;

    if (targetElement) {
      if (oldClass) {
        this._renderer.removeClass(targetElement, oldClass);
      }

      if (newClass) {
        this._renderer.addClass(targetElement, newClass);
      }
    }
  }

  _applyPlacementClasses(placement) {
    const menu = this._menu;

    if (menu) {
      if (!placement) {
        placement = this._getFirstPlacement(this.placement);
      }

      const renderer = this._renderer;
      const dropdownElement = this._elementRef.nativeElement; // remove the current placement classes

      renderer.removeClass(dropdownElement, 'dropup');
      renderer.removeClass(dropdownElement, 'dropdown');
      const {
        nativeElement
      } = menu;

      if (this.display === 'static') {
        menu.placement = null;
        renderer.setAttribute(nativeElement, 'data-bs-popper', 'static');
      } else {
        menu.placement = placement;
        renderer.removeAttribute(nativeElement, 'data-bs-popper');
      }
      /*
      * apply the new placement
      * in case of top use up-arrow or down-arrow otherwise
      */


      const dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
      renderer.addClass(dropdownElement, dropdownClass);
      const bodyContainer = this._bodyContainer;

      if (bodyContainer) {
        renderer.removeClass(bodyContainer, 'dropup');
        renderer.removeClass(bodyContainer, 'dropdown');
        renderer.addClass(bodyContainer, dropdownClass);
      }
    }
  }

}

NgbDropdown.ɵfac = function NgbDropdown_Factory(t) {
  return new (t || NgbDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNavbar, 8));
};

NgbDropdown.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbDropdown,
  selectors: [["", "ngbDropdown", ""]],
  contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDropdownMenu, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbDropdownAnchor, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._anchor = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgbDropdown_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isOpen());
    }
  },
  inputs: {
    autoClose: "autoClose",
    dropdownClass: "dropdownClass",
    _open: ["open", "_open"],
    placement: "placement",
    container: "container",
    display: "display"
  },
  outputs: {
    openChange: "openChange"
  },
  exportAs: ["ngbDropdown"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbDropdown]',
      exportAs: 'ngbDropdown',
      host: {
        '[class.show]': 'isOpen()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NgbDropdownConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: NgbNavbar,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    _menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbDropdownMenu, {
        static: false
      }]
    }],
    _anchor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbDropdownAnchor, {
        static: false
      }]
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['open']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

const NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];

class NgbDropdownModule {}

NgbDropdownModule.ɵfac = function NgbDropdownModule_Factory(t) {
  return new (t || NgbDropdownModule)();
};

NgbDropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbDropdownModule,
  declarations: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar],
  exports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar]
});
NgbDropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: NGB_DROPDOWN_DIRECTIVES,
      exports: NGB_DROPDOWN_DIRECTIVES
    }]
  }], null, null);
})();

class ContentRef {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }

}

class PopupService {
  constructor(_type, _injector, _viewContainerRef, _renderer, _ngZone, _applicationRef) {
    this._type = _type;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._applicationRef = _applicationRef;
    this._windowRef = null;
    this._contentRef = null;
  }

  open(content, context, animation = false) {
    if (!this._windowRef) {
      this._contentRef = this._getContentRef(content, context);
      this._windowRef = this._viewContainerRef.createComponent(this._type, {
        index: this._viewContainerRef.length,
        injector: this._injector,
        projectableNodes: this._contentRef.nodes
      });
    }

    const {
      nativeElement
    } = this._windowRef.location;

    const transition$ = this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.mergeMap)(() => ngbRunTransition(this._ngZone, nativeElement, ({
      classList
    }) => classList.add('show'), {
      animation,
      runningTransition: 'continue'
    })));

    return {
      windowRef: this._windowRef,
      transition$
    };
  }

  close(animation = false) {
    if (!this._windowRef) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    }

    return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({
      classList
    }) => classList.remove('show'), {
      animation,
      runningTransition: 'stop'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => {
      var _a;

      if (this._windowRef) {
        // this is required because of the container='body' option
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));

        this._windowRef = null;
      }

      if ((_a = this._contentRef) === null || _a === void 0 ? void 0 : _a.viewRef) {
        this._applicationRef.detachView(this._contentRef.viewRef);

        this._contentRef.viewRef.destroy();

        this._contentRef = null;
      }
    }));
  }

  _getContentRef(content, context) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      const viewRef = content.createEmbeddedView(context);

      this._applicationRef.attachView(viewRef);

      return new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
  }

}

class NgbModalBackdrop {
  constructor(_el, _zone) {
    this._el = _el;
    this._zone = _zone;
  }

  ngOnInit() {
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      ngbRunTransition(this._zone, this._el.nativeElement, (element, animation) => {
        if (animation) {
          reflow(element);
        }

        element.classList.add('show');
      }, {
        animation: this.animation,
        runningTransition: 'continue'
      });
    });
  }

  hide() {
    return ngbRunTransition(this._zone, this._el.nativeElement, ({
      classList
    }) => classList.remove('show'), {
      animation: this.animation,
      runningTransition: 'stop'
    });
  }

}

NgbModalBackdrop.ɵfac = function NgbModalBackdrop_Factory(t) {
  return new (t || NgbModalBackdrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbModalBackdrop.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbModalBackdrop,
  selectors: [["ngb-modal-backdrop"]],
  hostAttrs: [2, "z-index", "1055"],
  hostVars: 6,
  hostBindings: function NgbModalBackdrop_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.animation)("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    backdropClass: "backdropClass"
  },
  decls: 0,
  vars: 0,
  template: function NgbModalBackdrop_Template(rf, ctx) {},
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalBackdrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-modal-backdrop',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: '',
      host: {
        '[class]': '"modal-backdrop" + (backdropClass ? " " + backdropClass : "")',
        '[class.show]': '!animation',
        '[class.fade]': 'animation',
        'style': 'z-index: 1055'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */


class NgbActiveModal {
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbModalRef.result` promise will be resolved with the provided value.
   */
  close(result) {}
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */


  dismiss(reason) {}

}
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */


class NgbModalRef {
  constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._windowCmptRef = _windowCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._dismissed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._hidden = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();

    _windowCmptRef.instance.dismissEvent.subscribe(reason => {
      this.dismiss(reason);
    });

    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {});
  }
  /**
   * The instance of a component used for the modal content.
   *
   * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
   */


  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the modal is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   *
   * @since 8.0.0
   */


  get closed() {
    return this._closed.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._hidden));
  }
  /**
   * The observable that emits when the modal is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   *
   * @since 8.0.0
   */


  get dismissed() {
    return this._dismissed.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._hidden));
  }
  /**
   * The observable that emits when both modal window and backdrop are closed and animations were finished.
   * At this point modal and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   *
   * @since 8.0.0
   */


  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when modal is fully visible and animation was finished.
   * Modal DOM element is always available synchronously after calling 'modal.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if modal is closed before open animation is finished.
   *
   * @since 8.0.0
   */


  get shown() {
    return this._windowCmptRef.instance.shown.asObservable();
  }
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */


  close(result) {
    if (this._windowCmptRef) {
      this._closed.next(result);

      this._resolve(result);

      this._removeModalElements();
    }
  }

  _dismiss(reason) {
    this._dismissed.next(reason);

    this._reject(reason);

    this._removeModalElements();
  }
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */


  dismiss(reason) {
    if (this._windowCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();

        if (isPromise(dismiss)) {
          dismiss.then(result => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {});
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }

  _removeModalElements() {
    const windowTransition$ = this._windowCmptRef.instance.hide();

    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined); // hiding window

    windowTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._windowCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);

      this._windowCmptRef.destroy();

      if (this._contentRef && this._contentRef.viewRef) {
        this._contentRef.viewRef.destroy();
      }

      this._windowCmptRef = null;
      this._contentRef = null;
    }); // hiding backdrop

    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);

        this._backdropCmptRef.destroy();

        this._backdropCmptRef = null;
      }
    }); // all done

    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.zip)(windowTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();

      this._hidden.complete();
    });
  }

}

var ModalDismissReasons;

(function (ModalDismissReasons) {
  ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));

class NgbModalWindow {
  constructor(_document, _elRef, _zone) {
    this._document = _document;
    this._elRef = _elRef;
    this._zone = _zone;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._elWithFocus = null; // element that is focused prior to modal opening

    this.backdrop = true;
    this.keyboard = true;
    this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.shown = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.hidden = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }

  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }

  ngOnInit() {
    this._elWithFocus = this._document.activeElement;

    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._show();
    });
  }

  ngOnDestroy() {
    this._disableEventHandling();
  }

  hide() {
    const {
      nativeElement
    } = this._elRef;
    const context = {
      animation: this.animation,
      runningTransition: 'stop'
    };
    const windowTransition$ = ngbRunTransition(this._zone, nativeElement, () => nativeElement.classList.remove('show'), context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {}, context);
    const transitions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.zip)(windowTransition$, dialogTransition$);
    transitions$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });

    this._disableEventHandling();

    this._restoreFocus();

    return transitions$;
  }

  _show() {
    const context = {
      animation: this.animation,
      runningTransition: 'continue'
    };
    const windowTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }

      element.classList.add('show');
    }, context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {}, context);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.zip)(windowTransition$, dialogTransition$).subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });

    this._enableEventHandling();

    this._setFocus();
  }

  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;

    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$),
      /* eslint-disable-next-line deprecation/deprecation */
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(e => e.which === Key.Escape)).subscribe(event => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(ModalDismissReasons.ESC));
            }
          });
        } else if (this.backdrop === 'static') {
          this._bumpBackdrop();
        }
      }); // We're listening to 'mousedown' and 'mouseup' to prevent modal from closing when pressing the mouse
      // inside the modal dialog and releasing it outside

      let preventClose = false;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this._dialogEl.nativeElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => preventClose = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'mouseup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(({
        target
      }) => nativeElement === target)).subscribe(() => {
        preventClose = true;
      }); // We're listening to 'click' to dismiss modal on modal window click, except when:
      // 1. clicking on modal dialog itself
      // 2. closing was prevented by mousedown/up handlers
      // 3. clicking on scrollbar when the viewport is too small and modal doesn't fit (click is not triggered at all)

      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(nativeElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._closed$)).subscribe(({
        target
      }) => {
        if (nativeElement === target) {
          if (this.backdrop === 'static') {
            this._bumpBackdrop();
          } else if (this.backdrop === true && !preventClose) {
            this._zone.run(() => this.dismiss(ModalDismissReasons.BACKDROP_CLICK));
          }
        }

        preventClose = false;
      });
    });
  }

  _disableEventHandling() {
    this._closed$.next();
  }

  _setFocus() {
    const {
      nativeElement
    } = this._elRef;

    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }

  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;

    if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }

    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }

  _bumpBackdrop() {
    if (this.backdrop === 'static') {
      ngbRunTransition(this._zone, this._elRef.nativeElement, ({
        classList
      }) => {
        classList.add('modal-static');
        return () => classList.remove('modal-static');
      }, {
        animation: this.animation,
        runningTransition: 'continue'
      });
    }
  }

}

NgbModalWindow.ɵfac = function NgbModalWindow_Factory(t) {
  return new (t || NgbModalWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbModalWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbModalWindow,
  selectors: [["ngb-modal-window"]],
  viewQuery: function NgbModalWindow_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c31, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._dialogEl = _t.first);
    }
  },
  hostAttrs: ["role", "dialog", "tabindex", "-1"],
  hostVars: 7,
  hostBindings: function NgbModalWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    ariaLabelledBy: "ariaLabelledBy",
    ariaDescribedBy: "ariaDescribedBy",
    backdrop: "backdrop",
    centered: "centered",
    keyboard: "keyboard",
    scrollable: "scrollable",
    size: "size",
    windowClass: "windowClass",
    modalDialogClass: "modalDialogClass"
  },
  outputs: {
    dismissEvent: "dismiss"
  },
  ngContentSelectors: _c3,
  decls: 4,
  vars: 2,
  consts: [["role", "document"], ["dialog", ""], [1, "modal-content"]],
  template: function NgbModalWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : "") + (ctx.scrollable ? " modal-dialog-scrollable" : "") + (ctx.modalDialogClass ? " " + ctx.modalDialogClass : ""));
    }
  },
  styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-modal-window',
      host: {
        '[class]': '"modal d-block" + (windowClass ? " " + windowClass : "")',
        '[class.fade]': 'animation',
        'role': 'dialog',
        'tabindex': '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'ariaLabelledBy',
        '[attr.aria-describedby]': 'ariaDescribedBy'
      },
      template: `
    <div #dialog [class]="'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +
     (scrollable ? ' modal-dialog-scrollable' : '') + (modalDialogClass ? ' ' + modalDialogClass : '')" role="document">
        <div class="modal-content"><ng-content></ng-content></div>
    </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _dialogEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['dialog', {
        static: true
      }]
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    windowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    modalDialogClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dismiss']
    }]
  });
})();
/**
 * Utility to handle the scrollbar.
 *
 * It allows to hide the scrollbar and compensate the lack of a vertical scrollbar
 * by adding an equivalent padding on the right of the body, and to revert this change.
 */


class ScrollBar {
  constructor(_document) {
    this._document = _document;
  }
  /**
   * To be called to hide a potential vertical scrollbar:
   * - if a scrollbar is there and has a width greater than 0, adds some compensation
   * padding to the body to keep the same layout as when the scrollbar is there
   * - adds overflow: hidden
   *
   * @return a callback used to revert the change
   */


  hide() {
    const scrollbarWidth = Math.abs(window.innerWidth - this._document.documentElement.clientWidth);
    const body = this._document.body;
    const bodyStyle = body.style;
    const {
      overflow,
      paddingRight
    } = bodyStyle;

    if (scrollbarWidth > 0) {
      const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
      bodyStyle.paddingRight = `${actualPadding + scrollbarWidth}px`;
    }

    bodyStyle.overflow = 'hidden';
    return () => {
      if (scrollbarWidth > 0) {
        bodyStyle.paddingRight = paddingRight;
      }

      bodyStyle.overflow = overflow;
    };
  }

}

ScrollBar.ɵfac = function ScrollBar_Factory(t) {
  return new (t || ScrollBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};

ScrollBar.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollBar,
  factory: ScrollBar.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();

class NgbModalStack {
  constructor(_applicationRef, _injector, _document, _scrollBar, _rendererFactory, _ngZone) {
    this._applicationRef = _applicationRef;
    this._injector = _injector;
    this._document = _document;
    this._scrollBar = _scrollBar;
    this._rendererFactory = _rendererFactory;
    this._ngZone = _ngZone;
    this._activeWindowCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._ariaHiddenValues = new Map();
    this._scrollBarRestoreFn = null;
    this._backdropAttributes = ['animation', 'backdropClass'];
    this._modalRefs = [];
    this._windowAttributes = ['animation', 'ariaLabelledBy', 'ariaDescribedBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass', 'modalDialogClass'];
    this._windowCmpts = [];
    this._activeInstances = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Trap focus on active WindowCmpt

    this._activeWindowCmptHasChanged.subscribe(() => {
      if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        ngbFocusTrap(this._ngZone, activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);

        this._revertAriaHidden();

        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }

  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;

    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }

  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }

  open(moduleCFR, contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;

    const renderer = this._rendererFactory.createRenderer(null, null);

    const removeBodyClass = () => {
      if (!this._modalRefs.length) {
        renderer.removeClass(this._document.body, 'modal-open');

        this._restoreScrollBar();

        this._revertAriaHidden();
      }
    };

    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
    }

    this._hideScrollBar();

    const activeModal = new NgbActiveModal();

    const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);

    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : undefined;

    let windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);

    let ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

    this._registerModalRef(ngbModalRef);

    this._registerWindowCmpt(windowCmptRef);

    ngbModalRef.result.then(removeBodyClass, removeBodyClass);

    activeModal.close = result => {
      ngbModalRef.close(result);
    };

    activeModal.dismiss = reason => {
      ngbModalRef.dismiss(reason);
    };

    this._applyWindowOptions(windowCmptRef.instance, options);

    if (this._modalRefs.length === 1) {
      renderer.addClass(this._document.body, 'modal-open');
    }

    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);

      backdropCmptRef.changeDetectorRef.detectChanges();
    }

    windowCmptRef.changeDetectorRef.detectChanges();
    return ngbModalRef;
  }

  get activeInstances() {
    return this._activeInstances;
  }

  dismissAll(reason) {
    this._modalRefs.forEach(ngbModalRef => ngbModalRef.dismiss(reason));
  }

  hasOpenModals() {
    return this._modalRefs.length > 0;
  }

  _attachBackdrop(moduleCFR, containerEl) {
    let backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
    let backdropCmptRef = backdropFactory.create(this._injector);

    this._applicationRef.attachView(backdropCmptRef.hostView);

    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }

  _attachWindowComponent(moduleCFR, containerEl, contentRef) {
    let windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
    let windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);

    this._applicationRef.attachView(windowCmptRef.hostView);

    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }

  _applyWindowOptions(windowInstance, options) {
    this._windowAttributes.forEach(optionName => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }

  _applyBackdropOptions(backdropInstance, options) {
    this._backdropAttributes.forEach(optionName => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
  }

  _getContentRef(moduleCFR, contentInjector, content, activeModal, options) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
    }
  }

  _createFromTemplateRef(content, activeModal) {
    const context = {
      $implicit: activeModal,

      close(result) {
        activeModal.close(result);
      },

      dismiss(reason) {
        activeModal.dismiss(reason);
      }

    };
    const viewRef = content.createEmbeddedView(context);

    this._applicationRef.attachView(viewRef);

    return new ContentRef([viewRef.rootNodes], viewRef);
  }

  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);

    return new ContentRef([[component]]);
  }

  _createFromComponent(moduleCFR, contentInjector, content, context, options) {
    const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
    const modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      providers: [{
        provide: NgbActiveModal,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = contentCmptFactory.create(modalContentInjector);
    const componentNativeEl = componentRef.location.nativeElement;

    if (options.scrollable) {
      componentNativeEl.classList.add('component-host-scrollable');
    }

    this._applicationRef.attachView(componentRef.hostView); // FIXME: we should here get rid of the component nativeElement
    // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.


    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }

  _setAriaHidden(element) {
    const parent = element.parentElement;

    if (parent && element !== this._document.body) {
      Array.from(parent.children).forEach(sibling => {
        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
          this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));

          sibling.setAttribute('aria-hidden', 'true');
        }
      });

      this._setAriaHidden(parent);
    }
  }

  _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute('aria-hidden', value);
      } else {
        element.removeAttribute('aria-hidden');
      }
    });

    this._ariaHiddenValues.clear();
  }

  _registerModalRef(ngbModalRef) {
    const unregisterModalRef = () => {
      const index = this._modalRefs.indexOf(ngbModalRef);

      if (index > -1) {
        this._modalRefs.splice(index, 1);

        this._activeInstances.emit(this._modalRefs);
      }
    };

    this._modalRefs.push(ngbModalRef);

    this._activeInstances.emit(this._modalRefs);

    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
  }

  _registerWindowCmpt(ngbWindowCmpt) {
    this._windowCmpts.push(ngbWindowCmpt);

    this._activeWindowCmptHasChanged.next();

    ngbWindowCmpt.onDestroy(() => {
      const index = this._windowCmpts.indexOf(ngbWindowCmpt);

      if (index > -1) {
        this._windowCmpts.splice(index, 1);

        this._activeWindowCmptHasChanged.next();
      }
    });
  }

}

NgbModalStack.ɵfac = function NgbModalStack_Factory(t) {
  return new (t || NgbModalStack)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScrollBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbModalStack.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbModalStack,
  factory: NgbModalStack.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalStack, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: ScrollBar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
*
* @since 3.1.0
*/


class NgbModalConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.backdrop = true;
    this.keyboard = true;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbModalConfig.ɵfac = function NgbModalConfig_Factory(t) {
  return new (t || NgbModalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbModalConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbModalConfig,
  factory: NgbModalConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */


class NgbModal {
  constructor(_moduleCFR, _injector, _modalStack, _config) {
    this._moduleCFR = _moduleCFR;
    this._injector = _injector;
    this._modalStack = _modalStack;
    this._config = _config;
  }
  /**
   * Opens a new modal window with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
   * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
   *
   * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
   */


  open(content, options = {}) {
    const combinedOptions = Object.assign(Object.assign(Object.assign({}, this._config), {
      animation: this._config.animation
    }), options);
    return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active modal instances.
   */


  get activeInstances() {
    return this._modalStack.activeInstances;
  }
  /**
   * Dismisses all currently displayed modal windows with the supplied reason.
   *
   * @since 3.1.0
   */


  dismissAll(reason) {
    this._modalStack.dismissAll(reason);
  }
  /**
   * Indicates if there are currently any open modal windows in the application.
   *
   * @since 3.3.0
   */


  hasOpenModals() {
    return this._modalStack.hasOpenModals();
  }

}

NgbModal.ɵfac = function NgbModal_Factory(t) {
  return new (t || NgbModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbModalStack), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbModalConfig));
};

NgbModal.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbModal,
  factory: NgbModal.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: NgbModalStack
    }, {
      type: NgbModalConfig
    }];
  }, null);
})();

class NgbModalModule {}

NgbModalModule.ɵfac = function NgbModalModule_Factory(t) {
  return new (t || NgbModalModule)();
};

NgbModalModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbModalModule,
  declarations: [NgbModalBackdrop, NgbModalWindow]
});
NgbModalModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [NgbModal]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbModalBackdrop, NgbModalWindow],
      providers: [NgbModal]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the navs used in the application.
 *
 * @since 5.2.0
 */


class NgbNavConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.destroyOnHide = true;
    this.orientation = 'horizontal';
    this.roles = 'tablist';
    this.keyboard = false;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbNavConfig.ɵfac = function NgbNavConfig_Factory(t) {
  return new (t || NgbNavConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbNavConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbNavConfig,
  factory: NgbNavConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

const isValidNavId = id => isDefined(id) && id !== '';

let navCounter = 0;
/**
 * This directive must be used to wrap content to be displayed in the nav.
 *
 * @since 5.2.0
 */

class NgbNavContent {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbNavContent.ɵfac = function NgbNavContent_Factory(t) {
  return new (t || NgbNavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbNavContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavContent,
  selectors: [["ng-template", "ngbNavContent", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbNavContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
 *
 * @since 5.2.0
 */


class NgbNavItem {
  constructor(nav, elementRef) {
    this.elementRef = elementRef;
    /**
     * If `true`, the current nav item is disabled and can't be toggled by user.
     *
     * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
     */

    this.disabled = false;
    /**
     * An event emitted when the fade in transition is finished on the related nav content
     *
     * @since 8.0.0
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the fade out transition is finished on the related nav content
     *
     * @since 8.0.0
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // TODO: cf https://github.com/angular/angular/issues/30106

    this._nav = nav;
  }

  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.contentTpl = this.contentTpls.first;
  }

  ngOnInit() {
    if (!isDefined(this.domId)) {
      this.domId = `ngb-nav-${navCounter++}`;
    }
  }

  get active() {
    return this._nav.activeId === this.id;
  }

  get id() {
    return isValidNavId(this._id) ? this._id : this.domId;
  }

  get panelDomId() {
    return `${this.domId}-panel`;
  }

  isPanelInDom() {
    return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
  }

}

NgbNavItem.ɵfac = function NgbNavItem_Factory(t) {
  return new (t || NgbNavItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbNav)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbNavItem.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavItem,
  selectors: [["", "ngbNavItem", ""]],
  contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbNavContent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTpls = _t);
    }
  },
  hostVars: 2,
  hostBindings: function NgbNavItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav-item", true);
    }
  },
  inputs: {
    destroyOnHide: "destroyOnHide",
    disabled: "disabled",
    domId: "domId",
    _id: ["ngbNavItem", "_id"]
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbNavItem"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbNavItem]',
      exportAs: 'ngbNavItem',
      host: {
        '[class.nav-item]': 'true'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbNav)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    domId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngbNavItem']
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbNavContent, {
        descendants: false
      }]
    }]
  });
})();
/**
 * A nav directive that helps with implementing tabbed navigation components.
 *
 * @since 5.2.0
 */


class NgbNav {
  constructor(role, config, _cd, _document) {
    this.role = role;
    this._cd = _cd;
    this._document = _document;
    /**
     * The event emitted after the active nav changes
     * The payload of the event is the newly active nav id
     *
     * If you want to prevent nav change, you should use `(navChange)` event
     */

    this.activeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the fade in transition is finished for one of the items.
     *
     * Payload of the event is the nav id that was just shown.
     *
     * @since 8.0.0
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the fade out transition is finished for one of the items.
     *
     * Payload of the event is the nav id that was just hidden.
     *
     * @since 8.0.0
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.navItemChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * The nav change event emitted right before the nav change happens on user click.
     *
     * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
     *
     * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
     */

    this.navChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.animation = config.animation;
    this.destroyOnHide = config.destroyOnHide;
    this.orientation = config.orientation;
    this.roles = config.roles;
    this.keyboard = config.keyboard;
  }

  click(item) {
    if (!item.disabled) {
      this._updateActiveId(item.id);
    }
  }

  onKeyDown(event) {
    if (this.roles !== 'tablist' || !this.keyboard) {
      return;
    }
    /* eslint-disable-next-line deprecation/deprecation */


    const key = event.which;
    const enabledLinks = this.links.filter(link => !link.navItem.disabled);
    const {
      length
    } = enabledLinks;
    let position = -1;
    enabledLinks.forEach((link, index) => {
      if (link.elRef.nativeElement === this._document.activeElement) {
        position = index;
      }
    });

    if (length) {
      switch (key) {
        case Key.ArrowLeft:
          if (this.orientation === 'vertical') {
            return;
          }

          position = (position - 1 + length) % length;
          break;

        case Key.ArrowRight:
          if (this.orientation === 'vertical') {
            return;
          }

          position = (position + 1) % length;
          break;

        case Key.ArrowDown:
          if (this.orientation === 'horizontal') {
            return;
          }

          position = (position + 1) % length;
          break;

        case Key.ArrowUp:
          if (this.orientation === 'horizontal') {
            return;
          }

          position = (position - 1 + length) % length;
          break;

        case Key.Home:
          position = 0;
          break;

        case Key.End:
          position = length - 1;
          break;
      }

      if (this.keyboard === 'changeWithArrows') {
        this.select(enabledLinks[position].navItem.id);
      }

      enabledLinks[position].elRef.nativeElement.focus();
      event.preventDefault();
    }
  }
  /**
   * Selects the nav with the given id and shows its associated pane.
   * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
   */


  select(id) {
    this._updateActiveId(id, false);
  }

  ngAfterContentInit() {
    if (!isDefined(this.activeId)) {
      const nextId = this.items.first ? this.items.first.id : null;

      if (isValidNavId(nextId)) {
        this._updateActiveId(nextId, false);

        this._cd.detectChanges();
      }
    }

    this.items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => this._notifyItemChanged(this.activeId));
  }

  ngOnChanges({
    activeId
  }) {
    if (activeId && !activeId.firstChange) {
      this._notifyItemChanged(activeId.currentValue);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  _updateActiveId(nextId, emitNavChange = true) {
    if (this.activeId !== nextId) {
      let defaultPrevented = false;

      if (emitNavChange) {
        this.navChange.emit({
          activeId: this.activeId,
          nextId,
          preventDefault: () => {
            defaultPrevented = true;
          }
        });
      }

      if (!defaultPrevented) {
        this.activeId = nextId;
        this.activeIdChange.emit(nextId);

        this._notifyItemChanged(nextId);
      }
    }
  }

  _notifyItemChanged(nextItemId) {
    this.navItemChange$.next(this._getItemById(nextItemId));
  }

  _getItemById(itemId) {
    return this.items && this.items.find(item => item.id === itemId) || null;
  }

}

NgbNav.ɵfac = function NgbNav_Factory(t) {
  return new (t || NgbNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNavConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};

NgbNav.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNav,
  selectors: [["", "ngbNav", ""]],
  contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbNavItem, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbNavLink, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.links = _t);
    }
  },
  hostVars: 6,
  hostBindings: function NgbNav_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : undefined)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav", true)("flex-column", ctx.orientation === "vertical");
    }
  },
  inputs: {
    activeId: "activeId",
    animation: "animation",
    destroyOnHide: "destroyOnHide",
    orientation: "orientation",
    roles: "roles",
    keyboard: "keyboard"
  },
  outputs: {
    activeIdChange: "activeIdChange",
    shown: "shown",
    hidden: "hidden",
    navChange: "navChange"
  },
  exportAs: ["ngbNav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbNav]',
      exportAs: 'ngbNav',
      host: {
        '[class.nav]': 'true',
        '[class.flex-column]': `orientation === 'vertical'`,
        '[attr.aria-orientation]': `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
        '[attr.role]': `role ? role : roles ? 'tablist' : undefined`,
        '(keydown.arrowLeft)': 'onKeyDown($event)',
        '(keydown.arrowRight)': 'onKeyDown($event)',
        '(keydown.arrowDown)': 'onKeyDown($event)',
        '(keydown.arrowUp)': 'onKeyDown($event)',
        '(keydown.Home)': 'onKeyDown($event)',
        '(keydown.End)': 'onKeyDown($event)'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['role']
      }]
    }, {
      type: NgbNavConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, {
    activeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIdChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    roles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgbNavItem]
    }],
    links: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbNavLink), {
        descendants: true
      }]
    }],
    navChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * A directive to put on the nav link.
 *
 * @since 5.2.0
 */


class NgbNavLink {
  constructor(role, navItem, nav, elRef) {
    this.role = role;
    this.navItem = navItem;
    this.nav = nav;
    this.elRef = elRef;
  }

  hasNavItemClass() {
    // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
    return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
  }

}

NgbNavLink.ɵfac = function NgbNavLink_Factory(t) {
  return new (t || NgbNavLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNavItem), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbNavLink.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavLink,
  selectors: [["a", "ngbNavLink", ""]],
  hostAttrs: ["href", ""],
  hostVars: 14,
  hostBindings: function NgbNavLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbNavLink_click_HostBindingHandler($event) {
        ctx.nav.click(ctx.navItem);
        return $event.preventDefault();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.navItem.domId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : undefined)("tabindex", ctx.navItem.disabled ? -1 : undefined)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav-link", true)("nav-item", ctx.hasNavItemClass())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'a[ngbNavLink]',
      host: {
        '[id]': 'navItem.domId',
        '[class.nav-link]': 'true',
        '[class.nav-item]': 'hasNavItemClass()',
        '[attr.role]': `role ? role : nav.roles ? 'tab' : undefined`,
        'href': '',
        '[class.active]': 'navItem.active',
        '[class.disabled]': 'navItem.disabled',
        '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
        '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
        '[attr.aria-selected]': 'navItem.active',
        '[attr.aria-disabled]': 'navItem.disabled',
        '(click)': 'nav.click(navItem); $event.preventDefault()'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['role']
      }]
    }, {
      type: NgbNavItem
    }, {
      type: NgbNav
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();

const ngbNavFadeOutTransition = ({
  classList
}) => {
  classList.remove('show');
  return () => classList.remove('active');
};

const ngbNavFadeInTransition = (element, animation) => {
  if (animation) {
    reflow(element);
  }

  element.classList.add('show');
};

class NgbNavPane {
  constructor(elRef) {
    this.elRef = elRef;
  }

}

NgbNavPane.ɵfac = function NgbNavPane_Factory(t) {
  return new (t || NgbNavPane)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbNavPane.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbNavPane,
  selectors: [["", "ngbNavPane", ""]],
  hostAttrs: [1, "tab-pane"],
  hostVars: 5,
  hostBindings: function NgbNavPane_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.item.panelDomId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : undefined)("aria-labelledby", ctx.item.domId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.nav.animation);
    }
  },
  inputs: {
    item: "item",
    nav: "nav",
    role: "role"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavPane, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbNavPane]',
      host: {
        '[id]': 'item.panelDomId',
        'class': 'tab-pane',
        '[class.fade]': 'nav.animation',
        '[attr.role]': 'role ? role : nav.roles ? "tabpanel" : undefined',
        '[attr.aria-labelledby]': 'item.domId'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nav: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * The outlet where currently active nav content will be displayed.
 *
 * @since 5.2.0
 */


class NgbNavOutlet {
  constructor(_cd, _ngZone) {
    this._cd = _cd;
    this._ngZone = _ngZone;
    this._activePane = null;
  }

  isPanelTransitioning(item) {
    var _a;

    return ((_a = this._activePane) === null || _a === void 0 ? void 0 : _a.item) === item;
  }

  ngAfterViewInit() {
    var _a; // initial display


    this._updateActivePane(); // this will be emitted for all 3 types of nav changes: .select(), [activeId] or (click)


    this.nav.navItemChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.nav.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(((_a = this._activePane) === null || _a === void 0 ? void 0 : _a.item) || null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.skip)(1)).subscribe(nextItem => {
      const options = {
        animation: this.nav.animation,
        runningTransition: 'stop'
      }; // next panel we're switching to will only appear in DOM after the change detection is done
      // and `this._panes` will be updated

      this._cd.detectChanges(); // fading out


      if (this._activePane) {
        ngbRunTransition(this._ngZone, this._activePane.elRef.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
          var _a;

          const activeItem = (_a = this._activePane) === null || _a === void 0 ? void 0 : _a.item;
          this._activePane = this._getPaneForItem(nextItem); // mark for check when transition finishes as outlet or parent containers might be OnPush
          // without this the panes that have "faded out" will stay in DOM

          this._cd.markForCheck(); // fading in


          if (this._activePane) {
            // we have to add the '.active' class before running the transition,
            // because it should be in place before `ngbRunTransition` does `reflow()`
            this._activePane.elRef.nativeElement.classList.add('active');

            ngbRunTransition(this._ngZone, this._activePane.elRef.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
              if (nextItem) {
                nextItem.shown.emit();
                this.nav.shown.emit(nextItem.id);
              }
            });
          }

          if (activeItem) {
            activeItem.hidden.emit();
            this.nav.hidden.emit(activeItem.id);
          }
        });
      } else {
        this._updateActivePane();
      }
    });
  }

  _updateActivePane() {
    var _a, _b;

    this._activePane = this._getActivePane();
    (_a = this._activePane) === null || _a === void 0 ? void 0 : _a.elRef.nativeElement.classList.add('show');
    (_b = this._activePane) === null || _b === void 0 ? void 0 : _b.elRef.nativeElement.classList.add('active');
  }

  _getPaneForItem(item) {
    return this._panes && this._panes.find(pane => pane.item === item) || null;
  }

  _getActivePane() {
    return this._panes && this._panes.find(pane => pane.item.active) || null;
  }

}

NgbNavOutlet.ɵfac = function NgbNavOutlet_Factory(t) {
  return new (t || NgbNavOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NgbNavOutlet.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbNavOutlet,
  selectors: [["", "ngbNavOutlet", ""]],
  viewQuery: function NgbNavOutlet_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgbNavPane, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._panes = _t);
    }
  },
  hostVars: 2,
  hostBindings: function NgbNavOutlet_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-content", true);
    }
  },
  inputs: {
    paneRole: "paneRole",
    nav: ["ngbNavOutlet", "nav"]
  },
  attrs: _c32,
  decls: 1,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], ["ngbNavPane", "", 3, "item", "nav", "role", 4, "ngIf"], ["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbNavOutlet_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbNavOutlet_ng_template_0_Template, 1, 1, "ng-template", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav.items);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, NgbNavPane, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[ngbNavOutlet]',
      host: {
        '[class.tab-content]': 'true'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template ngFor let-item [ngForOf]="nav.items">
      <div ngbNavPane *ngIf="item.isPanelInDom() || isPanelTransitioning(item)" [item]="item" [nav]="nav" [role]="paneRole">
        <ng-template [ngTemplateOutlet]="item.contentTpl?.templateRef || null"
                     [ngTemplateOutletContext]="{$implicit: item.active || isPanelTransitioning(item)}"></ng-template>
      </div>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _panes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [NgbNavPane]
    }],
    paneRole: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nav: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngbNavOutlet']
    }]
  });
})();

const NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane];

class NgbNavModule {}

NgbNavModule.ɵfac = function NgbNavModule_Factory(t) {
  return new (t || NgbNavModule)();
};

NgbNavModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbNavModule,
  declarations: [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane]
});
NgbNavModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbNavModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: NGB_NAV_DIRECTIVES,
      exports: NGB_NAV_DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */


class NgbPaginationConfig {
  constructor() {
    this.disabled = false;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.ellipses = true;
    this.maxSize = 0;
    this.pageSize = 10;
    this.rotate = false;
  }

}

NgbPaginationConfig.ɵfac = function NgbPaginationConfig_Factory(t) {
  return new (t || NgbPaginationConfig)();
};

NgbPaginationConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbPaginationConfig,
  factory: NgbPaginationConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */


class NgbPaginationEllipsis {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationEllipsis.ɵfac = function NgbPaginationEllipsis_Factory(t) {
  return new (t || NgbPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationEllipsis.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationEllipsis,
  selectors: [["ng-template", "ngbPaginationEllipsis", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationEllipsis, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationEllipsis]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */


class NgbPaginationFirst {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationFirst.ɵfac = function NgbPaginationFirst_Factory(t) {
  return new (t || NgbPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationFirst.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationFirst,
  selectors: [["ng-template", "ngbPaginationFirst", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationFirst, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationFirst]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */


class NgbPaginationLast {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationLast.ɵfac = function NgbPaginationLast_Factory(t) {
  return new (t || NgbPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationLast.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationLast,
  selectors: [["ng-template", "ngbPaginationLast", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationLast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationLast]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */


class NgbPaginationNext {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationNext.ɵfac = function NgbPaginationNext_Factory(t) {
  return new (t || NgbPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationNext.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationNext,
  selectors: [["ng-template", "ngbPaginationNext", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationNext]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */


class NgbPaginationNumber {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationNumber.ɵfac = function NgbPaginationNumber_Factory(t) {
  return new (t || NgbPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationNumber.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationNumber,
  selectors: [["ng-template", "ngbPaginationNumber", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationNumber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationNumber]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */


class NgbPaginationPrevious {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationPrevious.ɵfac = function NgbPaginationPrevious_Factory(t) {
  return new (t || NgbPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationPrevious.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationPrevious,
  selectors: [["ng-template", "ngbPaginationPrevious", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationPrevious]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A directive to match the 'pages' whole content
 *
 * @since 9.1.0
 */


class NgbPaginationPages {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NgbPaginationPages.ɵfac = function NgbPaginationPages_Factory(t) {
  return new (t || NgbPaginationPages)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NgbPaginationPages.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPaginationPages,
  selectors: [["ng-template", "ngbPaginationPages", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationPages, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[ngbPaginationPages]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */


class NgbPagination {
  constructor(config) {
    this.pageCount = 0;
    this.pages = [];
    /**
     *  The current page.
     *
     *  Page numbers start with `1`.
     */

    this.page = 1;
    /**
     *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
     *
     *  Event payload is the number of the newly selected page.
     *
     *  Page numbers start with `1`.
     */

    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.disabled = config.disabled;
    this.boundaryLinks = config.boundaryLinks;
    this.directionLinks = config.directionLinks;
    this.ellipses = config.ellipses;
    this.maxSize = config.maxSize;
    this.pageSize = config.pageSize;
    this.rotate = config.rotate;
    this.size = config.size;
  }

  hasPrevious() {
    return this.page > 1;
  }

  hasNext() {
    return this.page < this.pageCount;
  }

  nextDisabled() {
    return !this.hasNext() || this.disabled;
  }

  previousDisabled() {
    return !this.hasPrevious() || this.disabled;
  }

  selectPage(pageNumber) {
    this._updatePages(pageNumber);
  }

  ngOnChanges(changes) {
    this._updatePages(this.page);
  }

  isEllipsis(pageNumber) {
    return pageNumber === -1;
  }
  /**
   * Appends ellipses and first/last page number to the displayed pages
   */


  _applyEllipses(start, end) {
    if (this.ellipses) {
      if (start > 0) {
        // The first page will always be included. If the displayed range
        // starts after the third page, then add ellipsis. But if the range
        // starts on the third page, then add the second page instead of
        // an ellipsis, because the ellipsis would only hide a single page.
        if (start > 2) {
          this.pages.unshift(-1);
        } else if (start === 2) {
          this.pages.unshift(2);
        }

        this.pages.unshift(1);
      }

      if (end < this.pageCount) {
        // The last page will always be included. If the displayed range
        // ends before the third-last page, then add ellipsis. But if the range
        // ends on third-last page, then add the second-last page instead of
        // an ellipsis, because the ellipsis would only hide a single page.
        if (end < this.pageCount - 2) {
          this.pages.push(-1);
        } else if (end === this.pageCount - 2) {
          this.pages.push(this.pageCount - 1);
        }

        this.pages.push(this.pageCount);
      }
    }
  }
  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */


  _applyRotation() {
    let start = 0;
    let end = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

    if (this.page <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = this.pageCount - this.maxSize;
    } else {
      // rotate
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }

    return [start, end];
  }
  /**
   * Paginates page numbers based on maxSize items per page.
   */


  _applyPagination() {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start = page * this.maxSize;
    let end = start + this.maxSize;
    return [start, end];
  }

  _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);

    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }

  _updatePages(newPage) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    } // fill-in model needed to render pages


    this.pages.length = 0;

    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    } // set page within 1..max range


    this._setPageInRange(newPage); // apply maxSize if necessary


    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount; // either paginating or rotating page numbers

      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }

      this.pages = this.pages.slice(start, end); // adding ellipses

      this._applyEllipses(start, end);
    }
  }

}

NgbPagination.ɵfac = function NgbPagination_Factory(t) {
  return new (t || NgbPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbPaginationConfig));
};

NgbPagination.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbPagination,
  selectors: [["ngb-pagination"]],
  contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationEllipsis, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationFirst, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationLast, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationNext, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationNumber, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationPrevious, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbPaginationPages, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPages = _t.first);
    }
  },
  hostAttrs: ["role", "navigation"],
  inputs: {
    disabled: "disabled",
    boundaryLinks: "boundaryLinks",
    directionLinks: "directionLinks",
    ellipses: "ellipses",
    rotate: "rotate",
    collectionSize: "collectionSize",
    maxSize: "maxSize",
    page: "page",
    pageSize: "pageSize",
    size: "size"
  },
  outputs: {
    pageChange: "pageChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 20,
  vars: 12,
  consts: function () {
    let i18n_34;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__35 = goog.getMsg("\xAB\xAB");
      i18n_34 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__35;
    } else {
      i18n_34 = $localize`:@@ngb.pagination.first:««`;
    }

    let i18n_36;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__37 = goog.getMsg("\xAB");
      i18n_36 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__37;
    } else {
      i18n_36 = $localize`:@@ngb.pagination.previous:«`;
    }

    let i18n_38;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__39 = goog.getMsg("\xBB");
      i18n_38 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__39;
    } else {
      i18n_38 = $localize`:@@ngb.pagination.next:»`;
    }

    let i18n_40;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__41 = goog.getMsg("\xBB\xBB");
      i18n_40 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__41;
    } else {
      i18n_40 = $localize`:@@ngb.pagination.last:»»`;
    }

    let i18n_44;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__45 = goog.getMsg("First");
      i18n_44 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__45;
    } else {
      i18n_44 = $localize`:@@ngb.pagination.first-aria:First`;
    }

    let i18n_47;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__48 = goog.getMsg("Previous");
      i18n_47 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__48;
    } else {
      i18n_47 = $localize`:@@ngb.pagination.previous-aria:Previous`;
    }

    let i18n_50;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__51 = goog.getMsg("Next");
      i18n_50 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__51;
    } else {
      i18n_50 = $localize`:@@ngb.pagination.next-aria:Next`;
    }

    let i18n_52;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__53 = goog.getMsg("Last");
      i18n_52 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__53;
    } else {
      i18n_52 = $localize`:@@ngb.pagination.last-aria:Last`;
    }

    return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], ["class", "page-item", 3, "disabled", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], i18n_34, i18n_36, i18n_38, i18n_40, ["class", "visually-hidden", 4, "ngIf"], [1, "visually-hidden"], ["class", "page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "page-link", "tabindex", "-1", "aria-disabled", "true", 4, "ngIf"], ["class", "page-link", "href", "", 3, "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_44, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_47, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_50, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_52, "href", "", 1, "page-link", 3, "click"]];
  },
  template: function NgbPagination_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgbPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgbPagination_ng_template_12_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgbPagination_li_15_Template, 3, 9, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgbPagination_li_16_Template, 3, 8, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NgbPagination_ng_template_17_Template, 0, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NgbPagination_li_18_Template, 3, 9, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NgbPagination_li_19_Template, 3, 9, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx.tplPages == null ? null : ctx.tplPages.templateRef) || _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c54, ctx.page, ctx.pages, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPagination, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-pagination',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'role': 'navigation'
      },
      template: `
    <ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
    <ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
    <ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
    <ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
    <ng-template #ellipsis>...</ng-template>
    <ng-template #defaultNumber let-page let-currentPage="currentPage">
      {{ page }}
      <span *ngIf="page === currentPage" class="visually-hidden">(current)</span>
    </ng-template>
    <ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
      <li *ngFor="let pageNumber of pages" class="page-item" [class.active]="pageNumber === page"
        [class.disabled]="isEllipsis(pageNumber) || disabled" [attr.aria-current]="(pageNumber === page ? 'page' : null)">
        <a *ngIf="isEllipsis(pageNumber)" class="page-link" tabindex="-1" aria-disabled="true">
          <ng-template [ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
                      [ngTemplateOutletContext]="{disabled: true, currentPage: page}"></ng-template>
        </a>
        <a *ngIf="!isEllipsis(pageNumber)" class="page-link" href (click)="selectPage(pageNumber); $event.preventDefault()"
          [attr.tabindex]="disabled ? '-1' : null" [attr.aria-disabled]="disabled ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
                      [ngTemplateOutletContext]="{disabled: disabled, $implicit: pageNumber, currentPage: page}"></ng-template>
        </a>
      </li>
    </ng-template>
    <ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
      <li *ngIf="boundaryLinks" class="page-item"
        [class.disabled]="previousDisabled()">
        <a aria-label="First" i18n-aria-label="@@ngb.pagination.first-aria" class="page-link" href
          (click)="selectPage(1); $event.preventDefault()" [attr.tabindex]="previousDisabled() ? '-1' : null"
          [attr.aria-disabled]="previousDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplFirst?.templateRef || first"
                       [ngTemplateOutletContext]="{disabled: previousDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>

      <li *ngIf="directionLinks" class="page-item"
        [class.disabled]="previousDisabled()">
        <a aria-label="Previous" i18n-aria-label="@@ngb.pagination.previous-aria" class="page-link" href
          (click)="selectPage(page-1); $event.preventDefault()" [attr.tabindex]="previousDisabled() ? '-1' : null"
          [attr.aria-disabled]="previousDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplPrevious?.templateRef || previous"
                       [ngTemplateOutletContext]="{disabled: previousDisabled()}"></ng-template>
        </a>
      </li>
      <ng-template
        [ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
        [ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
      >
      </ng-template>
      <li *ngIf="directionLinks" class="page-item" [class.disabled]="nextDisabled()">
        <a aria-label="Next" i18n-aria-label="@@ngb.pagination.next-aria" class="page-link" href
          (click)="selectPage(page+1); $event.preventDefault()" [attr.tabindex]="nextDisabled() ? '-1' : null"
          [attr.aria-disabled]="nextDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplNext?.templateRef || next"
                       [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>

      <li *ngIf="boundaryLinks" class="page-item" [class.disabled]="nextDisabled()">
        <a aria-label="Last" i18n-aria-label="@@ngb.pagination.last-aria" class="page-link" href
          (click)="selectPage(pageCount); $event.preventDefault()" [attr.tabindex]="nextDisabled() ? '-1' : null"
          [attr.aria-disabled]="nextDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplLast?.templateRef || last"
                       [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>
    </ul>
  `
    }]
  }], function () {
    return [{
      type: NgbPaginationConfig
    }];
  }, {
    tplEllipsis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationEllipsis, {
        static: false
      }]
    }],
    tplFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationFirst, {
        static: false
      }]
    }],
    tplLast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationLast, {
        static: false
      }]
    }],
    tplNext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationNext, {
        static: false
      }]
    }],
    tplNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationNumber, {
        static: false
      }]
    }],
    tplPrevious: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationPrevious, {
        static: false
      }]
    }],
    tplPages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbPaginationPages, {
        static: false
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    boundaryLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ellipses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collectionSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages];

class NgbPaginationModule {}

NgbPaginationModule.ɵfac = function NgbPaginationModule_Factory(t) {
  return new (t || NgbPaginationModule)();
};

NgbPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbPaginationModule,
  declarations: [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages]
});
NgbPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: DIRECTIVES,
      exports: DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();

class Trigger {
  constructor(open, close) {
    this.open = open;
    this.close = close;

    if (!close) {
      this.close = open;
    }
  }

  isManual() {
    return this.open === 'manual' || this.close === 'manual';
  }

}

const DEFAULT_ALIASES = {
  'hover': ['mouseenter', 'mouseleave'],
  'focus': ['focusin', 'focusout']
};

function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || '').trim();

  if (trimmedTriggers.length === 0) {
    return [];
  }

  const parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map(triggerPair => {
    let alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());

  if (manualTriggers.length > 1) {
    throw 'Triggers parse error: only one manual trigger is allowed';
  }

  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
  }

  return parsedTriggers;
}

function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    const listeners = [];

    const openFn = () => subscriber.next(true);

    const closeFn = () => subscriber.next(false);

    const toggleFn = () => subscriber.next(!isOpenedFn());

    triggers.forEach(trigger => {
      if (trigger.open === trigger.close) {
        listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
      } else {
        listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
      }
    });
    return () => {
      listeners.forEach(unsubscribeFn => unsubscribeFn());
    };
  });
}

const delayOrNoop = time => time > 0 ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.delay)(time) : a => a;

function triggerDelay(openDelay, closeDelay, isOpenedFn) {
  return input$ => {
    let pending = null;
    const filteredInput$ = input$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(open => ({
      open
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => {
      const currentlyOpen = isOpenedFn();

      if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
        pending = event;
        return true;
      }

      if (pending && pending.open !== event.open) {
        pending = null;
      }

      return false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.share)());
    const delayedOpen$ = filteredInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.open), delayOrNoop(openDelay));
    const delayedClose$ = filteredInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => !event.open), delayOrNoop(closeDelay));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(delayedOpen$, delayedClose$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => {
      if (event === pending) {
        pending = null;
        return event.open !== isOpenedFn();
      }

      return false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(event => event.open));
  };
}

function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay = 0, closeDelay = 0) {
  const parsedTriggers = parseTriggers(triggers);

  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return () => {};
  }

  const subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn).pipe(triggerDelay(openDelay, closeDelay, isOpenedFn)).subscribe(open => open ? openFn() : closeFn());
  return () => subscription.unsubscribe();
}
/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */


class NgbPopoverConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.autoClose = true;
    this.placement = 'auto';
    this.triggers = 'click';
    this.disablePopover = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbPopoverConfig.ɵfac = function NgbPopoverConfig_Factory(t) {
  return new (t || NgbPopoverConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbPopoverConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbPopoverConfig,
  factory: NgbPopoverConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopoverConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

let nextId$1 = 0;

function updatePopperOptions(options) {
  options.modifiers.push(_popperjs_core__WEBPACK_IMPORTED_MODULE_33__["default"], {
    name: 'offset',
    options: {
      offset: () => {
        return [0, 12];
      }
    }
  });
  return options;
}

class NgbPopoverWindow {
  isTitleTemplate() {
    return this.title instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef;
  }

}

NgbPopoverWindow.ɵfac = function NgbPopoverWindow_Factory(t) {
  return new (t || NgbPopoverWindow)();
};

NgbPopoverWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbPopoverWindow,
  selectors: [["ngb-popover-window"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 5,
  hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    title: "title",
    id: "id",
    popoverClass: "popoverClass",
    context: "context"
  },
  ngContentSelectors: _c3,
  decls: 4,
  vars: 1,
  consts: [["data-popper-arrow", "", 1, "popover-arrow"], ["class", "popover-header", 4, "ngIf"], [1, "popover-body"], [1, "popover-header"], ["simpleTitle", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbPopoverWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbPopoverWindow_h3_1_Template, 4, 2, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopoverWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-popover-window',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")',
        '[class.fade]': 'animation',
        'role': 'tooltip',
        '[id]': 'id'
      },
      template: `
    <div class="popover-arrow" data-popper-arrow></div>
    <h3 class="popover-header" *ngIf="title">
      <ng-template #simpleTitle>{{title}}</ng-template>
      <ng-template [ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle" [ngTemplateOutletContext]="context"></ng-template>
    </h3>
    <div class="popover-body"><ng-content></ng-content></div>`
    }]
  }], null, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A lightweight and extensible directive for fancy popover creation.
 */


class NgbPopover {
  constructor(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._document = _document;
    this._changeDetector = _changeDetector;
    /**
     * An event emitted when the popover opening animation has finished. Contains no payload.
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the popover closing animation has finished. Contains no payload.
     *
     * At this point popover is not in the DOM anymore.
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._ngbPopoverWindowId = `ngb-popover-${nextId$1++}`;
    this._windowRef = null;
    this._positioning = ngbPositioning();
    this.animation = config.animation;
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disablePopover = config.disablePopover;
    this.popoverClass = config.popoverClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, this._ngZone, applicationRef);
    this._zoneSubscription = _ngZone.onStable.subscribe(() => {
      this._positioning.update();
    });
  }

  _isDisabled() {
    if (this.disablePopover) {
      return true;
    }

    if (!this.ngbPopover && !this.popoverTitle) {
      return true;
    }

    return false;
  }
  /**
   * Opens the popover.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the popover template when it is created.
   */


  open(context) {
    if (!this._windowRef && !this._isDisabled()) {
      // this type assertion is safe because otherwise _isDisabled would return true
      const {
        windowRef,
        transition$
      } = this._popupService.open(this.ngbPopover, context, this.animation);

      this._windowRef = windowRef;
      this._windowRef.instance.animation = this.animation;
      this._windowRef.instance.title = this.popoverTitle;
      this._windowRef.instance.context = context;
      this._windowRef.instance.popoverClass = this.popoverClass;
      this._windowRef.instance.id = this._ngbPopoverWindowId;

      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);

      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      } // We need to detect changes, because we don't know where .open() might be called from.
      // Ex. opening popover from one of lifecycle hooks that run after the CD
      // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception


      this._windowRef.changeDetectorRef.detectChanges(); // We need to mark for check, because popover won't work inside the OnPush component.
      // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
      // inside the template of an OnPush component and we change the popover from
      // open -> closed, the expression in question won't be updated unless we explicitly
      // mark the parent component to be checked.


      this._windowRef.changeDetectorRef.markForCheck(); // Schedule positioning on stable, to avoid several positioning updates.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        this._positioning.createPopper({
          hostElement: this._elementRef.nativeElement,
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          appendToBody: this.container === 'body',
          baseClass: 'bs-popover',
          updatePopperOptions
        });
      });

      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => this.shown.emit());
    }
  }
  /**
   * Closes the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */


  close() {
    if (this._windowRef) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');

      this._popupService.close(this.animation).subscribe(() => {
        this._windowRef = null;

        this._positioning.destroy();

        this.hidden.emit();

        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */


  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */


  isOpen() {
    return this._windowRef != null;
  }

  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
  }

  ngOnChanges({
    ngbPopover,
    popoverTitle,
    disablePopover,
    popoverClass
  }) {
    if (popoverClass && this.isOpen()) {
      this._windowRef.instance.popoverClass = popoverClass.currentValue;
    } // close popover if title and content become empty, or disablePopover set to true


    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
      this.close();
    }
  }

  ngOnDestroy() {
    this.close(); // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199

    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }

    this._zoneSubscription.unsubscribe();
  }

}

NgbPopover.ɵfac = function NgbPopover_Factory(t) {
  return new (t || NgbPopover)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbPopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};

NgbPopover.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbPopover,
  selectors: [["", "ngbPopover", ""]],
  inputs: {
    animation: "animation",
    autoClose: "autoClose",
    ngbPopover: "ngbPopover",
    popoverTitle: "popoverTitle",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    disablePopover: "disablePopover",
    popoverClass: "popoverClass",
    openDelay: "openDelay",
    closeDelay: "closeDelay"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbPopover"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopover, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbPopover]',
      exportAs: 'ngbPopover'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: NgbPopoverConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ngbPopover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disablePopover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgbPopoverModule {}

NgbPopoverModule.ɵfac = function NgbPopoverModule_Factory(t) {
  return new (t || NgbPopoverModule)();
};

NgbPopoverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbPopoverModule,
  declarations: [NgbPopover, NgbPopoverWindow],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbPopover]
});
NgbPopoverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbPopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbPopover, NgbPopoverWindow],
      exports: [NgbPopover],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */


class NgbProgressbarConfig {
  constructor() {
    this.max = 100;
    this.animated = false;
    this.striped = false;
    this.showValue = false;
  }

}

NgbProgressbarConfig.ɵfac = function NgbProgressbarConfig_Factory(t) {
  return new (t || NgbProgressbarConfig)();
};

NgbProgressbarConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbProgressbarConfig,
  factory: NgbProgressbarConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbProgressbarConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */


class NgbProgressbar {
  constructor(config) {
    /**
     * The current value for the progress bar.
     *
     * Should be in the `[0, max]` range.
     */
    this.value = 0;
    this.max = config.max;
    this.animated = config.animated;
    this.striped = config.striped;
    this.textType = config.textType;
    this.type = config.type;
    this.showValue = config.showValue;
    this.height = config.height;
  }
  /**
   * The maximal value to be displayed in the progress bar.
   *
   * Should be a positive number. Will default to 100 otherwise.
   */


  set max(max) {
    this._max = !isNumber(max) || max <= 0 ? 100 : max;
  }

  get max() {
    return this._max;
  }

  getValue() {
    return getValueInRange(this.value, this.max);
  }

  getPercentValue() {
    return 100 * this.getValue() / this.max;
  }

}

NgbProgressbar.ɵfac = function NgbProgressbar_Factory(t) {
  return new (t || NgbProgressbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbProgressbarConfig));
};

NgbProgressbar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbProgressbar,
  selectors: [["ngb-progressbar"]],
  hostAttrs: [1, "progress"],
  hostVars: 2,
  hostBindings: function NgbProgressbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height);
    }
  },
  inputs: {
    max: "max",
    animated: "animated",
    striped: "striped",
    showValue: "showValue",
    textType: "textType",
    type: "type",
    value: "value",
    height: "height"
  },
  ngContentSelectors: _c3,
  decls: 3,
  vars: 11,
  consts: function () {
    let i18n_55;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__56 = goog.getMsg("{$interpolation}", {
        "interpolation": "\uFFFD0\uFFFD"
      });
      i18n_55 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__56;
    } else {
      i18n_55 = $localize`:@@ngb.progressbar.value:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    }

    return [["role", "progressbar", "aria-valuemin", "0"], [4, "ngIf"], i18n_55];
  },
  template: function NgbProgressbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgbProgressbar_span_1_Template, 3, 3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate4"]("progress-bar", ctx.type ? " bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : "", "\n    ", ctx.animated ? " progress-bar-animated" : "", "", ctx.striped ? " progress-bar-striped" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getPercentValue(), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showValue);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.PercentPipe],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbProgressbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-progressbar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'progress'
      },
      template: `
    <div class="progress-bar{{type ? ' bg-' + type : ''}}{{textType ? ' text-' + textType : ''}}
    {{animated ? ' progress-bar-animated' : ''}}{{striped ? ' progress-bar-striped' : ''}}"
    role="progressbar" [style.width.%]="getPercentValue()"
    [attr.aria-valuenow]="getValue()" aria-valuemin="0" [attr.aria-valuemax]="max">
      <span *ngIf="showValue" i18n="@@ngb.progressbar.value">{{getValue() / max | percent}}</span><ng-content></ng-content>
    </div>
  `
    }]
  }], function () {
    return [{
      type: NgbProgressbarConfig
    }];
  }, {
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    striped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    textType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }]
  });
})();

class NgbProgressbarModule {}

NgbProgressbarModule.ɵfac = function NgbProgressbarModule_Factory(t) {
  return new (t || NgbProgressbarModule)();
};

NgbProgressbarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbProgressbarModule,
  declarations: [NgbProgressbar],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbProgressbar]
});
NgbProgressbarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbProgressbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbProgressbar],
      exports: [NgbProgressbar],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */


class NgbRatingConfig {
  constructor() {
    this.max = 10;
    this.readonly = false;
    this.resettable = false;
  }

}

NgbRatingConfig.ɵfac = function NgbRatingConfig_Factory(t) {
  return new (t || NgbRatingConfig)();
};

NgbRatingConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbRatingConfig,
  factory: NgbRatingConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRatingConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * A directive that helps visualising and interacting with a star rating bar.
 */


class NgbRating {
  constructor(config, _changeDetectorRef) {
    this._changeDetectorRef = _changeDetectorRef;
    this.contexts = [];
    this.disabled = false;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload equals to the rating being hovered over.
     */

    this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload equals to the rating of the last item being hovered over.
     */

    this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the user selects a new rating.
     *
     * Event payload equals to the newly selected rating.
     */

    this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);

    this.onChange = _ => {};

    this.onTouched = () => {};

    this.max = config.max;
    this.readonly = config.readonly;
  }

  ariaValueText() {
    return `${this.nextRate} out of ${this.max}`;
  }

  isInteractive() {
    return !this.readonly && !this.disabled;
  }

  enter(value) {
    if (this.isInteractive()) {
      this._updateState(value);
    }

    this.hover.emit(value);
  }

  handleBlur() {
    this.onTouched();
  }

  handleClick(value) {
    if (this.isInteractive()) {
      this.update(this.resettable && this.rate === value ? 0 : value);
    }
  }

  handleKeyDown(event) {
    /* eslint-disable-next-line deprecation/deprecation */
    switch (event.which) {
      case Key.ArrowDown:
      case Key.ArrowLeft:
        this.update(this.rate - 1);
        break;

      case Key.ArrowUp:
      case Key.ArrowRight:
        this.update(this.rate + 1);
        break;

      case Key.Home:
        this.update(0);
        break;

      case Key.End:
        this.update(this.max);
        break;

      default:
        return;
    } // note 'return' in default case


    event.preventDefault();
  }

  ngOnChanges(changes) {
    if (changes['rate']) {
      this.update(this.rate);
    }
  }

  ngOnInit() {
    this.contexts = Array.from({
      length: this.max
    }, (v, k) => ({
      fill: 0,
      index: k
    }));

    this._updateState(this.rate);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  reset() {
    this.leave.emit(this.nextRate);

    this._updateState(this.rate);
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  update(value, internalChange = true) {
    const newRate = getValueInRange(value, this.max, 0);

    if (this.isInteractive() && this.rate !== newRate) {
      this.rate = newRate;
      this.rateChange.emit(this.rate);
    }

    if (internalChange) {
      this.onChange(this.rate);
      this.onTouched();
    }

    this._updateState(this.rate);
  }

  writeValue(value) {
    this.update(value, false);

    this._changeDetectorRef.markForCheck();
  }

  _updateState(nextValue) {
    this.nextRate = nextValue;
    this.contexts.forEach((context, index) => context.fill = Math.round(getValueInRange(nextValue - index, 1, 0) * 100));
  }

}

NgbRating.ɵfac = function NgbRating_Factory(t) {
  return new (t || NgbRating)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbRatingConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NgbRating.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbRating,
  selectors: [["ngb-rating"]],
  contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.starTemplateFromContent = _t.first);
    }
  },
  hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"],
  hostVars: 5,
  hostBindings: function NgbRating_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgbRating_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("keydown", function NgbRating_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      })("mouseleave", function NgbRating_mouseleave_HostBindingHandler() {
        return ctx.reset();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.disabled ? -1 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText())("aria-disabled", ctx.readonly ? true : null);
    }
  },
  inputs: {
    max: "max",
    rate: "rate",
    readonly: "readonly",
    resettable: "resettable",
    starTemplate: "starTemplate"
  },
  outputs: {
    hover: "hover",
    leave: "leave",
    rateChange: "rateChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbRating),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 1,
  consts: [["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "visually-hidden"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbRating_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbRating_ng_template_2_Template, 4, 5, "ng-template", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contexts);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRating, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-rating',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'd-inline-flex',
        '[tabindex]': 'disabled ? -1 : 0',
        'role': 'slider',
        'aria-valuemin': '0',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-valuenow]': 'nextRate',
        '[attr.aria-valuetext]': 'ariaValueText()',
        '[attr.aria-disabled]': 'readonly ? true : null',
        '(blur)': 'handleBlur()',
        '(keydown)': 'handleKeyDown($event)',
        '(mouseleave)': 'reset()'
      },
      template: `
    <ng-template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>
    <ng-template ngFor [ngForOf]="contexts" let-index="index">
      <span class="visually-hidden">({{ index < nextRate ? '*' : ' ' }})</span>
      <span (mouseenter)="enter(index + 1)" (click)="handleClick(index + 1)" [style.cursor]="isInteractive() ? 'pointer' : 'default'">
        <ng-template [ngTemplateOutlet]="starTemplate || starTemplateFromContent || t" [ngTemplateOutletContext]="contexts[index]">
        </ng-template>
      </span>
    </ng-template>
  `,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbRating),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: NgbRatingConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resettable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    starTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    starTemplateFromContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: false
      }]
    }],
    hover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    leave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgbRatingModule {}

NgbRatingModule.ɵfac = function NgbRatingModule_Factory(t) {
  return new (t || NgbRatingModule)();
};

NgbRatingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbRatingModule,
  declarations: [NgbRating],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbRating]
});
NgbRatingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbRatingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbRating],
      exports: [NgbRating],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();

class NgbTime {
  constructor(hour, minute, second) {
    this.hour = toInteger(hour);
    this.minute = toInteger(minute);
    this.second = toInteger(second);
  }

  changeHour(step = 1) {
    this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
  }

  updateHour(hour) {
    if (isNumber(hour)) {
      this.hour = (hour < 0 ? 24 + hour : hour) % 24;
    } else {
      this.hour = NaN;
    }
  }

  changeMinute(step = 1) {
    this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
  }

  updateMinute(minute) {
    if (isNumber(minute)) {
      this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
      this.changeHour(Math.floor(minute / 60));
    } else {
      this.minute = NaN;
    }
  }

  changeSecond(step = 1) {
    this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
  }

  updateSecond(second) {
    if (isNumber(second)) {
      this.second = second < 0 ? 60 + second % 60 : second % 60;
      this.changeMinute(Math.floor(second / 60));
    } else {
      this.second = NaN;
    }
  }

  isValid(checkSecs = true) {
    return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
  }

  toString() {
    return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`;
  }

}
/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */


class NgbTimepickerConfig {
  constructor() {
    this.meridian = false;
    this.spinners = true;
    this.seconds = false;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.disabled = false;
    this.readonlyInputs = false;
    this.size = 'medium';
  }

}

NgbTimepickerConfig.ɵfac = function NgbTimepickerConfig_Factory(t) {
  return new (t || NgbTimepickerConfig)();
};

NgbTimepickerConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimepickerConfig,
  factory: NgbTimepickerConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */


class NgbTimeAdapter {}

NgbTimeAdapter.ɵfac = function NgbTimeAdapter_Factory(t) {
  return new (t || NgbTimeAdapter)();
};

NgbTimeAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimeAdapter,
  factory: function () {
    return NGB_DATEPICKER_TIME_ADAPTER_FACTORY();
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimeAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
    }]
  }], null, null);
})();

class NgbTimeStructAdapter extends NgbTimeAdapter {
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  fromModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */


  toModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }

}

NgbTimeStructAdapter.ɵfac = /* @__PURE__ */function () {
  let ɵNgbTimeStructAdapter_BaseFactory;
  return function NgbTimeStructAdapter_Factory(t) {
    return (ɵNgbTimeStructAdapter_BaseFactory || (ɵNgbTimeStructAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbTimeStructAdapter)))(t || NgbTimeStructAdapter);
  };
}();

NgbTimeStructAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimeStructAdapter,
  factory: NgbTimeStructAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimeStructAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

function NGB_TIMEPICKER_I18N_FACTORY(locale) {
  return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */


class NgbTimepickerI18n {}

NgbTimepickerI18n.ɵfac = function NgbTimepickerI18n_Factory(t) {
  return new (t || NgbTimepickerI18n)();
};

NgbTimepickerI18n.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimepickerI18n,
  factory: function NgbTimepickerI18n_Factory(t) {
    let r = null;

    if (t) {
      r = new t();
    } else {
      r = NGB_TIMEPICKER_I18N_FACTORY(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
    }

    return r;
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerI18n, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: NGB_TIMEPICKER_I18N_FACTORY,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
    }]
  }], null, null);
})();

class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
  constructor(locale) {
    super();
    this._periods = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getLocaleDayPeriods)(locale, _angular_common__WEBPACK_IMPORTED_MODULE_12__.FormStyle.Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TranslationWidth.Narrow);
  }

  getMorningPeriod() {
    return this._periods[0];
  }

  getAfternoonPeriod() {
    return this._periods[1];
  }

}

NgbTimepickerI18nDefault.ɵfac = function NgbTimepickerI18nDefault_Factory(t) {
  return new (t || NgbTimepickerI18nDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};

NgbTimepickerI18nDefault.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTimepickerI18nDefault,
  factory: NgbTimepickerI18nDefault.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerI18nDefault, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();

const FILTER_REGEX = /[^0-9]/g;
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */

class NgbTimepicker {
  constructor(_config, _ngbTimeAdapter, _cd, i18n) {
    this._config = _config;
    this._ngbTimeAdapter = _ngbTimeAdapter;
    this._cd = _cd;
    this.i18n = i18n;

    this.onChange = _ => {};

    this.onTouched = () => {};

    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }
  /**
   * The number of hours to add/subtract when clicking hour spinners.
   */


  set hourStep(step) {
    this._hourStep = isInteger(step) ? step : this._config.hourStep;
  }

  get hourStep() {
    return this._hourStep;
  }
  /**
   * The number of minutes to add/subtract when clicking minute spinners.
   */


  set minuteStep(step) {
    this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
  }

  get minuteStep() {
    return this._minuteStep;
  }
  /**
   * The number of seconds to add/subtract when clicking second spinners.
   */


  set secondStep(step) {
    this._secondStep = isInteger(step) ? step : this._config.secondStep;
  }

  get secondStep() {
    return this._secondStep;
  }

  writeValue(value) {
    const structValue = this._ngbTimeAdapter.fromModel(value);

    this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();

    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
      this.model.second = 0;
    }

    this._cd.markForCheck();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  changeHour(step) {
    this.model.changeHour(step);
    this.propagateModelChange();
  }

  changeMinute(step) {
    this.model.changeMinute(step);
    this.propagateModelChange();
  }

  changeSecond(step) {
    this.model.changeSecond(step);
    this.propagateModelChange();
  }

  updateHour(newVal) {
    const isPM = this.model.hour >= 12;
    const enteredHour = toInteger(newVal);

    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
      this.model.updateHour(enteredHour + 12);
    } else {
      this.model.updateHour(enteredHour);
    }

    this.propagateModelChange();
  }

  updateMinute(newVal) {
    this.model.updateMinute(toInteger(newVal));
    this.propagateModelChange();
  }

  updateSecond(newVal) {
    this.model.updateSecond(toInteger(newVal));
    this.propagateModelChange();
  }

  toggleMeridian() {
    if (this.meridian) {
      this.changeHour(12);
    }
  }

  formatInput(input) {
    input.value = input.value.replace(FILTER_REGEX, '');
  }

  formatHour(value) {
    if (isNumber(value)) {
      if (this.meridian) {
        return padNumber(value % 12 === 0 ? 12 : value % 12);
      } else {
        return padNumber(value % 24);
      }
    } else {
      return padNumber(NaN);
    }
  }

  formatMinSec(value) {
    return padNumber(isNumber(value) ? value : NaN);
  }

  handleBlur() {
    this.onTouched();
  }

  get isSmallSize() {
    return this.size === 'small';
  }

  get isLargeSize() {
    return this.size === 'large';
  }

  ngOnChanges(changes) {
    if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
      this.model.second = 0;
      this.propagateModelChange(false);
    }
  }

  propagateModelChange(touched = true) {
    if (touched) {
      this.onTouched();
    }

    if (this.model.isValid(this.seconds)) {
      this.onChange(this._ngbTimeAdapter.toModel({
        hour: this.model.hour,
        minute: this.model.minute,
        second: this.model.second
      }));
    } else {
      this.onChange(this._ngbTimeAdapter.toModel(null));
    }
  }

}

NgbTimepicker.ɵfac = function NgbTimepicker_Factory(t) {
  return new (t || NgbTimepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTimeAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTimepickerI18n));
};

NgbTimepicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbTimepicker,
  selectors: [["ngb-timepicker"]],
  inputs: {
    meridian: "meridian",
    spinners: "spinners",
    seconds: "seconds",
    hourStep: "hourStep",
    minuteStep: "minuteStep",
    secondStep: "secondStep",
    readonlyInputs: "readonlyInputs",
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTimepicker),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 16,
  vars: 25,
  consts: function () {
    let i18n_57;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_58 = goog.getMsg("HH");
      i18n_57 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_58;
    } else {
      i18n_57 = $localize`:@@ngb.timepicker.HH:HH`;
    }

    let i18n_59;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_60 = goog.getMsg("Hours");
      i18n_59 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_60;
    } else {
      i18n_59 = $localize`:@@ngb.timepicker.hours:Hours`;
    }

    let i18n_61;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_62 = goog.getMsg("MM");
      i18n_61 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_62;
    } else {
      i18n_61 = $localize`:@@ngb.timepicker.MM:MM`;
    }

    let i18n_63;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_64 = goog.getMsg("Minutes");
      i18n_63 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS_64;
    } else {
      i18n_63 = $localize`:@@ngb.timepicker.minutes:Minutes`;
    }

    let i18n_65;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__66 = goog.getMsg("Increment hours");
      i18n_65 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__66;
    } else {
      i18n_65 = $localize`:@@ngb.timepicker.increment-hours:Increment hours`;
    }

    let i18n_67;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__68 = goog.getMsg("Decrement hours");
      i18n_67 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__68;
    } else {
      i18n_67 = $localize`:@@ngb.timepicker.decrement-hours:Decrement hours`;
    }

    let i18n_69;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__70 = goog.getMsg("Increment minutes");
      i18n_69 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__70;
    } else {
      i18n_69 = $localize`:@@ngb.timepicker.increment-minutes:Increment minutes`;
    }

    let i18n_71;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__72 = goog.getMsg("Decrement minutes");
      i18n_71 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__72;
    } else {
      i18n_71 = $localize`:@@ngb.timepicker.decrement-minutes:Decrement minutes`;
    }

    let i18n_73;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__74 = goog.getMsg("SS");
      i18n_73 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__74;
    } else {
      i18n_73 = $localize`:@@ngb.timepicker.SS:SS`;
    }

    let i18n_75;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__76 = goog.getMsg("Seconds");
      i18n_75 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__76;
    } else {
      i18n_75 = $localize`:@@ngb.timepicker.seconds:Seconds`;
    }

    let i18n_77;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___78 = goog.getMsg("Increment seconds");
      i18n_77 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___78;
    } else {
      i18n_77 = $localize`:@@ngb.timepicker.increment-seconds:Increment seconds`;
    }

    let i18n_79;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___80 = goog.getMsg("Decrement seconds");
      i18n_79 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___80;
    } else {
      i18n_79 = $localize`:@@ngb.timepicker.decrement-seconds:Decrement seconds`;
    }

    let i18n_81;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___82 = goog.getMsg("{$interpolation}", {
        "interpolation": "\uFFFD0\uFFFD"
      });
      i18n_81 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___82;
    } else {
      i18n_81 = $localize`:@@ngb.timepicker.PM:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    }

    let i18n_83;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___84 = goog.getMsg("{$interpolation}", {
        "interpolation": "\uFFFD0\uFFFD"
      });
      i18n_83 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS___84;
    } else {
      i18n_83 = $localize`:@@ngb.timepicker.AM:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    }

    return [[3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", "class", "btn btn-link", 3, "btn-sm", "btn-lg", "disabled", "click", 4, "ngIf"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_57, "aria-label", i18n_59, 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_61, "aria-label", i18n_63, 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown"], ["class", "ngb-tp-spacer", 4, "ngIf"], ["class", "ngb-tp-input-container ngb-tp-second", 4, "ngIf"], ["class", "ngb-tp-meridian", 4, "ngIf"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "disabled", "click"], [1, "chevron", "ngb-tp-chevron"], [1, "visually-hidden"], i18n_65, [1, "chevron", "ngb-tp-chevron", "bottom"], i18n_67, i18n_69, i18n_71, [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_73, "aria-label", i18n_75, 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown"], i18n_77, i18n_79, [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["am", ""], i18n_81, i18n_83];
  },
  template: function NgbTimepicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgbTimepicker_button_3_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbTimepicker_Template_input_change_4_listener($event) {
        return ctx.updateHour($event.target.value);
      })("blur", function NgbTimepicker_Template_input_blur_4_listener() {
        return ctx.handleBlur();
      })("input", function NgbTimepicker_Template_input_input_4_listener($event) {
        return ctx.formatInput($event.target);
      })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) {
        ctx.changeHour(ctx.hourStep);
        return $event.preventDefault();
      })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) {
        ctx.changeHour(-ctx.hourStep);
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgbTimepicker_button_5_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgbTimepicker_button_9_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgbTimepicker_Template_input_change_10_listener($event) {
        return ctx.updateMinute($event.target.value);
      })("blur", function NgbTimepicker_Template_input_blur_10_listener() {
        return ctx.handleBlur();
      })("input", function NgbTimepicker_Template_input_input_10_listener($event) {
        return ctx.formatInput($event.target);
      })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_10_listener($event) {
        ctx.changeMinute(ctx.minuteStep);
        return $event.preventDefault();
      })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_10_listener($event) {
        ctx.changeMinute(-ctx.minuteStep);
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgbTimepicker_button_11_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgbTimepicker_div_12_Template, 2, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgbTimepicker_div_13_Template, 4, 9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgbTimepicker_div_14_Template, 1, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgbTimepicker_div_15_Template, 5, 9, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meridian);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-timepicker',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <fieldset [disabled]="disabled" [class.disabled]="disabled">
      <div class="ngb-tp">
        <div class="ngb-tp-input-container ngb-tp-hour">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeHour(hourStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
          </button>
          <input type="text" class="ngb-tp-input form-control" [class.form-control-sm]="isSmallSize"
            [class.form-control-lg]="isLargeSize"
            maxlength="2" inputmode="numeric" placeholder="HH" i18n-placeholder="@@ngb.timepicker.HH"
            [value]="formatHour(model?.hour)" (change)="updateHour($any($event).target.value)"
            [readOnly]="readonlyInputs" [disabled]="disabled" aria-label="Hours" i18n-aria-label="@@ngb.timepicker.hours"
            (blur)="handleBlur()"
            (input)="formatInput($any($event).target)"
            (keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
            (keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeHour(-hourStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
          </button>
        </div>
        <div class="ngb-tp-spacer">:</div>
        <div class="ngb-tp-input-container ngb-tp-minute">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeMinute(minuteStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
          </button>
          <input type="text" class="ngb-tp-input form-control" [class.form-control-sm]="isSmallSize" [class.form-control-lg]="isLargeSize"
            maxlength="2" inputmode="numeric" placeholder="MM" i18n-placeholder="@@ngb.timepicker.MM"
            [value]="formatMinSec(model?.minute)" (change)="updateMinute($any($event).target.value)"
            [readOnly]="readonlyInputs" [disabled]="disabled" aria-label="Minutes" i18n-aria-label="@@ngb.timepicker.minutes"
            (blur)="handleBlur()"
            (input)="formatInput($any($event).target)"
            (keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
            (keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeMinute(-minuteStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize"  [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="visually-hidden"  i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
          </button>
        </div>
        <div *ngIf="seconds" class="ngb-tp-spacer">:</div>
        <div *ngIf="seconds" class="ngb-tp-input-container ngb-tp-second">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeSecond(secondStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
          </button>
          <input type="text" class="ngb-tp-input form-control" [class.form-control-sm]="isSmallSize" [class.form-control-lg]="isLargeSize"
            maxlength="2" inputmode="numeric" placeholder="SS" i18n-placeholder="@@ngb.timepicker.SS"
            [value]="formatMinSec(model?.second)" (change)="updateSecond($any($event).target.value)"
            [readOnly]="readonlyInputs" [disabled]="disabled" aria-label="Seconds" i18n-aria-label="@@ngb.timepicker.seconds"
            (blur)="handleBlur()"
            (input)="formatInput($any($event).target)"
            (keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
            (keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeSecond(-secondStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize"  [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
          </button>
        </div>
        <div *ngIf="meridian" class="ngb-tp-spacer"></div>
        <div *ngIf="meridian" class="ngb-tp-meridian">
          <button type="button" class="btn btn-outline-primary" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize"
            [disabled]="disabled" [class.disabled]="disabled"
                  (click)="toggleMeridian()">
            <ng-container *ngIf="model && model.hour >= 12; else am"
                          i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
            <ng-template #am i18n="@@ngb.timepicker.AM">{{ i18n.getMorningPeriod() }}</ng-template>
          </button>
        </div>
      </div>
    </fieldset>
  `,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTimepicker),
        multi: true
      }],
      styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n"]
    }]
  }], function () {
    return [{
      type: NgbTimepickerConfig
    }, {
      type: NgbTimeAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NgbTimepickerI18n
    }];
  }, {
    meridian: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    spinners: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    seconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hourStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minuteStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    secondStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonlyInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgbTimepickerModule {}

NgbTimepickerModule.ɵfac = function NgbTimepickerModule_Factory(t) {
  return new (t || NgbTimepickerModule)();
};

NgbTimepickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbTimepickerModule,
  declarations: [NgbTimepicker],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbTimepicker]
});
NgbTimepickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbTimepicker],
      exports: [NgbTimepicker],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();

const ngbToastFadeInTransition = (element, animation) => {
  const {
    classList
  } = element;

  if (!animation) {
    classList.add('show');
    return;
  }

  classList.remove('hide');
  reflow(element);
  classList.add('showing');
  return () => {
    classList.remove('showing');
    classList.add('show');
  };
};

const ngbToastFadeOutTransition = ({
  classList
}) => {
  classList.remove('show');
  return () => {
    classList.add('hide');
  };
};
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */


class NgbToastConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.autohide = true;
    this.delay = 5000;
    this.ariaLive = 'polite';
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbToastConfig.ɵfac = function NgbToastConfig_Factory(t) {
  return new (t || NgbToastConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbToastConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbToastConfig,
  factory: NgbToastConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToastConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();
/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * @since 5.0.0
 */


class NgbToastHeader {}

NgbToastHeader.ɵfac = function NgbToastHeader_Factory(t) {
  return new (t || NgbToastHeader)();
};

NgbToastHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbToastHeader,
  selectors: [["", "ngbToastHeader", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToastHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbToastHeader]'
    }]
  }], null, null);
})();
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * @since 5.0.0
 */


class NgbToast {
  constructor(ariaLive, config, _zone, _element) {
    this.ariaLive = ariaLive;
    this._zone = _zone;
    this._element = _element;
    /**
     * A template like `<ng-template ngbToastHeader></ng-template>` can be
     * used in the projected content to allow markup usage.
     */

    this.contentHeaderTpl = null;
    /**
     * An event fired after the animation triggered by calling `.show()` method has finished.
     *
     * @since 8.0.0
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event fired after the animation triggered by calling `.hide()` method has finished.
     *
     * It can only occur in 2 different scenarios:
     * - `autohide` timeout fires
     * - user clicks on a closing cross
     *
     * Additionally this output is purely informative. The toast won't be removed from DOM automatically, it's up
     * to the user to take care of that.
     *
     * @since 8.0.0
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (this.ariaLive == null) {
      this.ariaLive = config.ariaLive;
    }

    this.delay = config.delay;
    this.autohide = config.autohide;
    this.animation = config.animation;
  }

  ngAfterContentInit() {
    this._zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._init();

      this.show();
    });
  }

  ngOnChanges(changes) {
    if ('autohide' in changes) {
      this._clearTimeout();

      this._init();
    }
  }
  /**
   * Triggers toast closing programmatically.
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(hidden)` output
   *
   * @since 8.0.0
   */


  hide() {
    this._clearTimeout();

    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, {
      animation: this.animation,
      runningTransition: 'stop'
    });
    transition.subscribe(() => {
      this.hidden.emit();
    });
    return transition;
  }
  /**
   * Triggers toast opening programmatically.
   *
   * The returned observable will emit and be completed once the opening transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(shown)` output
   *
   * @since 8.0.0
   */


  show() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
      animation: this.animation,
      runningTransition: 'continue'
    });
    transition.subscribe(() => {
      this.shown.emit();
    });
    return transition;
  }

  _init() {
    if (this.autohide && !this._timeoutID) {
      this._timeoutID = setTimeout(() => this.hide(), this.delay);
    }
  }

  _clearTimeout() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
      this._timeoutID = null;
    }
  }

}

NgbToast.ɵfac = function NgbToast_Factory(t) {
  return new (t || NgbToast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-live'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbToastConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgbToast.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbToast,
  selectors: [["ngb-toast"]],
  contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgbToastHeader, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentHeaderTpl = _t.first);
    }
  },
  hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"],
  hostVars: 3,
  hostBindings: function NgbToast_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx.ariaLive);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    delay: "delay",
    autohide: "autohide",
    header: "header"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbToast"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c3,
  decls: 5,
  vars: 1,
  consts: function () {
    let i18n_85;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__86 = goog.getMsg("Close");
      i18n_85 = MSG_C__USERS_BENJAMIN_DESKTOP_TODOSPORTSIONIC_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2015_NG_BOOTSTRAP_MJS__86;
    } else {
      i18n_85 = $localize`:@@ngb.toast.close-aria:Close`;
    }

    return [["headerTpl", ""], [3, "ngIf"], [1, "toast-body"], [1, "me-auto"], [1, "toast-header"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", i18n_85, 1, "btn-close", 3, "click"]];
  },
  template: function NgbToast_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbToast_ng_template_2_Template, 3, 1, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentHeaderTpl || ctx.header);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-toast',
      exportAs: 'ngbToast',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'role': 'alert',
        '[attr.aria-live]': 'ariaLive',
        'aria-atomic': 'true',
        'class': 'toast',
        '[class.fade]': 'animation'
      },
      template: `
    <ng-template #headerTpl>
      <strong class="me-auto">{{header}}</strong>
    </ng-template>
    <ng-template [ngIf]="contentHeaderTpl || header">
      <div class="toast-header">
        <ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl"></ng-template>
        <button type="button" class="btn-close" aria-label="Close" i18n-aria-label="@@ngb.toast.close-aria" (click)="hide()">
        </button>
      </div>
    </ng-template>
    <div class="toast-body">
      <ng-content></ng-content>
    </div>
  `,
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['aria-live']
      }]
    }, {
      type: NgbToastConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autohide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentHeaderTpl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgbToastHeader, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgbToastModule {}

NgbToastModule.ɵfac = function NgbToastModule_Factory(t) {
  return new (t || NgbToastModule)();
};

NgbToastModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbToastModule,
  declarations: [NgbToast, NgbToastHeader],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbToast, NgbToastHeader]
});
NgbToastModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbToastModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbToast, NgbToastHeader],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
      exports: [NgbToast, NgbToastHeader]
    }]
  }], null, null);
})();
/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */


class NgbTooltipConfig {
  constructor(_ngbConfig) {
    this._ngbConfig = _ngbConfig;
    this.autoClose = true;
    this.placement = 'auto';
    this.triggers = 'hover focus';
    this.disableTooltip = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }

  get animation() {
    return this._animation === undefined ? this._ngbConfig.animation : this._animation;
  }

  set animation(animation) {
    this._animation = animation;
  }

}

NgbTooltipConfig.ɵfac = function NgbTooltipConfig_Factory(t) {
  return new (t || NgbTooltipConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgbConfig));
};

NgbTooltipConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTooltipConfig,
  factory: NgbTooltipConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltipConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: NgbConfig
    }];
  }, null);
})();

let nextId = 0;

class NgbTooltipWindow {}

NgbTooltipWindow.ɵfac = function NgbTooltipWindow_Factory(t) {
  return new (t || NgbTooltipWindow)();
};

NgbTooltipWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbTooltipWindow,
  selectors: [["ngb-tooltip-window"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 5,
  hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fade", ctx.animation);
    }
  },
  inputs: {
    animation: "animation",
    id: "id",
    tooltipClass: "tooltipClass"
  },
  ngContentSelectors: _c3,
  decls: 3,
  vars: 0,
  consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
  template: function NgbTooltipWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltipWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-tooltip-window',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '[class]': '"tooltip" + (tooltipClass ? " " + tooltipClass : "")',
        '[class.fade]': 'animation',
        'role': 'tooltip',
        '[id]': 'id'
      },
      template: `<div class="tooltip-arrow" data-popper-arrow></div><div class="tooltip-inner"><ng-content></ng-content></div>`
    }]
  }], null, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */


class NgbTooltip {
  constructor(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._document = _document;
    this._changeDetector = _changeDetector;
    /**
     * An event emitted when the tooltip opening animation has finished. Contains no payload.
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitted when the tooltip closing animation has finished. Contains no payload.
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
    this._windowRef = null;
    this._positioning = ngbPositioning();
    this.animation = config.animation;
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disableTooltip = config.disableTooltip;
    this.tooltipClass = config.tooltipClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, this._ngZone, applicationRef);
    this._zoneSubscription = _ngZone.onStable.subscribe(() => {
      this._positioning.update();
    });
  }
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
   *
   * If the content if falsy, the tooltip won't open.
   */


  set ngbTooltip(value) {
    this._ngbTooltip = value;

    if (!value && this._windowRef) {
      this.close();
    }
  }

  get ngbTooltip() {
    return this._ngbTooltip;
  }
  /**
   * Opens the tooltip.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the tooltip template when it is created.
   */


  open(context) {
    if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this._ngbTooltip, context, this.animation);

      this._windowRef = windowRef;
      this._windowRef.instance.animation = this.animation;
      this._windowRef.instance.tooltipClass = this.tooltipClass;
      this._windowRef.instance.id = this._ngbTooltipWindowId;

      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);

      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      } // We need to detect changes, because we don't know where .open() might be called from.
      // Ex. opening tooltip from one of lifecycle hooks that run after the CD
      // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception


      this._windowRef.changeDetectorRef.detectChanges(); // We need to mark for check, because tooltip won't work inside the OnPush component.
      // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
      // inside the template of an OnPush component and we change the tooltip from
      // open -> closed, the expression in question won't be updated unless we explicitly
      // mark the parent component to be checked.


      this._windowRef.changeDetectorRef.markForCheck(); // Schedule positioning on stable, to avoid several positioning updates.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        this._positioning.createPopper({
          hostElement: this._elementRef.nativeElement,
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          appendToBody: this.container === 'body',
          baseClass: 'bs-tooltip'
        });
      });

      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => this.shown.emit());
    }
  }
  /**
   * Closes the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */


  close() {
    if (this._windowRef != null) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');

      this._popupService.close(this.animation).subscribe(() => {
        this._windowRef = null;

        this._positioning.destroy();

        this.hidden.emit();

        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */


  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */


  isOpen() {
    return this._windowRef != null;
  }

  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
  }

  ngOnChanges({
    tooltipClass
  }) {
    if (tooltipClass && this.isOpen()) {
      this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
    }
  }

  ngOnDestroy() {
    this.close(); // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199

    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }

    this._zoneSubscription.unsubscribe();
  }

}

NgbTooltip.ɵfac = function NgbTooltip_Factory(t) {
  return new (t || NgbTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};

NgbTooltip.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbTooltip,
  selectors: [["", "ngbTooltip", ""]],
  inputs: {
    animation: "animation",
    autoClose: "autoClose",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    disableTooltip: "disableTooltip",
    tooltipClass: "tooltipClass",
    openDelay: "openDelay",
    closeDelay: "closeDelay",
    ngbTooltip: "ngbTooltip"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbTooltip"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngbTooltip]',
      exportAs: 'ngbTooltip'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: NgbTooltipConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ngbTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgbTooltipModule {}

NgbTooltipModule.ɵfac = function NgbTooltipModule_Factory(t) {
  return new (t || NgbTooltipModule)();
};

NgbTooltipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbTooltipModule,
  declarations: [NgbTooltip, NgbTooltipWindow],
  exports: [NgbTooltip]
});
NgbTooltipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbTooltip, NgbTooltipWindow],
      exports: [NgbTooltip]
    }]
  }], null, null);
})();
/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */


class NgbHighlight {
  constructor() {
    /**
     * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
     */
    this.highlightClass = 'ngb-highlight';
    /**
     * Boolean option to determine if the highlighting should be sensitive to accents or not.
     *
     * This feature is only available for browsers that implement the `String.normalize` function
     * (typically not Internet Explorer).
     * If you want to use this feature in a browser that does not implement `String.normalize`,
     * you will have to include a polyfill in your application (`unorm` for example).
     *
     * @since 9.1.0
     */

    this.accentSensitive = true;
  }

  ngOnChanges(changes) {
    if (!this.accentSensitive && !String.prototype.normalize) {
      console.warn('The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser ' + 'that does not implement the `String.normalize` function. ' + 'You will have to include a polyfill in your application to use this feature in the current browser.');
      this.accentSensitive = true;
    }

    const result = toString(this.result);
    const terms = Array.isArray(this.term) ? this.term : [this.term];

    const prepareTerm = term => this.accentSensitive ? term : removeAccents(term);

    const escapedTerms = terms.map(term => regExpEscape(prepareTerm(toString(term)))).filter(term => term);
    const toSplit = this.accentSensitive ? result : removeAccents(result);
    const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join('|')})`, 'gmi')) : [result];

    if (this.accentSensitive) {
      this.parts = parts;
    } else {
      let offset = 0;
      this.parts = parts.map(part => result.substring(offset, offset += part.length));
    }
  }

}

NgbHighlight.ɵfac = function NgbHighlight_Factory(t) {
  return new (t || NgbHighlight)();
};

NgbHighlight.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbHighlight,
  selectors: [["ngb-highlight"]],
  inputs: {
    highlightClass: "highlightClass",
    result: "result",
    term: "term",
    accentSensitive: "accentSensitive"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], [3, "class", 4, "ngIf", "ngIfElse"], ["even", ""]],
  template: function NgbHighlight_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbHighlight_ng_template_0_Template, 3, 2, "ng-template", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  styles: [".ngb-highlight{font-weight:700}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbHighlight, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-highlight',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` + `<span *ngIf="isOdd; else even" [class]="highlightClass">{{part}}</span><ng-template #even>{{part}}</ng-template>` + `</ng-template>`,
      styles: [".ngb-highlight{font-weight:700}\n"]
    }]
  }], null, {
    highlightClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    result: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    accentSensitive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgbTypeaheadWindow {
  constructor() {
    this.activeIdx = 0;
    /**
     * Flag indicating if the first row should be active initially
     */

    this.focusFirst = true;
    /**
     * A function used to format a given result before display. This function should return a formatted string without any
     * HTML markup
     */

    this.formatter = toString;
    /**
     * Event raised when user selects a particular result row
     */

    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  hasActive() {
    return this.activeIdx > -1 && this.activeIdx < this.results.length;
  }

  getActive() {
    return this.results[this.activeIdx];
  }

  markActive(activeIdx) {
    this.activeIdx = activeIdx;

    this._activeChanged();
  }

  next() {
    if (this.activeIdx === this.results.length - 1) {
      this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
    } else {
      this.activeIdx++;
    }

    this._activeChanged();
  }

  prev() {
    if (this.activeIdx < 0) {
      this.activeIdx = this.results.length - 1;
    } else if (this.activeIdx === 0) {
      this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
    } else {
      this.activeIdx--;
    }

    this._activeChanged();
  }

  resetActive() {
    this.activeIdx = this.focusFirst ? 0 : -1;

    this._activeChanged();
  }

  select(item) {
    this.selectEvent.emit(item);
  }

  ngOnInit() {
    this.resetActive();
  }

  _activeChanged() {
    this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
  }

}

NgbTypeaheadWindow.ɵfac = function NgbTypeaheadWindow_Factory(t) {
  return new (t || NgbTypeaheadWindow)();
};

NgbTypeaheadWindow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgbTypeaheadWindow,
  selectors: [["ngb-typeahead-window"]],
  hostAttrs: ["role", "listbox"],
  hostVars: 3,
  hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
        return $event.preventDefault();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
    }
  },
  inputs: {
    id: "id",
    focusFirst: "focusFirst",
    results: "results",
    term: "term",
    formatter: "formatter",
    resultTemplate: "resultTemplate",
    popupClass: "popupClass"
  },
  outputs: {
    selectEvent: "select",
    activeChangeEvent: "activeChange"
  },
  exportAs: ["ngbTypeaheadWindow"],
  decls: 3,
  vars: 1,
  consts: [["rt", ""], ["ngFor", "", 3, "ngForOf"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbTypeaheadWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgbTypeaheadWindow_ng_template_2_Template, 2, 9, "ng-template", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    }
  },
  directives: [NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeaheadWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngb-typeahead-window',
      exportAs: 'ngbTypeaheadWindow',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '(mousedown)': '$event.preventDefault()',
        '[class]': '"dropdown-menu show" + (popupClass ? " " + popupClass : "")',
        'role': 'listbox',
        '[id]': 'id'
      },
      template: `
    <ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
      <ngb-highlight [result]="formatter(result)" [term]="term"></ngb-highlight>
    </ng-template>
    <ng-template ngFor [ngForOf]="results" let-result let-idx="index">
      <button type="button" class="dropdown-item" role="option"
        [id]="id + '-' + idx"
        [class.active]="idx === activeIdx"
        (mouseenter)="markActive(idx)"
        (click)="select(result)">
          <ng-template [ngTemplateOutlet]="resultTemplate || rt"
          [ngTemplateOutletContext]="{result: result, term: term, formatter: formatter}"></ng-template>
      </button>
    </ng-template>
  `
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    results: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popupClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['select']
    }],
    activeChangeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['activeChange']
    }]
  });
})();
/**
 * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */


class NgbTypeaheadConfig {
  constructor() {
    this.editable = true;
    this.focusFirst = true;
    this.showHint = false;
    this.placement = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
  }

}

NgbTypeaheadConfig.ɵfac = function NgbTypeaheadConfig_Factory(t) {
  return new (t || NgbTypeaheadConfig)();
};

NgbTypeaheadConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgbTypeaheadConfig,
  factory: NgbTypeaheadConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeaheadConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('live announcer delay', {
  providedIn: 'root',
  factory: ARIA_LIVE_DELAY_FACTORY
});

function ARIA_LIVE_DELAY_FACTORY() {
  return 100;
}

function getLiveElement(document, lazyCreate = false) {
  let element = document.body.querySelector('#ngb-live');

  if (element == null && lazyCreate) {
    element = document.createElement('div');
    element.setAttribute('id', 'ngb-live');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    element.classList.add('visually-hidden');
    document.body.appendChild(element);
  }

  return element;
}

class Live {
  constructor(_document, _delay) {
    this._document = _document;
    this._delay = _delay;
  }

  ngOnDestroy() {
    const element = getLiveElement(this._document);

    if (element) {
      // if exists, it will always be attached to the <body>
      element.parentElement.removeChild(element);
    }
  }

  say(message) {
    const element = getLiveElement(this._document, true);
    const delay = this._delay;

    if (element != null) {
      element.textContent = '';

      const setText = () => element.textContent = message;

      if (delay === null) {
        setText();
      } else {
        setTimeout(setText, delay);
      }
    }
  }

}

Live.ɵfac = function Live_Factory(t) {
  return new (t || Live)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ARIA_LIVE_DELAY));
};

Live.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Live,
  factory: Live.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Live, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [ARIA_LIVE_DELAY]
      }]
    }];
  }, null);
})();

let nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */

class NgbTypeahead {
  constructor(_elementRef, viewContainerRef, _renderer, injector, config, ngZone, _live, _document, _ngZone, _changeDetector, applicationRef) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._live = _live;
    this._document = _document;
    this._ngZone = _ngZone;
    this._changeDetector = _changeDetector;
    this._subscription = null;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._inputValueBackup = null;
    this._windowRef = null;
    this._positioning = ngbPositioning();
    /**
     * The value for the `autocomplete` attribute for the `<input>` element.
     *
     * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
     *
     * @since 2.1.0
     */

    this.autocomplete = 'off';
    /**
     * The preferred placement of the typeahead, among the [possible values](#/guides/positioning#api).
     *
     * The default order of preference is `"bottom-start bottom-end top-start top-end"`
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */

    this.placement = 'bottom-start';
    /**
     * An event emitted right before an item is selected from the result list.
     *
     * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
     */

    this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeDescendant = null;
    this.popupId = `ngb-typeahead-${nextWindowId++}`;

    this._onTouched = () => {};

    this._onChange = _ => {};

    this.container = config.container;
    this.editable = config.editable;
    this.focusFirst = config.focusFirst;
    this.showHint = config.showHint;
    this.placement = config.placement;
    this._valueChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(_elementRef.nativeElement, 'input').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)($event => $event.target.value));
    this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this._popupService = new PopupService(NgbTypeaheadWindow, injector, viewContainerRef, _renderer, this._ngZone, applicationRef);
    this._zoneSubscription = ngZone.onStable.subscribe(() => {
      this._positioning.update();
    });
  }

  ngOnInit() {
    this._subscribeToUserInput();
  }

  ngOnChanges({
    ngbTypeahead
  }) {
    if (ngbTypeahead && !ngbTypeahead.firstChange) {
      this._unsubscribeFromUserInput();

      this._subscribeToUserInput();
    }
  }

  ngOnDestroy() {
    this._closePopup();

    this._unsubscribeFromUserInput();

    this._zoneSubscription.unsubscribe();
  }

  registerOnChange(fn) {
    this._onChange = fn;
  }

  registerOnTouched(fn) {
    this._onTouched = fn;
  }

  writeValue(value) {
    this._writeInputValue(this._formatItemForInput(value));

    if (this.showHint) {
      this._inputValueBackup = value;
    }
  }

  setDisabledState(isDisabled) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }
  /**
   * Dismisses typeahead popup window
   */


  dismissPopup() {
    if (this.isPopupOpen()) {
      this._resubscribeTypeahead.next(null);

      this._closePopup();

      if (this.showHint && this._inputValueBackup !== null) {
        this._writeInputValue(this._inputValueBackup);
      }

      this._changeDetector.markForCheck();
    }
  }
  /**
   * Returns true if the typeahead popup window is displayed
   */


  isPopupOpen() {
    return this._windowRef != null;
  }

  handleBlur() {
    this._resubscribeTypeahead.next(null);

    this._onTouched();
  }

  handleKeyDown(event) {
    if (!this.isPopupOpen()) {
      return;
    }
    /* eslint-disable-next-line deprecation/deprecation */


    switch (event.which) {
      case Key.ArrowDown:
        event.preventDefault();

        this._windowRef.instance.next();

        this._showHint();

        break;

      case Key.ArrowUp:
        event.preventDefault();

        this._windowRef.instance.prev();

        this._showHint();

        break;

      case Key.Enter:
      case Key.Tab:
        {
          const result = this._windowRef.instance.getActive();

          if (isDefined(result)) {
            event.preventDefault();
            event.stopPropagation();

            this._selectResult(result);
          }

          this._closePopup();

          break;
        }
    }
  }

  _openPopup() {
    if (!this.isPopupOpen()) {
      this._inputValueBackup = this._elementRef.nativeElement.value;

      const {
        windowRef
      } = this._popupService.open();

      this._windowRef = windowRef;
      this._windowRef.instance.id = this.popupId;

      this._windowRef.instance.selectEvent.subscribe(result => this._selectResultClosePopup(result));

      this._windowRef.instance.activeChangeEvent.subscribe(activeId => this.activeDescendant = activeId);

      this._windowRef.instance.popupClass = this.popupClass;

      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
      }

      this._changeDetector.markForCheck(); // Schedule positioning on stable, to avoid several positioning updates.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
        if (this._windowRef) {
          this._positioning.createPopper({
            hostElement: this._elementRef.nativeElement,
            targetElement: this._windowRef.location.nativeElement,
            placement: this.placement,
            appendToBody: this.container === 'body'
          });
        }
      });

      ngbAutoClose(this._ngZone, this._document, 'outside', () => this.dismissPopup(), this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
    }
  }

  _closePopup() {
    this._popupService.close().subscribe(() => {
      this._positioning.destroy();

      this._closed$.next();

      this._windowRef = null;
      this.activeDescendant = null;
    });
  }

  _selectResult(result) {
    let defaultPrevented = false;
    this.selectItem.emit({
      item: result,
      preventDefault: () => {
        defaultPrevented = true;
      }
    });

    this._resubscribeTypeahead.next(null);

    if (!defaultPrevented) {
      this.writeValue(result);

      this._onChange(result);
    }
  }

  _selectResultClosePopup(result) {
    this._selectResult(result);

    this._closePopup();
  }

  _showHint() {
    var _a;

    if (this.showHint && ((_a = this._windowRef) === null || _a === void 0 ? void 0 : _a.instance.hasActive()) && this._inputValueBackup != null) {
      const userInputLowerCase = this._inputValueBackup.toLowerCase();

      const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());

      if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
        this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));

        this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
      } else {
        this._writeInputValue(formattedVal);
      }
    }
  }

  _formatItemForInput(item) {
    return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
  }

  _writeInputValue(value) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
  }

  _subscribeToUserInput() {
    const results$ = this._valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(value => {
      this._inputValueBackup = this.showHint ? value : null;

      this._onChange(this.editable ? value : undefined);
    }), this.ngbTypeahead ? this.ngbTypeahead : () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]));

    this._subscription = this._resubscribeTypeahead.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(() => results$)).subscribe(results => {
      if (!results || results.length === 0) {
        this._closePopup();
      } else {
        this._openPopup();

        this._windowRef.instance.focusFirst = this.focusFirst;
        this._windowRef.instance.results = results;
        this._windowRef.instance.term = this._elementRef.nativeElement.value;

        if (this.resultFormatter) {
          this._windowRef.instance.formatter = this.resultFormatter;
        }

        if (this.resultTemplate) {
          this._windowRef.instance.resultTemplate = this.resultTemplate;
        }

        this._windowRef.instance.resetActive(); // The observable stream we are subscribing to might have async steps
        // and if a component containing typeahead is using the OnPush strategy
        // the change detection turn wouldn't be invoked automatically.


        this._windowRef.changeDetectorRef.detectChanges();

        this._showHint();
      } // live announcer


      const count = results ? results.length : 0;

      this._live.say(count === 0 ? 'No results available' : `${count} result${count === 1 ? '' : 's'} available`);
    });
  }

  _unsubscribeFromUserInput() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }

    this._subscription = null;
  }

}

NgbTypeahead.ɵfac = function NgbTypeahead_Factory(t) {
  return new (t || NgbTypeahead)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTypeaheadConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Live), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};

NgbTypeahead.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbTypeahead,
  selectors: [["input", "ngbTypeahead", ""]],
  hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox", "aria-multiline", "false"],
  hostVars: 7,
  hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgbTypeahead_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isPopupOpen());
    }
  },
  inputs: {
    autocomplete: "autocomplete",
    container: "container",
    editable: "editable",
    focusFirst: "focusFirst",
    inputFormatter: "inputFormatter",
    ngbTypeahead: "ngbTypeahead",
    resultFormatter: "resultFormatter",
    resultTemplate: "resultTemplate",
    showHint: "showHint",
    placement: "placement",
    popupClass: "popupClass"
  },
  outputs: {
    selectItem: "selectItem"
  },
  exportAs: ["ngbTypeahead"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTypeahead),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeahead, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[ngbTypeahead]',
      exportAs: 'ngbTypeahead',
      host: {
        '(blur)': 'handleBlur()',
        '[class.open]': 'isPopupOpen()',
        '(keydown)': 'handleKeyDown($event)',
        '[autocomplete]': 'autocomplete',
        'autocapitalize': 'off',
        'autocorrect': 'off',
        'role': 'combobox',
        'aria-multiline': 'false',
        '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
        '[attr.aria-activedescendant]': 'activeDescendant',
        '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
        '[attr.aria-expanded]': 'isPopupOpen()'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgbTypeahead),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: NgbTypeaheadConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Live
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ngbTypeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resultFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popupClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgbTypeaheadModule {}

NgbTypeaheadModule.ɵfac = function NgbTypeaheadModule_Factory(t) {
  return new (t || NgbTypeaheadModule)();
};

NgbTypeaheadModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbTypeaheadModule,
  declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
  exports: [NgbTypeahead, NgbHighlight]
});
NgbTypeaheadModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTypeaheadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
      exports: [NgbTypeahead, NgbHighlight],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
    }]
  }], null, null);
})();

const NGB_MODULES = [
/* eslint-disable-next-line deprecation/deprecation */
NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule];

class NgbModule {}

NgbModule.ɵfac = function NgbModule_Factory(t) {
  return new (t || NgbModule)();
};

NgbModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgbModule,
  imports: [
  /* eslint-disable-next-line deprecation/deprecation */
  NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule],
  exports: [
  /* eslint-disable-next-line deprecation/deprecation */
  NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule]
});
NgbModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NGB_MODULES,
  /* eslint-disable-next-line deprecation/deprecation */
  NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: NGB_MODULES,
      exports: NGB_MODULES
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_services_auth_user-route-access_service_ts-src_app_services_match_match_servi-375a90.js.map