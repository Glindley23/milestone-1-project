//player movement events
//key down
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        //player jump
        case 'w':
            if (player.velocity.y === 0) {
                
                player.velocity.y = -15
                player.image.src = "../assets/player/jump.png"
            }
        break
        //move player to the left
        case 'a':
            keys.a.pressed = true
            player.image.src = "../assets/player/runleft.png"
        break
        //move player to the right
        case 'd':
            keys.d.pressed = true
            player.image.src = "../assets/player/run.png"
        break
    }
})
//key up
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;
            player.image.src = "../assets/player/idleleft.png"
        break
        
        case 'd':
            keys.d.pressed = false;
            player.image.src = "../assets/player/idle.png"
        break
    }
})

    let myModal = document.getElementById("myModal");
    let myOverlay = document.getElementById('overlay');
    let startButton = document.getElementById("start-btn");
    
    
    startButton.onclick = function () {
        startButton.style.display = 'none';
        myModal.style.display = 'none';
        myOverlay.style.display = 'none';
        init();
    }
        