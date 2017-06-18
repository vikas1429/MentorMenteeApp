
import {Component,Injectable} from '@angular/core';
import {Http,Response,URLSearchParams,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {mentordetail} from './app.mentormentee';

@Injectable()

export class userregistration
{
    
    constructor(private _http:Http,private _mentordetail :mentordetail)
    {
     
    }
  Checkuser(code:string)
  {
      let params:URLSearchParams = new URLSearchParams();
      let  headers:Headers = new Headers();
      headers.append('Authorization','Basic'); 
      params.append('code',code);
    
      let connection:string =  this._mentordetail.connectionstring()+ 'CheckUser'
   return this._http.get(connection,
                         
                          {search:params}
                          )
                         .map(resp=>resp.json());                                               
  }
  RegisterUser(username:string,pwd:string)
  {
      let params:URLSearchParams = new URLSearchParams();
      params.append('username',username);
       params.append('password',pwd);
       let connection:string =  this._mentordetail.connectionstring() + 'PostUser'
   return this._http.get(connection,
                         
                          {search:params}
                          )
                         .map(resp=>resp.json());                                               
  }

 Checkuser1(username:string,pwd:string)
  {
      let params:URLSearchParams = new URLSearchParams();
    params.append('response_type','code');
    params.append('client_id','860l38mgbq37qs');
    params.append('client_secret','uRJWOyIsAzXQqS1n');
    params.append('redirect_uri','http://localhost:3000');
      let connection:string =  this._mentordetail.connectionstring()+ 'CheckUser';
   return this._http.get('http://www.linkedin.com/oauth/v2/authorization',
                          
                          {search:params}
                          )
                         .map(resp=>resp.json()); 
  }                                              
 
}