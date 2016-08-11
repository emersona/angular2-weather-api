import { Component }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from 'app/weather';
// import 'rxjs/rxjs-operators';

@Component({
  selector: 'my-app',
  template: '<h1>{{weather.name}}</h1>'
})

export class AppComponent {
  title = 'Weather Data';
  weather: Weather = {
              id: 1,
              name: "Weather Data String"
            }
}
