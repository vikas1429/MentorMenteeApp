
import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'mentor-form',
    templateUrl: 'app/mentee-form.html'
})

export class CreateMenteeComponent implements OnInit{

  
    constructor(private _router:Router)
    {
       
    }
    ngOnInit()
    {
         
    }
    CreateMentor()
    {
        
        this._router.navigate(['creatementee','test'
         
        ]);
    }
}