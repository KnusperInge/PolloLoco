class MovableObjekt {
    speedY = 0;
    acceleration = 2.5; //Fallgeschwindigkeit
    ohterDirection = false;
    speed = 0.15;
    position_X = 120;
    position_Y = 180;
    height;
    width;
    img;
    currentImage = 0;
    imageCache = {};

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()|| this.speedY>0) {
                this.position_Y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
 isAboveGround(){
    return this.position_Y<180;
 }


    loadImage(path) {
        this.img = new Image(); //<img></img>
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx){
        ctx.drawImage(this.img, this.position_X, this.position_Y, this.width, this.height);
    }

    drawFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth='5';
        ctx.strokeStyle='blue';
        ctx.rect(this.position_X,this.position_Y,this.width,this.height);
        ctx.stroke();
    }

    moveRight() {
        this.position_X += this.speed;
 }

    moveLeft() {
        this.position_X -= this.speed;
     }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump(){
        this.speedY=30;
    }

}