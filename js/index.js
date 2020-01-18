var h = window.innerHeight;
var w = window.innerWidth;
let x = w/2;
let y = h/2;
let x2 = w/2;
let y2 = h/2;
let speed = 10;

function setup() {
	createCanvas(w, h);
}

function draw() {
	x += random(-speed, speed);
	y += random(-speed, speed);

	x2 += random(-speed, speed);
	y2 += random(-speed, speed);

	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	ellipse(x, y, 25, 25);
	fill(r, g, b);
	ellipse(x2, y2, 25, 25);
	fill(red, green, blue);
	noStroke();
}