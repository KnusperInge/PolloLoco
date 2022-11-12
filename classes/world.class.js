class World {

    character = new Charakter();
    outro = new Outro();
    endBoss;
    healthBar = new Healthbar(20, 0);
    coinsBar = new CoinsBar();
    bottleBar = new bottleBar();
    finalBossHealthbar = new Healthbar(550, 0);
    throwableObjects = [];
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_X = 0;
dead=false;

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
        console.log(this.level.enemies[10].health);
    }

    setWorld() {
        this.endBoss = this.level.enemies[10];
        this.character.world = this;
        this.endBoss.world = this;


    }

    run() {
        setInterval(() => {

            this.collBottle();
            this.collEnemy();
            this.collCoin();
            this.checkThrowableObjects();
            this.checkDead();
        }, 200);
    }

letitDie(enemy){
    this.character.stopIntervals();
    this.character.delete();
    enemy.stopIntervals();
    enemy.delete();
    this.level.coins.forEach((coin)=>{
        coin.delete();
    })
    this.level.bottle.forEach((b)=>{
        b.delete();
    })
}

checkDead(){
if(this.character.isDead()){
    this.dead=true;
   // this.outro.animate();
}else{
    this.dead=false;
}
}

    hitChickens(bottle) {
        return this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy)) {
                enemy.hit(bottle.damage);
                this.read();
                this.finalBossHealthbar.setPercentage(enemy.health);

            } else {
                return true
            }
        });
    }

    // Char is colliding with Enemy
    collEnemy() {
        this.level.enemies.forEach((enemy) => {
            if(this.dead){
             this.letitDie(enemy);
               
            }else
            if (this.character.isColliding(enemy)) {
                enemy.hit(this.character.damage);
                this.character.hit(enemy.damage);
                this.healthBar.setPercentage(this.character.health);
            }
        })
    }

    // Char is collecting Coins
    collCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                coin.delete();
                this.coinsBar.setPercentage(this.character.coins);
            }
        })
    }

    // Char is collecting Bottles
    collBottle() {
        this.level.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottle();
                bottle.delete();
                this.bottleBar.setPercentage(this.character.collectedBottles, this.level.bottle.length);
            }
        })
    }

    checkThrowableObjects() {
        if (this.keyboard.F && this.character.collectedBottles > 0) {
            let bottle = new throwableObject(this.character.position_X + 100, this.character.position_Y + 100);
            bottle.throw(); // werfen
            this.throwableObjects.push(bottle);
            this.character.collectedBottles -= 1;

            setInterval(() => {
                //Check Bottlecollison with Enemys 
                this.hitChickens(bottle);

            }, 100);

            this.bottleBar.setPercentage(this.character.collectedBottles, this.level.bottle.length);
        }
    }


    draw() {
        //Canvas leeren
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_X, 0);
      
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_X, 0);

        //--------- Space for Fixed Elements--------------
     
        this.addToMap(this.healthBar);
        this.addToMap(this.coinsBar);
        this.addToMap(this.bottleBar);
      
        // Add Finalboss Healthbar
        if (this.character.position_X >= 2900) {
            this.addToMap(this.finalBossHealthbar);
        }
        if(this.dead){
            this.addToMap(this.outro);
           
            console.log('tot, ende');
           }
        this.ctx.translate(this.camera_X, 0);


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