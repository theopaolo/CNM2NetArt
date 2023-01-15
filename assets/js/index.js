import { followMouse, debounce, getRandomColor, randomPosInVp, getRandomIntInclusive, getRandomArbitrary } from './app.js';

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = canvas.width = window.innerWidth;
canvas.height = canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

(function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = "rgb(50, 50, 50)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < 40; r++) {
    for (let c = 0; c < 40; c++) {
      ctx.fillStyle = `rgb(${10 * r}, ${10 * c}, 255)`;
      ctx.fillRect(30 * r, 30 * c, 30, 30);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(30 * r, 30 * c, 30, 30);
    }
  }
})()