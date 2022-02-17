function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\" *ngIf=\"util.user_login ==='0'\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n      <ion-input type=\"email\" [placeholder]=\"util.getString('Email')\" [(ngModel)]=\"email\">\n        <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n      <ion-input type=\"password\" [placeholder]=\"util.getString('Password')\" [(ngModel)]=\"password\">\n        <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n      <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label>\n      <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"login()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\"> {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.user_login ==='1'\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-label class=\"mobiles\">{{mobileccCode}}</ion-label>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-input [(ngModel)]=\"mobileNumber\" type=\"number\" [placeholder]=\"util.getString('Mobile Number')\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-input [(ngModel)]=\"mobilePassword\" name=\"password\" [placeholder]=\"util.getString('Password')\"\n        type=\"password\">\n      </ion-input>\n      <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label>\n      <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"onPhoneLogin()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\">\n          {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.user_login ==='2'\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-label class=\"mobiles\">{{mobileccCode}}</ion-label>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-input [(ngModel)]=\"mobileNumber\" type=\"number\" [placeholder]=\"util.getString('Mobile Number')\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label>\n      <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"onOTPLogin()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\">\n          {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
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
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: #d9d9d9;\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: #00a890;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: #000000;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: #00a890;\n}\n.main_content_div .form_div ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .mobiles {\n  background: white;\n  border-radius: 20px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n  font-size: 18px;\n  color: gray;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 6px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: #00a890;\n  --color: #d9d9d9;\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: #000000;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: #00a890;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL2NoYXJsZXMub251b3JhaC9Eb3dubG9hZHMvVXNlcl9hcHAvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxxQkFBQTtBREVKO0FDQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBREVKO0FDQUk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FERVI7QUNBSTtFQUVJLGtCQUFBO0FEQ1I7QUNBUTtFQUVJLFdBQUE7QURDWjtBQ0VJO0VBQ0ksYUFBQTtFQUVBLGtCQUFBO0FERFI7QUNFUTtFQUNJLGNBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRERaO0FDR1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBRERaO0FDSVE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FERlo7QUNJUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QURGWjtBQ0tRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBREhaO0FDS1E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FESFo7QUNLUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FESFo7QUNLUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREhaO0FDS1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FESFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNkOWQ5ZDk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubWFpbl9oZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMDBhODkwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMDBhODkwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubW9iaWxlcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwYTg5MDtcbiAgLS1jb2xvcjogI2Q5ZDlkOTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAudHJpIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubGJsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnNpZ251cF9zcGFuIHtcbiAgY29sb3I6ICMwMGE4OTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDlkOWQ5O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5pY29uRGl2e1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcm1fZGl2e1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAubWFpbl9oZWFke1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6ICMwMGE4OTA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3Jnb3R7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICMwMGE4OTA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGVze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBhODkwO1xuICAgICAgICAgICAgLS1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaSB7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmx7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2lnbnVwX3NwYW57XG4gICAgICAgICAgICBjb2xvcjogIzAwYTg5MDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../select-country/select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
    /* harmony import */


    var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../verify/verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, util, navCtrl, api, modalController) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalController = modalController;
        this.email = '';
        this.password = '';
        this.mobileccCode = '';
        this.mobileNumber = '';
        this.mobilePassword = '';

        if (!this.util.user_login || this.util.user_login === '') {
          this.util.user_login = '0';
        }

        console.log('Home Type==================>>', this.util.user_login);
        this.mobileccCode = '+91';
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          console.log('login');

          if (!this.email || !this.password) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
          }

          this.loggedIn = true;
          var param = {
            email: this.email,
            password: this.password
          };
          this.api.post('users/loginUser', param).subscribe(function (data) {
            _this.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              if (data && data.data && data.data.data.type === 'user') {
                if (data.data.data.status === '1') {
                  console.log('tokne', data.data.token);
                  localStorage.setItem('uid', data.data.data.id);
                  localStorage.setItem('token', data.data.token);
                  _this.util.userInfo = data.data.data;
                  var fcm = localStorage.getItem('fcm');

                  if (fcm && fcm !== null && fcm !== 'null') {
                    var updateParam = {
                      id: data.data.data.id,
                      fcm_token: fcm
                    };

                    _this.api.post_private('users/edit_profile', updateParam).subscribe(function (data) {
                      console.log('user info=>', data);
                    }, function (error) {
                      console.log(error);
                    });
                  }

                  var favParam = {
                    id: data.data.data.id
                  };

                  _this.api.post_private('favourite/getByUid', favParam).subscribe(function (data) {
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

                  _this.navCtrl.navigateRoot(['']);
                } else {
                  console.log('not valid');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: _this.util.getString('Error'),
                    text: _this.util.getString('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: _this.util.getString('Need Help?'),
                    backdrop: false,
                    background: 'white'
                  }).then(function (status) {
                    if (status && status.value) {
                      // localStorage.setItem('helpId', data.data.id);
                      // this.router.navigate(['inbox']);
                      var inboxParam = {
                        queryParams: {
                          id: 0,
                          name: 'Support',
                          uid: data.data.data.id
                        }
                      };

                      _this.router.navigate(['inbox'], inboxParam);
                    }
                  });
                }
              } else {
                _this.util.errorToast(_this.util.getString('Not valid user'));

                _this.email = '';
                _this.password = '';
              }
            } else if (data && data.status === 500) {
              _this.util.errorToast(data.data.message);
            } else {
              _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this.loggedIn = false;

            _this.util.errorToast(_this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log('enter');
        }
      }, {
        key: "create",
        value: function create() {
          this.router.navigate(['register']);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.router.navigate(['reset-password']);
        }
      }, {
        key: "openCountry",
        value: function openCountry() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('open ccode');
                    _context.next = 3;
                    return this.modalController.create({
                      component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__["SelectCountryPage"],
                      backdropDismiss: false,
                      showBackdrop: true
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'selected') {
                        console.log('ok');
                        _this2.mobileccCode = '+' + data.data;
                      }
                    });
                    _context.next = 7;
                    return modal.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onPhoneLogin",
        value: function onPhoneLogin() {
          var _this3 = this;

          if (!this.mobileccCode || !this.mobileNumber || !this.mobilePassword) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
          }

          var param = {
            cc: this.mobileccCode,
            mobile: this.mobileNumber,
            password: this.mobilePassword
          };
          this.loggedIn = true;
          this.api.post('users/loginWithPhoneAndPasswordUser', param).subscribe(function (data) {
            _this3.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              if (data && data.data && data.data.data.type === 'user') {
                if (data.data.data.status === '1') {
                  localStorage.setItem('uid', data.data.data.id);
                  localStorage.setItem('token', data.data.token);
                  _this3.util.userInfo = data.data.data;
                  var fcm = localStorage.getItem('fcm');

                  if (fcm && fcm !== null && fcm !== 'null') {
                    var updateParam = {
                      id: data.data.data.id,
                      fcm_token: fcm
                    };

                    _this3.api.post_private('users/edit_profile', updateParam).subscribe(function (data) {
                      console.log('user info=>', data);
                    }, function (error) {
                      console.log(error);
                    });
                  }

                  var favParam = {
                    id: data.data.data.id
                  };

                  _this3.api.post_private('favourite/getByUid', favParam).subscribe(function (data) {
                    console.log('fav data', data);

                    if (data && data.status === 200 && data.data.length > 0) {
                      _this3.util.haveFav = true;

                      try {
                        _this3.util.favIds = data.data[0].ids.split(',');
                      } catch (error) {
                        console.log('eroor', error);
                      }
                    } else {
                      _this3.util.haveFav = false;
                    }
                  }, function (error) {
                    _this3.util.haveFav = false;
                    console.log('fav error', error);
                  });

                  _this3.navCtrl.navigateRoot(['']);
                } else {
                  console.log('not valid');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: _this3.util.getString('Error'),
                    text: _this3.util.getString('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: _this3.util.getString('Need Help?'),
                    backdrop: false,
                    background: 'white'
                  }).then(function (status) {
                    if (status && status.value) {
                      // localStorage.setItem('helpId', data.data.id);
                      // this.router.navigate(['inbox']);
                      var inboxParam = {
                        queryParams: {
                          id: 0,
                          name: 'Support',
                          uid: data.data.data.id
                        }
                      };

                      _this3.router.navigate(['inbox'], inboxParam);
                    }
                  });
                }
              } else {
                _this3.util.errorToast(_this3.util.getString('Not valid user'));
              }
            } else if (data && data.status === 500) {
              _this3.util.errorToast(data.data.message);
            } else {
              _this3.util.errorToast(_this3.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this3.loggedIn = false;

            _this3.util.errorToast(_this3.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "onOTPLogin",
        value: function onOTPLogin() {
          var _this4 = this;

          if (!this.mobileccCode || !this.mobileNumber) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
          }

          var param = {
            mobile: this.mobileNumber,
            cc: this.mobileccCode
          };
          this.loggedIn = true;
          this.api.post('users/checkMobileNumber', param).subscribe(function (data) {
            _this4.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              console.log('open modal');

              _this4.openModal(data.data.id);
            } else if (data && data.status === 500) {
              _this4.util.errorToast(data.data.message);
            } else {
              _this4.util.errorToast(_this4.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this4.loggedIn = false;

            _this4.util.errorToast(_this4.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "openModal",
        value: function openModal(uid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('uid', uid);
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                      componentProps: {
                        code: this.mobileccCode,
                        phone: this.mobileNumber
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data, '');

                      if (data && data.role === 'ok') {
                        var param = {
                          id: uid
                        };

                        _this5.api.post('users/getByIDAfterVerify', param).subscribe(function (data) {
                          console.log('user data', data);

                          if (data && data.status === 200 && data.data && data.data.data.length && data.data.data[0].type === 'user') {
                            _this5.util.userInfo = data.data.data[0];

                            if (data && data.data && data.data.data[0].type === 'user') {
                              if (data.data.data[0].status === '1') {
                                localStorage.setItem('uid', uid);
                                localStorage.setItem('token', data.data.token);
                                var fcm = localStorage.getItem('fcm');

                                if (fcm && fcm !== null && fcm !== 'null') {
                                  var updateParam = {
                                    id: uid,
                                    fcm_token: fcm
                                  };

                                  _this5.api.post_private('users/edit_profile', updateParam).subscribe(function (data) {
                                    console.log('user info=>', data);
                                  }, function (error) {
                                    console.log(error);
                                  });
                                }

                                var favParam = {
                                  id: uid
                                };

                                _this5.api.post_private('favourite/getByUid', favParam).subscribe(function (data) {
                                  console.log('fav data', data);

                                  if (data && data.status === 200 && data.data.length > 0) {
                                    _this5.util.haveFav = true;

                                    try {
                                      _this5.util.favIds = data.data[0].ids.split(',');
                                    } catch (error) {
                                      console.log('eroor', error);
                                    }
                                  } else {
                                    _this5.util.haveFav = false;
                                  }
                                }, function (error) {
                                  _this5.util.haveFav = false;
                                  console.log('fav error', error);
                                });

                                _this5.navCtrl.navigateRoot(['']);
                              } else {
                                console.log('not valid');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                  title: _this5.util.getString('Error'),
                                  text: _this5.util.getString('Your are blocked please contact administrator'),
                                  icon: 'error',
                                  showConfirmButton: true,
                                  showCancelButton: true,
                                  confirmButtonText: _this5.util.getString('Need Help?'),
                                  backdrop: false,
                                  background: 'white'
                                }).then(function (status) {
                                  if (status && status.value) {
                                    var inboxParam = {
                                      queryParams: {
                                        id: 0,
                                        name: 'Support',
                                        uid: uid
                                      }
                                    };

                                    _this5.router.navigate(['inbox'], inboxParam);
                                  }
                                });
                              }
                            } else {
                              _this5.util.errorToast(_this5.util.getString('Not valid user'));
                            }
                          } else if (data && data.status === 500) {
                            _this5.util.errorToast(data.data.message);
                          } else {
                            _this5.util.errorToast(_this5.util.getString('Something went wrong'));
                          }
                        }, function (error) {
                          localStorage.removeItem('uid');
                          console.log(error);
                        });
                      }
                    });
                    modal.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map