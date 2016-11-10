"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_service_1 = require('./weather.service');
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.lat = 41.9028;
        this.lng = 12.4964;
        this.markerTitle = "Title";
        this.markerLabel = "Location Label";
        this.markerIconUrl = "http://imsdm.scene7.com/is/image/imsdm/Sun-Smarties-Bug";
        this.mode = 'Observable';
    }
    WeatherComponent.prototype.ngOnInit = function () { };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this.weatherService.getWeather().subscribe(function (response) { return _this.weather = response; }, function (error) { return _this.errorMessage = error; });
        console.log(this.weather);
        if (typeof this.weather != 'undefined') {
            this.setLat(this.weather.current_observation.display_location.latitude);
            this.setLng(this.weather.current_observation.display_location.longitude);
            this.setIconUrl(this.weather.current_observation.icon_url);
        }
    };
    WeatherComponent.prototype.setLat = function (val) {
        this.lat = parseFloat(val);
    };
    WeatherComponent.prototype.setLng = function (val) {
        this.lng = parseFloat(val);
    };
    WeatherComponent.prototype.setIconUrl = function (val) {
        this.markerIconUrl = val;
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'my-weather',
            templateUrl: 'app/weather/weather.component.html'
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map