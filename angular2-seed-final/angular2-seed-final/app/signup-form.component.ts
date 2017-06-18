import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {userregistration} from './app.registeruser.service';
import {LinkedinComponent} from './app.linkedinConnect.component';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent implements OnInit
 {
    SignUp: FormGroup;
    subscribe:any;
    IsuserRegistered:Boolean;
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
    onSignUp()
    {
       // this._location.go('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860l38mgbq37qs&client_secret=uRJWOyIsAzXQqS1n&redirect_uri=http://localhost:3000');
        window.location.href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860l38mgbq37qs&client_secret=uRJWOyIsAzXQqS1n&redirect_uri=http://localhost:3000/linkedconnect';
       
       /* alert("test");
        this._auth.login("Linkedin").subscribe(
            (result)=>{
                alert("test2")
               console.log(result);
            },
            
            (error))=>{
                 alert("test2");
               console.log(result);
            }
        );*/
      /*   this.subscribe = this._userregistration.Checkuser
         (this.SignUp.controls["username"].value,
            this.SignUp.controls["password"].value ).subscribe(
             (result)=>{                             
                 this. IsuserRegistered = result;
                  if(this.IsuserRegistered)
                        this._router.navigate(['mentor',this.SignUp.controls["username"].value]);
                    else
                    alert("user name or password incorrect");
                }                      
        );*/


        
       
    }
    
}