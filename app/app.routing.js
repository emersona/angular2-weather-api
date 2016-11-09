"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var weather_component_1 = require('./weather/weather.component');
var appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'weather', component: weather_component_1.WeatherComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map