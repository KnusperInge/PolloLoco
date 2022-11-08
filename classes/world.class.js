class World {
  
    character = new Charakter();
    healthBar = new Healthbar();
    coinsBar = new CoinsBar();
    bottleBar = new bottleBar();
    throwableObjects = [];
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_X = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        //this.read();
    }

    read() {
        console.log('angelegte Flaschen', this.drawableObject.world.level.bottle.length);
    }

    setWorld() {
        this.character.world = this;
       

    }

    run() {
        setInterval(() => {
            this.collBottle();
            this.collEnemy();
            this.collCoin();
            this.checkThrowableObjects();
        }, 200);
    }


    collEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {

                this.character.hit();
                this.healthBar.setPercentage(this.character.health);
            }
        })
    }

    collCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                coin.delete();
                console.log('collect Coin:', this.character.coins);

                this.coinsBar.setPercentage(this.character.coins);
            }
        })
    }

    collBottle(){
        this.level.bottle.forEach((bottle)=>{
            if(this.character.isColliding(bottle)){
               
                this.character.collectBottle();
              // this.throwableObjects.push(bottle);
            console.log('gesamelte Flaschen', this.character.collectedBottles);
               bottle.delete();
               
               this.bottleBar.setPercentage(this.character.collectedBottles,this.level.bottle.length);
            }
        })
    }

    checkThrowableObjects() {
        if (this.keyboard.F && this.character.collectedBottles >0) {
           
           let bottle = new throwableObject(this.character.position_X + 100, this.character.position_Y + 100);
           bottle.throw(); // werfen
           
            this.throwableObjects.push(bottle);
            this.character.collectedBottles-=1;
            this.bottleBar.setPercentage(this.character.collectedBottles,this.level.bottle.length);
            console.log('geworfene Flaschen', this.throwableObjects.length);
        
    }
    }



    draw() {
        //Canvas leerenf
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_X, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_X, 0);
        //--------- Space for Fixed Elements--------------
        this.addToMap(this.healthBar);
        this.addToMap(this.coinsBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_X, 0);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_X, 0);

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }


    addToMap(mo) {
        if (mo.ohterDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);

        mo.drawFrame(this.ctx);

        if (mo.ohterDirection) {
            this.flipImageBack(mo);

        }
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.position_X = mo.position_X * -1;
    }

    flipImageBack(mo) {
        mo.position_X = mo.position_X * -1;
        this.ctx.restore();
    }

}