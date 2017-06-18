
import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {csCategoryService} from './app.service.category';
import {AddmentorsService} from './app.service.addMentor';

@Component({
    selector: 'mentee-form',
    templateUrl: 'app/mentee-form.html',
   
})

export class CreateMenteeComponent implements OnInit{

  categorylist:string[];
    subscription:any;
    subscribeForMentors:any;
    SelectedValue:any;
    SelectedSchedule:any;
    user:string;
    constructor(private _route:ActivatedRoute,private _router:Router,
     private _category:csCategoryService,private _mentoradd:AddmentorsService)
    {
        this.subscription = this._category.getCategories().subscribe(
             (result)=>{
                                
                   this.categorylist= result;
                    
                }

       
         );
    }
    ngOnInit()
    {
        this.user =  this._route.snapshot.params["username"] ;
    }
    toDateTime(date)
     {
        var str = '';
        var year, month, day, hour, min;
        year = date.getUTCFullYear();
        month = date.getUTCMonth() + 1;
        month = month < 10 ? '0' + month : month;
        day = date.getUTCDate();
        day = day < 10 ? '0' + day : day;
        hour = date.getUTCHours();
        hour = hour < 10 ? '0' + hour : hour;
        min = date.getUTCMinutes();
        min = min < 10 ? '0' + min : min;
        
        str += year + '-' + month + '-' + day;
        str += ' ' + hour + ':' + min;
        return str;
    }
    fRegisterMentor()
    {
        var d= new Date(this.SelectedSchedule);
        console.log(d);
       
             this.subscribeForMentors = this._mentoradd.AddMentor(this.SelectedValue,this.toDateTime(d),this.user).subscribe(
             (result)=>{
                                
                  
                  //  console.log(this.mentorlist[0]);
                }

       
         );
          this._router.navigate(['mentor',this.user ]);
    }
  
}