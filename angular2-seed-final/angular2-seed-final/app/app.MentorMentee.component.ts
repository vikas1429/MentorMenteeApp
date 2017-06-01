import { Component } from '@angular/core';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'mentor',
  templateUrl: 'app/mentor-mentee-dashboard.html',
  styles:[`
    .tablecontainer{border:solid;border-collapse: collapse;}
    `
  ]
  
})
export class MentorComponent { 
  user:string;
   DashBoard: FormGroup;
  constructor(private _route:ActivatedRoute, private _router:Router)
  {

  }
  ngOnInit() {
   
   /* this.DashBoard = new FormGroup(
                {
                    creatementor : new FormControl('creatementee',Validators.required),
                    creatementee:  new FormControl('creatementee',Validators.required)
                }
        );*/
  this.user = this._route.snapshot.params["username"];
   console.log( this._route.snapshot.params["username"]);
}
 creatementor()
  {
     this._router.navigate(['creatementor',this.user
         
        ]);
  }
   creatementee()
  {
     this._router.navigate(['creatementee',this.user
         
        ]);
  }
}
