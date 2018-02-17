webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body mx-auto\" style=\"width:500px;\">\n  <!-- Load Component -->\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_app_routing_module__ = __webpack_require__("../../../../../src/app/router/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_conways_nav_conways_nav_component__ = __webpack_require__("../../../../../src/app/components/conways-nav/conways-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_conways_field_conways_field_component__ = __webpack_require__("../../../../../src/app/components/conways-field/conways-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_field_manager_service__ = __webpack_require__("../../../../../src/app/services/field-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// MODULS | LIBRAIES




// ROUTER

// COMPONENTS



// SERVICES

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_conways_nav_conways_nav_component__["a" /* ConwaysNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_conways_field_conways_field_component__["a" /* ConwaysFieldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__router_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_field_manager_service__["a" /* FieldManager */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/conways-field/conways-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content {\n    background: #6B96D5;\n    border-radius: 10px;\n    border: 4px solid #007BFF;\n    margin-top: 10px;\n}\n\n.content div.field {\n    padding: 0 0 10px 0;\n}\n\n.content div.field div.controlLeft {\n    width: 40px;\n    float: left;\n}\n\n.content div.field div.control {\n    /*display: none;*/\n    text-align: center;\n    margin: 0 40px 0 0;\n}\n\n.content div.field table {\n    margin-left:auto; \n    margin-right:auto;\n    border-collapse: collapse;\n    margin-top: 10px;\n}\n\n.content div.field table tr td  {\n    border: 1px solid black;\n    width: 25px;\n    height: 25px;\n}\n\n.content div.field table tr td.alive {\n    background-color: #FFA03C;\n}\n\n.content div.field table tr td.dead {\n    background-color: white;\n}\n\n.content div.coordinates {\n    height: 25px;\n    text-align: center;\n    border-top: 4px solid #007BFF;\n    padding: 2px;\n    background-color: #007BFF;\n    color: white;\n}\n\n.content div.coordinates h4 {\n    margin: 0;\n    font-size: 10pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/conways-field/conways-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div *ngIf=\"errMessage\" class=\"alert alert-danger\" role=\"alert\">\n    {{errMessage}}\n  </div>\n  <div class=\"field\">\n    <!-- NAVIGATION -->\n    <div>\n      <div class=\"controlLeft\">\n        <a routerLink=\"/nav\" class=\"btn btn-primary\">Back</a>\n      </div>\n      <!-- FIELD CONTROL -->\n      <div class=\"control\">\n        <div class=\"btn-group btn-group\">\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click) = \"btnStart()\"\n            [disabled] = \"fieldManager.field.running\"\n          >Start</button>\n          <button type=\"button\" class=\"btn btn-primary\"\n            (click) = \"fieldManager.createNextGeneration()\"\n            [disabled] = \"fieldManager.field.running\"\n          >Next Generation</button>\n          <button type=\"button\" class=\"btn btn-danger\"\n          (click) = \"btnStop()\"\n          >Stop</button>\n        </div>\n      </div>\n    </div>\n    <!-- FIELD -->\n    <table *ngIf=\"!errMessage\">\n      <tr *ngFor=\"let row of fieldManager.field.cells; index as x\">\n        <td \n          *ngFor = \"let col of row; index as y\"\n          [ngClass] = \"{'alive': col, 'dead': !col}\"\n          (click) = \"fieldManager.toggleStateOfCell( x, y )\"\n          (mouseenter) = \"mouseCellEnter( x, y )\"  \n          (mouseleave) = \"mouseCellLeave()\"\n        ></td>\n      </tr>\n    </table>\n  </div>\n  <!-- COORDINATES -->\n  <div class=\"coordinates\">\n    <h4>{{coordinates}}</h4>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/conways-field/conways-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConwaysFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_field_manager_service__ = __webpack_require__("../../../../../src/app/services/field-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// SERVICE

var ConwaysFieldComponent = (function () {
    function ConwaysFieldComponent(route, fieldManager) {
        this.route = route;
        this.fieldManager = fieldManager;
        this.errMessage = '';
    }
    ConwaysFieldComponent.prototype.ngOnInit = function () {
        // check, if field size is set
        if (this.route.snapshot.paramMap.get('fieldsize') != null) {
            // extract field size from URL
            var fieldSize = +this.route.snapshot.paramMap.get('fieldsize');
            // number has to be between 2 and 20
            if (fieldSize > 1 && fieldSize < 21) {
                // create field
                this.fieldManager.createField(fieldSize);
            }
            else {
                this.errMessage = 'Your input has to be between 2 and 20...';
            }
        }
    };
    ConwaysFieldComponent.prototype.ngOnDestroy = function () {
        // check if subscription is defined
        if (typeof this.subscription !== 'undefined') {
            this.subscription.unsubscribe();
        }
    };
    // EVENT HANDLERS -------
    ConwaysFieldComponent.prototype.mouseCellEnter = function (x, y) {
        this.coordinates = '{ x' + x + ', y: ' + y + ' }';
    };
    ConwaysFieldComponent.prototype.mouseCellLeave = function () {
        this.coordinates = '';
    };
    ConwaysFieldComponent.prototype.btnStart = function () {
        var _this = this;
        // set field in running mode
        this.fieldManager.field.running = true;
        // init timer
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 500);
        this.subscription = timer.subscribe(function () { _this.fieldManager.createNextGeneration(); });
    };
    ConwaysFieldComponent.prototype.btnStop = function () {
        // set field in sleeping mode
        this.fieldManager.field.running = false;
        // clear timer 
        if (typeof this.subscription !== 'undefined') {
            this.subscription.unsubscribe();
        }
    };
    ConwaysFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conways-field',
            template: __webpack_require__("../../../../../src/app/components/conways-field/conways-field.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/conways-field/conways-field.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_field_manager_service__["a" /* FieldManager */]])
    ], ConwaysFieldComponent);
    return ConwaysFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/conways-nav/conways-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n    margin: 10px;\n}\n  \n.header {\n    background: #6B96D5;\n    padding: 10px;\n    border-radius: 10px;\n    border: 4px solid #007BFF;\n    margin: 10px 0 0 0;\n}\n\n.header h1, h4 {\n    text-align: center;\n}\n\n.header div.alert {\n    border: 2px solid;\n    margin: 5px;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/conways-nav/conways-nav.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- HEADER -->\n  <div class=\"header\">\n    <h1>Conways Game of Life</h1>\n    <div class=\"input-group input-group mx-auto\" style=\"width:220px;\">\n      <input type=\"text\" name=\"fieldSize\" [(ngModel)]=\"fieldSize\" class=\"form-control\" placeholder=\"Size\" aria-label=\"Size\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"btnCrtFieldClick()\">Create field NxN</button>\n      </span>\n    </div>\n    \n    <!-- ERROR HANDLER -->\n    <div *ngIf=\"errMessage\" class=\"alert alert-danger\" role=\"alert\">\n      {{errMessage}}\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/conways-nav/conways-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConwaysNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConwaysNavComponent = (function () {
    function ConwaysNavComponent(router) {
        this.router = router;
        this.errMessage = '';
    }
    // click on "Create field NxN"
    ConwaysNavComponent.prototype.btnCrtFieldClick = function () {
        // clean error message
        this.errMessage = '';
        // validate input
        // input has to be a number
        if (isNaN(this.fieldSize)) {
            this.errMessage = 'You have to type in a number...';
            return false;
        }
        // input has to be between 2 and 20
        if (this.fieldSize < 2 || this.fieldSize > 20) {
            this.errMessage = 'Your input has to be between 2 and 20...';
            return false;
        }
        // navigate to field component
        this.router.navigate(['/conways-field/', this.fieldSize]);
        return true;
    };
    ConwaysNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conways-nav',
            template: __webpack_require__("../../../../../src/app/components/conways-nav/conways-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/conways-nav/conways-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ConwaysNavComponent);
    return ConwaysNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/router/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_conways_nav_conways_nav_component__ = __webpack_require__("../../../../../src/app/components/conways-nav/conways-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_conways_field_conways_field_component__ = __webpack_require__("../../../../../src/app/components/conways-field/conways-field.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENTS


// ROUTES
var routes = [
    { path: '', redirectTo: '/nav', pathMatch: 'full' },
    { path: 'nav', component: __WEBPACK_IMPORTED_MODULE_2__components_conways_nav_conways_nav_component__["a" /* ConwaysNavComponent */] },
    { path: 'conways-field/:fieldsize', component: __WEBPACK_IMPORTED_MODULE_3__components_conways_field_conways_field_component__["a" /* ConwaysFieldComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/field-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldManager = (function () {
    function FieldManager(http) {
        this.http = http;
        this.uri = 'http://localhost:3000/cgof/next-gen';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    // HELPERS --------------
    FieldManager.prototype.toggleStateOfCell = function (row, col) {
        if (this.field.cells[row][col] === false) {
            this.field.cells[row][col] = true;
        }
        else {
            this.field.cells[row][col] = false;
        }
    };
    // CORE FUNCTIONS -------
    FieldManager.prototype.createField = function (fieldSize) {
        // init field
        this.field = {
            size: fieldSize,
            cells: [],
            running: false
        };
        // set inital state of all cells to false <dead>
        for (var row = 0; row < fieldSize; row++) {
            // append row
            this.field.cells.push([]);
            for (var col = 0; col < fieldSize; col++) {
                // append cell
                this.field.cells[row].push(false);
            }
        }
    };
    FieldManager.prototype.createNextGeneration = function () {
        var _this = this;
        this.http.post(this.uri, this.field.cells, this.httpOptions)
            .subscribe(function (res) { return _this.field.cells = res; });
    };
    FieldManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FieldManager);
    return FieldManager;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map