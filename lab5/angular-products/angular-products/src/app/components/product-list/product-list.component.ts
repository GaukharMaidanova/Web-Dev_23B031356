import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '@models/category.model';
import { Product } from '@models/product.model';
import { categories } from 'data';
import { products } from 'data';
import { ProductsComponent } from "../products/products.component";
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedCategoryID: number | null = null;
  categories: Category[]=[
    {
      id: 1,
      name: 'Smart devices'
    },
    {
      id: 2,
      name: 'Gaming devices'
    },
    {
      id: 3,
      name: 'Home devices'
    },
    {
      id: 4,
      name: 'Accessorizes: headphones & watches'
    }
  ];
  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/iphone15.jpg',
      gallery: [
        'assets/images/iphone15_1.jpg',
        'assets/images/iphone15_2.jpg',
        'assets/images/iphone15_3.jpg'
      ],
      name: 'Apple iPhone 15',
      description: '128GB, Midnight Black',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
      like: 5,
      liked: false,
      categoryId: 1
    },
    {
      id: 2,
      image: 'assets/images/samsungs23.jpg',
      gallery: [
        'assets/images/samsungs23_1.jpg',
        'assets/images/samsungs23_2.jpg',
        'assets/images/samsungs23_3.jpg'
      ],
      name: 'Samsung Galaxy S23',
      description: '256GB, Phantom Black',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8-gb-128-gb-chernyi-109192066/',
      like: 5,
      liked: false,
      categoryId: 1
    },
    {
      id: 3,
      image: 'assets/images/macair.jpg',
      gallery: [
        'assets/images/macair_1.jpg',
        'assets/images/macair_2.jpg',
        'assets/images/macair_3.jpg'
      ],
      name: 'MacBook Air M2',
      description: '13-inch, 512GB SSD',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkw3-111217728/',
      like: 5,
      liked: false,
      categoryId: 1
    },
    {
      id: 4,
      image: 'assets/images/ps5.jpg',
      gallery: [
        'assets/images/ps5_1.jpg',
        'assets/images/ps5_2.jpg',
        'assets/images/ps5_3.jpg'
      ],
      name: 'PlayStation 5',
      description: '825GB SSD, DualSense',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/',
      like: 5,
      liked: false,
      categoryId: 2
    },
    {
      id: 5,
      image: 'assets/images/sony.jpg',
      gallery: [
        'assets/images/sony_1.jpg',
        'assets/images/sony_2.jpg',
        'assets/images/sony_3.jpg'
      ],
      name: 'Sony WH-1000XM5',
      description: 'Wireless Noise Cancelling Headphones',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/',
      like: 5,
      liked: false,
      categoryId: 3
    },
    {
      id: 6,
      image: 'assets/images/xiaomi.jpg',
      gallery: [
        'assets/images/xiaomi_1.jpg',
        'assets/images/xiaomi_2.jpg',
        'assets/images/xiaomi_3.jpg'
      ],
      name: 'Xiaomi Robot Vacuum X10',
      description: 'Smart Vacuum Cleaner',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-vacuum-x10-belyi-109460330/',
      like: 5,
      liked: false,
      categoryId: 4
    },
    {
      id: 7,
      image: 'assets/images/gopro.jpg',
      gallery: [
        'assets/images/gopro_1.jpg',
        'assets/images/gopro_2.jpg',
        'assets/images/gopro_3.jpg'
      ],
      name: 'GoPro HERO 11',
      description: 'Action Camera, 5.3K Video',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-106585231/',
      like: 5,
      liked: false,
      categoryId: 3
    },
    {
      id: 8,
      image: 'assets/images/dyson.jpg',
      gallery: [
        'assets/images/dyson_1.jpg',
        'assets/images/dyson_2.jpg',
        'assets/images/dyson_3.jpg'
      ],
      name: 'Dyson Airwrap',
      description: 'Complete Long Multi-Styler',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-vt-104498649/',
      like: 5,
      liked: false,
      categoryId: 4
    },
    {
      id: 9,
      image: 'assets/images/lg.jpg',
      gallery: [
        'assets/images/lg_1.jpg',
        'assets/images/lg_2.jpg',
        'assets/images/lg_3.jpg'
      ],
      name: 'LG OLED C2',
      description: '55-inch 4K Smart TV',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/lg-oled55c2rla-140-sm-chernyi-105537154/',
      like: 5,
      liked: false,
      categoryId: 1
    },
    {
      id: 10,
      image: 'assets/images/apple.jpg',
      gallery: [
        'assets/images/apple_1.jpg',
        'assets/images/apple_2.jpg',
        'assets/images/apple_3.jpg'
      ],
      name: 'Apple Watch Ultra',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 3
    },
    {
      id: 11,
      image: 'assets/images/acer.jpg',
      gallery: [
        'assets/images/acer_1.jpg',
        'assets/images/acer_2.jpg',
        'assets/images/acer_3.jpg'
      ],
      name: 'Acer Aspire 7',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 1
    },
    {
      id: 12,
      image: 'assets/images/asus.jpg',
      gallery: [
        'assets/images/asus_1.jpg',
        'assets/images/asus_2.jpg',
        'assets/images/asus_3.jpg'
      ],
      name: 'Asus gaming console',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 2
    },
    {
      id: 13,
      image: 'assets/images/xbox.jpg',
      gallery: [
        'assets/images/xbox_1.jpg',
        'assets/images/xbox_2.jpg',
        'assets/images/xbox_3.jpg'
      ],
      name: 'Xbox',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 2
    },
    {
      id: 14,
      image: 'assets/images/lenovo.jpg',
      gallery: [
        'assets/images/lenovo_1.jpg',
        'assets/images/lenovo_2.jpg',
        'assets/images/lenovo_3.jpg'
      ],
      name: 'Lenovo gaming comsole',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 2
    },
    {
      id: 15,
      image: 'assets/images/sega.jpg',
      gallery: [
        'assets/images/sega_1.jpg',
        'assets/images/sega_2.jpg',
        'assets/images/sega_3.jpg'
      ],
      name: 'Sega retro gaming console',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 2
    },
    {
      id: 16,
      image: 'assets/images/dreame.jpg',
      gallery: [
        'assets/images/dreame_1.jpg',
        'assets/images/dreame_2.jpg',
        'assets/images/dreame_3.jpg'
      ],
      name: 'Dreame vacuum cleaner',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 3
    },
    {
      id: 17,
      image: 'assets/images/dreamet.jpg',
      gallery: [
        'assets/images/dreamet_1.jpg',
        'assets/images/dreamet_2.jpg',
        'assets/images/dreamet_3.jpg'
      ],
      name: 'Dreame robotic vacuum cleaner',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 3
    },
    {
      id: 18,
      image: 'assets/images/laifen.jpg',
      gallery: [
        'assets/images/laifen_1.jpg',
        'assets/images/laifen_2.jpg',
        'assets/images/laifen_3.jpg'
      ],
      name: 'Laifen fan',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 3
    },
    {
      id: 19,
      image: 'assets/images/jbl.jpg',
      gallery: [
        'assets/images/jbl_1.jpg',
        'assets/images/jbl_2.jpg',
        'assets/images/jbl_3.jpg'
      ],
      name: 'JBL wireless headphones',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 4
    },
    {
      id: 20,
      image: 'assets/images/marshall.jpg',
      gallery: [
        'assets/images/marshall_1.jpg',
        'assets/images/marshall_2.jpg',
        'assets/images/marshall_3.jpg'
      ],
      name: 'Marshall wireless headphones',
      description: '49mm, Titanium Case',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/',
      like: 5,
      liked: false,
      categoryId: 4
    }
  ];
  get filteredProducts() {
    if (!this.selectedCategoryID) {
      return products; 
    }
    return products.filter(p => p.categoryId === this.selectedCategoryID);
  }
  selectCategory(category: Category) {
    this.selectedCategoryID = category.id;
  }
  toggleLike(product: any) {
    if (!product.liked) {
      product.like++; 
    } else {
      product.like--; 
    }
    product.liked = !product.liked; 
  }
  share(product: Product) {
      const message = `Check out this product: ${product.name} - ${product.link}`;
      const telegramUrl = `https://t.me/share/url?url=${product.link}&text=${encodeURIComponent(message)}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    
      if (navigator.userAgent.toLowerCase().includes('android') || navigator.userAgent.toLowerCase().includes('iphone')) {
        window.open(whatsappUrl, '_blank');
      } else {
        window.open(telegramUrl, '_blank');
      }
    }
  onRemove(index: number) {
    products.splice(index, 1);
  }

  }

