class Platform {
    constructor({ x, y, image }) {
       this.position = {
        x,
        y
       } 
       this.image = image

       this.width = 120
       this.height = 40
       
    }

    draw() {
        //ctx.fillStyle = 'red'
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}