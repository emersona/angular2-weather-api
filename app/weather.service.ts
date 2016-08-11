import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {
  
  private weatherDataUrl = 'http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json';  // URL to web api

  constructor(private http: Http) { }

  getWeatherData() {
    return this.http.get(this.weatherDataUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}