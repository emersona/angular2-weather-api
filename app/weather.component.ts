import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Weather }                from './weather';
import { WeatherService }         from './weather.service';

@Component({
  selector: 'my-weather',
  templateUrl: 'app/weather.component.html'
})

export class WeatherComponent implements OnInit {
  errorMessage: string;
  weather: Weather[];
  mode = 'Observable';

  constructor (private weatherService: WeatherService) {}

  ngOnInit() { this.getWeather(); }

  getWeather() {
    this.weatherService.getWeather();
  }

}
