const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const colorElement = $("#color");
const eraserElement = $("#eraser");
const decreaseElement = $("#decrease");
const increaseElement = $("#increase");
const canvasElement = $("#canvas");
const clearElement = $("#clear");
const saveElement = $("#save");
let valueColor = colorElement.value;
const ctx = canvas.getContext("2d");
const size = $("#size");
let sizeValue = Number(size.innerHTML);
let mouseDown = false;
let isEraser = false;
let x, y;

function handleDraw(e) {
  if (mouseDown) {
    x2 = e.offsetX;
    y2 = e.offsetY;

    drawCircle(x, y);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
}

function drawCircle(x, y) {
  ctx.fillStyle = valueColor;
  ctx.beginPath();
  ctx.arc(x, y, sizeValue, 0, 2 * Math.PI);
  ctx.fill();
}

function drawLine(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = sizeValue * 2;
  ctx.strokeStyle = valueColor;
  ctx.stroke();
}

function handleDown(e) {
  mouseDown = true;

  x = e.offsetX;
  y = e.offsetY;
}

function handleUP(e) {
  mouseDown = false;
  x = undefined;
  y = undefined;
}

function handleIncrease() {
  if (Number(size.innerHTML) < 50) {
    size.innerHTML = Number(size.innerHTML) + 5;
    sizeValue = Number(size.innerHTML);
  }
}

function handleDecrease() {
  if (Number(size.innerHTML) > 5) {
    size.innerHTML = Number(size.innerHTML) - 5;
    sizeValue = Number(size.innerHTML);
  }
}

function changeColor() {
  valueColor = colorElement.value;
}

function handleEraser() {
  isEraser = !isEraser;

  if (isEraser) {
    valueColor = "#fff";
    eraserElement.classList.add("turn-on");
  } else {
    valueColor = colorElement.value;
    eraserElement.classList.remove("turn-on");
  }
}

function handleReset() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleSave(e) {
  const image = canvasElement
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  e.currentTarget.href = image;
  console.log(e.currentTarget);
}
