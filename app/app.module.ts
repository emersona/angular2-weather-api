// Imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Declarations
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { WeatherComponent }  from './weather/weather.component';
import { WeatherService }  from './weather/weather.service';

// Decorator
@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WeatherService ]
})
export class AppModule { }
