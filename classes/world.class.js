class World {
    character = new Charakter();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_X = 0;
    healthBar= new Healthbar();
   coinsBar= new CoinsBar();
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisons();
    }

    setWorld() {
        this.character.world = this;
       
    }

    checkCollisons(){
        setInterval(()=>{
            this.level.enemies.forEach((enemy)=>{
               if(this.character.isColliding(enemy)){
              this.character.hit();
             this.healthBar.setPercentage(this.character.health);
               } 
            })
        },200);
    }

    draw() {
        //Canvas leeren
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.translate(this.camera_X, 0);
      this.addObjectsToMap(this.level.backgroundObjects);
        
        this.ctx.translate(-this.camera_X, 0);
       //--------- Space for Fixed Elements--------------
        this.addToMap(this.healthBar);
       this.addToMap(this.coinsBar);
        this.ctx.translate(this.camera_X, 0);
        
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        
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