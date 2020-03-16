import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawspaceComponent } from './drawspace/drawspace.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawspaceComponent,
    ControlButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
