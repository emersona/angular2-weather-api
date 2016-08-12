import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Weather } from './weather';

@Injectable()

export class WeatherService {

  constructor(private http: Http) { }

  private weatherUrl = 'app/mock_weather.json';  // URL to web api

  getWeather() {
    return this.http.get(this.weatherUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
