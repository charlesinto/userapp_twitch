(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["languages-languages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{util.getString('Languages')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p *ngIf=\"!dummy?.length && !langs?.length\" class=\"ion-text-center\"> {{util.getString('No Languages Found')}} </p>\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"selected\" (ionChange)=\"changed()\">\n      <ion-item *ngFor=\"let item of langs\" class=\"list\" lines=\"none\">\n        <ion-thumbnail slot=\"start\" class=\"thums\">\n          <img [src]=\"api.mediaURL+ item.cover\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label class=\"title\">{{item.name}}</ion-label>\n        <ion-radio [value]=\"item.file\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/languages/languages-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/languages/languages-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LanguagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPageRoutingModule", function() { return LanguagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _languages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages.page */ "./src/app/pages/languages/languages.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _languages_page__WEBPACK_IMPORTED_MODULE_3__["LanguagesPage"]
    }
];
let LanguagesPageRoutingModule = class LanguagesPageRoutingModule {
};
LanguagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/languages/languages.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/languages/languages.module.ts ***!
  \*****************************************************/
/*! exports provided: LanguagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPageModule", function() { return LanguagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages-routing.module */ "./src/app/pages/languages/languages-routing.module.ts");
/* harmony import */ var _languages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languages.page */ "./src/app/pages/languages/languages.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let LanguagesPageModule = class LanguagesPageModule {
};
LanguagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagesPageRoutingModule"]
        ],
        declarations: [_languages_page__WEBPACK_IMPORTED_MODULE_6__["LanguagesPage"]]
    })
], LanguagesPageModule);



/***/ }),

/***/ "./src/app/pages/languages/languages.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/languages/languages.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.thums {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.thums img {\n  height: 25px;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5wYWdlLnNjc3MiLCIvVXNlcnMvY2hhcmxlcy5vbnVvcmFoL0Rvd25sb2Fkcy9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL2xhbmd1YWdlcy9sYW5ndWFnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREVKO0FDREk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBREdSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnRodW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGh1bXMgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnRodW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/languages/languages.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/languages/languages.page.ts ***!
  \***************************************************/
/*! exports provided: LanguagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPage", function() { return LanguagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



let LanguagesPage = class LanguagesPage {
    constructor(util, api) {
        this.util = util;
        this.api = api;
        this.dummy = [];
        this.langs = [];
        this.selected = localStorage.getItem('language');
        this.getLangs();
    }
    ngOnInit() {
    }
    getLangs() {
        this.dummy = Array(10);
        this.api.get('lang').subscribe((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200) {
                const info = data.data.filter(x => x.status === '1');
                this.langs = info;
            }
        }, error => {
            this.dummy = [];
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    openMenu() {
        this.util.openMenu();
    }
    changed() {
        console.log(this.selected);
        const item = this.langs.filter(x => x.file === this.selected);
        if (item && item.length > 0) {
            this.util.direction = item[0].positions === '1' ? 'ltr' : 'rtl';
            document.documentElement.dir = this.util.direction;
            localStorage.setItem('language', this.selected);
            window.location.reload();
        }
    }
};
LanguagesPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LanguagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-languages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./languages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./languages.page.scss */ "./src/app/pages/languages/languages.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], LanguagesPage);



/***/ })

}]);
//# sourceMappingURL=languages-languages-module-es2015.js.map