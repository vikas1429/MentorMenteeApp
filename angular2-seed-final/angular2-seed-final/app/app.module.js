"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var signup_form_component_1 = require("./signup-form.component");
var message_service_1 = require("./message.service");
var forms_1 = require("@angular/forms");
var app_Routing_1 = require("./app.Routing");
var app_MentorMentee_component_1 = require("./app.MentorMentee.component");
var app_mentor_component_1 = require("./app.mentor.component");
var app_mentee_component_1 = require("./app.mentee.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_Routing_1.routing],
        declarations: [app_component_1.AppComponent, signup_form_component_1.SignUpFormComponent, app_MentorMentee_component_1.MentorComponent, app_mentor_component_1.CreateMentorComponent, app_mentee_component_1.CreateMenteeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [message_service_1.MessageService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map