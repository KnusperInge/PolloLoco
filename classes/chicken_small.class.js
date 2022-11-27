class Chicken_Small extends MovableObjekt {
    height = 80;
    width = 80;
    position_Y = 350;
    groundPosY=350;
    damage=5;
 

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.position_X=350+Math.random()*2500;
        this.speed=0.25+Math.random()*0.5; 
       this.jumpheight=Math.random()*35;
        this.animate();
       this.applyGravity();
        this.health=2;
        this.ground
    }
    animate() {
        this.setStoppableIntervals(() => {
            if(this.isDead()){
              this.dead();
            }  else{
                this.moveLeft();
             if(!this.isAboveGround()){
                this.jump();
             }
                
            }   
        }, 1000 / 60);
        
       this.setStoppableIntervals(() => {
           if(this.isDead()){
            this.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
           }else{
            this.playAnimation(this.IMAGES_WALKING);
        }  
                  
                  
              },200);
    }

    dead(){
    this.position_X=this.position_X;
   this.setStoppableIntervals(()=>{
      this.moveDown();
    },250);
    
}
    
}