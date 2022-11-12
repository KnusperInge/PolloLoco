class Chicken extends MovableObjekt {
    height = 50;
    width = 50;
    position_Y = 380;
    damage=2;
 

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.position_X=350+Math.random()*2500;
        this.speed=0.25+Math.random()*0.5; 
        this.animate();
        this.health=2;
    }
    animate() {
        this.setStoppableIntervals(() => {
            if(this.isDead()){
              this.dead();
            }  else{
                this.moveLeft();
            }   
        }, 1000 / 60);
        
       this.setStoppableIntervals(() => {
           if(this.isDead()){
            this.loadImage('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
           }else{
            this.playAnimation(this.IMAGES_WALKING);
        }  
                  
                 
              }, 200);
    }
dead(){
    this.position_X=this.position_X;
   this.setStoppableIntervals(()=>{
      this.moveDown();
    },1000);
    
}
    
}