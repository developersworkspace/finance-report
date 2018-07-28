(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account.service.ts":
/*!************************************!*\
  !*** ./src/app/account.service.ts ***!
  \************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/account */ "./src/app/models/account.ts");
/* harmony import */ var _models_account_balance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/account-balance */ "./src/app/models/account-balance.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService() {
    }
    AccountService.prototype.list = function () {
        return [
            this.chequeAccount(),
            this.creditAccount(),
            this.homeLoanBondAccount(),
            this.homeLoanFlexiAccount(),
            this.propertyAccount(),
            this.savingsAccount(),
            this.vehicleAccount(),
            this.vehicleLoanAccount(),
        ];
    };
    AccountService.prototype.chequeAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](12015.37, null, null, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](9124.55, null, null, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](14088.66, null, null, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](11938.97, null, null, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](8063.58, null, null, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](6732.41, null, null, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](21591.10, null, null, new Date(2018, 6, 31)),
        ], true, false, 'Cheque');
    };
    AccountService.prototype.creditAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-1529.03, null, null, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-1907.91, null, null, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-7060.58, null, null, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-3837.2, null, null, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-1416.20, null, null, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](0, null, null, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-3319.87, null, null, new Date(2018, 6, 31)),
        ], false, false, 'Credit');
    };
    AccountService.prototype.homeLoanBondAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-457888.43, 4158.14, 4808.07, new Date(2017, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-457508.42, 4291.26, 4808.07, new Date(2017, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-456830.46, 4130.11, 4732.64, new Date(2017, 6, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-456352.17, 4185.95, 4732.64, new Date(2017, 7, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-455870.84, 4182.91, 4732.64, new Date(2017, 8, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-455248.91, 4042.31, 4732.64, new Date(2017, 9, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-454139.43, 4154.76, 4734.37, new Date(2017, 10, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-448758.81, 4019.72, 4734.37, new Date(2017, 11, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-432768.35, 4107.11, 4734.37, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-432108.74, 4006.36, 4734.37, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-431055.91, 3613.14, 4734.37, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-426172.09, 3902.45, 4654.67, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-425317.62, 3731.80, 4654.67, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-424579.77, 3848.42, 4654.67, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-423710.03, 3716.53, 4655.27, new Date(2018, 6, 31)),
        ], false, true, 'Home Loan Bond');
    };
    AccountService.prototype.homeLoanFlexiAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](16100.00, null, null, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](16100.00, null, null, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](16100.00, null, null, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](20300.00, null, null, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](20300.00, null, null, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](20300.00, null, null, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](20300.00, null, null, new Date(2018, 6, 31)),
        ], true, false, 'Home Loan Flexi');
    };
    AccountService.prototype.propertyAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 6, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 7, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 8, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 9, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 10, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2017, 11, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](750000, null, null, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](850000, null, null, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](850000, null, null, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](850000, null, null, new Date(2018, 6, 31)),
        ], false, false, 'Property');
    };
    AccountService.prototype.savingsAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](122852.87, null, null, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](134115.78, null, null, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](137895.92, null, null, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](78542.55, null, null, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](44878.69, null, null, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](28981.98, null, null, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](41584.64, null, null, new Date(2018, 6, 31)),
        ], true, false, 'Savings');
    };
    AccountService.prototype.vehicleAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](140000, null, null, new Date(2018, 6, 31)),
        ], false, false, 'Vehicle');
    };
    AccountService.prototype.vehicleLoanAccount = function () {
        return new _models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]([
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-95097.18, 968.34, 2120.35, new Date(2018, 0, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-92955.17, 978.39, 2118.87, new Date(2018, 1, 28)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-91774.08, 873.14, 2119.43, new Date(2018, 2, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-90672.18, 952.33, 2107.20, new Date(2018, 3, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-89522.99, 893.54, 2106.46, new Date(2018, 4, 31)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-88392.76, 912.50, 2106.41, new Date(2018, 5, 30)),
            new _models_account_balance__WEBPACK_IMPORTED_MODULE_2__["AccountBalance"](-87221.08, 871.05, 2105.66, new Date(2018, 6, 31)),
        ], false, true, 'Vehicle Loan');
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-route/home-route.component */ "./src/app/home-route/home-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', component: _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_2__["HomeRouteComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    useHash: true,
                }),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Finance Report</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Totals\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/home-loan']\">Home Loan</a>\r\n            </li>\r\n        </ul>\r\n    </div> -->\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-route/home-route.component */ "./src/app/home-route/home-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_route_home_route_component__WEBPACK_IMPORTED_MODULE_5__["HomeRouteComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-route/home-route.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home-route/home-route.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-route/home-route.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-route/home-route.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div [chart]=\"chart\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-route/home-route.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-route/home-route.component.ts ***!
  \****************************************************/
