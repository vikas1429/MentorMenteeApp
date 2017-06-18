import {Router,RouterModule} from '@angular/router';
import {SignUpFormComponent} from './signup-form.component';
import {MentorComponent} from './app.MentorMentee.component';
import {CreateMentorComponent} from './app.mentor.component';
import {CreateMenteeComponent} from './app.mentee.component';
import {RegisterComponent} from './app.register.component'; 
import {LinkedinComponent} from './app.linkedinConnect.component';

export const routing = RouterModule.forRoot([
{path:'',component:SignUpFormComponent},
{path:'register',component:RegisterComponent},
{path:'mentor/:username',component:MentorComponent},
{path:'creatementor/:username',component:CreateMentorComponent},
{path:'creatementee/:username',component:CreateMenteeComponent},
{path:'linkedconnect',component:LinkedinComponent}
]);