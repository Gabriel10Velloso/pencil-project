import { Component, OnInit, Input, Output } from '@angular/core';
import { DrawspaceComponent } from '../drawspace/drawspace.component';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pause-play-button',
  templateUrl: './pause-play-button.component.html',
  styleUrls: ['./pause-play-button.component.scss']
})
export class PausePlayButtonComponent implements OnInit {
  isPlay = true;
  @Output() play: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(): void {
    this.isPlay = !this.isPlay
    this.play.emit(this.isPlay);
  }
}
