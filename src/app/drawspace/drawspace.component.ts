import { Component, OnInit, OnChanges, Input, SimpleChanges } from "@angular/core";
import {fabric} from 'fabric';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: "app-drawspace",
  templateUrl: "./drawspace.component.html",
  styleUrls: ["./drawspace.component.scss"]
})
export class DrawspaceComponent implements OnInit, OnChanges {
  animation: any;
  @Input() isPlaying: boolean;
  @Input() isReset: number;

  constructor() {}

  ngOnInit(): void {
    const canvas = new fabric.StaticCanvas("canvas");
    this.animation = anime.timeline({
      autoplay: false,
    })
    const wrapper = document.querySelector('#drawspace-wrapper');
    const w = wrapper.clientWidth;
    const h = wrapper.clientHeight;
    const rectangle = new fabric.Rect({
      width: 50,
      height: 50,
      left: w/2,
      top: h/2,
      fill: "teal",
      originX: 'center',
      originY: 'center',
      opacity: 0
    });
    const triangle = new fabric.Triangle({
      width: 100,
      left: w/2,
      top: h/2-30,
      fill: "blue",
    });
    const circle = new fabric.Circle({
      radius: 50,
      left: w/2,
      top: h/2,
      fill: "pink",
      opacity: 0,
    });
    canvas.add(rectangle);
    canvas.add(triangle);
    canvas.add(circle);

    canvas.setWidth(w);
    canvas.setHeight(h);
    
    this.animation
    .add({
      targets: circle,
      opacity: {
        value: 1,
        duration: 1300,
        easing: 'easeInSine',
      },
      update: () => {
        canvas.renderAll();
      }
    }).add({
      targets: triangle,
      left: [w, w/2-150],
      easing: "linear",
      update: () => {
        canvas.renderAll();
      }
    }).add({
      targets: rectangle,
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
      opacity: {
        value: 1,
        duration: 1200,
        delay: 200
      },
      duration: 3000,
      update: () => {
        canvas.renderAll();
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if("isPlaying" in changes && !changes.isPlaying.isFirstChange()){
      if (this.isPlaying === true) this.animation.play();
      else this.animation.pause();
    }
    if("isReset" in changes && !changes.isReset.isFirstChange()){
      this.animation.restart();
    }
  }
}