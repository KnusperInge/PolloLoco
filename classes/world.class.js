class World {

    level = level1;
    outro = new Outro(0);
    healthBar = new Healthbar(20, 0);
    coinsBar = new CoinsBar();
    bottleBar = new bottleBar(this.level.bottle.length);
    finalBossHealthbar = new Healthbar(550, 0);
    EndBoss = new Endboss();
    character = new Charakter();
    throwableObjects = [];
    ctx;
    canvas;
    keyboard;
    camera_X = 0;
    dead = false;
    gameStatus = false;

    constructor(canvas, keyboard) {
        this.setWorld();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.run();

    }

    setWorld() {
        this.character.world = this;
        this.EndBoss.world = this;
        this.outro.world = this;
    }

    draw() {
        //Canvas leeren
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_X, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_X, 0);
        //--------- Space for Fixed Elements--------------//
        this.addToMap(this.healthBar);
        this.addToMap(this.coinsBar);
        this.addToMap(this.bottleBar);
        // Add Finalboss Healthbar
        if (this.EndBoss.firstContact) {
            this.addToMap(this.finalBossHealthbar);
        }
        if (this.dead) {
            this.addToMap(this.outro);
        }
        this.ctx.translate(this.camera_X, 0);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addToMap(this.character);
        this.addToMap(this.EndBoss);
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
        // mo.drawFrame(this.ctx);
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

    run() {
        setInterval(() => this.checkCollisons(), 1000 / 60);
        setInterval(() => this.checkThrowableObjects(), 250);
    }

    checkCollisons() {
        this.collBottle();
        this.collEnemy();
        this.collFinalBoss();
        this.collCoin();
        this.checkWin();
        this.checkDead();
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

    // Char is colliding with Enemy
    collEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.dead) {
                this.letitDie(enemy);
            } else if (this.character.isAboveGround() && this.character.isColliding(enemy)) {
                // Hit Enemy with Jumps
                enemy.hit(this.character.damage);
            } else if (!this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isDead()) {
                // Hit Enemy with collision
                enemy.hit(this.character.damage);
                this.character.hit(enemy.damage);
                this.healthBar.setPercentage(this.character.health);
            }
        })
    }

    // Char is colliding with Final Boss
    collFinalBoss() {
        if (this.dead) {
            this.letitDie(this.EndBoss);
        } else if (this.character.isColliding(this.EndBoss)) {
            this.EndBoss.hit(this.character.damage);
            this.character.hit(this.EndBoss.damage);
            this.healthBar.setPercentage(this.character.health);
            this.finalBossHealthbar.setPercentage(this.EndBoss.health);
        }
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

    checkWin() {
        if (this.EndBoss.isDead()) {
            this.gameStatus = true;
        }
    }

    checkDead() {
        if (this.character.isDead()) {
            this.dead = true;
        } else {
            this.dead = false;
        }
    }

    //Char is Dead
    letitDie(enemy) {
        this.character.stopIntervals();
        this.character.delete();
        enemy.stopIntervals();
        enemy.delete();
        this.level.coins.forEach((coin) => {
            coin.delete();
        })
        this.level.bottle.forEach((b) => {
            b.delete();
        })
    }

    checkThrowableObjects() {
        if (this.keyboard.F && this.character.collectedBottles > 0) {
            let bottle = new throwableObject(this.character.position_X + 100, this.character.position_Y + 100);
            this.throwABottle(bottle);
            setInterval(() => {
                //Check Bottlecollison
                this.hitChickens(bottle);
                this.hitBoss(bottle);
                this.hitGround(bottle);
            }, 100);
            this.bottleBar.setPercentage(this.character.collectedBottles, this.level.bottle.length);
        }
    }

    throwABottle(bottle) {
        bottle.throw(); // werfen
        this.throwableObjects.push(bottle);
        this.character.collectedBottles -= 1;
    }

    hitChickens(bottle) {
        return this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy)) {
                bottle.splash();
                enemy.hit(bottle.damage);
            } else {
                return true
            }
        });
    }

    hitBoss(bottle) {
        if (bottle.isColliding(this.EndBoss)) {
            bottle.splash();
            this.EndBoss.hit(bottle.damage);
            this.finalBossHealthbar.setPercentage(this.EndBoss.health);
        }
    }

    hitGround(bottle) {
        if (!bottle.isAboveGround()) {
            bottle.splash();
        }
    }















}