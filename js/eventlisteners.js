//player movement events
//key down
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        //player jump
        case 'w':
            if (player.velocity.y === 0) {
                
                player.velocity.y = -15
                player.image.src = "./assets/images/jump.PNG"
            }
        break
        //move player to the left
        case 'a':
            keys.a.pressed = true
            player.image.src = "./assets/images/runleft.PNG"
        break
        //move player to the right
        case 'd':
            keys.d.pressed = true
            player.image.src = "./assets/images/run.PNG"
        break
    }
})
//key up
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;
            player.image.src = "./assets/images/idleleft.PNG"
        break
        
        case 'd':
            keys.d.pressed = false;
            player.image.src = "./assets/images/idle.PNG"
        break
    }
})

    let myModal = document.getElementById("myModal");
    let myOverlay = document.getElementById('overlay');
    let startButton = document.getElementById("start-btn");
    let deathModal = document.getElementById('deathModal');
    let restartButton = document.getElementById('restart-btn')
    let winModal = document.getElementById('winModal')
    
    
    //click "Start Game" to begin
    startButton.onclick = function () {
        startButton.style.display = 'none';
        myModal.style.display = 'none';
        myOverlay.style.display = 'none';
        init();
    }
    
    restartButton.onclick = function() {
        restartButton.style.display = 'none';
        winModal.style.display = 'none';
        deathModal.style.display = 'none';
        myOverlay.style.display = 'none';
        init();
    }
    
    function restart () {
        myOverlay.style.display = 'block';
        restartButton.style.display = 'block';
        
    }


    