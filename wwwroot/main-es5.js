function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar>\n  <span>Contact Application</span>\n</mat-toolbar>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactformContactformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form  (ngSubmit)=\"onSubmit(contactFrm)\"  [formGroup]=\"contactFrm\">\n  <h2>{{data.modalTitle}}</h2>\n  \n  <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.name\">\n        {{ formErrors.name }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">\n      <mat-error *ngIf=\"formErrors.email\">\n        {{ formErrors.email }}\n      </mat-error>\n    </mat-form-field>\n  \n  </div>\n  <p>\n      <mat-radio-group class=\"contact-radio-group\" formControlName=\"gender\" >\n        <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let gndr of genders\" [value]=\"gndr.id\">\n          {{ gndr.name }}\n        </mat-radio-button>\n      </mat-radio-group>\n      <mat-error *ngIf=\"formErrors.gender\">\n        {{ formErrors.gender }}\n      </mat-error>\n  </p>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a birthday\" formControlName=\"birth\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    \n    <mat-error *ngIf=\"formErrors.birth \">\n      {{ formErrors.birth }}\n    </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-select placeholder=\"Select a Technology\" formControlName=\"techno\">\n        <mat-option>-- None --</mat-option>\n        <mat-option *ngFor=\"let techno  of technologies\" [value]=\"techno\">\n          {{ techno }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"formErrors.techno \">\n        {{ formErrors.techno }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <textarea matInput placeholder=\"Message...\" formControlName=\"message\"></textarea>\n      <mat-error *ngIf=\"formErrors.message \">\n        {{ formErrors.message }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n  \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contactFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n  \n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactlist/contactlist.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactlist/contactlist.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactlistContactlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner\" *ngIf=\"loadingState; else contactlist\">\n<mat-spinner></mat-spinner>\n</div>\n<ng-template class=\"contactlist\" #contactlist>\n  <h2 style=\"text-align: center;\">Contact List</h2>\n  <div class=\"contactlist-container mat-elevation-z8\">\n    <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addContact()\">Create</button></div>\n    <table mat-table #table [dataSource]=\"dataSource\">\n\n      <!-- Id Column -->\n      <!-- <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> Id </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container> -->\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- Email Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n\n      <!-- Gender Column -->\n      <ng-container matColumnDef=\"gender\">\n        <th mat-header-cell *matHeaderCellDef> Gender </th>\n        <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>\n      </ng-container>\n\n      <!-- Birth Column -->\n      <ng-container matColumnDef=\"birth\">\n        <th mat-header-cell *matHeaderCellDef> Birthday </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.birth | date: 'MM-dd-yyyy' }} </td>\n      </ng-container>\n\n      <!-- Technology Column -->\n      <ng-container matColumnDef=\"techno\">\n        <th mat-header-cell *matHeaderCellDef> Technology </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.techno}} </td>\n      </ng-container>\n\n      <!-- Message Column -->\n      <ng-container matColumnDef=\"message\">\n        <th mat-header-cell *matHeaderCellDef> Message </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editContact(element.id)\">Edit</button>\n          <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteContact(element.id)\">Delete</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Contact-App';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.material.module.ts":
  /*!****************************************!*\
    !*** ./src/app/app.material.module.ts ***!
    \****************************************/

  /*! exports provided: AppMaterialModule */

  /***/
  function srcAppAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
      return AppMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppMaterialModule = function AppMaterialModule() {
      _classCallCheck(this, AppMaterialModule);
    };

    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]]
    })], AppMaterialModule);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.material.module */
    "./src/app/app.material.module.ts");
    /* harmony import */


    var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contactform/contactform.component */
    "./src/app/contactform/contactform.component.ts");
    /* harmony import */


    var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./contactlist/contactlist.component */
    "./src/app/contactlist/contactlist.component.ts");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/contact.service */
    "./src/app/services/contact.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_10__["ContactformComponent"], _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_11__["ContactlistComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"]],
      providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: Routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Routing", function () {
      return Routing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contactlist/contactlist.component */
    "./src/app/contactlist/contactlist.component.ts");
    /* harmony import */


    var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactform/contactform.component */
    "./src/app/contactform/contactform.component.ts");

    var appRoutes = [{
      path: '',
      pathMatch: 'full',
      component: _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_2__["ContactlistComponent"]
    }, {
      path: 'contactform',
      component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"]
    }];

    var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/contactform/contactform.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/contactform/contactform.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactformContactformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Rmb3JtL2NvbnRhY3Rmb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contactform/contactform.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/contactform/contactform.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactformComponent */

  /***/
  function srcAppContactformContactformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactformComponent", function () {
      return ContactformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/DBOperation */
    "./src/app/shared/DBOperation.ts");
    /* harmony import */


    var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/Global */
    "./src/app/shared/Global.ts");

    var ContactformComponent =
    /*#__PURE__*/
    function () {
      function ContactformComponent(data, fb, _contactService, dialogRef) {
        _classCallCheck(this, ContactformComponent);

        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
        this.indLoading = false; // contact: IContact;

        this.genders = [];
        this.technologies = []; // form errors model
        // tslint:disable-next-line:member-ordering

        this.formErrors = {
          'name': '',
          'email': '',
          'gender': '',
          'birth': '',
          'techno': '',
          'message': ''
        }; // custom valdiation messages
        // tslint:disable-next-line:member-ordering

        this.validationMessages = {
          'name': {
            'maxlength': 'Name cannot be more than 50 characters long.',
            'required': 'Name is required.'
          },
          'email': {
            'email': 'Invalid email format.',
            'required': 'Email is required.'
          },
          'gender': {
            'required': 'Gender is required.'
          },
          'techno': {
            'required': 'Technology is required.'
          },
          'birth': {
            'required': 'Birthday is required.'
          },
          'message': {
            'required': 'message is required.'
          }
        };
      }

      _createClass(ContactformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // built contact form
          this.contactFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            techno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.genders = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].genders;
          this.technologies = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].technologies; // subscribe on value changed event of form to show validation message

          this.contactFrm.valueChanges.subscribe(function (data) {
            return _this.onValueChanged(data);
          });
          this.onValueChanged();

          if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.contactFrm.reset();
          } else {
            this.contactFrm.setValue(this.data.contact);
          }

          this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
        } // form value change event

      }, {
        key: "onValueChanged",
        value: function onValueChanged(data) {
          if (!this.contactFrm) {
            return;
          }

          var form = this.contactFrm; // tslint:disable-next-line:forin

          for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field); // setup custom validation message to form

            if (control && control.dirty && !control.valid) {
              var messages = this.validationMessages[field]; // tslint:disable-next-line:forin

              for (var key in control.errors) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formData) {
          var _this2 = this;

          var contactData = this.mapDateData(formData.value);

          switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
              //this._contactService.addContact(Global.BASE_USER_ENDPOINT + 'addContact', contactData).subscribe(
              this._contactService.addContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT, contactData).subscribe(function (data) {
                // Success
                if (data.message) {
                  _this2.dialogRef.close('success');
                } else {
                  _this2.dialogRef.close('error');
                }
              }, function (error) {
                _this2.dialogRef.close('error');
              });

              break;

            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
              //this._contactService.updateContact(Global.BASE_USER_ENDPOINT + 'updateContact', contactData.id, contactData).subscribe(
              this._contactService.updateContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT, contactData.id, contactData).subscribe(function (data) {
                // Success
                if (data.message) {
                  _this2.dialogRef.close('success');
                } else {
                  _this2.dialogRef.close('error');
                }
              }, function (error) {
                _this2.dialogRef.close('error');
              });

              break;

            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
              //this._contactService.deleteContact(Global.BASE_USER_ENDPOINT + 'deleteContact', contactData.id).subscribe(
              this._contactService.deleteContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT, contactData.id).subscribe(function (data) {
                // Success
                if (data.message) {
                  _this2.dialogRef.close('success');
                } else {
                  _this2.dialogRef.close('error');
                }
              }, function (error) {
                _this2.dialogRef.close('error');
              });

              break;
          }
        }
      }, {
        key: "SetControlsState",
        value: function SetControlsState(isEnable) {
          isEnable ? this.contactFrm.enable() : this.contactFrm.disable();
        }
      }, {
        key: "mapDateData",
        value: function mapDateData(contact) {
          contact.birth = new Date(contact.birth).toISOString();
          return contact;
        }
      }]);

      return ContactformComponent;
    }();

    ContactformComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }];
    };

    ContactformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactform/contactform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactform.component.css */
      "./src/app/contactform/contactform.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], ContactformComponent);
    /***/
  },

  /***/
  "./src/app/contactlist/contactlist.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/contactlist/contactlist.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactlistContactlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .contactlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n  top: 45%;\r\n  left: 47%;\r\n  position: fixed;\r\n}\r\n\r\n.contactlist-container, #paginator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  max-width: 1200px;\r\n  max-height: 700px;\r\n  overflow: auto;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGxpc3QvY29udGFjdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0bGlzdC9jb250YWN0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhY3RsaXN0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG5cclxuLnNwaW5uZXJ7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogNDclO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uY29udGFjdGxpc3QtY29udGFpbmVyLCAjcGFnaW5hdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/contactlist/contactlist.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/contactlist/contactlist.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactlistComponent */

  /***/
  function srcAppContactlistContactlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactlistComponent", function () {
      return ContactlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../contactform/contactform.component */
    "./src/app/contactform/contactform.component.ts");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/DBOperation */
    "./src/app/shared/DBOperation.ts");
    /* harmony import */


    var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/Global */
    "./src/app/shared/Global.ts");

    var ContactlistComponent =
    /*#__PURE__*/
    function () {
      function ContactlistComponent(snackBar, _contactService, dialog) {
        _classCallCheck(this, ContactlistComponent);

        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog; // set columns that will need to show in listing table

        this.displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action']; // setting up datasource for material table

        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(ContactlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadingState = true;
          this.loadContacts();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this3 = this;

          var dialogRef = this.dialog.open(_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"], {
            width: '500px',
            data: {
              dbops: this.dbops,
              modalTitle: this.modalTitle,
              modalBtnTitle: this.modalBtnTitle,
              contact: this.contact
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');

            if (result === 'success') {
              _this3.loadingState = true;

              _this3.loadContacts();

              switch (_this3.dbops) {
                case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                  _this3.showMessage('Data successfully added.');

                  break;

                case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                  _this3.showMessage('Data successfully updated.');

                  break;

                case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                  _this3.showMessage('Data successfully deleted.');

                  break;
              }
            } else if (result === 'error') {
              _this3.showMessage('There is some issue in saving records, please contact to system administrator!');
            } else {// this.showMessage('Please try again, something went wrong');
            }
          });
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          var _this4 = this;

          //this._contactService.getAllContact(Global.BASE_USER_ENDPOINT + 'getAllContact')
          this._contactService.getAllContact(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT).subscribe(function (contacts) {
            _this4.loadingState = false;
            _this4.dataSource.data = contacts;
          });
        }
      }, {
        key: "getGender",
        value: function getGender(gender) {
          return _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].genders.filter(function (ele) {
            return ele.id === gender;
          }).map(function (ele) {
            return ele.name;
          })[0];
        }
      }, {
        key: "addContact",
        value: function addContact() {
          this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create;
          this.modalTitle = 'Add New Contact';
          this.modalBtnTitle = 'Add';
          this.openDialog();
        }
      }, {
        key: "editContact",
        value: function editContact(id) {
          this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update;
          this.modalTitle = 'Edit Contact';
          this.modalBtnTitle = 'Update';
          this.contact = this.dataSource.data.filter(function (x) {
            return x.id === id;
          })[0];
          this.openDialog();
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(id) {
          this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete;
          this.modalTitle = 'Confirm to Delete ?';
          this.modalBtnTitle = 'Delete';
          this.contact = this.dataSource.data.filter(function (x) {
            return x.id === id;
          })[0];
          this.openDialog();
        }
      }, {
        key: "showMessage",
        value: function showMessage(msg) {
          this.snackBar.open(msg, '', {
            duration: 3000
          });
        }
      }]);

      return ContactlistComponent;
    }();

    ContactlistComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    ContactlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactlist/contactlist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactlist.component.css */
      "./src/app/contactlist/contactlist.component.css")).default]
    })], ContactlistComponent);
    /***/
  },

  /***/
  "./src/app/services/contact.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/contact.service.ts ***!
    \*********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
      } // get all contact data


      _createClass(ContactService, [{
        key: "getAllContact",
        value: function getAllContact(url) {
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } // insert new contact details

      }, {
        key: "addContact",
        value: function addContact(url, contact) {
          return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } // update contact details

      }, {
        key: "updateContact",
        value: function updateContact(url, id, contact) {
          //const newurl = `${url}?id=${id}`;
          var newurl = "".concat(url).concat(id);
          return this.http.put(newurl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } // delete contact information

      }, {
        key: "deleteContact",
        value: function deleteContact(url, id) {
          //const newurl = `${url}?id=${id}`; // DELETE api/contact?id=42
          var newurl = "".concat(url).concat(id); // DELETE api/contact/42

          return this.http.delete(newurl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } // custom handler

      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }]);

      return ContactService;
    }();

    ContactService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ContactService);
    /***/
  },

  /***/
  "./src/app/shared/DBOperation.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/DBOperation.ts ***!
    \***************************************/

  /*! exports provided: DBOperation */

  /***/
  function srcAppSharedDBOperationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DBOperation", function () {
      return DBOperation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DBOperation;

    (function (DBOperation) {
      DBOperation[DBOperation["create"] = 1] = "create";
      DBOperation[DBOperation["update"] = 2] = "update";
      DBOperation[DBOperation["delete"] = 3] = "delete";
    })(DBOperation || (DBOperation = {}));
    /***/

  },

  /***/
  "./src/app/shared/Global.ts":
  /*!**********************************!*\
    !*** ./src/app/shared/Global.ts ***!
    \**********************************/

  /*! exports provided: Global */

  /***/
  function srcAppSharedGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Global", function () {
      return Global;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Global = function Global() {
      _classCallCheck(this, Global);
    };

    Global.BASE_USER_ENDPOINT = 'api/contact/';
    Global.genders = [{
      name: 'Male',
      id: 0
    }, {
      name: 'Female',
      id: 1
    }];
    Global.technologies = ['JavaScript', 'SharePoint', 'C#'];
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
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
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
    /*! C:\Users\humayoun\Desktop\contact-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map