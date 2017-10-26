import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzleappComponent } from './puzzleapp/puzzleapp.component';
import { DeepakComponent } from './deepak/deepak.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleappComponent,
    DeepakComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
