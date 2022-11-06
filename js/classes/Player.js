class Player {
    constructor() {
        this.position = {
            x: 110,
            y: 100
        }
        
        this.velocity = {
            x: 0 ,
            y: 0,
        }

        this.width = 20
        this.height = 20
        this.sides = {
            bottom: this.position.y + this.height,
            top: this.position.x,
        }
        
        this.gravity = 1 
       
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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

