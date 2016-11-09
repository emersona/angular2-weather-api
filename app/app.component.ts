import { Component }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from './weather/weather';
import { WeatherService }  from './weather/weather.service';
// import 'rxjs/rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <a routerLink="/weather">Weather</a>
          <router-outlet></router-outlet>
          <h2>New Router Technique</h2>
          <a [routerLink]="['/weather']">NEW WEATHER LINK</a>
        `
})

export class AppComponent {
  title = "Let's check out the weather";
  weather: Weather = {
              conditions: "conditions",
              current_observation: "Weather Data Observations"
            }

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    return this.weatherService.getWeather();
  }
}
