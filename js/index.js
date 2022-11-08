//Making a platformer!
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 1024;
ctx.canvas.height = 576;



//creating background sprite levels 
const backgroundLevel1 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/sky.png',
})
const backgroundLevel1cont = new Sprite({
    position: {
    x: 64 * 7,
    y: 0,
    },
    imageSrc: 'assets/background/sky.png',
})
const backgroundLevel2 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/city.png',
})
const backgroundLevel3 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/city Foreground.png',
})

// Create new player
const player = new Player();

//create keys as objects
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}
//main platform sprite
let image = new Image();
image.src = '../assets/platforms/ground0.png';

// create platforms
const platforms = [
    new Platform({
    x: 0, 
    y: 550, 
    image
}), new Platform({
    x: 120,
    y: 550,
    image
}),
new Platform({
    x: 240,
    y: 550,
    image
}),
,
new Platform({
    x: 360,
    y: 550,
    image
}),
new Platform({
    x: 480,
    y: 550,
    image
}),
new Platform({
    x: 560,
    y: 550,
    image
}),
new Platform({
    x: 850,
    y: 400,
    image
}),
new Platform({
    x: 850,
    y: 470,
    image
}),
new Platform({
    x: 970,
    y: 470,
    image
}),
new Platform({
    x: 930,
    y: 550,
    image
}),
new Platform({
    x: 1100,
    y: 550,
    image
}),
new Platform({
    x: 1180,
    y: 350,
    image
}),
new Platform({
    x: 1480,
    y: 350,
    image
}),
new Platform({
    x: 1780,
    y: 350,
    image
}),
]

let scrollOffset = 0;

// animate loop to update the frame
function animate () {

    window.requestAnimationFrame(animate)
    //clearing canvas each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //drawing background layers
    backgroundLevel1.draw();
    backgroundLevel2.draw();
    backgroundLevel3.draw();
    player.velocity.x = 0;
    
    //player movement updates
    if (keys.d.pressed && player.position.x <= 400 ) {
        player.velocity.x = 3;
    } else if (keys.a.pressed && player.position.x >= 100) {
        player.velocity.x = -3;
    } else player.velocity.x = 0;

    if (keys.d.pressed) {
        scrollOffset += 5
        platforms.forEach(platform => {
             platform.position.x -= 6;
        }) 
    } else if (keys.a.pressed) {
        scrollOffset -= 5
        platforms.forEach(platform => {
           platform.position.x += 5;
        })  
    }
    //drawing platforms and player
    platforms.forEach(platform => {
        platform.draw();
    })
    player.draw();
    player.update();

    //rectangle collision detection for player
    platforms.forEach(platform => {
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y && 
            player.position.x + player.width >= platform.position.x && 
            platform.position.x + platform.width >= player.position.x
            

        )
        { 
        player.velocity.y = 0;

        }

    })
}


animate();




