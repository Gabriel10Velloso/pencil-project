import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Interactive Ad Editor';  
  isPlaying = null;
  isReset = 0;
  onPlay(evt){
    this.isPlaying = evt;
  }
  onReset(evt){
    this.isReset += 1;
  }
}
