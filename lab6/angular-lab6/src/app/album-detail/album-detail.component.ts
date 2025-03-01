import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  template: `
    <h2>Album Details</h2>
    <input [(ngModel)]="albumTitle" />
    <button (click)="saveTitle()">Save</button>
    <a [routerLink]="['/albums', albumId, 'photos']">View Photos</a>
    <br />
    <a routerLink="/albums">Back to Albums</a>
  `,
  styles: [`
    h2 { color: #2c3e50; }
    input { margin: 10px; padding: 5px; }
    button { margin-right: 10px; padding: 5px; }
  `]
})
export class AlbumDetailComponent implements OnInit{
  albumId: number = 0;
  albumTitle: string = '';
  album: any = {};
  editedTitle: string = '';
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(`https://jsonplaceholder.typicode.com/albums/${this.albumId}`)
      .subscribe((data: any) => {
        this.albumTitle = data.title;
      });
  }
saveTitle() {
  this.album.title = this.editedTitle;
}
saveAlbum(): void {
  this.albumsService.updateAlbum(this.album).subscribe(() => {
    alert('Album updated!');
  });
}
goBack() {
  this.router.navigate(['/albums']);
}
}
