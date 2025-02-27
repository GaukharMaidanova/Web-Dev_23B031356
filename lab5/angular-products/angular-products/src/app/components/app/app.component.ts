import { Component } from '@angular/core';
import { categories } from 'data';
import { ProductListComponent } from 'components/product-list/product-list.component';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}