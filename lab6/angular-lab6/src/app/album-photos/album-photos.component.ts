import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <h2>Album Photos</h2>
    <div class="photos">
      <img *ngFor="let photo of photos" [src]="photo.thumbnailUrl" [alt]="photo.title" />
    </div>
    <a routerLink="/albums">Back to Albums</a>
  `,
  styles: [`
    h2 { color: #2c3e50; }
    .photos { display: flex; flex-wrap: wrap; gap: 10px; }
    img { width: 100px; height: 100px; border-radius: 5px; }
    a { display: block; margin-top: 10px; color: blue; text-decoration: none; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .subscribe((data: any) => {
        this.photos = data;
      });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}

