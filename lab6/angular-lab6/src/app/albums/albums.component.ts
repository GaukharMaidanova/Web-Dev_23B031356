import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-albums',
  standalone: true,
  template: `
    <h2>Albums</h2>
    <ul>
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
        <button (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul>
    <a routerLink="/home">Back to Home</a>
  `,
  styles: [`
    h2 { color: #2c3e50; }
    ul { list-style-type: none; padding: 0; }
    li { margin: 10px 0; }
    a { text-decoration: none; color: blue; margin-right: 10px; }
    button { background-color: red; color: white; border: none; cursor: pointer; padding: 5px 10px; }
  `],
  imports: [CommonModule, RouterModule]
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/albums')
      .subscribe((data: any) => {
        this.albums = data;
      });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }

  openAlbumDetails(id: number) {
    this.router.navigate(['/albums', id]);
  }
}
