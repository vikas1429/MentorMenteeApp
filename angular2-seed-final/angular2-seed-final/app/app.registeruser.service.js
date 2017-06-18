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
let userregistration = class userregistration {
    constructor(_http, _mentordetail) {
        this._http = _http;
        this._mentordetail = _mentordetail;
    }
    Checkuser(code) {
        let params = new http_1.URLSearchParams();
        let headers = new http_1.Headers();
        headers.append('Authorization', 'Basic');
        params.append('code', code);
        let connection = this._mentordetail.connectionstring() + 'CheckUser';
        return this._http.get(connection, { search: params })
            .map(resp => resp.json());
    }
    RegisterUser(username, pwd) {
        let params = new http_1.URLSearchParams();
        params.append('username', username);
        params.append('password', pwd);
        let connection = this._mentordetail.connectionstring() + 'PostUser';
        return this._http.get(connection, { search: params })
            .map(resp => resp.json());
    }
    Checkuser1(username, pwd) {
        let params = new http_1.URLSearchParams();
        params.append('response_type', 'code');
        params.append('client_id', '860l38mgbq37qs');
        params.append('client_secret', 'uRJWOyIsAzXQqS1n');
        params.append('redirect_uri', 'http://localhost:3000');
        let connection = this._mentordetail.connectionstring() + 'CheckUser';
        return this._http.get('http://www.linkedin.com/oauth/v2/authorization', { search: params })
            .map(resp => resp.json());
    }
};
userregistration = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_mentormentee_1.mentordetail])
], userregistration);
exports.userregistration = userregistration;
//# sourceMappingURL=app.registeruser.service.js.map