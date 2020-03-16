import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent implements OnInit {
  isPlay: boolean = false;
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
