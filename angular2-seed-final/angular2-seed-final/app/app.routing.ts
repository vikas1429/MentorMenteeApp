import {Router,RouterModule} from '@angular/router';
import {SignUpFormComponent} from './signup-form.component';
import {MentorComponent} from './app.MentorMentee.component';
import {CreateMentorComponent} from './app.mentor.component';
import {CreateMenteeComponent} from './app.mentee.component'

export const routing = RouterModule.forRoot([
{path:'',component:SignUpFormComponent},
{path:'mentor/:username',component:MentorComponent},
{path:'creatementor/:username',component:CreateMentorComponent},
{path:'creatementee/:username',component:CreateMenteeComponent}
]);