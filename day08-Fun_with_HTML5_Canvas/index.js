const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

console.log(window.innerWidth, window.innerHeight);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 30;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if (!isDrawing) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  if (hue >= 360) hue = 0;
  hue++;

  if (context.lineWidth >= 40 || context.lineWidth <= 10)
    direction = !direction;

  direction ? context.lineWidth++ : context.lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
