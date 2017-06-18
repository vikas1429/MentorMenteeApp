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
const app_service_getMentors_1 = require("./app.service.getMentors");
const app_service_addmentortomentee_1 = require("./app.service.addmentortomentee");
let CreateMentorComponent = class CreateMentorComponent {
    constructor(_route, _router, _category, _mentorsearch, _AddmentorToMentee) {
        this._route = _route;
        this._router = _router;
        this._category = _category;
        this._mentorsearch = _mentorsearch;
        this._AddmentorToMentee = _AddmentorToMentee;
        this.show = false;
        this.subscription = this._category.getCategories().subscribe((result) => {
            this.categorylist = result;
            console.log(this.categorylist);
        });
    }
    ngOnInit() {
        this.CurrDate = Date.now();
        this.user = this._route.snapshot.params["username"];
    }
    fgetMentors() {
        this.show = true;
        console.log(this.SelectedValue);
        this.subscribeMentors = this._mentorsearch.searchMentors(this.SelectedValue).subscribe((result) => {
            this.mentorlist = result;
            //  console.log(this.mentorlist[0]);
        });
    }
    faddMentor(i) {
        console.log(this.mentorlist[i]);
        this.subscribe = this._AddmentorToMentee.AddMentorToMentee(this.mentorlist[i].category, this.mentorlist[i].schedule, this.mentorlist[i].name, this.user).subscribe((result) => {
            alert("Mentor added");
            this._router.navigate(['mentor', this.user]);
        });
    }
};
CreateMentorComponent = __decorate([
    core_1.Component({
        selector: 'mentor-form',
        templateUrl: 'app/mentor-form.html',
        styles: [`
    .tablecontainer{border:solid;border-collapse: collapse;}
    `
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
        app_service_category_1.csCategoryService,
        app_service_getMentors_1.SearchmentorsService,
        app_service_addmentortomentee_1.AddmentorToMenteeService])
], CreateMentorComponent);
exports.CreateMentorComponent = CreateMentorComponent;
//# sourceMappingURL=app.mentor.component.js.map