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
const app_dadhboardsetails_service_1 = require("./app.dadhboardsetails.service");
let MentorComponent = class MentorComponent {
    constructor(_route, _router, _Dashboarddetails) {
        this._route = _route;
        this._router = _router;
        this._Dashboarddetails = _Dashboarddetails;
        this.user = this._route.snapshot.params["username"];
        //get associated mentors.
        this.subscribe = this._Dashboarddetails.getmentorlist(this.user).subscribe((result) => {
            this.mentorlist = result;
            console.log(this.mentorlist[0].name);
        });
        //get associated mentees
        this.subscribe = this._Dashboarddetails.getmenteelist(this.user).subscribe((result) => {
            this.menteelist = result;
            console.log(this.menteelist[0].name);
        });
        //get mentors schedule
        this.subscribe = this._Dashboarddetails.getmentorschedule(this.user).subscribe((result) => {
            this.mentorschedlist = result;
        });
    }
    ngOnInit() {
    }
    Addementor() {
        this._router.navigate(['creatementor', this.user
        ]);
    }
    Creatementor() {
        this._router.navigate(['creatementee', this.user
        ]);
    }
};
MentorComponent = __decorate([
    core_1.Component({
        selector: 'mentor',
        templateUrl: 'app/mentor-mentee-dashboard.html',
        styles: [`
    .tablecontainer{border:solid;border-collapse: collapse;}
    `
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
        app_dadhboardsetails_service_1.Dashboarddetails])
], MentorComponent);
exports.MentorComponent = MentorComponent;
//# sourceMappingURL=app.MentorMentee.component.js.map