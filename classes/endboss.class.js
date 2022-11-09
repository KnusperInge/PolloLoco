class Endboss extends MovableObjekt{
    height=500;
    width=300;
    position_Y=-50;
   damage=20;
    IMAGES_WALKING = [
       'img/4_enemie_boss_chicken/3_attack/G13.png',
       'img/4_enemie_boss_chicken/3_attack/G14.png',
       'img/4_enemie_boss_chicken/3_attack/G15.png',
       'img/4_enemie_boss_chicken/3_attack/G16.png',
       'img/4_enemie_boss_chicken/3_attack/G17.png'
    ];

    IMAGES_HURT=[
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD=[
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    constructor(){
        super().loadImage('img/4_enemie_boss_chicken/3_attack/G13.png');
        this.loadImages(this.IMAGES_WALKING); 
       this.loadImages(this.IMAGES_DEAD);
       this.loadImages(this.IMAGES_HURT);
       this.health=100;
       this.position_X=3280;
        this.animate();
    }
    animate() {
        
        setInterval(() => {
        if(this.isDead()){
            this.playAnimation(this.IMAGES_DEAD);
        }else if(this.isHurt()){
            this.playAnimation(this.IMAGES_HURT);
        }else{
        
            this.playAnimation(this.IMAGES_WALKING);
        } 
        }, 200);
    }
}