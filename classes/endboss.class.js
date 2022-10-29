class Endboss extends MovableObjekt{
    height=500;
    width=300;
    position_Y=-50;
    
    IMAGES_WALKING = [
       'img/4_enemie_boss_chicken/3_attack/G13.png',
       'img/4_enemie_boss_chicken/3_attack/G14.png',
       'img/4_enemie_boss_chicken/3_attack/G15.png',
       'img/4_enemie_boss_chicken/3_attack/G16.png',
       'img/4_enemie_boss_chicken/3_attack/G17.png'
    ];
    constructor(){
        super().loadImage('img/4_enemie_boss_chicken/3_attack/G13.png');
        this.loadImages(this.IMAGES_WALKING); 
        this.position_X=3280;
        this.animate();
    }
    animate() {
        
        setInterval(() => {
         this.playAnimation(this.IMAGES_WALKING);
           
        }, 200);
    }
}