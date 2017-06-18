import {Component,Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of'
import {mentordetail} from './app.mentormentee';

@Injectable()

export class csCategoryService
{
    constructor(private _http:Http,private _mentordetail :mentordetail)
    {

    }
  getCategories()
  {
     let connection:string = this._mentordetail.connectionstring() +'GetCategory';
   return this._http.get(connection)
                         .map(resp=>resp.json());                                               
  }
}