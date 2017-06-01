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
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,routing ],
  declarations: [ AppComponent,SignUpFormComponent,MentorComponent,CreateMentorComponent,CreateMenteeComponent ],
  bootstrap:    [ AppComponent ],
  providers:[MessageService]
})
export class AppModule { }
