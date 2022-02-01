let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

// creating a static cirlce
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "green";
// c.stroke();

//declaring mouse movement
let mouse = {
  x: undefined,
  y: undefined,
};

let colorArray = [`#023373`, `#0468BF`, `#05AFF2`, `#05C7F2`, `#05DBF2`];
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //   console.log(mouse);
});

// for making the canvas responsive
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
let maxR = 30;
//object for creating circle
function Circle(x, y, r, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.minR = r;

  //this function is for drawing circle
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    // c.strokeStyle = "rgb(255,255,255)";
    c.fillStyle = this.color;
    c.fill();
    // c.stroke();
  };

  //this function is for updating the circle position
  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //for  interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.r < maxR) {
        this.r += 1;
      }
    } else if (this.r > this.minR) {
      this.r -= 1;
    }
    this.draw();
  };
}
// let circle = new Circle(200, 200, 30, 3, 5);

let circleStore = [];
function init() {
  circleStore = []; // clearing the previous circle and genrating new
  for (let i = 0; i < 800; i++) {
    let r = Math.random() * 3 + 1; //this is for circle radius
    let x = Math.random() * (innerWidth - r * 2); // this s for width
    let y = Math.random() * (innerHeight - r * 2); // this is for height
    let dx = Math.random() - 0.5; //this is for x velocity meaning horizontal
    let dy = Math.random() - 0.5; //this is for y velocity meaning vertical
    circleStore.push(new Circle(x, y, r, dx, dy));
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleStore.length; i++) {
    circleStore[i].update();
  }
}
// console.log(circleStore);
animate();
init();
