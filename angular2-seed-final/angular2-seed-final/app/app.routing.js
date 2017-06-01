"use strict";
var router_1 = require("@angular/router");
var signup_form_component_1 = require("./signup-form.component");
var app_MentorMentee_component_1 = require("./app.MentorMentee.component");
var app_mentor_component_1 = require("./app.mentor.component");
var app_mentee_component_1 = require("./app.mentee.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: signup_form_component_1.SignUpFormComponent },
    { path: 'mentor/:username', component: app_MentorMentee_component_1.MentorComponent },
    { path: 'creatementor/:username', component: app_mentor_component_1.CreateMentorComponent },
    { path: 'creatementee/:username', component: app_mentee_component_1.CreateMenteeComponent }
]);
//# sourceMappingURL=app.Routing.js.map