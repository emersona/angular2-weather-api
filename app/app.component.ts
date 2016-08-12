import { Component }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from './weather';
import { WeatherService }  from './weather.service';
// import 'rxjs/rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <a routerLink="/weather">Weather</a>
          <router-outlet></router-outlet>
        `
})

export class AppComponent {
  title = "My First Angular2 App That Worked Perfectly Right Away!";
  weather: Weather = {
              conditions: "conditions",
              current_observation: "Weather Data Observations"
            }

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    return this.weatherService.getWeather();
  }
}
