//Making a platformer!
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 1024;
ctx.canvas.height = 576;

//creating background sprite levels 
let backgroundLevel1 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/sky.png',
})
let backgroundLevel1cont = new Sprite({
    position: {
    x: 64 * 7,
    y: 0,
    },
    imageSrc: 'assets/background/sky.png',
})
let backgroundLevel2 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/city.png',
})
let backgroundLevel3 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/city Foreground.png',
})

//keys
let keys = {
    d: {
        pressed: false
    }, 
    a: {
        pressed: false
    }
}

// Create new player
let player = new Player();

//main platform sprite
let image = new Image();
image.src = '../assets/platforms/ground0.png';

// create platforms
let platforms = [
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
    x: 1000,
    y: 550,
    image
}),
new Platform({
    x: 1170,
    y: 350,
    image
}),
new Platform({
    x: 1430,
    y: 320,
    image
}),
new Platform({
    x: 1700,
    y: 370,
    image
}),new Platform({
    x: 1950,
    y: 290,
    image
}),new Platform({
    x: 2290,
    y: 550,
    image
}),new Platform({
    x: 2550,
    y: 400,
    image
}),
new Platform({
    x: 2500,
    y: 440,
    image
}),
new Platform({
    x: 2700,
    y: 340,
    image
}),

new Platform({
    x: 2950,
    y: 260,
    image
}),
//ending
new Platform({
    x: 2700,
    y: 140,
    image
}),
]

//create win condition
let victoryImage = new Image();
victoryImage.src = '../assets/victory/grail.png'

let winCondition = new Grail({
    x:2740,
    y:90
})

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
        player.velocity.x = 1;
    } else if (keys.a.pressed && player.position.x >= 100) {
        player.velocity.x = -1;
    } else player.velocity.x = 0;

    if (keys.d.pressed) {
        scrollOffset += 6
        platforms.forEach(platform => {
             platform.position.x -= 6;
        }) 
        winCondition.position.x -= 6;
    } else if (keys.a.pressed) {
        scrollOffset -= 5
        platforms.forEach(platform => {
           platform.position.x += 6;
           
        }) 
        winCondition.position.x += 6; 
    }
    //drawing platforms and player
    
    platforms.forEach(platform => {
        platform.draw();
    })
    winCondition.draw();
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
    ctx.fillText("Grail Jump", 360, 60);
    ctx.font = '60px Fantasy'
    })
    
    //win condition

    //lose condition
    if ( player.position.y > canvas.height ) {
        console.log('You lose');
        init();
    }
}

//init function to reset game on death or at start
function init() {
    
    //creating background sprite levels 
backgroundLevel1 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/sky.png',
})
backgroundLevel1cont = new Sprite({
    position: {
    x: 64 * 7,
    y: 0,
    },
    imageSrc: 'assets/background/sky.png',
})
backgroundLevel2 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/city.png',
})
backgroundLevel3 = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: 'assets/background/city Foreground.png',
})

// Create new player
player = new Player();

//main platform sprite
image = new Image();
image.src = '../assets/platforms/ground0.png';

// create platforms
platforms = [
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
    x: 1000,
    y: 550,
    image
}),
new Platform({
    x: 1170,
    y: 350,
    image
}),
new Platform({
    x: 1430,
    y: 320,
    image
}),
new Platform({
    x: 1700,
    y: 370,
    image
}),new Platform({
    x: 1950,
    y: 290,
    image
}),new Platform({
    x: 2290,
    y: 550,
    image
}),new Platform({
    x: 2550,
    y: 400,
    image
}),
new Platform({
    x: 2500,
    y: 440,
    image
}),
new Platform({
    x: 2700,
    y: 340,
    image
}),

new Platform({
    x: 2950,
    y: 260,
    image
}),
//ending
new Platform({
    x: 2700,
    y: 140,
    image
}),
]

//create win condition image
victoryImage = new Image();
victoryImage.src = '../assets/victory/grail.png'

winCondition = new Grail({
    x:2740,
    y:90
})
//scroll offset
scrollOffset = 0;

}

init();
animate();
function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')


let openModalButtons = document.querySelectorAll('[data-modal-target]')
let closeModalButtons = document.querySelectorAll('[data-close-button]')
let overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        let modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        let modal = button.closest('.modal')
        closeModal(modal);
    })
})


}