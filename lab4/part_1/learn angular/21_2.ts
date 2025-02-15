import {Component} from '@angular/core';
import {CarService} from './21_1';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}