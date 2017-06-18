
import {Component,Injectable} from '@angular/core';
import {Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {mentordetail} from './app.mentormentee';

@Injectable()

export class AddmentorsService
{
    constructor(private _http:Http,private _mentordetail :mentordetail)
    {

    }
  AddMentor(cateogry:string,Schedule:string,Mentorname:string)
  {
      let params:URLSearchParams = new URLSearchParams();
      params.append('Category',cateogry);
      params.append('Schedule',Schedule);
      params.append('Mentorname',Mentorname);
      let connection:string = this._mentordetail.connectionstring() +'PostMentors';
   return this._http.get(connection,
                         
                          {search:params}
                          )
                         .map(resp=>resp.json());                                               
  }
}