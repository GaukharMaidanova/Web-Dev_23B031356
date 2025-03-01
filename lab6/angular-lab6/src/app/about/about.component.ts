import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About Page</h2>
    <p>This is a simple Angular app using JSONPlaceholder API.</p>
    <a routerLink="/home">Go to Home</a>
  `,
  styles: [`
    h2 { color: #2c3e50; }
    p { font-size: 16px; }
    a { display: block; margin-top: 10px; color: blue; text-decoration: none; }
  `]
})
export class AboutComponent { }

