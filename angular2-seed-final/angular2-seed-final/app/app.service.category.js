"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
const app_mentormentee_1 = require("./app.mentormentee");
let csCategoryService = class csCategoryService {
    constructor(_http, _mentordetail) {
        this._http = _http;
        this._mentordetail = _mentordetail;
    }
    getCategories() {
        let connection = this._mentordetail.connectionstring() + 'GetCategory';
        return this._http.get(connection)
            .map(resp => resp.json());
    }
};
csCategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_mentormentee_1.mentordetail])
], csCategoryService);
exports.csCategoryService = csCategoryService;
//# sourceMappingURL=app.service.category.js.map