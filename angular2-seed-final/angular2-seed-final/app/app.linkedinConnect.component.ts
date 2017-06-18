import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {userregistration} from './app.registeruser.service';

@Component({
    selector: 'linkedConnect',
    template: '<h1>loging in...</h1>'
})
export class LinkedinComponent implements OnInit
 {
   code:string;
   subscribe:any;
    constructor(private _router:Router,private _userregistration:userregistration,
     private _route : ActivatedRoute)
    {
       
    }
    ngOnInit()
    {
      //  alert("test1");
      this.code = this._route.snapshot.queryParams['code'];
       console.log(  this.code);
        this.subscribe = this._userregistration.Checkuser
         (this.code ).subscribe(
             (result)=>{                             
              //  alert("test");
              this._router.navigate(['mentor',result]);
                }                      
        );
    }
    onSignUp()
    {
       // this._location.go('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860l38mgbq37qs&client_secret=uRJWOyIsAzXQqS1n&redirect_uri=http://localhost:3000');
      //  window.location.href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860l38mgbq37qs&client_secret=uRJWOyIsAzXQqS1n&redirect_uri=http://localhost:3000';
       
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