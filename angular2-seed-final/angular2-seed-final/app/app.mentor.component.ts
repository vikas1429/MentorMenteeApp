import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {csCategoryService} from './app.service.category';
import {SearchmentorsService} from './app.service.getMentors';
import {AddmentorToMenteeService}from './app.service.addmentortomentee';
import {mentordetail} from './app.mentormentee';

@Component({
    selector: 'mentor-form',
    templateUrl: 'app/mentor-form.html',
     styles:[`
    .tablecontainer{border:solid;border-collapse: collapse;}
    `
  ]   
})


export class CreateMentorComponent implements OnInit{

    show:any;
    mentorlist:mentordetail[] ;
    categorylist:string[];
    subscription:any;
    subscribeMentors:any;
    SelectedValue:any;
    user:string;
   
  //  mentordetail[1] = {'rahul','C++','2017-06-23'};
    CurrDate: VarDate;
    subscribe:any
    constructor(private _route:ActivatedRoute,private _router:Router,
                private _category:csCategoryService,
                private _mentorsearch:SearchmentorsService,
                private _AddmentorToMentee:AddmentorToMenteeService)
    {
       this.show = false;

       this.subscription = this._category.getCategories().subscribe(
             (result)=>{
                                
                   this.categorylist= result;
                    console.log(this.categorylist);
                }

       
         );
    }
    ngOnInit()
    {
         this.CurrDate = Date.now();
        this.user =  this._route.snapshot.params["username"]

       
         
    }
    fgetMentors()
    {
       this.show = true;
       console.log(this.SelectedValue);
        this.subscribeMentors = this._mentorsearch.searchMentors(this.SelectedValue).subscribe(
             (result)=>{
                                
                   this.mentorlist= result;
                  //  console.log(this.mentorlist[0]);
                }

       
         );
    }
    faddMentor(i)
    {
       console.log(this.mentorlist[i]);
        this.subscribe = this._AddmentorToMentee.AddMentorToMentee(this.mentorlist[i].category,
                                         this.mentorlist[i].schedule,
                                         this.mentorlist[i].name,
                                        this.user ).subscribe(
             (result)=>{
                                
                  
                  alert("Mentor added")
                  this._router.navigate(['mentor',this.user ]);
                }

       
         );
    }
  
}
 