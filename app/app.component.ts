import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>WEATHER DATA {{weather.name}}</h1>'
})

export class AppComponent {
  title = 'Weather Data';
  weather: WeatherData = {
              id: 1,
              name: "Weather Data"
            }
}

export class WeatherData {
  id: number;
  name: string;

  constructor(public http: Http) {
  }

  // Get request and serialize the result to JSON
  getData() {
    console.log("get data");
    console.log(this.http);
    this.http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
      .toRx()
      .map(res => res.json();
  }
}
