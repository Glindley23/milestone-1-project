//Making a platformer!
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 64 * 16;
ctx.canvas.height = 64 * 9;



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
// create platform
const platforms = [new Platform({x: 200, y: 500}), new Platform({x: 500, y: 400})]

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
    if (keys.d.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    } else if (keys.a.pressed && player.position.x > 100) {
        player.velocity.x = -5;
    } else player.velocity.x = 0;
    
    if (keys.d.pressed) {
        scrollOffset += 5
        platforms.forEach(platform => {
             platform.position.x -= 5;
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
        { player.velocity.y = 0;}
       
    })
}


animate();



    
/*player.position.x + player.width >= platform.position.x && 
player.position.x <= platform.position.x + platform.width && 
player.position.y + platform.height >= platform.position.y &&
player.position.y <= platform.position.y + platform.height*/