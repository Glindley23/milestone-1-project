class Grail {
    constructor({x, y}) {
       this.position = {x, y} 
       this.image = victoryImage;
       this.width = 80
       this.height = 80
       
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}