/*! exports provided: HomeRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouteComponent", function() { return HomeRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account.service */ "./src/app/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeRouteComponent = /** @class */ (function () {
    function HomeRouteComponent(accountService) {
        this.accountService = accountService;
        this.accounts = [];
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Accounts'
            },
            series: [],
            xAxis: {
                type: 'datetime'
            },
        });
    }
    HomeRouteComponent.prototype.ngOnInit = function () {
        this.accounts = this.accountService.list();
        this.addAccountSeries();
        this.addCashSeries();
        this.addNetWorthSeries();
    };
    HomeRouteComponent.prototype.addAccountSeries = function () {
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            this.chart.addSerie({
                data: account.getBalanceSeries(),
                name: account.name + " Balance",
                visible: false,
            });
            this.chart.addSerie({
                data: account.getBalanceDeltaSeries(),
                name: account.name + " Balance Delta",
                visible: false,
            });
        }
        for (var _b = 0, _c = this.accounts; _b < _c.length; _b++) {
            var account = _c[_b];
            if (!account.loan) {
                continue;
            }
            this.chart.addSerie({
                data: account.getInterestSeries(),
                name: account.name + " Interest",
                visible: false,
            });
            this.chart.addSerie({
                data: account.getInterestDeltaSeries(),
                name: account.name + " Interest Delta",
                visible: false,
            });
            this.chart.addSerie({
                data: account.getRepaymentSeries(),
                name: account.name + " Repayment",
                visible: false,
            });
            this.chart.addSerie({
                data: account.getRepaymentDeltaSeries(),
                name: account.name + " Repayment Delta",
                visible: false,
            });
        }
    };
    HomeRouteComponent.prototype.addCashSeries = function () {
        var timestamps = this.getUniqueTimestamps();
        var data = [];
        for (var _i = 0, timestamps_1 = timestamps; _i < timestamps_1.length; _i++) {
            var timestamp = timestamps_1[_i];
            data.push({
                x: timestamp.getTime(),
                y: this.calculateCash(timestamp),
            });
        }
        this.chart.addSerie({
            data: data,
            name: "Cash",
        });
        this.chart.addSerie({
            data: this.getDelta(data),
            name: "Cash Delta",
            visible: false,
        });
    };
    HomeRouteComponent.prototype.addNetWorthSeries = function () {
        var timestamps = this.getUniqueTimestamps();
        var data = [];
        for (var _i = 0, timestamps_2 = timestamps; _i < timestamps_2.length; _i++) {
            var timestamp = timestamps_2[_i];
            data.push({
                x: timestamp.getTime(),
                y: this.calculateNetWorth(timestamp),
            });
        }
        this.chart.addSerie({
            data: data,
            name: "Net Worth",
        });
        this.chart.addSerie({
            data: this.getDelta(data),
            name: "Net Worth Delta",
            visible: false,
        });
    };
    HomeRouteComponent.prototype.calculateCash = function (timestamp) {
        var sum = 0;
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            if (!account.cash) {
                continue;
            }
            var balance = account.balances.find(function (x) { return x.timestamp.getTime() === timestamp.getTime(); });
            if (!balance) {
                continue;
            }
            sum += balance.value;
        }
        return Math.round(sum * 100) / 100;
    };
    HomeRouteComponent.prototype.calculateNetWorth = function (timestamp) {
        var sum = 0;
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            var balance = account.balances.find(function (x) { return x.timestamp.getTime() === timestamp.getTime(); });
            if (!balance) {
                continue;
            }
            sum += balance.value;
        }
        return Math.round(sum * 100) / 100;
    };
    HomeRouteComponent.prototype.getDelta = function (data) {
        var result = [];
        for (var index = 1; index < data.length; index++) {
            result.push({
                x: data[index].x,
                y: Math.round((data[index].y - data[index - 1].y) * 100) / 100,
            });
        }
        return result;
    };
    HomeRouteComponent.prototype.getUniqueTimestamps = function () {
        var timestamps = [];
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var account = _a[_i];
            var _loop_1 = function (balance) {
                if (timestamps.find(function (x) { return x.getTime() === balance.timestamp.getTime(); })) {
                    return "continue";
                }
                timestamps.push(balance.timestamp);
            };
            for (var _b = 0, _c = account.balances; _b < _c.length; _b++) {
                var balance = _c[_b];
                _loop_1(balance);
            }
        }
        timestamps.sort(function (a, b) {
            return a.getTime() - b.getTime();
        });
        return timestamps;
    };
    HomeRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-route',
            template: __webpack_require__(/*! ./home-route.component.html */ "./src/app/home-route/home-route.component.html"),
            styles: [__webpack_require__(/*! ./home-route.component.css */ "./src/app/home-route/home-route.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], HomeRouteComponent);
    return HomeRouteComponent;
}());



