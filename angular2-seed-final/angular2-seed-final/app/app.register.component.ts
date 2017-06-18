import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {userregistration} from './app.registeruser.service';

@Component({
    selector: 'register-form',
    templateUrl: 'app/register-form.component.html'
})
export class RegisterComponent implements OnInit
 {
    SignUp: FormGroup;
    subscribe:any;
    constructor(private _router:Router,private _userregistration:userregistration)
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
    onRegister()
    {     this.subscribe = this._userregistration.RegisterUser
         (this.SignUp.controls["username"].value,
            this.SignUp.controls["password"].value ).subscribe(
             (result)=>{                                          
                    alert("user registered successfully");
                }                      
        );
        this._router.navigate(['']);
    }
}