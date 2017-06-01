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
var router_1 = require("@angular/router");
var CreateMentorComponent = (function () {
    function CreateMentorComponent(_router) {
        this._router = _router;
    }
    CreateMentorComponent.prototype.ngOnInit = function () {
    };
    CreateMentorComponent.prototype.CreateMentor = function () {
        this._router.navigate(['creatementor', 'test'
        ]);
    };
    return CreateMentorComponent;
}());
CreateMentorComponent = __decorate([
    core_1.Component({
        selector: 'mentor-form',
        templateUrl: 'app/mentor-form.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CreateMentorComponent);
exports.CreateMentorComponent = CreateMentorComponent;
//# sourceMappingURL=app.mentor.component.js.map