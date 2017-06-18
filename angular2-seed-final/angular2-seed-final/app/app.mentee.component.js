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
const router_1 = require("@angular/router");
const app_service_category_1 = require("./app.service.category");
const app_service_addMentor_1 = require("./app.service.addMentor");
let CreateMenteeComponent = class CreateMenteeComponent {
    constructor(_route, _router, _category, _mentoradd) {
        this._route = _route;
        this._router = _router;
        this._category = _category;
        this._mentoradd = _mentoradd;
        this.subscription = this._category.getCategories().subscribe((result) => {
            this.categorylist = result;
        });
    }
    ngOnInit() {
        this.user = this._route.snapshot.params["username"];
    }
    toDateTime(date) {
        var str = '';
        var year, month, day, hour, min;
        year = date.getUTCFullYear();
        month = date.getUTCMonth() + 1;
        month = month < 10 ? '0' + month : month;
        day = date.getUTCDate();
        day = day < 10 ? '0' + day : day;
        hour = date.getUTCHours();
        hour = hour < 10 ? '0' + hour : hour;
        min = date.getUTCMinutes();
        min = min < 10 ? '0' + min : min;
        str += year + '-' + month + '-' + day;
        str += ' ' + hour + ':' + min;
        return str;
    }
    fRegisterMentor() {
        var d = new Date(this.SelectedSchedule);
        console.log(d);
        this.subscribeForMentors = this._mentoradd.AddMentor(this.SelectedValue, this.toDateTime(d), this.user).subscribe((result) => {
            //  console.log(this.mentorlist[0]);
        });
        this._router.navigate(['mentor', this.user]);
    }
};
CreateMenteeComponent = __decorate([
    core_1.Component({
        selector: 'mentee-form',
        templateUrl: 'app/mentee-form.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
        app_service_category_1.csCategoryService, app_service_addMentor_1.AddmentorsService])
], CreateMenteeComponent);
exports.CreateMenteeComponent = CreateMenteeComponent;
//# sourceMappingURL=app.mentee.component.js.map