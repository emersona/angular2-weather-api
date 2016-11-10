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
var weather_service_1 = require('./weather/weather.service');
// import 'rxjs/rxjs-operators';
var AppComponent = (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.title = "Angular2 - Here We Go Again!";
        this.weather = {
            conditions: "conditions",
            current_observation: "Weather Data Observations"
        };
    }
    AppComponent.prototype.getWeather = function () {
        return this.weatherService.getWeather();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <h1>{{title}}</h1>\n          <a [routerLink]=\"['/weather']\">Get Weather</a>\n          <router-outlet></router-outlet>\n        "
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map