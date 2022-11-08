class MovableObjekt extends DrawableObject {
    speedY = 0;
    acceleration = 2.5; //Fallgeschwindigkeit
    ohterDirection = false;
    speed = 0.15;
   lastHit=0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.position_Y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
    isAboveGround() {
       if(this instanceof throwableObject){
        return true;
       }else{
        return this.position_Y < 180;
       }
        
    }


 
    


    // z.b. charakter.isColiding(chicken);
    isColliding(mo) {
        return this.position_X + this.width > mo.position_X &&
            this.position_Y + this.height > mo.position_Y &&
            this.position_X < mo.position_X &&
            this.position_Y < mo.position_Y + mo.height
    }


    moveRight() {
        this.position_X += this.speed;
    }

    moveLeft() {
        this.position_X -= this.speed;
    }



    jump() {
        this.speedY = 30;
    }

   
    // Schaden 
    hit() {
       this.health -= 2;
        if (this.health < 0) {
            this.health = 0;
        }else{
            this.lastHit= new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime()-this.lastHit;
        timepassed=timepassed/1000; //Differenz in Sek
        return timepassed <0.25;
    }

    isDead(){
        return this.health==0;
    }
   
}