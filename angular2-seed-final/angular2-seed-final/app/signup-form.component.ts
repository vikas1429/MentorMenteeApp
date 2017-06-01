import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent implements OnInit
 {
    SignUp: FormGroup;
    constructor(private _router:Router)
    {
       
    }
    ngOnInit()
    {
         this.SignUp = new FormGroup(
                {
                    username : new FormControl(''),
                    password:  new FormControl('')
                }
        );
    }
    onSignUp()
    {
        
        this._router.navigate(['mentor',this.SignUp.controls['username'].value
         
        ]);
    }
}