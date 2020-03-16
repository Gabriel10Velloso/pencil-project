import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'Interactive Ad Editor';  
  isPlaying: boolean = false;
  isReset: number = 0;
  onPlay(evt: boolean){
    this.isPlaying = evt;
  }
  onReset(){
    this.isReset += 1;
  }
}
