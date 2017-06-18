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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const app_registeruser_service_1 = require("./app.registeruser.service");
let RegisterComponent = class RegisterComponent {
    constructor(_router, _userregistration) {
        this._router = _router;
        this._userregistration = _userregistration;
    }
    ngOnInit() {
        this.SignUp = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    onRegister() {
        this.subscribe = this._userregistration.RegisterUser(this.SignUp.controls["username"].value, this.SignUp.controls["password"].value).subscribe((result) => {
            alert("user registered successfully");
        });
        this._router.navigate(['']);
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-form',
        templateUrl: 'app/register-form.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, app_registeruser_service_1.userregistration])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=app.register.component.js.map