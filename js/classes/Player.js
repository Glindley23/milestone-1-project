class Player {
    constructor() {
        
        this.image = new Image()
        this.image.src = '../assets/player/M484SpaceSoldier.png'
        this.position = {
            x: 110,
            y: 100
        }
        
        this.velocity = {
            x: 0 ,
            y: 0,
        }

        this.width =  128
        this.height = 128
        this.sides = {
            bottom: this.position.y + this.height,
            top: this.position.x,
        }
        
        this.gravity = 1 
       
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        //ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
        if (this.sides.bottom < canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
            this.position.y = canvas.height - 20
        }
    }

    
};

