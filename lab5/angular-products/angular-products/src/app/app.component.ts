import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from 'components/product-list/product-list.component';
import { ProductsComponent } from 'components/products/products.component';
import { categories } from 'data';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-products';
  categories = categories;
  selectedCategoryId: number | null = null;

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
