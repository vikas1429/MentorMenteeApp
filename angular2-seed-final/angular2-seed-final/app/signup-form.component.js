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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var SignUpFormComponent = (function () {
    function SignUpFormComponent(_router) {
        this._router = _router;
    }
    SignUpFormComponent.prototype.ngOnInit = function () {
        this.SignUp = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    };
    SignUpFormComponent.prototype.onSignUp = function () {
        this._router.navigate(['mentor', this.SignUp.controls['username'].value
        ]);
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/signup-form.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map