class Player {
    constructor() {
        
        this.image = new Image()
        this.image.src = '../assets/player/idle.png'
        this.position = {
            x: 110,
            y: 480
        }
        
        this.velocity = {
            x: 0 ,
            y: 0,
        }
        
        this.width =  35
        this.height = 70
        this.sides = {
            bottom: this.position.y + this.height,
            top: this.position.x,
        }
        
        this.gravity = 1 
       
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y )
    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
        if (this.sides.bottom < canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
            this.position.y = canvas.height - 70
        }
        if (this.position.y + this.height >= canvas.height) {
            this.image.src = '../assets/player/playerdeath.png'
        }
    }

    
};
