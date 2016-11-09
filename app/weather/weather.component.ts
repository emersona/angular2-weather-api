import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Weather }                from './weather';
import { WeatherService }         from './weather.service';

@Component({
  selector: 'my-weather',
  templateUrl: 'app/weather/weather.component.html'
})

export class WeatherComponent implements OnInit {
  errorMessage: string;
  weather: Weather[];
  // weather: string;
  mode = 'Observable';
  // private weather;
  constructor (private weatherService: WeatherService) {}

  // ngOnInit() { this.getWeather(); }

  getWeather() {
    this.weatherService.getWeather().subscribe(
                     response => this.weather = response,
                     error =>  this.errorMessage = <any>error);
    console.log(this.weather);
  }

}
