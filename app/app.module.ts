// Imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

// Declarations
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { WeatherComponent }  from './weather/weather.component';
import { WeatherService }  from './weather/weather.service';

// Decorator
@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             routing,
             AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAW4012BUpiVh9ciN2CLR2Tb1G7OmXLFQE'
             })
            ],
  declarations: [ AppComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WeatherService ]
})
export class AppModule { }
