import { Component, OnInit, Input, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pause-play-button',
  templateUrl: './pause-play-button.component.html',
  styleUrls: ['./pause-play-button.component.scss']
})
export class PausePlayButtonComponent implements OnInit {
  isPlay = true;
  isReset = true;
  @Output() play: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
  
  onClick(): void {
    this.isPlay = !this.isPlay
    this.play.emit(this.isPlay);
  }
  onReset(): void {
    this.reset.emit();
  }
}
