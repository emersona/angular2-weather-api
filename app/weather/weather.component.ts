import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Weather }                from './weather';
import { WeatherService }         from './weather.service';

@Component({
  selector: 'my-weather',
  templateUrl: 'app/weather/weather.component.html'
})

export class WeatherComponent implements OnInit {

  constructor (private weatherService: WeatherService) {}

  ngOnInit() { }

  errorMessage: string;
  weather: Weather[];
  lat: number = 41.9028;
  lng: number = 12.4964;
  markerTitle: string = "Title";
  markerLabel: string = "Location Label"
  markerIconUrl: string = "http://imsdm.scene7.com/is/image/imsdm/Sun-Smarties-Bug";
  mode = 'Observable';

  getWeather() {
    this.weatherService.getWeather().subscribe(
                     response => this.weather = response,
                     error =>  this.errorMessage = <any>error);
    console.log(this.weather);
    if (typeof this.weather != 'undefined'){
      this.setLat(this.weather.current_observation.display_location.latitude)
      this.setLng(this.weather.current_observation.display_location.longitude)
      this.setIconUrl(this.weather.current_observation.icon_url)
    }

  }

  private setLat(val){
    this.lat = parseFloat(val);
  }

  private setLng(val){
    this.lng = parseFloat(val);
  }

  private setIconUrl(val){
    this.markerIconUrl = val;
  }

}
