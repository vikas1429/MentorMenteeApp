import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'mentor-form',
    templateUrl: 'app/mentor-form.html'
})

export class CreateMentorComponent implements OnInit{

  
    constructor(private _router:Router)
    {
       
    }
    ngOnInit()
    {
         
    }
    CreateMentor()
    {
        
        this._router.navigate(['creatementor','test'
         
        ]);
    }
}