import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
    CurrDate: VarDate;
    constructor(private _router:Router)
    {
       this.show = false;
    }
    ngOnInit()
    {
         this.CurrDate = Date.now();
    }
    fgetMentors()
    {
       this.show = true;
    }
  
}