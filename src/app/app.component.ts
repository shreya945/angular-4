import { Component } from '@angular/core';

import {MyService} from './services/my.service';
import {FilterPipe} from './pipes/filter.pipe';


@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  providers: [MyService]
})
export class AppComponent {
	private _http;
	data:string;
	result:string;
	jsonData;
	
    constructor(private _httpService: MyService){
        this._http = _httpService;
    }
    
    employeeData(){
        
        this._httpService.getInfo()
         .subscribe(data => { 
                            this.jsonData = JSON.stringify(data)
                            this.result=data;
                        },
                        error => console.log(error)
         );
    }
}