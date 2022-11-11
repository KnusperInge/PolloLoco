class DrawableObject {
    position_X = 120;
    position_Y = 180;
    height;
    width;
    img;
    imageCache = {};
    currentImage = 0;
    health = 100;
    coins = 0;
    collectedBottles = 0;
    loadedBottles = 0;
    damage = 0;

offSet={
    Left:0,
    Right:0,
    Top:0,
    Bottom:0,
};

    IMAGE_LOSE = [
        'img/9_intro_outro_screens/game_over/game over!.png',
        'img/9_intro_outro_screens/game_over/game over.png',
        'img/9_intro_outro_screens/game_over/oh no you lost!.png',
        'img/9_intro_outro_screens/game_over/you lost.png',
    ];

    draw(ctx) {
        ctx.drawImage(this.img, this.position_X, this.position_Y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Charakter || this instanceof Chicken || this instanceof throwableObject || this instanceof Endboss) {

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.position_X, this.position_Y, this.width, this.height);
            ctx.stroke();
        }
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    // z.b. charakter.isColiding(chicken);
    isColliding(mo) {
        return this.position_X + this.width - this.offSet.Right > mo.position_X + mo.offSet.Left &&
            this.position_Y + this.height - this.offSet.Bottom > mo.position_Y + mo.offSet.Top &&
            this.position_X + this.offSet.Left < mo.position_X - mo.offSet.Right &&
            this.position_Y + this.offSet.Top < mo.position_Y + mo.height - mo.offSet.Bottom
    }

    collectCoin() {
        this.coins += 1;
    }

    collectBottle() {
        this.collectedBottles += 1;
    }

    delete() {
        this.position_Y = 500;
    }






}