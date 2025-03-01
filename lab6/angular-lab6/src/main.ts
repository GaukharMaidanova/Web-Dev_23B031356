import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { AlbumsComponent } from './app/albums/albums.component';
import { AlbumDetailComponent } from './app/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './app/album-photos/album-photos.component';
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'albums/:id', component: AlbumDetailComponent }, 
      { path: 'albums/:id/photos', component: AlbumPhotosComponent }
    ])
  ]
}).catch(err => console.error(err));