/***/ }),

/***/ "./src/app/models/account-balance.ts":
/*!*******************************************!*\
  !*** ./src/app/models/account-balance.ts ***!
  \*******************************************/
/*! exports provided: AccountBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountBalance", function() { return AccountBalance; });
var AccountBalance = /** @class */ (function () {
    function AccountBalance(value, interest, repayment, timestamp) {
        this.value = value;
        this.interest = interest;
        this.repayment = repayment;
        this.timestamp = timestamp;
    }
    return AccountBalance;
}());



/***/ }),

/***/ "./src/app/models/account.ts":
/*!***********************************!*\
  !*** ./src/app/models/account.ts ***!
  \***********************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
var Account = /** @class */ (function () {
    function Account(balances, cash, loan, name) {
        this.balances = balances;
        this.cash = cash;
        this.loan = loan;
        this.name = name;
    }
    Account.prototype.getBalanceSeries = function () {
        var _this = this;
        return this.balances.map(function (balance) {
            return {
                x: balance.timestamp.getTime(),
                y: _this.roundNumber(balance.value)
            };
        });
    };
    Account.prototype.getBalanceDeltaSeries = function () {
        return this.getDeltaSeries(this.getBalanceSeries());
    };
    Account.prototype.getInterestSeries = function () {
        var _this = this;
        return this.balances.map(function (balance) {
            return {
                x: balance.timestamp.getTime(),
                y: _this.roundNumber(balance.interest)
            };
        });
    };
    Account.prototype.getInterestDeltaSeries = function () {
        return this.getDeltaSeries(this.getInterestSeries());
    };
    Account.prototype.getRepaymentSeries = function () {
        var _this = this;
        return this.balances.map(function (balance) {
            return {
                x: balance.timestamp.getTime(),
                y: _this.roundNumber(balance.repayment)
            };
        });
    };
    Account.prototype.getRepaymentDeltaSeries = function () {
        return this.getDeltaSeries(this.getRepaymentSeries());
    };
    Account.prototype.getDeltaSeries = function (data) {
        var result = [];
        for (var index = 1; index < data.length; index++) {
            result.push({
                x: data[index].x,
                y: this.roundNumber(data[index].y - data[index - 1].y)
            });
        }
        return result;
    };
    Account.prototype.roundNumber = function (value) {
        return Math.round(value * 100) / 100;
    };
    return Account;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\developersworkspace\finance-report\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map