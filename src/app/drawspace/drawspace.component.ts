import { Component, OnInit } from "@angular/core";
import "fabric";
import anime from 'animejs/lib/anime.es.js';

declare const fabric: any;

@Component({
  selector: "app-drawspace",
  templateUrl: "./drawspace.component.html",
  styleUrls: ["./drawspace.component.scss"]
})
export class DrawspaceComponent implements OnInit {
  private canvas: any;
  private rectangle: any;
  private triangle: any;
  private circle: any;
  constructor() {}

  ngOnInit(): void {
    // staticCanvas for canvas with no interactivity
    this.canvas = new fabric.StaticCanvas("canvas");
    this.rectangle = new fabric.Rect({
      width: 50,
      height: 50,
      left: 100,
      top: 100,
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
      left: 130,
      top: 130,
      fill: "pink",
      opacity: 0,
    });
    this.canvas.add(this.rectangle);
    this.canvas.add(this.triangle);
    this.canvas.add(this.circle);

    this.canvas.setWidth(500);
    this.canvas.setHeight(500);
    const animation = anime.timeline({
      loop: true,
      // autoplay: false,
    })

    animation.add({
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
        value: 10,
        duration: 1000,
        easing: 'easeInOutSine'
      },{
        value: -10,
        duration: 1000,
        easing: 'easeInOutSine'
      },{
        value: 10,
        duration: 1000,
        easing: 'easeInOutSine'
      }],
      loop: true,
      opacity: {
        value: 1,
        duration: 3000,
        delay: 200
      },
      duration: 3000,
      update: () => {
        // this.rectangle.rotate += 5;
        this.canvas.renderAll();
      }
    }).add({
      targets: this.circle,
      opacity: {
        value: 1,
        duration: 1300,
        easing: 'easeInSine',
      },
      update: () => {
        this.canvas.renderAll();
      }
    });
  }
  animePlay(){

  }
}
