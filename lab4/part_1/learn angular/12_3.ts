import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './12_1';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};