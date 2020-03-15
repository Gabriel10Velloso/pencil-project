import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawspaceComponent } from './drawspace/drawspace.component';
import { PausePlayButtonComponent } from './pause-play-button/pause-play-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawspaceComponent,
    PausePlayButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
