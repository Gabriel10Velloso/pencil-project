import { Component, OnInit, OnChanges, Input, SimpleChanges } from "@angular/core";
import {fabric} from 'fabric';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: "app-drawspace",
  templateUrl: "./drawspace.component.html",
  styleUrls: ["./drawspace.component.scss"]
})
export class DrawspaceComponent implements OnInit, OnChanges {
  test: boolean;
  canvas: fabric;
  rectangle: any;
  triangle: any;
  circle: any;
  animation: any;
  @Input() isPlaying: boolean;
  @Input() isReset: number;
  constructor() {}

  ngOnInit(): void {
    this.canvas = new fabric.StaticCanvas("canvas");
    this.animation = anime.timeline({
      autoplay: false,
    })
    this.rectangle = new fabric.Rect({
      width: 50,
      height: 50,
      left: 130,
      top: 130,
      fill: "teal",
      originX: 'center',
      originY: 'center',
      opacity: 0
    });
    this.triangle = new fabric.Triangle({
      width: 100,
      left: 30,
      top: 20,
      fill: "blue"
    });
    this.circle = new fabric.Circle({
      radius: 50,
      left: 150,
      top: 150,
      fill: "pink",
      opacity: 0,
    });
    this.canvas.add(this.rectangle);
    this.canvas.add(this.triangle);
    this.canvas.add(this.circle);

    this.canvas.setWidth(500);
    this.canvas.setHeight(500);
    
    this.animation
    .add({
      targets: this.circle,
      opacity: {
        value: 1,
        duration: 1300,
        easing: 'easeInSine',
      },
      update: () => {
        this.canvas.renderAll();
      }
    }).add({
      targets: this.triangle,
      left: [this.canvas.width, 0],
      direction: 'alternate',
      loop: true,
      easing: "linear",
      update: () => {
        this.canvas.renderAll();
      }
    }).add({
      targets: this.rectangle,
      angle: [{
        value: 5,
        duration: 300,
        easing: 'easeInOutSine'
      },{
        value: -5,
        duration: 300,
        easing: 'easeInOutSine'
      },{
        value: 5,
        duration: 300,
        easing: 'easeInOutSine'
      },{
        value: -5,
        duration: 300,
        easing: 'easeInOutSine'
      }],
      loop: true,
      opacity: {
        value: 1,
        duration: 1200,
        delay: 200
      },
      duration: 3000,
      update: () => {
        this.canvas.renderAll();
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if("isPlaying" in changes && !changes.isPlaying.isFirstChange()){
      if (this.isPlaying === false) this.animation.play();
      else this.animation.pause();
    }
    if("isReset" in changes && !changes.isReset.isFirstChange()){
      this.animation.restart();
    }
  }
}
