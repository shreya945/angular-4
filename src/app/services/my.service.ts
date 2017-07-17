import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http} from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class MyService{
	private http;
    endpoint_url:String = "./assets/json/data.json";
    constructor(http: Http){
        this.http = http;
    }
    getInfo (){
        return this.http.get(this.endpoint_url).map(res => res.json());
    }
}