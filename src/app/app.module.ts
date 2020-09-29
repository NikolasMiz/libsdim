import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgEditComponent } from './img-edit/img-edit.component';
import {RouterModule, Routes} from '@angular/router';
import { BootstrapThemesComponent } from './bootstrap-themes/bootstrap-themes.component';
import { HomeComponent } from './home/home.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'image-editor', component: ImgEditComponent},
  {path: 'bootstrap-themes', component: BootstrapThemesComponent},
  {path: 'player', component: VideoPlayerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ImgEditComponent,
    BootstrapThemesComponent,
    HomeComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
