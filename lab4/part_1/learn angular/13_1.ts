import {Routes} from '@angular/router';

import {HomeComponent} from './13_2';
import {UserComponent} from './13_3';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent,
  },
];