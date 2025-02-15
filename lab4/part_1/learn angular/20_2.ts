import {Component, inject} from '@angular/core';
import {CarService} from './20_1';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  display = '';
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}