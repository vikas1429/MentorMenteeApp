"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const app_registeruser_service_1 = require("./app.registeruser.service");
let SignUpFormComponent = class SignUpFormComponent {
    constructor(_router, _userregistration) {
        this._router = _router;
        this._userregistration = _userregistration;
    }
    ngOnInit() {
        this.SignUp = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    onSignUp() {
        // this._location.go('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860l38mgbq37qs&client_secret=uRJWOyIsAzXQqS1n&redirect_uri=http://localhost:3000');
        window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860l38mgbq37qs&client_secret=uRJWOyIsAzXQqS1n&redirect_uri=http://localhost:3000/linkedconnect';
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
};
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/signup-form.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, app_registeruser_service_1.userregistration])
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map