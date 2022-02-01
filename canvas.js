// //c is for context

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
// c.fillStyle = "rgba(255,0,0,0.3)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(255,255,0,0.3)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(255,78,160,0.3)";
// c.fillRect(300, 300, 100, 100);

// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

// // generating circle and color randomly
// for (let i = 0; i < 60; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let r = Math.random() * 255;
//   let g = Math.random() * 255;
//   let b = Math.random() * 255;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgb(${r},${g},${b})`;
//   c.stroke();
// }

// //generating rectacle amd squares randomly
// for (let i = 0; i < 10; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let w = Math.random() * window.innerWidth;
//   let h = Math.random() * window.innerHeight;
//   let r = Math.random() * 255;
//   let g = Math.random() * 255;
//   let b = Math.random() * 255;
//   c.fillStyle = `rgb(${r},${g},${b})`;
//   console.log(r, g, b);
//   c.fillRect(x, y, 100, w, h);
// }

// //moving lines randomly
// for (let i = 0; i < 1; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   c.lineTo(x, y);
//   c.moveTo(x, y);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
    c.fill();
  };
  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
var circleArray = [];
for (let i = 0; i < 100; i++) {
  let r = 30;
  let x = Math.random() * (innerWidth - r * 2) + r;
  let y = Math.random() * (innerHeight - r * 2) + r;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  circleArray.push(new Circle(x, y, dx, dy, r));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
