
import {Component,Injectable} from '@angular/core';
import {Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {mentordetail} from './app.mentormentee';

@Injectable()

export class Dashboarddetails
{
    constructor(private _http:Http,private _mentordetail:mentordetail)
    {

    }
  getmentorlist(Menteename:string)
  {
      let params:URLSearchParams = new URLSearchParams();
      params.append('mentee',Menteename);
     let connection:string = this._mentordetail.connectionstring() + 'GetAssociatedMentors';
   return this._http.get(connection,
                         
                          {search:params}
                          )
                         .map(resp=>resp.json());                                               
  }
   getmenteelist(Mentorname:string)
  {
      let params:URLSearchParams = new URLSearchParams();
      params.append('mentor',Mentorname);
     let connection:string = this._mentordetail.connectionstring() + 'GetAssociatedMentees';
   return this._http.get(connection,
                         
                          {search:params}
                          )
                         .map(resp=>resp.json());                                               
  }
  getmentorschedule(Mentorname:string) {
      let params:URLSearchParams = new URLSearchParams();
      params.append('username',Mentorname);
      let connection:string = this._mentordetail.connectionstring() + 'GetUserSchedule';
   return this._http.get(connection,
                         
                          {search:params}
                          )
                         .map(resp=>resp.json());                                               
  }
}