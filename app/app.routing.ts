import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather.component';

const appRoutes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
