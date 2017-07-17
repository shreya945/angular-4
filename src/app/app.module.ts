import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FilterPipe} from './pipes/filter.pipe';

import {MyService} from './services/my.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
