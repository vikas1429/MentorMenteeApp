
import {Component,Injectable} from '@angular/core';
import {Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {mentordetail} from './app.mentormentee';

@Injectable()

export class SearchmentorsService
{
    constructor(private _http:Http,private _mentordetail :mentordetail)
    {

    }
  searchMentors(cateogry:string)
  {
      let params:URLSearchParams = new URLSearchParams();
      params.set('Category',cateogry);
     let connection:string = this._mentordetail.connectionstring() +'GetMentors'
     return this._http.get(connection,{search:params})
                         .map(resp=>resp.json());    

                         //'http://mentormenteewebapi.azurewebsites.net/api/values/GetMentors'                                           
  }
}