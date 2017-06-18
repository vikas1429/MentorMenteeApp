"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const signup_form_component_1 = require("./signup-form.component");
const message_service_1 = require("./message.service");
const forms_1 = require("@angular/forms");
const app_Routing_1 = require("./app.Routing");
const app_MentorMentee_component_1 = require("./app.MentorMentee.component");
const app_mentor_component_1 = require("./app.mentor.component");
const app_mentee_component_1 = require("./app.mentee.component");
const app_service_category_1 = require("./app.service.category");
const http_1 = require("@angular/http");
const app_service_getMentors_1 = require("./app.service.getMentors");
const app_service_addMentor_1 = require("./app.service.addMentor");
const app_service_addmentortomentee_1 = require("./app.service.addmentortomentee");
const app_dadhboardsetails_service_1 = require("./app.dadhboardsetails.service");
const app_register_component_1 = require("./app.register.component");
const app_registeruser_service_1 = require("./app.registeruser.service");
const app_mentormentee_1 = require("./app.mentormentee");
const app_linkedinConnect_component_1 = require("./app.linkedinConnect.component");
let providers = {
    "linkedin": {
        "clientId": "860l38mgbq37qs"
    }
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_Routing_1.routing, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, signup_form_component_1.SignUpFormComponent, app_MentorMentee_component_1.MentorComponent, app_mentor_component_1.CreateMentorComponent,
            app_mentee_component_1.CreateMenteeComponent, app_register_component_1.RegisterComponent, app_linkedinConnect_component_1.LinkedinComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [message_service_1.MessageService, app_service_category_1.csCategoryService, app_service_getMentors_1.SearchmentorsService,
            app_service_addMentor_1.AddmentorsService, app_service_addmentortomentee_1.AddmentorToMenteeService,
            app_service_addmentortomentee_1.AddmentorToMenteeService, app_dadhboardsetails_service_1.Dashboarddetails, app_registeruser_service_1.userregistration, app_mentormentee_1.mentordetail
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map