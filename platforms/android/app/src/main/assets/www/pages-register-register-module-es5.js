function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign Up')}} </ion-label>\n\n\n\n      <ion-input type=\"email\" [placeholder]=\"util.getString('Email')\" [(ngModel)]=\"email\">\n        <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-input type=\"password\" [placeholder]=\"util.getString('Password')\" [(ngModel)]=\"password\">\n        <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-input type=\"text\" [placeholder]=\"util.getString('First Name')\" [(ngModel)]=\"fname\">\n        <ion-icon name=\"person\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-input type=\"text\" [placeholder]=\"util.getString('Last Name')\" [(ngModel)]=\"lname\">\n        <ion-icon name=\"person\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-input [placeholder]=\"util.getString('Select your Country')\" type=\"text\" (ionChange)=\"onCountryInput($event)\"\n        [(ngModel)]=\"cc\">\n      </ion-input>\n      <div *ngFor=\"let item of countries\" class=\"cCode\" (click)=\"selectedCC(item)\">\n        <p class=\"ccLbl\">+{{item.dialling_code}} {{item.country_name}}</p>\n      </div>\n      <ion-input type=\"number\" [placeholder]=\"util.getString('Mobile')\" [(ngModel)]=\"mobile\">\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"man\" slot=\"icon-only\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('Gender')}} </ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\" [(ngModel)]=\"gender\">\n          <ion-select-option value=\"1\"> {{util.getString('Male')}} </ion-select-option>\n          <ion-select-option value=\"0\"> {{util.getString('Female')}} </ion-select-option>\n          <ion-select-option value=\"2\"> {{util.getString('Others')}} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div class=\"div_chk\">\n        <ion-checkbox [checked]=\"check\" [(ngModel)]=\"check\" color=\"light\" class=\"chk\"></ion-checkbox>\n        <ion-label class=\"lbl_police\"><span class=\"span_term\">\n            {{util.getString('By clicking on the I agree button click, download or if you use the Application, you agree to be bound by the')}}\n          </span>\n          <u> <a style=\"color: white;\" (click)=\"open('eula')\"> {{util.getString('EULA certificate')}} </a> </u>\n          {{util.getString('and')}}\n          <u> <a style=\"color: white;\" (click)=\"open('privacy')\"> {{util.getString('Privacy Policy')}} </a> </u>\n          {{util.getString('of this app')}}.\n        </ion-label>\n      </div>\n      <ion-button expand=\"block\" (click)=\"login()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN UP')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\"> {{util.getString('Already have an account ?')}} <span\n          class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");
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
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  text-align: left;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .cCode {\n  padding: 0px 10px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .form_div .cCode .ccLbl {\n  margin: 0px;\n  color: white;\n  padding: 5px;\n}\n.main_content_div .form_div ion-item {\n  --border-radius: 20px;\n}\n.main_content_div .form_div ion-item ion-label {\n  color: gray !important;\n}\n.main_content_div .form_div ion-item ion-icon {\n  padding: 0px !important;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .form_div .div_chk {\n  width: 100%;\n  margin: 20px 0px;\n  position: relative;\n}\n.main_content_div .form_div .div_chk .lbl_police {\n  font-size: 10px;\n  margin-left: 40px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .form_div .div_chk .span_term {\n  color: white;\n  margin-right: 10px;\n}\n.main_content_div .form_div .div_chk .chk {\n  --size: 20px;\n  --border-radius: 5px !important;\n  --border-color-checked: var(--ion-color-primary);\n}\n.main_content_div .form_div .div_chk .lbl_by {\n  display: block;\n  font-size: 10px;\n  color: black;\n  margin-top: 10px;\n}\n.main_content_div .form_div .div_chk .span_termm {\n  color: #8992AA;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwiL1VzZXJzL2NoYXJsZXMub251b3JhaC9Eb3dubG9hZHMvVXNlcl9hcHAvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxzQ0FBQTtBREVKO0FDQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBREVKO0FDQUk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FERVI7QUNBSTtFQUVJLGtCQUFBO0FEQ1I7QUNBUTtFQUVJLFdBQUE7QURDWjtBQ0VJO0VBQ0ksYUFBQTtFQUVBLGtCQUFBO0FERFI7QUNFUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQVo7QUNFUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FEQVo7QUNHUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUREWjtBQ0dRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBRERaO0FDSVE7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QURGWjtBQ0dZO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FERFo7QUNLUTtFQUNJLHFCQUFBO0FESFo7QUNJWTtFQUNJLHNCQUFBO0FERmhCO0FDSVk7RUFDSSx1QkFBQTtBREZoQjtBQ01RO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBREpaO0FDTVE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBREpaO0FDTVE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURKWjtBQ01RO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREpaO0FDTVM7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREpaO0FDTVk7RUFDSSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBRExoQjtBQ1FZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0FEUGhCO0FDVVk7RUFDSSxZQUFBO0VBRUEsK0JBQUE7RUFDQSxnREFBQTtBRFRoQjtBQ1dZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURUaEI7QUNXWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBRFRoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaWNvbkRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IC5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYge1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLm1haW5faGVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmNDb2RlIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuY0NvZGUgLmNjTGJsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnRyaSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmxibCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuc2lnbnVwX3NwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLmxibF9wb2xpY2Uge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLnNwYW5fdGVybSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5jaGsge1xuICAtLXNpemU6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAubGJsX2J5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5zcGFuX3Rlcm1tIHtcbiAgY29sb3I6ICM4OTkyQUE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuXG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmljb25EaXZ7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmljb257XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9ybV9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5tYWluX2hlYWR7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZ290e1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNDb2Rle1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgLmNjTGJse1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAudHJpIHtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxibHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2lnbnVwX3NwYW57XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgICAuZGl2X2Noa3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmxibF9wb2xpY2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3Bhbl90ZXJte1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoa3tcbiAgICAgICAgICAgICAgICAtLXNpemUgOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vIC0tYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzIDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZCA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmxfYnl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNwYW5fdGVybW17XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyQUE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
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


    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(navCtrl, util, router, api, iab, modalCtrl, alertController) {
        _classCallCheck(this, RegisterPage);

        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.fname = '';
        this.lname = '';
        this.mobile = '';
        this.gender = '1';
        this.email = '';
        this.password = '';
        this.cc = '';
        this.ccCode = '';
        this.countries = [];
        this.dummy = [];
        this.dummy = this.util.countrys;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                      componentProps: {
                        code: this.ccCode,
                        phone: this.mobile
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'ok') {
                        console.log('login');
                        var param = {
                          first_name: _this.fname,
                          last_name: _this.lname,
                          email: _this.email,
                          password: _this.password,
                          gender: _this.gender,
                          fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : 'NA',
                          type: 'user',
                          lat: '',
                          lng: '',
                          cover: 'NA',
                          mobile: _this.mobile,
                          status: 1,
                          country_code: _this.ccCode,
                          verified: 0,
                          others: 1,
                          date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
                          stripe_key: ''
                        };
                        console.log('param', param);
                        _this.loggedIn = true;

                        _this.api.post('users/registerUser', param).subscribe(function (data) {
                          _this.loggedIn = false;
                          console.log(data);

                          if (data && data.status === 200) {
                            _this.util.userInfo = data.data.data;
                            localStorage.setItem('uid', data.data.data.id);
                            localStorage.setItem('token', data.data.token);
                            var fcm = localStorage.getItem('fcm');

                            if (fcm && fcm !== null && fcm !== 'null') {
                              var updateParam = {
                                id: data.data.data.id,
                                fcm_token: fcm
                              };

                              _this.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                                console.log('user info=>', data);
                              }, function (error) {
                                console.log(error);
                              });
                            }

                            _this.sendVerification(_this.email, _this.api.baseUrl + 'users/verify?uid=' + data.data.id);

                            _this.navCtrl.navigateRoot(['']);
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
                    });
                    modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          console.log('login');

          if (!this.check) {
            this.util.showToast(this.util.getString('Please accept terms and conditions'), 'dark', 'bottom');
            return false;
          }

          if (!this.fname || !this.lname || !this.mobile || !this.email || !this.password || this.ccCode === '' || !this.ccCode) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
          }

          if (this.util.twillo === '1') {
            console.log('open model=>>>');
            var param = {
              email: this.email,
              phone: this.mobile,
              cc: this.ccCode
            };
            this.loggedIn = true;
            this.api.post('users/validatePhoneAndEmail', param).subscribe(function (data) {
              _this2.loggedIn = false;
              console.log('data', data);

              if (data && data.status === 200) {
                console.log('all done...');

                _this2.presentAlertConfirm();
              } else if (data && data.status === 500) {
                _this2.util.errorToast(data.data.message);
              } else {
                _this2.util.errorToast(_this2.util.getString('Something went wrong'));
              }
            }, function (error) {
              console.log(error);
              _this2.loggedIn = false;

              _this2.util.errorToast(_this2.util.getString('Something went wrong'));
            }); // this.openModal();
          } else {
            console.log('login');
            var _param = {
              first_name: this.fname,
              last_name: this.lname,
              email: this.email,
              password: this.password,
              gender: this.gender,
              fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : 'NA',
              type: 'user',
              lat: '',
              lng: '',
              cover: 'NA',
              mobile: this.mobile,
              status: 1,
              country_code: this.ccCode,
              verified: 0,
              others: 1,
              date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
              stripe_key: ''
            };
            console.log('param', _param);
            this.loggedIn = true;
            this.api.post('users/registerUser', _param).subscribe(function (data) {
              _this2.loggedIn = false;
              console.log(data);

              if (data && data.status === 200) {
                _this2.util.userInfo = data.data.data;
                localStorage.setItem('uid', data.data.data.id);
                localStorage.setItem('token', data.data.token);
                var fcm = localStorage.getItem('fcm');

                if (fcm && fcm !== null && fcm !== 'null') {
                  var updateParam = {
                    id: data.data.data.id,
                    fcm_token: fcm
                  };

                  _this2.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                    console.log('user info=>', data);
                  }, function (error) {
                    console.log(error);
                  });
                }

                _this2.sendVerification(_this2.email, _this2.api.baseUrl + 'users/verify?uid=' + data.data.id);

                _this2.navCtrl.navigateRoot(['']);
              } else if (data && data.status === 500) {
                _this2.util.errorToast(data.data.message);
              } else {
                _this2.util.errorToast(_this2.util.getString('Something went wrong'));
              }
            }, function (error) {
              console.log(error);
              _this2.loggedIn = false;

              _this2.util.errorToast(_this2.util.getString('Something went wrong'));
            });
          }
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Confirm Informations',
                      message: 'We will send verification code to your mobile number  ' + this.ccCode + this.mobile,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Send',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this3.openModal();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sendVerification",
        value: function sendVerification(mail, link) {
          var param = {
            email: mail,
            url: link
          };
          this.api.post('users/sendVerificationMail', param).subscribe(function (data) {
            console.log('mail', data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onCountryInput",
        value: function onCountryInput(events) {
          console.log(events.detail.value);

          if (events.value !== '') {
            this.countries = this.dummy.filter(function (item) {
              return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.countries = [];
          }
        }
      }, {
        key: "selectedCC",
        value: function selectedCC(item) {
          this.countries = [];
          console.log(item);
          this.cc = '+' + item.dialling_code + ' ' + item.country_name;
          this.ccCode = '+' + item.dialling_code;
        }
      }, {
        key: "open",
        value: function open(type) {
          // https://initappz.com/groceryeeaagya/privacy.html
          // https://initappz.com/groceryeeaagya/eula.html
          if (type === 'eula') {
            this.iab.create('https://initappz.com/groceryeeaagya/eula.html');
          } else {
            this.iab.create('https://initappz.com/groceryeeaagya/privacy.html');
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map