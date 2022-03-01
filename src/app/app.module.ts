import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeModule } from './shared/components/like/like.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LikeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
