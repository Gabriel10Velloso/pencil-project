# Interactive Ad Editor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## The Task
Build a simple animations editor which can preview an animated ad creative:

- Render a design with 3 objects on a fabric canvas in a simple frontend. We recommend playing around with this demo to get a feel for how fabric objects work.
- Animate these 3 objects, one after the other, using the presets above. Controls to edit these presets need not be exposed to the user.
    For example, if you have three squares on the canvas, the sequence of events would be: Square 1 fades in -> Square 2 slides in -> Square 3 wiggles
- Add controls to allow the user to play, pause and restart the animation.

## Steps
1. git clone this repo
2. go to folder on terminal
3. `npm install`
4. `npm start`
5. navigate to `http://localhost:4200/`

## How it works
- Press Play to start the animation (animation sequence: fade in, slide in, wiggle)
- Press Pause to pause animation
- Press Restart to restart the animation (it will automatically play on restart)
- Use Brave Browers/ Google Chrome or Safari (tested on these browsers)
- Use it at full screen for best experience

## Error Handling
- After resizing screen, refresh to have best experience

## Potential Enhancements
- Add functions to select custom objects or upload images
- e2e tests with Jasmine/Karma
- Use Angular service or Observables via RxJS to handle data changes

## Frameworks used
- Bootstrap 4
- fabric.js
- anime.js
- Angular 9