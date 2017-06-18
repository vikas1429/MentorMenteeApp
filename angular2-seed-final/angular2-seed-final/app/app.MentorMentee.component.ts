import { Component } from '@angular/core';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Dashboarddetails}from './app.dadhboardsetails.service';
import {mentordetail} from './app.mentormentee';

@Component({
  selector: 'mentor',
  templateUrl: 'app/mentor-mentee-dashboard.html',
  styles:[`
    .tablecontainer{border:solid;border-collapse: collapse;}
    `
  ]
  
})
export class MentorComponent { 
  user:string;
   mentorlist:mentordetail[];
   menteelist:mentordetail[] ;
   mentorschedlist:mentordetail[] ;
   DashBoard: FormGroup;
   subscribe:any;
  constructor(private _route:ActivatedRoute, private _router:Router,
              private _Dashboarddetails:Dashboarddetails)
  {
    this.user = this._route.snapshot.params["username"];

   //get associated mentors.
   this.subscribe = this._Dashboarddetails.getmentorlist( this.user).subscribe(
             (result)=>{
                                
                   this.mentorlist= result;
                    console.log(this.mentorlist[0].name);
                }
         );
    //get associated mentees
    this.subscribe = this._Dashboarddetails.getmenteelist( this.user).subscribe(
             (result)=>{
                                
                   this.menteelist= result;
                    console.log(this.menteelist[0].name);
                }
         );
    //get mentors schedule
     this.subscribe = this._Dashboarddetails.getmentorschedule( this.user).subscribe(
             (result)=>{
                                
                   this.mentorschedlist= result;
                   
                }
         );
  }
  ngOnInit() {
   
  
}
 Addementor()
  {
     this._router.navigate(['creatementor',this.user        
        ]);
  }
   Creatementor()
  {
     this._router.navigate(['creatementee',this.user       
        ]);
  }
}
