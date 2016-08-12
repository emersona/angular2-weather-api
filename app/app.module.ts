import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { WeatherComponent }  from './weather.component';

import { HttpModule }    from '@angular/http';

import { WeatherService }  from './weather.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WeatherService ]
})
export class AppModule { }
