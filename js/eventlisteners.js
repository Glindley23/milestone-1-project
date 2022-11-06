//player movement events
//key down
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        //player jump
        case 'w':
            if (player.velocity.y === 0) {
                
                player.velocity.y = -15
                
            } 
        break
        //move player to the left
        case 'a':
            keys.a.pressed = true
        break
        //move player to the right
        case 'd':
            keys.d.pressed = true
        break
    }
})
//key up
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;
        break
        
        case 'd':
            keys.d.pressed = false;
        break
    }
})