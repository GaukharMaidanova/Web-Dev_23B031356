import { Component } from '@angular/core';
import { Product } from '@models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
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
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8-gb-128-gb-chernyi-109192066/'
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
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkw3-111217728/'
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
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/'
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
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
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
      link: 'https://kaspi.kz/shop/p/xiaomi-vacuum-x10-belyi-109460330/'
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
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-106585231/'
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
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-vt-104498649/'
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
      link: 'https://kaspi.kz/shop/p/lg-oled55c2rla-140-sm-chernyi-105537154/'
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
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-ocean-seryi-sinii-106667098/'
    }
  ];
  selectedProduct = this.products[0];
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
}
