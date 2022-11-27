class Endboss extends MovableObjekt {
    height = 500;
    width = 300;
    position_Y = -50;
    damage = 25;
    firstContact = false;
    world;
    loop=0;

    IMAGES_INTRO = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/3_attack/G13.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_INTRO);
        this.health = 100;
        this.position_X = 3280;
        this.animate();
        this.speed=0;
     
    }
    animate() {
        let i = 0;
       this.setStoppableIntervals(() => {
          if(this.isDead()){
            this.loop+=1;
            console.log('endboss Loop', this.loop);
          }
      
           if(i<10){
                this.playAnimation(this.IMAGES_INTRO);
            }else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            }
            if(this.world.character.position_X>2800 && !this.firstContact){
                i=0;
                console.log('hallo', i);
               this.firstContact=true;
               this.speed=10;
            } 
            i++;
            
           if(this.loop==24){
            clearInterval(this.stopIntervals());
            document.getElementById('startScreen').classList.add('d-flex');
           
           }

        }, 200);
    }
}