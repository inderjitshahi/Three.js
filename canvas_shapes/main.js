import './style.css';
window.onload = function () {
    draw();
    drawGrid();
}

function draw() {
    // Get the canvas element from the DOM
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //Drawing the shapes
    // ctx.fillStyle = "red";
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.strokeStyle = "yellow";
    // ctx.strokeRect(30, 30, 90, 90);

    //path
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(450, 50);
    // ctx.lineTo(450, 50);
    // ctx.lineTo(375, 75);
    // ctx.lineTo(450, 100);
    // ctx.lineTo(50, 100);
    // ctx.lineTo(125, 75);
    // ctx.closePath();
    // ctx.stroke()

    //arc
    // ctx.beginPath();
    // // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    // ctx.arc(400, 200, 300, 0,Math.PI*.5);
    // ctx.moveTo(650, 200);
    // ctx.arc(400, 200, 250,0,Math.PI*.5);
    // ctx.lineTo(425,475)
    // ctx.lineTo(400,500)
    // ctx.moveTo(700, 200);
    // ctx.lineTo(675, 225);
    // ctx.lineTo(650, 200);
    // ctx.stroke()

    // //arc
    // ctx.beginPath();
    // const angle = Math.PI * .5;
    // const x = 200
    // const y = 30
    // const radius = 400
    // const gap = 80
    // // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    // ctx.arc(x, y, radius, 0, angle);
    // ctx.moveTo(x + radius - gap, y);
    // ctx.arc(x, y, radius - gap, 0, angle);
    // ctx.lineTo(x+gap/2, y+radius-gap/2)
    // ctx.lineTo(x, y+radius)
    // ctx.moveTo(x + radius, y);
    // ctx.lineTo(x+radius-gap/2, y+gap/2);
    // ctx.lineTo(x+radius-gap, y);
    // ctx.stroke()

    //arc
    ctx.beginPath();
    //center
    let x = 300
    let y = 250
    const radius = 200
    const gap = 30
    const startAngle = Math.PI * 2.6
    // x=x*Math.cos(startAngle)
    // y=y*Math.sin(startAngle)
    let angle = Math.PI / 2;
    angle += startAngle
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.arc(x, y, radius, startAngle, angle);
    ctx.stroke()
    ctx.beginPath()

    //start for outer arc
    const startX = x + radius * Math.cos(startAngle);
    const startY = y + radius * Math.sin(startAngle);

    //start for inner arc
    const startXInner = x + (radius - gap) * Math.cos(startAngle);
    const startYInner = y + (radius - gap) * Math.sin(startAngle);

    // Record the end position
    const endX = x + radius * Math.cos(angle);
    const endY = y + radius * Math.sin(angle);

    //ends for inner arc
    const endXInner = x + (radius - gap) * Math.cos(angle);
    const endYInner = y + (radius - gap) * Math.sin(angle);

    ctx.arc(x, y, radius - gap, startAngle, angle);
    ctx.lineTo(endX + gap / 2 * (endX > endXInner ? -1 : 1), (endY + endYInner) / 2 - 10);
    ctx.lineTo(endX, endY)
    ctx.moveTo(startXInner, startYInner);
    ctx.lineTo(startX + gap / 2 * (startX > startXInner ? -1 : 1), (startYInner + startY) / 2 - 10);
    ctx.lineTo(startX, startY);
    ctx.stroke()

}



// Function to draw a grid
function drawGrid() {
    // Get the canvas element from the DOM
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 100) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += 100) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.strokeStyle = '#e0e0e0'; // Light gray color
    ctx.stroke();
}



// Set canvas resolution to match its displayed size in CSS
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call the resize function when the window is resized
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


