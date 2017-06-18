"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const signup_form_component_1 = require("./signup-form.component");
const app_MentorMentee_component_1 = require("./app.MentorMentee.component");
const app_mentor_component_1 = require("./app.mentor.component");
const app_mentee_component_1 = require("./app.mentee.component");
const app_register_component_1 = require("./app.register.component");
const app_linkedinConnect_component_1 = require("./app.linkedinConnect.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: signup_form_component_1.SignUpFormComponent },
    { path: 'register', component: app_register_component_1.RegisterComponent },
    { path: 'mentor/:username', component: app_MentorMentee_component_1.MentorComponent },
    { path: 'creatementor/:username', component: app_mentor_component_1.CreateMentorComponent },
    { path: 'creatementee/:username', component: app_mentee_component_1.CreateMenteeComponent },
    { path: 'linkedconnect', component: app_linkedinConnect_component_1.LinkedinComponent }
]);
//# sourceMappingURL=app.Routing.js.map