//Making a platformer!
// Attributes of the player
let player = {
    x: 200,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump : true,
    height: 20,
    width: 20
};
// The status of the arrow keys    
let keys = {
    right: false,
    left: false,
    up: false,
    };

let friction = 0.7;

// The number of platforms
let num = 2;
// The platforms
let platforms = [];
// Function to render the canvas
function rendercanvas(){
    ctx.fillStyle = "#F0F8FF";
    ctx.fillRect(0, 0, 1000, 1000);
}
// Function to render the player
function renderplayer(){
    ctx.fillStyle = "#F08080";
    ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
    }
// Function to create platforms
function createplat(){
    for(i = 0; i < num; i++) {
        platforms.push(
            {
            x: 100 * i,
            y: 200 + (30 * i),
            width: 110,
            height: 15
            }
        );
    }
}
// Function to render platforms
function renderplat(){
    ctx.fillStyle = "#45597E";
    ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
    ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width,platforms[1]. height);     
}

// This function is called when one of the arrow keys is pressed
function keydown(e) {
    // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }
    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
}

// This function is called when the key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
} 
        
function loop() {
    // If the left key is pressed, move the player to the left
    if(keys.left) {
        player.x+= -2.5;
    }
    // If the right key is pressed, move the player to the right
    if(keys.right) {
        player.x  += 2.5;
    }
    // Rendering the canvas, the player and the platforms
    rendercanvas();
    renderplayer();
    renderplat();
}

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 1000;
ctx.canvas.width = 1000;
createplat();
//adding events to the keypresses
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
        
// Calling loop every 22 milliseconds to update the frame
setInterval(loop,22);

function getHeight() {
    if (self.innerHeight) {
      return self.innerHeight;
    }
  
    if (document.documentElement && document.documentElement.clientHeight) {
      return document.documentElement.clientHeight;
    }
  
    if (document.body) {
      return document.body.clientHeight;
    }
  }

  function getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
  
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
  
    if (document.body) {
      return document.body.clientWidth;
    }
  }