import { Component }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from './weather/weather';
import { WeatherService }  from './weather/weather.service';
// import 'rxjs/rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <a [routerLink]="['/weather']">Get Weather</a>
          <router-outlet></router-outlet>
        `
})

export class AppComponent {
  title = "Angular2 - Here We Go Again!";
  weather: Weather = {
              conditions: "conditions",
              current_observation: "Weather Data Observations"
            }

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    return this.weatherService.getWeather();
  }
}

