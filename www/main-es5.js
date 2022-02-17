function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" side=\"end\">\n      <ion-content>\n        <div class=\"infoSection\">\n          <img class=\"userPhoto\" src=\"assets/imgs/icon.png\" onError=\"this.src='assets/imgs/icon.png'\" alt=\"\">\n          <p class=\"userName\">Twitch User</p>\n        </div>\n        <ion-list id=\"inbox-list\" class=\"ion-no-padding\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" name=\"{{p.icn}}\" [class.active]=\"selectedIndex == i\"></ion-icon>\n              <ion-label>{{ getTranslate(p.title) }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\" (click)=\"logout()\" *ngIf=\"haveSignedIn()===true\">\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"power-outline\"></ion-icon>\n              <ion-label> {{getTranslate('Logout')}} </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <!-- <ion-menu side=\"end\" menuId=\"menu1\" contentId=\"main-content\">\n      <ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-title>Filter</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <div class=\"filterItems\">\n          <ion-item lines=\"none\">\n            <ion-label>Price</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-range [min]=\"min\" mode=\"md\" [(ngModel)]=\"priceFilter\" color=\"dark\" dualKnobs=\"true\" [max]=\"max\"\n              color=\"secondary\">\n              <ion-label slot=\"start\">{{min}} </ion-label>\n              <ion-label slot=\"end\">{{max}}</ion-label>\n            </ion-range>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-label>Discount</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"discount('10')\" expand=\"block\" [fill]=\"discountValue ==='10' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              10% Off\n            </ion-button>\n            <ion-button (click)=\"discount('25')\" expand=\"block\" [fill]=\"discountValue ==='25' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              25% Off\n            </ion-button>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"discount('35')\" expand=\"block\" [fill]=\"discountValue ==='35' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              35% Off\n            </ion-button>\n            <ion-button (click)=\"discount('50')\" expand=\"block\" [fill]=\"discountValue ==='50' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              50% Off\n            </ion-button>\n          </ion-item>\n        </div>\n      </ion-content>\n      <ion-footer>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"close()\">\n              Clear Filters\n            </ion-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"apply()\">\n              Apply\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu> -->\n\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDriverRatingDriverRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('fail')\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"main_div\">\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.getString('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.getString('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductRatingProductRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('fail')\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.getString('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.getString('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSelectCountrySelectCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{util.getString('Select country')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar [placeholder]=\"util.getString('Search')\" type=\"text\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"dummyLoad?.length\">\n    <ion-item *ngFor=\"let item of dummyLoad\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"dummy?.length\">\n    <ion-radio-group [(ngModel)]=\"ccCode\">\n      <ion-item *ngFor=\"let item of countries\">\n        <ion-label>+{{item.dialling_code}} {{item.country_name}} </ion-label>\n        <ion-radio [value]=\"item.dialling_code\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"okay()\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sort/sort.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sort/sort.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSortSortPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Filter</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"filterItems\">\n    <ion-item lines=\"none\">\n      <ion-label>Price</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-range [min]=\"min\" mode=\"md\" pin [(ngModel)]=\"priceFilter\" color=\"dark\" dualKnobs=\"true\" [max]=\"max\"\n        color=\"secondary\">\n        <ion-label slot=\"start\">{{min}} </ion-label>\n        <ion-label slot=\"end\">{{max}}</ion-label>\n      </ion-range>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>Discount</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-button (click)=\"discount('10')\" expand=\"block\" [fill]=\"discountValue ==='10' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        10% Off or more\n      </ion-button>\n      <ion-button (click)=\"discount('25')\" expand=\"block\" [fill]=\"discountValue ==='25' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        25% Off or more\n      </ion-button>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-button (click)=\"discount('35')\" expand=\"block\" [fill]=\"discountValue ==='35' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        35% Off or more\n      </ion-button>\n      <ion-button (click)=\"discount('50')\" expand=\"block\" [fill]=\"discountValue ==='50' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        50% Off or more\n      </ion-button>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        Clear Filters\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"apply()\">\n        Apply\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-rating/store-rating.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-rating/store-rating.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStoreRatingStoreRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('fail')\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.getString('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.getString('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Verify')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"otpContainer\">\n    <h2 class=\"headerText\"> {{util.getString('Verification')}} </h2>\n    <p class=\"subTitleText\">{{util.getString('We texted you a code to verify')}}\n      <br> {{util.getString('your phone')}} {{mobile}}\n    </p>\n    <div class=\"otpInputs\">\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"{length:6,inputStyles:{'width': '30px','height': '30px'}}\">\n      </ng-otp-input>\n    </div>\n    <ion-button class=\"btn_class\" (click)=\"continue()\" type=\"submit\" expand=\"block\">{{util.getString('Continue')}}\n    </ion-button>\n\n    <ion-button (click)=\"resend()\" *ngIf=\"resendCode\" type=\"submit\" expand=\"block\" fill=\"clear\">\n      {{util.getString('Resend code')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/CityGuard/city.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/CityGuard/city.guard.ts ***!
    \*****************************************/

  /*! exports provided: CityGuard */

  /***/
  function srcAppCityGuardCityGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityGuard", function () {
      return CityGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CityGuard = /*#__PURE__*/function () {
      function CityGuard(router, menuController) {
        _classCallCheck(this, CityGuard);

        this.router = router;
        this.menuController = menuController;
      }

      _createClass(CityGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var city = localStorage.getItem('city');
          console.log('city', localStorage.getItem('city'));

          if (city && city != null && city !== 'null') {
            this.menuController.enable(true);
            return true;
          }

          this.menuController.enable(false);
          this.router.navigate(['/cities']);
          return false;
        }
      }]);

      return CityGuard;
    }();

    CityGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    CityGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], CityGuard);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _CityGuard_city_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./CityGuard/city.guard */
    "./src/app/CityGuard/city.guard.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */

    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_CityGuard_city_guard__WEBPACK_IMPORTED_MODULE_3__["CityGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'categories',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-categories-categories-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/categories/categories.module */
        "./src/app/pages/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    }, {
      path: 'store',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-store-store-module */
        "store-store-module").then(__webpack_require__.bind(null,
        /*! ./pages/store/store.module */
        "./src/app/pages/store/store.module.ts")).then(function (m) {
          return m.StorePageModule;
        });
      }
    }, {
      path: 'product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-product-product-module */
        "product-product-module").then(__webpack_require__.bind(null,
        /*! ./pages/product/product.module */
        "./src/app/pages/product/product.module.ts")).then(function (m) {
          return m.ProductPageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cart-cart-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-account-account-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (m) {
          return m.AccountPageModule;
        });
      }
    }, {
      path: 'orders',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-orders-orders-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/orders/orders.module */
        "./src/app/pages/orders/orders.module.ts")).then(function (m) {
          return m.OrdersPageModule;
        });
      }
    }, {
      path: 'order-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-order-details-order-details-module */
        "pages-order-details-order-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/order-details/order-details.module */
        "./src/app/pages/order-details/order-details.module.ts")).then(function (m) {
          return m.OrderDetailsPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'reset-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-reset-password-reset-password-module */
        "pages-reset-password-reset-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/reset-password/reset-password.module */
        "./src/app/pages/reset-password/reset-password.module.ts")).then(function (m) {
          return m.ResetPasswordPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-languages-languages-module */
        "languages-languages-module").then(__webpack_require__.bind(null,
        /*! ./pages/languages/languages.module */
        "./src/app/pages/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'payment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-payment-module */
        "payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment/payment.module */
        "./src/app/pages/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: 'inbox',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inbox-inbox-module */
        "pages-inbox-inbox-module").then(__webpack_require__.bind(null,
        /*! ./pages/inbox/inbox.module */
        "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
          return m.InboxPageModule;
        });
      }
    }, {
      path: 'sub-category',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sub-category-sub-category-module */
        "sub-category-sub-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/sub-category/sub-category.module */
        "./src/app/pages/sub-category/sub-category.module.ts")).then(function (m) {
          return m.SubCategoryPageModule;
        });
      }
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-products-products-module */
        "products-products-module").then(__webpack_require__.bind(null,
        /*! ./pages/products/products.module */
        "./src/app/pages/products/products.module.ts")).then(function (m) {
          return m.ProductsPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'cities',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cities-cities-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("pages-cities-cities-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cities/cities.module */
        "./src/app/pages/cities/cities.module.ts")).then(function (m) {
          return m.CitiesPageModule;
        });
      }
    }, {
      path: 'offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-offers-offers-module */
        "pages-offers-offers-module").then(__webpack_require__.bind(null,
        /*! ./pages/offers/offers.module */
        "./src/app/pages/offers/offers.module.ts")).then(function (m) {
          return m.OffersPageModule;
        });
      }
    }, {
      path: 'top-picked',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-top-picked-top-picked-module */
        "top-picked-top-picked-module").then(__webpack_require__.bind(null,
        /*! ./pages/top-picked/top-picked.module */
        "./src/app/pages/top-picked/top-picked.module.ts")).then(function (m) {
          return m.TopPickedPageModule;
        });
      }
    }, {
      path: 'top-stores',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-top-stores-top-stores-module */
        "pages-top-stores-top-stores-module").then(__webpack_require__.bind(null,
        /*! ./pages/top-stores/top-stores.module */
        "./src/app/pages/top-stores/top-stores.module.ts")).then(function (m) {
          return m.TopStoresPageModule;
        });
      }
    }, {
      path: 'all-offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-all-offers-all-offers-module */
        "pages-all-offers-all-offers-module").then(__webpack_require__.bind(null,
        /*! ./pages/all-offers/all-offers.module */
        "./src/app/pages/all-offers/all-offers.module.ts")).then(function (m) {
          return m.AllOffersPageModule;
        });
      }
    }, {
      path: 'address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-address-address-module */
        "address-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/address/address.module */
        "./src/app/pages/address/address.module.ts")).then(function (m) {
          return m.AddressPageModule;
        });
      }
    }, {
      path: 'add-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-address-add-address-module */
        "pages-add-address-add-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-address/add-address.module */
        "./src/app/pages/add-address/add-address.module.ts")).then(function (m) {
          return m.AddAddressPageModule;
        });
      }
    }, {
      path: 'delivery-options',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-delivery-options-delivery-options-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("delivery-options-delivery-options-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/delivery-options/delivery-options.module */
        "./src/app/pages/delivery-options/delivery-options.module.ts")).then(function (m) {
          return m.DeliveryOptionsPageModule;
        });
      }
    }, {
      path: 'stripe-payments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-stripe-payments-stripe-payments-module */
        "stripe-payments-stripe-payments-module").then(__webpack_require__.bind(null,
        /*! ./pages/stripe-payments/stripe-payments.module */
        "./src/app/pages/stripe-payments/stripe-payments.module.ts")).then(function (m) {
          return m.StripePaymentsPageModule;
        });
      }
    }, {
      path: 'add-card',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-card-add-card-module */
        "add-card-add-card-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-card/add-card.module */
        "./src/app/pages/add-card/add-card.module.ts")).then(function (m) {
          return m.AddCardPageModule;
        });
      }
    }, {
      path: 'favorite',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-favorite-favorite-module */
        "pages-favorite-favorite-module").then(__webpack_require__.bind(null,
        /*! ./pages/favorite/favorite.module */
        "./src/app/pages/favorite/favorite.module.ts")).then(function (m) {
          return m.FavoritePageModule;
        });
      }
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contacts-contacts-module */
        "contacts-contacts-module").then(__webpack_require__.bind(null,
        /*! ./pages/contacts/contacts.module */
        "./src/app/pages/contacts/contacts.module.ts")).then(function (m) {
          return m.ContactsPageModule;
        });
      }
    }, {
      path: 'order-rating',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-order-rating-order-rating-module */
        "pages-order-rating-order-rating-module").then(__webpack_require__.bind(null,
        /*! ./pages/order-rating/order-rating.module */
        "./src/app/pages/order-rating/order-rating.module.ts")).then(function (m) {
          return m.OrderRatingPageModule;
        });
      }
    }, {
      path: 'store-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/store-rating/store-rating.module */
        "./src/app/pages/store-rating/store-rating.module.ts")).then(function (m) {
          return m.StoreRatingPageModule;
        });
      }
    }, {
      path: 'product-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/product-rating/product-rating.module */
        "./src/app/pages/product-rating/product-rating.module.ts")).then(function (m) {
          return m.ProductRatingPageModule;
        });
      }
    }, {
      path: 'rating-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rating-list-rating-list-module */
        "rating-list-rating-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/rating-list/rating-list.module */
        "./src/app/pages/rating-list/rating-list.module.ts")).then(function (m) {
          return m.RatingListPageModule;
        });
      }
    }, {
      path: 'chats',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-chats-chats-module */
        "pages-chats-chats-module").then(__webpack_require__.bind(null,
        /*! ./pages/chats/chats.module */
        "./src/app/pages/chats/chats.module.ts")).then(function (m) {
          return m.ChatsPageModule;
        });
      }
    }, {
      path: 'driver-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/driver-rating/driver-rating.module */
        "./src/app/pages/driver-rating/driver-rating.module.ts")).then(function (m) {
          return m.DriverRatingPageModule;
        });
      }
    }, {
      path: 'faqs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-faqs-faqs-module */
        "faqs-faqs-module").then(__webpack_require__.bind(null,
        /*! ./pages/faqs/faqs.module */
        "./src/app/pages/faqs/faqs.module.ts")).then(function (m) {
          return m.FaqsPageModule;
        });
      }
    }, {
      path: 'help',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-help-help-module */
        "help-help-module").then(__webpack_require__.bind(null,
        /*! ./pages/help/help.module */
        "./src/app/pages/help/help.module.ts")).then(function (m) {
          return m.HelpPageModule;
        });
      }
    }, {
      path: 'sort',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/sort/sort.module */
        "./src/app/pages/sort/sort.module.ts")).then(function (m) {
          return m.SortPageModule;
        });
      }
    }, {
      path: 'verify',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/verify/verify.module */
        "./src/app/pages/verify/verify.module.ts")).then(function (m) {
          return m.VerifyPageModule;
        });
      }
    }, {
      path: 'direction',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-direction-direction-module */
        "pages-direction-direction-module").then(__webpack_require__.bind(null,
        /*! ./pages/direction/direction.module */
        "./src/app/pages/direction/direction.module.ts")).then(function (m) {
          return m.DirectionPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.infoSection {\n  background: var(--ion-color-primary);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n}\n.infoSection .userPhoto {\n  width: 80px;\n  margin: 20px 0px;\n}\n.infoSection .userName {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: white;\n  margin-bottom: 20px;\n}\n.version {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 25px;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: black;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-item {\n  border-bottom: 1px solid lightgray;\n  --padding-start:30px !important;\n  --min-height: 60px !important;\n}\n.filterItems ion-item {\n  border-bottom: none !important;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary) ;\n}\n.imgs {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n.menu_user_image {\n  height: 90px;\n  width: 90px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  margin: auto;\n}\n.username {\n  margin-top: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n}\n.email {\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2NoYXJsZXMub251b3JhaC9Eb3dubG9hZHMvVXNlcl9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDRSwyRUFBQTtBREVGO0FDQ0E7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREVGO0FDREU7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0FFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FERUo7QUNDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QURFRjtBQ1dBO0VBQ0UsbUJBQUE7QURSRjtBQ1dBOztFQUVFLGtCQUFBO0FEUkY7QUNlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FEYkY7QUNnQkE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QURoQkY7QUNtQkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURoQkY7QUNtQkE7RUFDRSxzREFBQTtBRGhCRjtBQ21CQTtFQUNFLCtCQUFBO0FEaEJGO0FDbUJBO0VBR0UsWUFBQTtBRGxCRjtBQ3lCQTtFQUNFLHNCQUFBO0FEdEJGO0FDNkJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBRDFCRjtBQzRCQTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBRHpCRjtBQzRCRTtFQUNFLDhCQUFBO0FEekJKO0FDNEJBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEekJGO0FDNEJBO0VBQ0UsK0JBQUE7QUR6QkY7QUM0QkE7RUFDRSxlQUFBO0FEekJGO0FDNkJBO0VBQ0Usa0JBQUE7QUQxQkY7QUM2QkE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBRDFCRjtBQzZCQTtFQUNFLGtCQUFBO0FEMUJGO0FDNkJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUQzQkY7QUM4QkE7RUFDRSxrQ0FBQTtBRDNCRjtBQytCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQ1QkY7QUM4QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRDNCRjtBQzhCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEM0JGO0FDNkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRDFCRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuLmluZm9TZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4uaW5mb1NlY3Rpb24gLnVzZXJQaG90byB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmluZm9TZWN0aW9uIC51c2VyTmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi52ZXJzaW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6MzBweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmZpbHRlckl0ZW1zIGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgO1xufVxuXG4uaW1ncyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1lbnVfdXNlcl9pbWFnZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51c2VybmFtZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVtYWlsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuLmluZm9TZWN0aW9ue1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgLnVzZXJQaG90b3tcbiAgICAvLyBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLnVzZXJOYW1le1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4udmVyc2lvbntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgbGVmdDogNTAlO1xufVxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLy8gLS1wYWRkaW5nLWVuZDogOHB4O1xuICAvLyAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAvLyAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIC8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDQwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWl0ZW17XG4gIGJvcmRlci1ib3R0b206ICAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6MzBweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5maWx0ZXJJdGVtc3tcbiAgaW9uLWl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9IFxufVxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcblxufVxuXG4uaW1nc3tcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1lbnVfdXNlcl9pbWFnZXtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnVzZXJuYW1le1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZW1haWx7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, navCtrl, oneSignal, api, util, cart, router, menuCtrl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.oneSignal = oneSignal;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.appPages = [];
        this.priceFilter = {
          lower: 10,
          upper: 500
        };
        this.selectedIndex = 0;
        this.initializeApp();
        this.menuCtrl.enable(false, 'menu1');
        console.log(moment__WEBPACK_IMPORTED_MODULE_10__().format('lll'));
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#45C261');

            _this.splashScreen.hide();

            console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
            _this.appPages = _this.util.appPage;
            var lng = localStorage.getItem('language');

            if (!lng || lng === null) {
              _this.api.get('users/getDefaultSettings').subscribe(function (data) {
                console.log('----------------- app setting', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this.util.appClosed = true;
                      _this.util.appClosedMessage = manage[0].message;
                    } else {
                      _this.util.appClosed = false;
                    }
                  } else {
                    _this.util.appClosed = false;
                  }

                  if (language) {
                    _this.util.translations = language;
                    localStorage.setItem('language', data.data.file);
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    _this.util.direction = info.appDirection;
                    _this.util.cside = info.currencySide;
                    _this.util.currecny = info.currencySymbol;
                    _this.util.logo = info.logo;
                    _this.util.twillo = info.twillo;
                    _this.util.delivery = info.delivery;
                    _this.util.user_login = info.user_login;
                    _this.util.reset_pwd = info.reset_pwd;
                    document.documentElement.dir = _this.util.direction;
                  } else {
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info = general[0];
                    _this.util.general = _info;
                    _this.cart.minOrderPrice = parseFloat(_info.min);
                    _this.cart.shipping = _info.shipping;
                    _this.cart.shippingPrice = parseFloat(_info.shippingPrice);
                    _this.cart.orderTax = parseFloat(_info.tax);
                    _this.cart.freeShipping = parseFloat(_info.free);
                  }
                }
              }, function (error) {
                console.log('default settings', error);
              });
            } else {
              var param = {
                id: localStorage.getItem('language')
              };

              _this.api.post('users/getDefaultSettingsById', param).subscribe(function (data) {
                console.log('----------------- app setting', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this.util.appClosed = true;
                      _this.util.appClosedMessage = manage[0].message;
                    } else {
                      _this.util.appClosed = false;
                    }
                  } else {
                    _this.util.appClosed = false;
                  }

                  if (language) {
                    _this.util.translations = language;
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    _this.util.direction = info.appDirection;
                    _this.util.cside = info.currencySide;
                    _this.util.currecny = info.currencySymbol;
                    _this.util.logo = info.logo;
                    _this.util.twillo = info.twillo;
                    _this.util.delivery = info.delivery;
                    _this.util.user_login = info.user_login;
                    _this.util.reset_pwd = info.reset_pwd;
                    document.documentElement.dir = _this.util.direction;
                  } else {
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info2 = general[0];
                    _this.util.general = _info2;
                    _this.cart.minOrderPrice = parseFloat(_info2.min);
                    _this.cart.shipping = _info2.shipping;
                    _this.cart.shippingPrice = parseFloat(_info2.shippingPrice);
                    _this.cart.orderTax = parseFloat(_info2.tax);
                    _this.cart.freeShipping = parseFloat(_info2.free);
                  }
                }
              }, function (error) {
                console.log('default settings by id', error);
                _this.util.appClosed = false;
                _this.util.direction = 'ltr';
                _this.util.cside = 'right';
                _this.util.currecny = '$';
                document.documentElement.dir = _this.util.direction;
              });
            }

            if (_this.platform.is('cordova')) {
              setTimeout(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.googleProjectNumber);

                        case 2:
                          this.oneSignal.getIds().then(function (data) {
                            localStorage.setItem('fcm', data.userId);
                            var uid = localStorage.getItem('uid');

                            if (uid && uid !== null && uid !== 'null') {
                              var _param = {
                                id: uid,
                                fcm_token: data.userId
                              };

                              _this2.api.post_private('users/edit_profile', _param).subscribe(function (data) {
                                console.log('user info=>', data);
                              }, function (error) {
                                console.log(error);
                              });
                            }
                          });
                          _context.next = 5;
                          return this.oneSignal.endInit();

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, 1000);
            }

            var uid = localStorage.getItem('uid');

            if (uid && uid !== null && uid !== 'null') {
              var _param2 = {
                id: uid
              };

              _this.api.post_private('users/getById', _param2).subscribe(function (data) {
                console.log('user info=>', data);

                if (data && data.status === 200 && data.data && data.data.length) {
                  _this.util.userInfo = data.data[0];
                } else {
                  localStorage.removeItem('uid');
                }
              }, function (error) {
                console.log(error);
              });

              _this.api.post_private('favourite/getByUid', _param2).subscribe(function (data) {
                console.log('fav data', data);

                if (data && data.status === 200 && data.data.length > 0) {
                  _this.util.haveFav = true;

                  try {
                    _this.util.favIds = data.data[0].ids.split(',');
                  } catch (error) {
                    console.log('eroor', error);
                  }
                } else {
                  _this.util.haveFav = false;
                }
              }, function (error) {
                _this.util.haveFav = false;
                console.log('fav error', error);
              });
            }

            _this.platform.backButton.subscribe(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('Back Button --------------->>>', this.router.url, 'ad', this.router.isActive('/tabs/', true));

                        if (this.router.url === '/tabs/categories' || this.router.url === '/tabs/cart' || this.router.url === '/tabs/orders' || this.router.url === '/tabs/account' || this.router.url === '/login') {
                          console.log('can close');
                          this.navCtrl.navigateRoot(['/tabs/home']);
                        } else if (this.router.url === '/tabs/home' || this.router.url === '/cities') {
                          navigator['app'].exitApp();
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.navCtrl.navigateRoot(['/login']);
        }
      }, {
        key: "getTranslate",
        value: function getTranslate(str) {
          return this.util.getString(str);
        }
      }, {
        key: "haveSignedIn",
        value: function haveSignedIn() {
          var uid = localStorage.getItem('uid');

          if (uid && uid != null && uid !== 'null') {
            return true;
          }

          return false;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"], _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _pages_store_rating_store_rating_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/store-rating/store-rating.module */
    "./src/app/pages/store-rating/store-rating.module.ts");
    /* harmony import */


    var _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/product-rating/product-rating.module */
    "./src/app/pages/product-rating/product-rating.module.ts");
    /* harmony import */


    var _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/driver-rating/driver-rating.module */
    "./src/app/pages/driver-rating/driver-rating.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_sort_sort_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/sort/sort.module */
    "./src/app/pages/sort/sort.module.ts");
    /* harmony import */


    var _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/verify/verify.module */
    "./src/app/pages/verify/verify.module.ts");
    /* harmony import */


    var _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/select-country/select-country.module */
    "./src/app/pages/select-country/select-country.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // plugins


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipeModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(), _pages_store_rating_store_rating_module__WEBPACK_IMPORTED_MODULE_20__["StoreRatingPageModule"], _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_21__["ProductRatingPageModule"], _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_22__["DriverRatingPageModule"], _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_25__["VerifyPageModule"], _pages_sort_sort_module__WEBPACK_IMPORTED_MODULE_24__["SortPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_26__["SelectCountryPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__["SplashScreen"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__["HTTP"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransferObject"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_19__["InAppBrowser"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DriverRatingPageRoutingModule */

  /***/
  function srcAppPagesDriverRatingDriverRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPageRoutingModule", function () {
      return DriverRatingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__["DriverRatingPage"]
    }];

    var DriverRatingPageRoutingModule = function DriverRatingPageRoutingModule() {
      _classCallCheck(this, DriverRatingPageRoutingModule);
    };

    DriverRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DriverRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.module.ts ***!
    \*************************************************************/

  /*! exports provided: DriverRatingPageModule */

  /***/
  function srcAppPagesDriverRatingDriverRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPageModule", function () {
      return DriverRatingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./driver-rating-routing.module */
    "./src/app/pages/driver-rating/driver-rating-routing.module.ts");
    /* harmony import */


    var _driver_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var DriverRatingPageModule = function DriverRatingPageModule() {
      _classCallCheck(this, DriverRatingPageModule);
    };

    DriverRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_driver_rating_page__WEBPACK_IMPORTED_MODULE_6__["DriverRatingPage"]]
    })], DriverRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDriverRatingDriverRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJpdmVyLXJhdGluZy9kcml2ZXItcmF0aW5nLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG93bmxvYWRzL1VzZXJfYXBwL3NyYy9hcHAvcGFnZXMvZHJpdmVyLXJhdGluZy9kcml2ZXItcmF0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGFBQUE7QURFSjtBQ0FJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QURFUjtBQ0FJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERVI7QUNBSTtFQUNJLGdCQUFBO0FERVI7QUNBSTtFQUNJLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FERVI7QUNBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURFWjtBQ0FRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FERVo7QUNBUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREVaO0FDQVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FERWhCO0FDQVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBREVoQjtBQ0dJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRERSO0FDR0k7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0FERFI7QUNFUTtFQUNJLFdBQUE7QURBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1yYXRpbmcvZHJpdmVyLXJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yYXR0aW5nQnRucyB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaWNuIHtcbiAgbWF4LXdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg5OTJBQTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBpb24taW5wdXQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNDU0RDYyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24gLmxvZ291dF9pY29uIHtcbiAgd2lkdGg6IDEycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLm1haW5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC51c2VyX2ltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnJhdHRpbmdCdG5ze1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpOyAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY257XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyQUE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTRENjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuX2RpdntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAgICAgICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xuICAgICAgICAubG9nb3V0X2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.page.ts ***!
    \***********************************************************/

  /*! exports provided: DriverRatingPage */

  /***/
  function srcAppPagesDriverRatingDriverRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPage", function () {
      return DriverRatingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var DriverRatingPage = /*#__PURE__*/function () {
      function DriverRatingPage(navParam, modalCtrl, util, api) {
        var _this3 = this;

        _classCallCheck(this, DriverRatingPage);

        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.id = this.navParam.get('id');
        this.name = this.navParam.get('name');

        if (this.navParam.get('way')) {
          this.way = this.navParam.get('way');
        } else {
          this.way = 'order';
        }

        console.log('id', this.id);
        console.log('name', this.name);
        var param = {
          where: 'did = ' + this.id
        };
        this.util.show();
        this.api.post('rating/getFromCount', param).subscribe(function (data) {
          _this3.util.hide();

          console.log('data', data);

          if (data && data.status === 200) {
            if (data && data.data && data.data.total) {
              _this3.total = data.data.total;

              if (data.data.rating) {
                var rats = data.data.rating;
                console.log(rats.split(','));
                _this3.rating = rats.split(',');
              } else {
                _this3.rating = [];
              }
            } else {
              _this3.total = 0;
              _this3.rating = [];
            }
          } else {
            _this3.total = 0;
            _this3.rating = [];
          }

          console.log('total', _this3.total);
        }, function (error) {
          console.log(error);

          _this3.util.hide();

          _this3.total = 0;
          _this3.rating = [];
        });
      }

      _createClass(DriverRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(item) {
          this.modalCtrl.dismiss(item, item);
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.getString('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: 0,
            did: this.id,
            sid: 0,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post_private('rating/save', param).subscribe(function (data) {
            console.log(data);

            _this4.util.hide();

            if (data && data.status === 200) {
              _this4.util.showToast(_this4.util.getString('Rating added'), 'success', 'bottom');

              _this4.close('success');
            } else {
              _this4.util.errorToast(_this4.util.getString('Something went wrong'));
            }
          }, function (error) {
            _this4.util.hide();

            console.log(error);

            _this4.util.errorToast(_this4.util.getString('Something went wrong'));
          });
        }
      }]);

      return DriverRatingPage;
    }();

    DriverRatingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    DriverRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-driver-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./driver-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./driver-rating.page.scss */
      "./src/app/pages/driver-rating/driver-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], DriverRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductRatingPageRoutingModule */

  /***/
  function srcAppPagesProductRatingProductRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPageRoutingModule", function () {
      return ProductRatingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _product_rating_page__WEBPACK_IMPORTED_MODULE_3__["ProductRatingPage"]
    }];

    var ProductRatingPageRoutingModule = function ProductRatingPageRoutingModule() {
      _classCallCheck(this, ProductRatingPageRoutingModule);
    };

    ProductRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.module.ts ***!
    \***************************************************************/

  /*! exports provided: ProductRatingPageModule */

  /***/
  function srcAppPagesProductRatingProductRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPageModule", function () {
      return ProductRatingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-rating-routing.module */
    "./src/app/pages/product-rating/product-rating-routing.module.ts");
    /* harmony import */


    var _product_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductRatingPageModule = function ProductRatingPageModule() {
      _classCallCheck(this, ProductRatingPageModule);
    };

    ProductRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_product_rating_page__WEBPACK_IMPORTED_MODULE_6__["ProductRatingPage"]]
    })], ProductRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductRatingProductRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yYXRpbmcvcHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIiwiL1VzZXJzL2NoYXJsZXMub251b3JhaC9Eb3dubG9hZHMvVXNlcl9hcHAvc3JjL2FwcC9wYWdlcy9wcm9kdWN0LXJhdGluZy9wcm9kdWN0LXJhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0FERUo7QUNBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FERVI7QUNBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREVSO0FDQUk7RUFDSSxnQkFBQTtBREVSO0FDQUk7RUFDSSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREVSO0FDQVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERVo7QUNBUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBREVaO0FDQVE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURFWjtBQ0FZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBREVoQjtBQ0FZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QURFaEI7QUNHSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUREUjtBQ0dJO0VBQ0ksc0NBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtBRERSO0FDRVE7RUFDSSxXQUFBO0FEQVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LXJhdGluZy9wcm9kdWN0LXJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yYXR0aW5nQnRucyB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaWNuIHtcbiAgbWF4LXdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg5OTJBQTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBpb24taW5wdXQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNDU0RDYyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24gLmxvZ291dF9pY29uIHtcbiAgd2lkdGg6IDEycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLm1haW5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC51c2VyX2ltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnJhdHRpbmdCdG5ze1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpOyAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY257XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyQUE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTRENjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuX2RpdntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAgICAgICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xuICAgICAgICAubG9nb3V0X2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.page.ts ***!
    \*************************************************************/

  /*! exports provided: ProductRatingPage */

  /***/
  function srcAppPagesProductRatingProductRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPage", function () {
      return ProductRatingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductRatingPage = /*#__PURE__*/function () {
      function ProductRatingPage(navParam, modalCtrl, util, api) {
        var _this5 = this;

        _classCallCheck(this, ProductRatingPage);

        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.id = this.navParam.get('id');
        this.name = this.navParam.get('name');

        if (this.navParam.get('way')) {
          this.way = this.navParam.get('way');
        } else {
          this.way = 'order';
        }

        console.log('id', this.id);
        console.log('name', this.name);
        var param = {
          where: 'pid = ' + this.id
        };
        this.util.show();
        this.api.post('rating/getFromCount', param).subscribe(function (data) {
          _this5.util.hide();

          console.log('data', data);

          if (data && data.status === 200) {
            if (data && data.data && data.data.total) {
              _this5.total = data.data.total;

              if (data.data.rating) {
                var rats = data.data.rating;
                console.log(rats.split(','));
                _this5.rating = rats.split(',');
              } else {
                _this5.rating = [];
              }
            } else {
              _this5.total = 0;
              _this5.rating = [];
            }
          } else {
            _this5.total = 0;
            _this5.rating = [];
          }

          console.log('total', _this5.total);
        }, function (error) {
          console.log(error);

          _this5.util.hide();

          _this5.total = 0;
          _this5.rating = [];
        });
      }

      _createClass(ProductRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(item) {
          this.modalCtrl.dismiss(item, item);
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this6 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.getString('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: this.id,
            did: 0,
            sid: 0,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post_private('rating/save', param).subscribe(function (data) {
            console.log(data);

            _this6.util.hide();

            if (data && data.status === 200) {
              _this6.util.showToast('Rating added', 'success', 'bottom');

              var storeParam = {
                id: _this6.id,
                total_rating: _this6.total + 1,
                rating: storeRating
              };

              _this6.api.post_private('products/editList', storeParam).subscribe(function (stores) {
                console.log('products edit done', stores);
              }, function (error) {
                console.log(error);
              });

              _this6.close('success');
            } else {
              _this6.util.errorToast(_this6.util.getString('Something went wrong'));
            }
          }, function (error) {
            _this6.util.hide();

            console.log(error);

            _this6.util.errorToast(_this6.util.getString('Something went wrong'));
          });
        }
      }]);

      return ProductRatingPage;
    }();

    ProductRatingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    ProductRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-rating.page.scss */
      "./src/app/pages/product-rating/product-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], ProductRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/select-country/select-country-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SelectCountryPageRoutingModule */

  /***/
  function srcAppPagesSelectCountrySelectCountryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageRoutingModule", function () {
      return SelectCountryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");

    var routes = [{
      path: '',
      component: _select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
    }];

    var SelectCountryPageRoutingModule = function SelectCountryPageRoutingModule() {
      _classCallCheck(this, SelectCountryPageRoutingModule);
    };

    SelectCountryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectCountryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.module.ts ***!
    \***************************************************************/

  /*! exports provided: SelectCountryPageModule */

  /***/
  function srcAppPagesSelectCountrySelectCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function () {
      return SelectCountryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-country-routing.module */
    "./src/app/pages/select-country/select-country-routing.module.ts");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");

    var SelectCountryPageModule = function SelectCountryPageModule() {
      _classCallCheck(this, SelectCountryPageModule);
    };

    SelectCountryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPageRoutingModule"]],
      declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
    })], SelectCountryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSelectCountrySelectCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjdC1jb3VudHJ5L3NlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.page.ts ***!
    \*************************************************************/

  /*! exports provided: SelectCountryPage */

  /***/
  function srcAppPagesSelectCountrySelectCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
      return SelectCountryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var SelectCountryPage = /*#__PURE__*/function () {
      function SelectCountryPage(modalCtrl, util) {
        var _this7 = this;

        _classCallCheck(this, SelectCountryPage);

        this.modalCtrl = modalCtrl;
        this.util = util;
        this.ccCode = '91';
        this.countries = [];
        this.dummy = [];
        this.dummyLoad = [];
        this.dummyLoad = Array(10);
        setTimeout(function () {
          _this7.dummyLoad = [];
          _this7.dummy = _this7.util.countrys;
          _this7.countries = _this7.dummy;
          console.log(_this7.dummy);
        }, 500);
      }

      _createClass(SelectCountryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(events) {
          console.log(events);

          if (events.value !== '') {
            this.countries = this.dummy.filter(function (item) {
              return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.countries = [];
          }
        }
      }, {
        key: "okay",
        value: function okay() {
          console.log(this.ccCode);
          this.modalCtrl.dismiss(this.ccCode, 'selected');
        }
      }]);

      return SelectCountryPage;
    }();

    SelectCountryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    SelectCountryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-country',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./select-country.page.scss */
      "./src/app/pages/select-country/select-country.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], SelectCountryPage);
    /***/
  },

  /***/
  "./src/app/pages/sort/sort-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/sort/sort-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SortPageRoutingModule */

  /***/
  function srcAppPagesSortSortRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPageRoutingModule", function () {
      return SortPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sort_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sort.page */
    "./src/app/pages/sort/sort.page.ts");

    var routes = [{
      path: '',
      component: _sort_page__WEBPACK_IMPORTED_MODULE_3__["SortPage"]
    }];

    var SortPageRoutingModule = function SortPageRoutingModule() {
      _classCallCheck(this, SortPageRoutingModule);
    };

    SortPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SortPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sort/sort.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/sort/sort.module.ts ***!
    \*******************************************/

  /*! exports provided: SortPageModule */

  /***/
  function srcAppPagesSortSortModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPageModule", function () {
      return SortPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sort_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sort-routing.module */
    "./src/app/pages/sort/sort-routing.module.ts");
    /* harmony import */


    var _sort_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sort.page */
    "./src/app/pages/sort/sort.page.ts");

    var SortPageModule = function SortPageModule() {
      _classCallCheck(this, SortPageModule);
    };

    SortPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sort_routing_module__WEBPACK_IMPORTED_MODULE_5__["SortPageRoutingModule"]],
      declarations: [_sort_page__WEBPACK_IMPORTED_MODULE_6__["SortPage"]]
    })], SortPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sort/sort.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/sort/sort.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSortSortPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvcnQvc29ydC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/sort/sort.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/sort/sort.page.ts ***!
    \*****************************************/

  /*! exports provided: SortPage */

  /***/
  function srcAppPagesSortSortPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPage", function () {
      return SortPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SortPage = /*#__PURE__*/function () {
      function SortPage(modalCtrl, navParam) {
        _classCallCheck(this, SortPage);

        this.modalCtrl = modalCtrl;
        this.navParam = navParam;
        this.priceFilter = {
          lower: 10,
          upper: 500
        };
        this.min = this.navParam.get('min') ? this.navParam.get('min') : 0;
        this.max = this.navParam.get('max') ? this.navParam.get('max') : 100;
        this.fromFilter = this.navParam.get('from');
        this.discountValue = this.navParam.get('discountSelected');
      }

      _createClass(SortPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          console.log('clear');
          this.discountValue = null;
          this.modalCtrl.dismiss({
            min: this.priceFilter.lower,
            max: this.priceFilter.upper,
            discount: this.discountValue,
            from: this.fromFilter,
            close: true
          });
        }
      }, {
        key: "apply",
        value: function apply() {
          console.log(this.discountValue);
          console.log(this.priceFilter);
          this.modalCtrl.dismiss({
            min: this.priceFilter.lower,
            max: this.priceFilter.upper,
            discount: this.discountValue,
            from: this.fromFilter,
            close: false
          });
        }
      }, {
        key: "discount",
        value: function discount(value) {
          console.log(value);
          this.discountValue = value;
        }
      }]);

      return SortPage;
    }();

    SortPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    SortPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sort',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sort.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sort/sort.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sort.page.scss */
      "./src/app/pages/sort/sort.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], SortPage);
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: StoreRatingPageRoutingModule */

  /***/
  function srcAppPagesStoreRatingStoreRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRatingPageRoutingModule", function () {
      return StoreRatingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _store_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _store_rating_page__WEBPACK_IMPORTED_MODULE_3__["StoreRatingPage"]
    }];

    var StoreRatingPageRoutingModule = function StoreRatingPageRoutingModule() {
      _classCallCheck(this, StoreRatingPageRoutingModule);
    };

    StoreRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoreRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating.module.ts ***!
    \***********************************************************/

  /*! exports provided: StoreRatingPageModule */

  /***/
  function srcAppPagesStoreRatingStoreRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRatingPageModule", function () {
      return StoreRatingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _store_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store-rating-routing.module */
    "./src/app/pages/store-rating/store-rating-routing.module.ts");
    /* harmony import */


    var _store_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StoreRatingPageModule = function StoreRatingPageModule() {
      _classCallCheck(this, StoreRatingPageModule);
    };

    StoreRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _store_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoreRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_store_rating_page__WEBPACK_IMPORTED_MODULE_6__["StoreRatingPage"]]
    })], StoreRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStoreRatingStoreRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUtcmF0aW5nL3N0b3JlLXJhdGluZy5wYWdlLnNjc3MiLCIvVXNlcnMvY2hhcmxlcy5vbnVvcmFoL0Rvd25sb2Fkcy9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL3N0b3JlLXJhdGluZy9zdG9yZS1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtBREVKO0FDQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBREVSO0FDQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURFUjtBQ0FJO0VBQ0ksZ0JBQUE7QURFUjtBQ0FJO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURFUjtBQ0FRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREVaO0FDQVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURFWjtBQ0FRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FERVo7QUNBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURFaEI7QUNBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FERWhCO0FDR0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERFI7QUNHSTtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUREUjtBQ0VRO0VBQ0ksV0FBQTtBREFaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUtcmF0aW5nL3N0b3JlLXJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yYXR0aW5nQnRucyB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaWNuIHtcbiAgbWF4LXdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg5OTJBQTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBpb24taW5wdXQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNDU0RDYyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24gLmxvZ291dF9pY29uIHtcbiAgd2lkdGg6IDEycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLm1haW5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC51c2VyX2ltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnJhdHRpbmdCdG5ze1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpOyAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY257XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyQUE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTRENjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuX2RpdntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAgICAgICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xuICAgICAgICAubG9nb3V0X2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating.page.ts ***!
    \*********************************************************/

  /*! exports provided: StoreRatingPage */

  /***/
  function srcAppPagesStoreRatingStoreRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRatingPage", function () {
      return StoreRatingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StoreRatingPage = /*#__PURE__*/function () {
      function StoreRatingPage(navParam, modalCtrl, util, api) {
        var _this8 = this;

        _classCallCheck(this, StoreRatingPage);

        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.id = this.navParam.get('id');
        this.name = this.navParam.get('name');
        console.log('id', this.id);
        console.log('name', this.name);

        if (this.navParam.get('way')) {
          this.way = this.navParam.get('way');
        } else {
          this.way = 'order';
        }

        var param = {
          where: 'sid = ' + this.id
        };
        this.util.show();
        this.api.post('rating/getFromCount', param).subscribe(function (data) {
          _this8.util.hide();

          console.log('data', data);

          if (data && data.status === 200) {
            if (data && data.data && data.data.total) {
              _this8.total = data.data.total;

              if (data.data.rating) {
                var rats = data.data.rating;
                console.log(rats.split(','));
                _this8.rating = rats.split(',');
              } else {
                _this8.rating = [];
              }
            } else {
              _this8.total = 0;
              _this8.rating = [];
            }
          } else {
            _this8.total = 0;
            _this8.rating = [];
          }

          console.log('total', _this8.total);
        }, function (error) {
          console.log(error);

          _this8.util.hide();

          _this8.total = 0;
          _this8.rating = [];
        });
      }

      _createClass(StoreRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(item) {
          this.modalCtrl.dismiss(item, item);
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this9 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.getString('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: 0,
            did: 0,
            sid: this.id,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post_private('rating/save', param).subscribe(function (data) {
            console.log(data);

            _this9.util.hide();

            if (data && data.status === 200) {
              _this9.util.showToast(_this9.util.getString('Rating added'), 'success', 'bottom');

              var storeParam = {
                id: _this9.id,
                total_rating: _this9.total + 1,
                rating: storeRating
              };

              _this9.api.post_private('stores/editByUid', storeParam).subscribe(function (stores) {
                console.log('store edit done', stores);
              }, function (error) {
                console.log(error);
              });

              _this9.close('success');
            } else {
              _this9.util.errorToast(_this9.util.getString('Something went wrong'));
            }
          }, function (error) {
            _this9.util.hide();

            console.log(error);

            _this9.util.errorToast(_this9.util.getString('Something went wrong'));
          });
        }
      }]);

      return StoreRatingPage;
    }();

    StoreRatingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    StoreRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-rating/store-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-rating.page.scss */
      "./src/app/pages/store-rating/store-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], StoreRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/verify/verify-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VerifyPageRoutingModule */

  /***/
  function srcAppPagesVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
      return VerifyPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");

    var routes = [{
      path: '',
      component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }];

    var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
      _classCallCheck(this, VerifyPageRoutingModule);
    };

    VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.module.ts ***!
    \***********************************************/

  /*! exports provided: VerifyPageModule */

  /***/
  function srcAppPagesVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
      return VerifyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-routing.module */
    "./src/app/pages/verify/verify-routing.module.ts");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

    var VerifyPageModule = function VerifyPageModule() {
      _classCallCheck(this, VerifyPageModule);
    };

    VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]],
      declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })], VerifyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".otpContainer {\n  margin-top: 50%;\n}\n.otpContainer .headerText {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2rem;\n}\n.otpContainer .subTitleText {\n  text-align: center;\n  font-weight: bold;\n  color: gray;\n  font-size: 1rem;\n}\n.otpContainer .otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.otpContainer .btn_class {\n  color: white;\n  margin: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG93bmxvYWRzL1VzZXJfYXBwL3NyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS92ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZXJpZnkvdmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdHBDb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIC5oZWFkZXJUZXh0e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9ICAgIFxuICAgIC5zdWJUaXRsZVRleHR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5vdHBJbnB1dHN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuYnRuX2NsYXNze1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMzBweCA1MHB4O1xuICAgIH1cbn1cbiIsIi5vdHBDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG4ub3RwQ29udGFpbmVyIC5oZWFkZXJUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG4ub3RwQ29udGFpbmVyIC5zdWJUaXRsZVRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm90cENvbnRhaW5lciAub3RwSW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ub3RwQ29udGFpbmVyIC5idG5fY2xhc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMzBweCA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/verify/verify.page.ts ***!
    \*********************************************/

  /*! exports provided: VerifyPage */

  /***/
  function srcAppPagesVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
      return VerifyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var VerifyPage = /*#__PURE__*/function () {
      function VerifyPage(api, util, navParam, navCtrl, modalCtrl) {
        var _this10 = this;

        _classCallCheck(this, VerifyPage);

        this.api = api;
        this.util = util;
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.textCode = '';
        this.userCode = '';
        this.resendCode = false;
        console.log('cc code', this.navParam.get('code'));
        this.sendOTP();
        setTimeout(function () {
          _this10.resendCode = true;
        }, 30000);
      }

      _createClass(VerifyPage, [{
        key: "sendOTP",
        value: function sendOTP() {
          var _this11 = this;

          this.mobile = this.navParam.get('code') + this.navParam.get('phone');
          console.log('send on this number------<<<<<<<', this.mobile);
          console.log(this.mobile);
          var message = 'Your Grocecryee app verification code : ';
          var param = {
            msg: message,
            to: this.mobile
          };
          console.log(param);
          this.util.show();
          this.api.post('users/twilloMessage', param).subscribe(function (data) {
            console.log(data);
            _this11.id = data.data.id;

            _this11.util.hide();
          }, function (error) {
            console.log(error);

            _this11.util.hide();

            _this11.util.errorToast(_this11.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onOtpChange",
        value: function onOtpChange(event) {
          console.log(event);
          this.userCode = event;
        }
      }, {
        key: "resend",
        value: function resend() {
          this.sendOTP();
        }
      }, {
        key: "continue",
        value: function _continue() {
          var _this12 = this;

          console.log(this.userCode);

          if (this.userCode === '' || !this.userCode) {
            this.util.errorToast(this.util.getString('Not valid code'));
            return false;
          }

          if (this.userCode) {
            var param = {
              id: this.id,
              otp: this.userCode
            };
            this.util.show();
            this.api.post('users/verifyOTP', param).subscribe(function (data) {
              console.log(data);

              _this12.util.hide();

              if (data && data.status === 200) {
                _this12.modalCtrl.dismiss('', 'ok');
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this12.util.errorToast(data.data.message);

                  return false;
                }

                _this12.util.errorToast(_this12.util.getString('Something went wrong'));

                return false;
              }
            }, function (error) {
              _this12.util.hide();

              console.log(error);

              _this12.util.errorToast(_this12.util.getString('Something went wrong'));
            });
          } else {
            this.util.errorToast(this.util.getString('Not valid code'));
            return false;
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }]);

      return VerifyPage;
    }();

    VerifyPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verify.page.scss */
      "./src/app/pages/verify/verify.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], VerifyPage);
    /***/
  },

  /***/
  "./src/app/pipes/currency/currency.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/currency/currency.pipe.ts ***!
    \*************************************************/

  /*! exports provided: CurrencyPipe */

  /***/
  function srcAppPipesCurrencyCurrencyPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function () {
      return CurrencyPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CurrencyPipe = /*#__PURE__*/function () {
      function CurrencyPipe() {
        _classCallCheck(this, CurrencyPipe);
      }

      _createClass(CurrencyPipe, [{
        key: "transform",
        value: function transform(value) {
          return null;
        }
      }]);

      return CurrencyPipe;
    }();

    CurrencyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'currency'
    })], CurrencyPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/pipe.module.ts ***!
    \**************************************/

  /*! exports provided: PipeModule */

  /***/
  function srcAppPipesPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipeModule", function () {
      return PipeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _translate_translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translate/translate.pipe */
    "./src/app/pipes/translate/translate.pipe.ts");
    /* harmony import */


    var _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./currency/currency.pipe */
    "./src/app/pipes/currency/currency.pipe.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var PipeModule = function PipeModule() {
      _classCallCheck(this, PipeModule);
    };

    PipeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_translate_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      imports: [],
      exports: [_translate_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]]
    })], PipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/translate/translate.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipes/translate/translate.pipe.ts ***!
    \***************************************************/

  /*! exports provided: TranslatePipe */

  /***/
  function srcAppPipesTranslateTranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var TranslatePipe = /*#__PURE__*/function () {
      function TranslatePipe(util) {
        _classCallCheck(this, TranslatePipe);

        this.util = util;
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(str) {
          var value = this.util.translations[str];
          console.log('valueeee', value);

          if (value && value !== undefined) {
            return this.util.translations[str];
          }

          return str;
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }];
    };

    TranslatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'translate'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])], TranslatePipe);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // import { CartService } from './cart.service';


    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, nativeHttp) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.nativeHttp = nativeHttp;
        this.baseUrl = '';
        this.mediaURL = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.mediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mediaURL;
      }

      _createClass(ApiService, [{
        key: "alerts",
        value: function alerts(title, message, type) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(files) {
          var formData = new FormData();
          Array.from(files).forEach(function (f) {
            return formData.append('userfile', f);
          });
          return this.http.post(this.baseUrl + 'users/upload_image', formData);
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].general.code;
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].general.symbol;
        }
      }, {
        key: "createOrderNotification",
        value: function createOrderNotification(stores) {
          var _this13 = this;

          var ids = _toConsumableArray(new Set(stores.map(function (item) {
            return item.token;
          })));

          var apiCalls = [];
          ids.forEach(function (element) {
            apiCalls.push(_this13.sendNotification('You have received new order', 'New Order Received', element));
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(apiCalls).subscribe(function (data) {
            console.log('fork result', data);
          }, function (error) {
            console.log('fork error', error);
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, title, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            },
            data: {
              task: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey))
          };
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "verifyRazorPayment",
        value: function verifyRazorPayment(payId, key, secret) {
          var authorizationData = 'Basic ' + btoa(key + ':' + secret);
          return this.nativeHttp.get('https://api.razorpay.com/v1/payments/' + payId, {}, {
            Authorization: authorizationData
          });
        }
      }, {
        key: "post_private",
        value: function post_private(url, body) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(localStorage.getItem('token')))
          };
          var param = this.JSON_to_URLEncoded(body);
          return this.http.post(this.baseUrl + url, param, header);
        }
      }, {
        key: "get_private",
        value: function get_private(url) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(localStorage.getItem('token')))
          };
          return this.http.get(this.baseUrl + url, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element === 'object') {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
            }
          } else {
            new_list.push(key + '=' + encodeURIComponent(element));
          }

          return new_list.join('&');
        }
      }, {
        key: "post",
        value: function post(url, body) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
          };
          var param = this.JSON_to_URLEncoded(body);
          console.log(param);
          return this.http.post(this.baseUrl + url, param, header);
        }
      }, {
        key: "externalPost",
        value: function externalPost(url, body, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "twilloPost",
        value: function twilloPost(url, body, sid, token) {
          var authorizationData = 'Basic ' + btoa(sid + ':' + token);
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', authorizationData)
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "instaPay",
        value: function instaPay(url, body, key, token) {
          return this.nativeHttp.post(url, body, {
            'X-Api-Key': "".concat(key),
            'X-Auth-Token': "".concat(token)
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
          };
          return this.http.get(this.baseUrl + url, header);
        }
      }, {
        key: "externalGet",
        value: function externalGet(url) {
          return this.http.get(url);
        }
      }, {
        key: "httpGet",
        value: function httpGet(url, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          return this.http.get(url, header);
        }
      }, {
        key: "nativePost",
        value: function nativePost(url, post) {
          console.log(this.baseUrl + url, post);
          return this.nativeHttp.post(this.baseUrl + url, post, {
            Basic: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CartService = /*#__PURE__*/function () {
      function CartService(api, util) {
        var _this14 = this;

        _classCallCheck(this, CartService);

        this.api = api;
        this.util = util;
        this.cart = [];
        this.itemId = [];
        this.totalPrice = 0;
        this.grandTotal = 0;
        this.discount = 0;
        this.orderTax = 0;
        this.shippingPrice = 0;
        this.minOrderPrice = 0;
        this.freeShipping = 0;
        this.deliveryPrice = 0;
        this.stores = [];
        this.bulkOrder = [];
        this.userOrderTaxByStores = [];
        this.util.getKeys('cart').then(function (data) {
          if (data && data !== null && data !== 'null') {
            var userCart = JSON.parse(data);

            if (userCart && userCart.length > 0) {
              _this14.cart = userCart;
              _this14.itemId = _toConsumableArray(new Set(_this14.cart.map(function (item) {
                return item.id;
              })));

              _this14.calcuate();
            } else {
              _this14.calcuate();
            }
          } else {
            _this14.calcuate();
          }
        });
      }

      _createClass(CartService, [{
        key: "clearCart",
        value: function clearCart() {
          this.cart = [];
          this.itemId = [];
          this.totalPrice = 0;
          this.grandTotal = 0;
          this.coupon = undefined;
          this.discount = 0;
          this.orderPrice = 0;
          this.datetime = undefined;
          this.stores = [];
          this.util.clearKeys('cart');
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          console.log('item to adde', item);
          this.cart.push(item);
          this.itemId.push(item.id);
          this.calcuate();
        }
      }, {
        key: "addQuantity",
        value: function addQuantity(quantity, id) {
          console.log('iddd-->>', id);
          console.log('quantity', quantity);

          if (quantity < 0) {
            console.log('wrong input', quantity);
            this.removeItem(id);
            return false;
          }

          this.cart.forEach(function (element) {
            if (element.id === id) {
              element.quantiy = quantity;
            }
          });
          this.calcuate();
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          console.log('remove this item from cart');
          console.log('current cart items', this.cart);
          this.cart = this.cart.filter(function (x) {
            return x.id !== id;
          });
          this.itemId = this.itemId.filter(function (x) {
            return x !== id;
          });
          console.log('====>>>>>>>>>', this.cart);
          console.log('items====>>>', this.itemId);
          this.calcuate();
        }
      }, {
        key: "calcuate",
        value: function calcuate() {
          var _this15 = this;

          console.log('cart==>', this.cart);
          console.log('couiponnnnnnneee---->>', this.coupon);
          this.userOrderTaxByStores = [];
          var total = 0;
          this.cart.forEach(function (element) {
            if (element && element.discount === '0') {
              if (element.size === '1' || element.size === 1) {
                if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                  total = total + parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy;
                } else {
                  total = total + parseFloat(element.variations[0].items[element.variant].price) * element.quantiy;
                }
              } else {
                total = total + parseFloat(element.original_price) * element.quantiy;
              }
            } else {
              if (element.size === '1' || element.size === 1) {
                if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                  total = total + parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy;
                } else {
                  total = total + parseFloat(element.variations[0].items[element.variant].price) * element.quantiy;
                }
              } else {
                total = total + parseFloat(element.sell_price) * element.quantiy;
              }
            }
          });
          console.log('total->', total);
          this.totalPrice = total;

          if (this.coupon && this.coupon.type) {
            var min = parseFloat(this.coupon.min);

            if (this.totalPrice >= min) {
              if (this.coupon && this.coupon.type === 'per') {
                var percentage = function percentage(num, per) {
                  return num / 100 * per;
                };

                console.log('per');
                var totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), parseFloat(this.coupon.off));
                console.log('============>>>>>>>>>>>>>>>', totalPrice);
                this.discount = totalPrice.toFixed(2); // this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.orderTax;
              } else {
                console.log('currency');
                this.discount = this.coupon.off; // this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.orderTax;
              }
            } else {
              this.discount = 0;
              this.coupon = null;
            }
          } else {
            this.grandTotal = this.totalPrice + this.orderTax;
          }

          if (this.stores && this.stores.length && this.deliveryAddress && this.deliveryAt === 'home') {
            console.log('--->>> delivery address===>>>', this.deliveryAddress); // this.deliveryPrice = 0;

            var totalKM = 0;
            var taxEach = 0;
            this.stores.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var distance, extraChargeParam;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return this.distanceInKmBetweenEarthCoordinates(this.deliveryAddress.lat, this.deliveryAddress.lng, element.lat, element.lng);

                      case 2:
                        distance = _context3.sent;
                        console.log('distance', distance, element);
                        totalKM = totalKM + distance;
                        console.log('total->', element.name, totalKM * this.shippingPrice); // const storeCount = this.stores.length + 1;

                        taxEach = this.orderTax / this.stores.length;
                        extraChargeParam = {
                          store_id: element.uid,
                          distance: distance.toFixed(2),
                          tax: taxEach.toFixed(2),
                          shipping: this.shipping,
                          shippingPrice: this.shippingPrice
                        };
                        console.log(extraChargeParam);
                        this.userOrderTaxByStores.push(extraChargeParam);

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
            console.log('00-->>', this.userOrderTaxByStores);
            setTimeout(function () {
              console.log('free', _this15.freeShipping);
              console.log('totalprice', _this15.totalPrice);

              if (_this15.freeShipping > _this15.totalPrice) {
                if (_this15.shipping === 'km') {
                  var distancePricer = totalKM * _this15.shippingPrice;
                  console.log('====================> KM price', Math.abs(distancePricer));
                  _this15.deliveryPrice = Math.floor(distancePricer).toFixed(2);

                  if (!_this15.discount || _this15.discount === null) {
                    _this15.discount = 0;
                  }

                  _this15.grandTotal = _this15.totalPrice - parseFloat(_this15.discount) + _this15.orderTax + distancePricer;
                  _this15.grandTotal = parseFloat(_this15.grandTotal).toFixed(2);
                  console.log('grand total===>>', _this15.grandTotal); // console.log('deliveryeeeeeeeee', this.deliveryPrice);
                } else {
                  _this15.deliveryPrice = _this15.shippingPrice;
                  console.log('shippppppppp=-======0-00-=-=', _this15.shippingPrice);

                  if (!_this15.discount || _this15.discount === null) {
                    _this15.discount = 0;
                  }

                  _this15.grandTotal = _this15.totalPrice - parseFloat(_this15.discount) + _this15.orderTax + _this15.shippingPrice;
                  _this15.grandTotal = parseFloat(_this15.grandTotal).toFixed(2);
                  console.log('grand total===>>', _this15.grandTotal);
                }
              } else {
                _this15.deliveryPrice = 0;
                console.log('discount', _this15.discount);

                if (!_this15.discount || _this15.discount === null) {
                  _this15.discount = 0;
                }

                console.log('order tax', _this15.orderTax);
                _this15.grandTotal = _this15.totalPrice - parseFloat(_this15.discount) + _this15.orderTax;
                _this15.grandTotal = parseFloat(_this15.grandTotal).toFixed(2);
                console.log('grand total===>>', _this15.grandTotal);
              }
            }, 1000);
          } else {
            console.log('no store,no delivery address, no shipping price valid');
            var _taxEach = 0;
            this.stores.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var extraChargeParam;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _taxEach = this.orderTax / this.stores.length;
                        extraChargeParam = {
                          store_id: element.uid,
                          distance: 0,
                          tax: _taxEach.toFixed(2),
                          shipping: this.shipping,
                          shippingPrice: this.shippingPrice
                        };
                        console.log(extraChargeParam);
                        this.userOrderTaxByStores.push(extraChargeParam);

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
            console.log('extra delivery paarammmmm----<<<', this.userOrderTaxByStores);
            this.deliveryPrice = 0;
            this.discount = this.discount === null || this.discount === 0 || !this.discount ? 0 : this.discount;
            this.grandTotal = this.totalPrice - parseFloat(this.discount) + parseFloat(this.orderTax);
            this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
            console.log('grand total===>>', this.grandTotal);
          }

          console.log('=====>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.orderTax);
          this.util.clearKeys('cart');
          this.util.setKeys('cart', JSON.stringify(this.cart)); // this.createBulkOrder();
        }
      }, {
        key: "createBulkOrder",
        value: function createBulkOrder() {
          var _this16 = this;

          var order = [];

          var ids = _toConsumableArray(new Set(this.cart.map(function (item) {
            return item.store_id;
          })));

          ids.forEach(function (element) {
            var param = {
              id: element,
              order: []
            };
            order.push(param);
          });
          ids.forEach(function (element, index) {
            _this16.cart.forEach(function (cart) {
              if (cart.store_id === element) {
                order[index].order.push(cart);
              }
            });
          });
          this.bulkOrder = order;
          console.log('=====================================================');
          console.log(order);
          console.log('=====================================================');
        }
      }, {
        key: "checkProductInCart",
        value: function checkProductInCart(id) {
          return this.itemId.includes(id);
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], CartService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, menuCtrl, storage) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.isLoading = false;
        this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newOrder = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.appPage = [];
        this.appClosedMessage = '';
        this.translations = [];
        this.selectedCity = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.favIds = [];
        this.newAddress = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // public creds = {
        //   sid: '',
        //   token: '',
        //   from: ''
        // }

        this.countrys = [{
          country_code: 'AF',
          country_name: 'Afghanistan',
          dialling_code: '93'
        }, {
          country_code: 'AL',
          country_name: 'Albania',
          dialling_code: '355'
        }, {
          country_code: 'DZ',
          country_name: 'Algeria',
          dialling_code: '213'
        }, {
          country_code: 'AS',
          country_name: 'American Samoa',
          dialling_code: '1'
        }, {
          country_code: 'AD',
          country_name: 'Andorra',
          dialling_code: '376'
        }, {
          country_code: 'AO',
          country_name: 'Angola',
          dialling_code: '244'
        }, {
          country_code: 'AI',
          country_name: 'Anguilla',
          dialling_code: '1'
        }, {
          country_code: 'AG',
          country_name: 'Antigua',
          dialling_code: '1'
        }, {
          country_code: 'AR',
          country_name: 'Argentina',
          dialling_code: '54'
        }, {
          country_code: 'AM',
          country_name: 'Armenia',
          dialling_code: '374'
        }, {
          country_code: 'AW',
          country_name: 'Aruba',
          dialling_code: '297'
        }, {
          country_code: 'AU',
          country_name: 'Australia',
          dialling_code: '61'
        }, {
          country_code: 'AI',
          country_name: 'Austria',
          dialling_code: '43'
        }, {
          country_code: 'AZ',
          country_name: 'Azerbaijan',
          dialling_code: '994'
        }, {
          country_code: 'BH',
          country_name: 'Bahrain',
          dialling_code: '973'
        }, {
          country_code: 'BD',
          country_name: 'Bangladesh',
          dialling_code: '880'
        }, {
          country_code: 'BB',
          country_name: 'Barbados',
          dialling_code: '1'
        }, {
          country_code: 'BY',
          country_name: 'Belarus',
          dialling_code: '375'
        }, {
          country_code: 'BE',
          country_name: 'Belgium',
          dialling_code: '32'
        }, {
          country_code: 'BZ',
          country_name: 'Belize',
          dialling_code: '501'
        }, {
          country_code: 'BJ',
          country_name: 'Benin',
          dialling_code: '229'
        }, {
          country_code: 'BM',
          country_name: 'Bermuda',
          dialling_code: '1'
        }, {
          country_code: 'BT',
          country_name: 'Bhutan',
          dialling_code: '975'
        }, {
          country_code: 'BO',
          country_name: 'Bolivia',
          dialling_code: '591'
        }, {
          country_code: 'BA',
          country_name: 'Bosnia and Herzegovina',
          dialling_code: '387'
        }, {
          country_code: 'BW',
          country_name: 'Botswana',
          dialling_code: '267'
        }, {
          country_code: 'BR',
          country_name: 'Brazil',
          dialling_code: '55'
        }, {
          country_code: 'IO',
          country_name: 'British Indian Ocean Territory',
          dialling_code: '246'
        }, {
          country_code: 'VG',
          country_name: 'British Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'BN',
          country_name: 'Brunei',
          dialling_code: '673'
        }, {
          country_code: 'BG',
          country_name: 'Bulgaria',
          dialling_code: '359'
        }, {
          country_code: 'BF',
          country_name: 'Burkina Faso',
          dialling_code: '226'
        }, {
          country_code: 'MM',
          country_name: 'Burma Myanmar',
          dialling_code: '95'
        }, {
          country_code: 'BI',
          country_name: 'Burundi',
          dialling_code: '257'
        }, {
          country_code: 'KH',
          country_name: 'Cambodia',
          dialling_code: '855'
        }, {
          country_code: 'CM',
          country_name: 'Cameroon',
          dialling_code: '237'
        }, {
          country_code: 'CA',
          country_name: 'Canada',
          dialling_code: '1'
        }, {
          country_code: 'CV',
          country_name: 'Cape Verde',
          dialling_code: '238'
        }, {
          country_code: 'KY',
          country_name: 'Cayman Islands',
          dialling_code: '1'
        }, {
          country_code: 'CF',
          country_name: 'Central African Republic',
          dialling_code: '236'
        }, {
          country_code: 'ID',
          country_name: 'Chad',
          dialling_code: '235'
        }, {
          country_code: 'CL',
          country_name: 'Chile',
          dialling_code: '56'
        }, {
          country_code: 'CN',
          country_name: 'China',
          dialling_code: '86'
        }, {
          country_code: 'CO',
          country_name: 'Colombia',
          dialling_code: '57'
        }, {
          country_code: 'KM',
          country_name: 'Comoros',
          dialling_code: '269'
        }, {
          country_code: 'CK',
          country_name: 'Cook Islands',
          dialling_code: '682'
        }, {
          country_code: 'CR',
          country_name: 'Costa Rica',
          dialling_code: '506'
        }, {
          country_code: 'CI',
          country_name: "C\xF4te d'Ivoire",
          dialling_code: '225'
        }, {
          country_code: 'HR',
          country_name: 'Croatia',
          dialling_code: '385'
        }, {
          country_code: 'CU',
          country_name: 'Cuba',
          dialling_code: '53'
        }, {
          country_code: 'CY',
          country_name: 'Cyprus',
          dialling_code: '357'
        }, {
          country_code: 'CZ',
          country_name: 'Czech Republic',
          dialling_code: '420'
        }, {
          country_code: 'CD',
          country_name: 'Democratic Republic of Congo',
          dialling_code: '243'
        }, {
          country_code: 'DK',
          country_name: 'Denmark',
          dialling_code: '45'
        }, {
          country_code: 'DJ',
          country_name: 'Djibouti',
          dialling_code: '253'
        }, {
          country_code: 'DM',
          country_name: 'Dominica',
          dialling_code: '1'
        }, {
          country_code: 'DO',
          country_name: 'Dominican Republic',
          dialling_code: '1'
        }, {
          country_code: 'EC',
          country_name: 'Ecuador',
          dialling_code: '593'
        }, {
          country_code: 'EG',
          country_name: 'Egypt',
          dialling_code: '20'
        }, {
          country_code: 'SV',
          country_name: 'El Salvador',
          dialling_code: '503'
        }, {
          country_code: 'GQ',
          country_name: 'Equatorial Guinea',
          dialling_code: '240'
        }, {
          country_code: 'ER',
          country_name: 'Eritrea',
          dialling_code: '291'
        }, {
          country_code: 'EE',
          country_name: 'Estonia',
          dialling_code: '372'
        }, {
          country_code: 'ET',
          country_name: 'Ethiopia',
          dialling_code: '251'
        }, {
          country_code: 'FK',
          country_name: 'Falkland Islands',
          dialling_code: '500'
        }, {
          country_code: 'FO',
          country_name: 'Faroe Islands',
          dialling_code: '298'
        }, {
          country_code: 'FM',
          country_name: 'Federated States of Micronesia',
          dialling_code: '691'
        }, {
          country_code: 'FJ',
          country_name: 'Fiji',
          dialling_code: '679'
        }, {
          country_code: 'FI',
          country_name: 'Finland',
          dialling_code: '358'
        }, {
          country_code: 'FR',
          country_name: 'France',
          dialling_code: '33'
        }, {
          country_code: 'GF',
          country_name: 'French Guiana',
          dialling_code: '594'
        }, {
          country_code: 'PF',
          country_name: 'French Polynesia',
          dialling_code: '689'
        }, {
          country_code: 'GA',
          country_name: 'Gabon',
          dialling_code: '241'
        }, {
          country_code: 'GE',
          country_name: 'Georgia',
          dialling_code: '995'
        }, {
          country_code: 'DE',
          country_name: 'Germany',
          dialling_code: '49'
        }, {
          country_code: 'GH',
          country_name: 'Ghana',
          dialling_code: '233'
        }, {
          country_code: 'GI',
          country_name: 'Gibraltar',
          dialling_code: '350'
        }, {
          country_code: 'GR',
          country_name: 'Greece',
          dialling_code: '30'
        }, {
          country_code: 'GL',
          country_name: 'Greenland',
          dialling_code: '299'
        }, {
          country_code: 'GD',
          country_name: 'Grenada',
          dialling_code: '1'
        }, {
          country_code: 'GP',
          country_name: 'Guadeloupe',
          dialling_code: '590'
        }, {
          country_code: 'GU',
          country_name: 'Guam',
          dialling_code: '1'
        }, {
          country_code: 'GT',
          country_name: 'Guatemala',
          dialling_code: '502'
        }, {
          country_code: 'GN',
          country_name: 'Guinea',
          dialling_code: '224'
        }, {
          country_code: 'GW',
          country_name: 'Guinea-Bissau',
          dialling_code: '245'
        }, {
          country_code: 'GY',
          country_name: 'Guyana',
          dialling_code: '592'
        }, {
          country_code: 'HT',
          country_name: 'Haiti',
          dialling_code: '509'
        }, {
          country_code: 'HN',
          country_name: 'Honduras',
          dialling_code: '504'
        }, {
          country_code: 'HK',
          country_name: 'Hong Kong',
          dialling_code: '852'
        }, {
          country_code: 'HU',
          country_name: 'Hungary',
          dialling_code: '36'
        }, {
          country_code: 'IS',
          country_name: 'Iceland',
          dialling_code: '354'
        }, {
          country_code: 'IN',
          country_name: 'India',
          dialling_code: '91'
        }, {
          country_code: 'ID',
          country_name: 'Indonesia',
          dialling_code: '62'
        }, {
          country_code: 'IR',
          country_name: 'Iran',
          dialling_code: '98'
        }, {
          country_code: 'IQ',
          country_name: 'Iraq',
          dialling_code: '964'
        }, {
          country_code: 'IE',
          country_name: 'Ireland',
          dialling_code: '353'
        }, {
          country_code: 'IL',
          country_name: 'Israel',
          dialling_code: '972'
        }, {
          country_code: 'IT',
          country_name: 'Italy',
          dialling_code: '39'
        }, {
          country_code: 'JM',
          country_name: 'Jamaica',
          dialling_code: '1'
        }, {
          country_code: 'JP',
          country_name: 'Japan',
          dialling_code: '81'
        }, {
          country_code: 'JO',
          country_name: 'Jordan',
          dialling_code: '962'
        }, {
          country_code: 'KZ',
          country_name: 'Kazakhstan',
          dialling_code: '7'
        }, {
          country_code: 'KE',
          country_name: 'Kenya',
          dialling_code: '254'
        }, {
          country_code: 'KI',
          country_name: 'Kiribati',
          dialling_code: '686'
        }, {
          country_code: 'XK',
          country_name: 'Kosovo',
          dialling_code: '381'
        }, {
          country_code: 'KW',
          country_name: 'Kuwait',
          dialling_code: '965'
        }, {
          country_code: 'KG',
          country_name: 'Kyrgyzstan',
          dialling_code: '996'
        }, {
          country_code: 'LA',
          country_name: 'Laos',
          dialling_code: '856'
        }, {
          country_code: 'LV',
          country_name: 'Latvia',
          dialling_code: '371'
        }, {
          country_code: 'LB',
          country_name: 'Lebanon',
          dialling_code: '961'
        }, {
          country_code: 'LS',
          country_name: 'Lesotho',
          dialling_code: '266'
        }, {
          country_code: 'LR',
          country_name: 'Liberia',
          dialling_code: '231'
        }, {
          country_code: 'LY',
          country_name: 'Libya',
          dialling_code: '218'
        }, {
          country_code: 'LI',
          country_name: 'Liechtenstein',
          dialling_code: '423'
        }, {
          country_code: 'LT',
          country_name: 'Lithuania',
          dialling_code: '370'
        }, {
          country_code: 'LU',
          country_name: 'Luxembourg',
          dialling_code: '352'
        }, {
          country_code: 'MO',
          country_name: 'Macau',
          dialling_code: '853'
        }, {
          country_code: 'MK',
          country_name: 'Macedonia',
          dialling_code: '389'
        }, {
          country_code: 'MG',
          country_name: 'Madagascar',
          dialling_code: '261'
        }, {
          country_code: 'MW',
          country_name: 'Malawi',
          dialling_code: '265'
        }, {
          country_code: 'MY',
          country_name: 'Malaysia',
          dialling_code: '60'
        }, {
          country_code: 'MV',
          country_name: 'Maldives',
          dialling_code: '960'
        }, {
          country_code: 'ML',
          country_name: 'Mali',
          dialling_code: '223'
        }, {
          country_code: 'MT',
          country_name: 'Malta',
          dialling_code: '356'
        }, {
          country_code: 'MH',
          country_name: 'Marshall Islands',
          dialling_code: '692'
        }, {
          country_code: 'MQ',
          country_name: 'Martinique',
          dialling_code: '596'
        }, {
          country_code: 'MR',
          country_name: 'Mauritania',
          dialling_code: '222'
        }, {
          country_code: 'MU',
          country_name: 'Mauritius',
          dialling_code: '230'
        }, {
          country_code: 'YT',
          country_name: 'Mayotte',
          dialling_code: '262'
        }, {
          country_code: 'MX',
          country_name: 'Mexico',
          dialling_code: '52'
        }, {
          country_code: 'MD',
          country_name: 'Moldova',
          dialling_code: '373'
        }, {
          country_code: 'MC',
          country_name: 'Monaco',
          dialling_code: '377'
        }, {
          country_code: 'MN',
          country_name: 'Mongolia',
          dialling_code: '976'
        }, {
          country_code: 'ME',
          country_name: 'Montenegro',
          dialling_code: '382'
        }, {
          country_code: 'MS',
          country_name: 'Montserrat',
          dialling_code: '1'
        }, {
          country_code: 'MA',
          country_name: 'Morocco',
          dialling_code: '212'
        }, {
          country_code: 'MZ',
          country_name: 'Mozambique',
          dialling_code: '258'
        }, {
          country_code: 'NA',
          country_name: 'Namibia',
          dialling_code: '264'
        }, {
          country_code: 'NR',
          country_name: 'Nauru',
          dialling_code: '674'
        }, {
          country_code: 'NP',
          country_name: 'Nepal',
          dialling_code: '977'
        }, {
          country_code: 'NL',
          country_name: 'Netherlands',
          dialling_code: '31'
        }, {
          country_code: 'AN',
          country_name: 'Netherlands Antilles',
          dialling_code: '599'
        }, {
          country_code: 'NC',
          country_name: 'New Caledonia',
          dialling_code: '687'
        }, {
          country_code: 'NZ',
          country_name: 'New Zealand',
          dialling_code: '64'
        }, {
          country_code: 'NI',
          country_name: 'Nicaragua',
          dialling_code: '505'
        }, {
          country_code: 'NE',
          country_name: 'Niger',
          dialling_code: '227'
        }, {
          country_code: 'NG',
          country_name: 'Nigeria',
          dialling_code: '234'
        }, {
          country_code: 'NU',
          country_name: 'Niue',
          dialling_code: '683'
        }, {
          country_code: 'NF',
          country_name: 'Norfolk Island',
          dialling_code: '672'
        }, {
          country_code: 'KP',
          country_name: 'North Korea',
          dialling_code: '850'
        }, {
          country_code: 'MP',
          country_name: 'Northern Mariana Islands',
          dialling_code: '1'
        }, {
          country_code: 'NO',
          country_name: 'Norway',
          dialling_code: '47'
        }, {
          country_code: 'OM',
          country_name: 'Oman',
          dialling_code: '968'
        }, {
          country_code: 'PK',
          country_name: 'Pakistan',
          dialling_code: '92'
        }, {
          country_code: 'PW',
          country_name: 'Palau',
          dialling_code: '680'
        }, {
          country_code: 'PS',
          country_name: 'Palestine',
          dialling_code: '970'
        }, {
          country_code: 'PA',
          country_name: 'Panama',
          dialling_code: '507'
        }, {
          country_code: 'PG',
          country_name: 'Papua New Guinea',
          dialling_code: '675'
        }, {
          country_code: 'PY',
          country_name: 'Paraguay',
          dialling_code: '595'
        }, {
          country_code: 'PE',
          country_name: 'Peru',
          dialling_code: '51'
        }, {
          country_code: 'PH',
          country_name: 'Philippines',
          dialling_code: '63'
        }, {
          country_code: 'PL',
          country_name: 'Poland',
          dialling_code: '48'
        }, {
          country_code: 'PT',
          country_name: 'Portugal',
          dialling_code: '351'
        }, {
          country_code: 'PR',
          country_name: 'Puerto Rico',
          dialling_code: '1'
        }, {
          country_code: 'QA',
          country_name: 'Qatar',
          dialling_code: '974'
        }, {
          country_code: 'CG',
          country_name: 'Republic of the Congo',
          dialling_code: '242'
        }, {
          country_code: 'RE',
          country_name: 'Réunion',
          dialling_code: '262'
        }, {
          country_code: 'RO',
          country_name: 'Romania',
          dialling_code: '40'
        }, {
          country_code: 'RU',
          country_name: 'Russia',
          dialling_code: '7'
        }, {
          country_code: 'RW',
          country_name: 'Rwanda',
          dialling_code: '250'
        }, {
          country_code: 'BL',
          country_name: 'Saint Barthélemy',
          dialling_code: '590'
        }, {
          country_code: 'SH',
          country_name: 'Saint Helena',
          dialling_code: '290'
        }, {
          country_code: 'KN',
          country_name: 'Saint Kitts and Nevis',
          dialling_code: '1'
        }, {
          country_code: 'MF',
          country_name: 'Saint Martin',
          dialling_code: '590'
        }, {
          country_code: 'PM',
          country_name: 'Saint Pierre and Miquelon',
          dialling_code: '508'
        }, {
          country_code: 'VC',
          country_name: 'Saint Vincent and the Grenadines',
          dialling_code: '1'
        }, {
          country_code: 'WS',
          country_name: 'Samoa',
          dialling_code: '685'
        }, {
          country_code: 'SM',
          country_name: 'San Marino',
          dialling_code: '378'
        }, {
          country_code: 'ST',
          country_name: 'São Tomé and Príncipe',
          dialling_code: '239'
        }, {
          country_code: 'SA',
          country_name: 'Saudi Arabia',
          dialling_code: '966'
        }, {
          country_code: 'SN',
          country_name: 'Senegal',
          dialling_code: '221'
        }, {
          country_code: 'RS',
          country_name: 'Serbia',
          dialling_code: '381'
        }, {
          country_code: 'SC',
          country_name: 'Seychelles',
          dialling_code: '248'
        }, {
          country_code: 'SL',
          country_name: 'Sierra Leone',
          dialling_code: '232'
        }, {
          country_code: 'SG',
          country_name: 'Singapore',
          dialling_code: '65'
        }, {
          country_code: 'SK',
          country_name: 'Slovakia',
          dialling_code: '421'
        }, {
          country_code: 'SI',
          country_name: 'Slovenia',
          dialling_code: '386'
        }, {
          country_code: 'SB',
          country_name: 'Solomon Islands',
          dialling_code: '677'
        }, {
          country_code: 'SO',
          country_name: 'Somalia',
          dialling_code: '252'
        }, {
          country_code: 'ZA',
          country_name: 'South Africa',
          dialling_code: '27'
        }, {
          country_code: 'KR',
          country_name: 'South Korea',
          dialling_code: '82'
        }, {
          country_code: 'ES',
          country_name: 'Spain',
          dialling_code: '34'
        }, {
          country_code: 'LK',
          country_name: 'Sri Lanka',
          dialling_code: '94'
        }, {
          country_code: 'LC',
          country_name: 'St. Lucia',
          dialling_code: '1'
        }, {
          country_code: 'SD',
          country_name: 'Sudan',
          dialling_code: '249'
        }, {
          country_code: 'SR',
          country_name: 'Suriname',
          dialling_code: '597'
        }, {
          country_code: 'SZ',
          country_name: 'Swaziland',
          dialling_code: '268'
        }, {
          country_code: 'SE',
          country_name: 'Sweden',
          dialling_code: '46'
        }, {
          country_code: 'CH',
          country_name: 'Switzerland',
          dialling_code: '41'
        }, {
          country_code: 'SY',
          country_name: 'Syria',
          dialling_code: '963'
        }, {
          country_code: 'TW',
          country_name: 'Taiwan',
          dialling_code: '886'
        }, {
          country_code: 'TJ',
          country_name: 'Tajikistan',
          dialling_code: '992'
        }, {
          country_code: 'TZ',
          country_name: 'Tanzania',
          dialling_code: '255'
        }, {
          country_code: 'TH',
          country_name: 'Thailand',
          dialling_code: '66'
        }, {
          country_code: 'BS',
          country_name: 'The Bahamas',
          dialling_code: '1'
        }, {
          country_code: 'GM',
          country_name: 'The Gambia',
          dialling_code: '220'
        }, {
          country_code: 'TL',
          country_name: 'Timor-Leste',
          dialling_code: '670'
        }, {
          country_code: 'TG',
          country_name: 'Togo',
          dialling_code: '228'
        }, {
          country_code: 'TK',
          country_name: 'Tokelau',
          dialling_code: '690'
        }, {
          country_code: 'TO',
          country_name: 'Tonga',
          dialling_code: '676'
        }, {
          country_code: 'TT',
          country_name: 'Trinidad and Tobago',
          dialling_code: '1'
        }, {
          country_code: 'TN',
          country_name: 'Tunisia',
          dialling_code: '216'
        }, {
          country_code: 'TR',
          country_name: 'Turkey',
          dialling_code: '90'
        }, {
          country_code: 'TM',
          country_name: 'Turkmenistan',
          dialling_code: '993'
        }, {
          country_code: 'TC',
          country_name: 'Turks and Caicos Islands',
          dialling_code: '1'
        }, {
          country_code: 'TV',
          country_name: 'Tuvalu',
          dialling_code: '688'
        }, {
          country_code: 'UG',
          country_name: 'Uganda',
          dialling_code: '256'
        }, {
          country_code: 'UA',
          country_name: 'Ukraine',
          dialling_code: '380'
        }, {
          country_code: 'AE',
          country_name: 'United Arab Emirates',
          dialling_code: '971'
        }, {
          country_code: 'GB',
          country_name: 'United Kingdom',
          dialling_code: '44'
        }, {
          country_code: 'US',
          country_name: 'United States',
          dialling_code: '1'
        }, {
          country_code: 'UY',
          country_name: 'Uruguay',
          dialling_code: '598'
        }, {
          country_code: 'VI',
          country_name: 'US Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'UZ',
          country_name: 'Uzbekistan',
          dialling_code: '998'
        }, {
          country_code: 'VU',
          country_name: 'Vanuatu',
          dialling_code: '678'
        }, {
          country_code: 'VA',
          country_name: 'Vatican City',
          dialling_code: '39'
        }, {
          country_code: 'VE',
          country_name: 'Venezuela',
          dialling_code: '58'
        }, {
          country_code: 'VN',
          country_name: 'Vietnam',
          dialling_code: '84'
        }, {
          country_code: 'WF',
          country_name: 'Wallis and Futuna',
          dialling_code: '681'
        }, {
          country_code: 'YE',
          country_name: 'Yemen',
          dialling_code: '967'
        }, {
          country_code: 'ZM',
          country_name: 'Zambia',
          dialling_code: '260'
        }, {
          country_code: 'ZW',
          country_name: 'Zimbabwe',
          dialling_code: '263'
        }];
        this.user_login = '0';
        this.reset_pwd = '0';
        this.active_store = [];
        this.appPage = [{
          title: 'Home',
          url: 'tabs/home',
          icon: 'assets/sidemenu/home.png',
          icon2: 'assets/sidemenu/home2.png',
          icn: 'home-outline'
        }, {
          title: 'History',
          url: 'tabs/orders',
          icon: 'assets/sidemenu/home.png',
          icon2: 'assets/sidemenu/home2.png',
          icn: 'document-text-outline'
        }, {
          title: 'Profile',
          url: 'tabs/account',
          icon: 'assets/sidemenu/user.png',
          icon2: 'assets/sidemenu/user2.png',
          icn: 'person-outline'
        }, {
          title: 'Language',
          url: 'languages',
          icon: 'assets/sidemenu/language.png',
          icon2: 'assets/sidemenu/language2.png',
          icn: 'language-outline'
        }, {
          title: 'About',
          url: 'tabs/account/about',
          icon: 'assets/sidemenu/info.png',
          icon2: 'assets/sidemenu/info2.png',
          icn: 'alert-circle-outline'
        }, {
          title: 'Contact us',
          url: 'tabs/account/contacts',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'mail-outline'
        }, {
          title: 'FAQs',
          url: 'tabs/account/faqs',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'flag-outline'
        }, {
          title: 'Help',
          url: 'tabs/account/help',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'help-circle-outline'
        }];
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "publishAddress",
        value: function publishAddress(data) {
          this.address.next(data);
        }
      }, {
        key: "setFav",
        value: function setFav(id) {
          this.favIds.push(id);
        }
      }, {
        key: "removeFav",
        value: function removeFav(id) {
          this.favIds = this.favIds.filter(function (x) {
            return x !== id;
          });
        }
      }, {
        key: "publishNewOrder",
        value: function publishNewOrder() {
          this.newOrder.next();
        }
      }, {
        key: "subscribeOrder",
        value: function subscribeOrder() {
          return this.newOrder;
        }
      }, {
        key: "publishReview",
        value: function publishReview(data) {
          this.review.next(data);
        }
      }, {
        key: "publishProfile",
        value: function publishProfile(data) {
          this.profile.next(data);
        }
      }, {
        key: "publishNewAddress",
        value: function publishNewAddress() {
          this.newAddress.next();
        }
      }, {
        key: "subscribeNewAddress",
        value: function subscribeNewAddress() {
          return this.newAddress;
        }
      }, {
        key: "observProfile",
        value: function observProfile() {
          return this.profile;
        }
      }, {
        key: "getReviewObservable",
        value: function getReviewObservable() {
          return this.review;
        }
      }, {
        key: "publishLocation",
        value: function publishLocation(data) {
          this.changeLocation.next(data);
        }
      }, {
        key: "subscribeLocation",
        value: function subscribeLocation() {
          return this.changeLocation;
        }
      }, {
        key: "publishLoggedIn",
        value: function publishLoggedIn(data) {
          this.loggedIn.next(data);
        }
      }, {
        key: "subscribeLoggedIn",
        value: function subscribeLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "publishCity",
        value: function publishCity(data) {
          this.selectedCity.next(data);
        }
      }, {
        key: "subscribeCity",
        value: function subscribeCity() {
          return this.selectedCity;
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.address;
        }
      }, {
        key: "publishCoupon",
        value: function publishCoupon(data) {
          this.coupon.next(data);
        }
      }, {
        key: "getCouponObservable",
        value: function getCouponObservable() {
          return this.coupon;
        }
      }, {
        key: "setOrders",
        value: function setOrders(data) {
          this.orders = null;
          this.orders = data;
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuCtrl.toggle();
        }
      }, {
        key: "getKeys",
        value: function getKeys(key) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.storage.get(key).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "clearKeys",
        value: function clearKeys(key) {
          this.storage.remove(key);
        }
      }, {
        key: "setKeys",
        value: function setKeys(key, value) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.storage.set(key, value).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "gerOrder",
        value: function gerOrder() {
          return this.orders;
        }
      }, {
        key: "show",
        value: function show(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this19 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = true;
                    _context5.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this19.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isLoading = false;
                    _context6.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context10.next = 10;
                      break;
                    }

                    _context10.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context10.sent;
                    _context10.next = 7;
                    return alert.present();

                  case 7:
                    return _context10.abrupt("return", false);

                  case 10:
                    return _context10.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
           color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, colors, positon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var toast;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: colors,
                      position: positon
                    });

                  case 2:
                    toast = _context11.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, colors, positon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var toast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: colors,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context12.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var toast;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context13.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          // console.log('Error got in service =>', err)
          if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
          }
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }, {
        key: "getString",
        value: function getString(str) {
          if (this.translations[str]) {
            return this.translations[str];
          }

          return str;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], UtilService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseURL: 'https://api.twitch.ng/index.php/',
      mediaURL: 'https://api.twitch.ng/uploads/',
      onesignal: {
        appId: '422ae1c7-6a50-4143-b87b-a43bbab83b40',
        googleProjectNumber: '300420175983',
        restKey: 'NThkZTgxNWQtMWIxMS00OWU3LTk2ZDUtMjNhNTFlZDYxZDcw'
      },
      general: {
        symbol: '$',
        code: 'USD'
      },
      authToken: '12345678'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/charles.onuorah/Downloads/User_app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map