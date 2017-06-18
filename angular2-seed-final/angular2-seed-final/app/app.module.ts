import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SignUpFormComponent }   from './signup-form.component';
import {MessageService} from './message.service';
import {FormGroup,FormControl,FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.Routing';
import {MentorComponent} from './app.MentorMentee.component';
import {CreateMentorComponent} from './app.mentor.component';
import {CreateMenteeComponent} from './app.mentee.component';
import {csCategoryService} from './app.service.category';
import {Http,Response,HttpModule} from '@angular/http';
import {SearchmentorsService} from './app.service.getMentors';
import {AddmentorsService} from './app.service.addMentor';
import {AddmentorToMenteeService} from './app.service.addmentortomentee';
import {Dashboarddetails}from './app.dadhboardsetails.service';
import {RegisterComponent} from './app.register.component'; 
import {userregistration} from './app.registeruser.service';
import {mentordetail} from './app.mentormentee';
import {LinkedinComponent} from './app.linkedinConnect.component';


let providers = {
   
    "linkedin": {
      "clientId": "860l38mgbq37qs"
    }
  };

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,routing ,HttpModule],
  declarations: [ AppComponent,SignUpFormComponent,MentorComponent,CreateMentorComponent,
                CreateMenteeComponent,RegisterComponent,LinkedinComponent],
  bootstrap:    [ AppComponent ],
  providers:    [MessageService,csCategoryService,SearchmentorsService,
                 AddmentorsService,AddmentorToMenteeService,
                 AddmentorToMenteeService,Dashboarddetails,userregistration,mentordetail
                ]
})
export class AppModule { }


