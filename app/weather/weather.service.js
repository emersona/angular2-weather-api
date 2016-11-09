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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.weatherUrl = 'app/weather/mock_weather.json'; // Mock URL so we're not hitting the webservice constantly
    }
    // private weatherUrl = 'http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json'
    WeatherService.prototype.getWeather = function () {
        // console.log(this.http.get(this.weatherUrl).map(response => response.json))
        // return this.http.get(this.weatherUrl)
        //               .map(response => response);
        return this.http.get(this.weatherUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
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
    };
    WeatherService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    WeatherService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map