import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent }
  // { path: '', redirectTo: '/weather', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);
