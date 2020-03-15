import { Component } from '@angular/core';
import { DrawspaceComponent } from './drawspace/drawspace.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Interactive Ad Editor';
  onPlay(evt){
    console.log("onPlayed: ", evt);
  }
}
