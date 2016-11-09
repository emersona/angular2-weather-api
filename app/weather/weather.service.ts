import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Weather } from './weather';

@Injectable()

export class WeatherService {

  constructor(private http: Http) { }


  private weatherData;
  private weatherUrl = 'app/weather/mock_weather_test.json';  // Mock URL so we're not hitting the webservice constantly
  // private weatherUrl = 'http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json'

  getWeather() {
    // console.log(this.http.get(this.weatherUrl).map(response => response.json))
    return this.http.get(this.weatherUrl)
                  .map(response => response.json());
    // return this.http.get(this.weatherUrl)
    //            .toPromise()
    //            .then(response => response.json());

    // return this.http.get(this.weatherUrl)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);

    // var weatherData = this.http.get(this.weatherUrl)
    //                      .map((res:Response) => res.json())
    //                      .catch((error:any) => Observable.throw(error.json().error
   // var weatherResponse = this.http.get(this.weatherUrl)
   //    weatherResponse.map((res:Response) => res.json())
   //    .subscribe(
   //      data => { this.weatherData = data},
   //      err => console.error(err),
   //      () => console.log('done')
   //    );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
