class Charakter extends MovableObjekt {
    height = 250;
    width = 130;
    speed = 5;
    position_Y = 80;
    world;
    walking_sound = new Audio('audio/walking.mp3');
    damage=10;
health=10;
    offSet={
        Left:40,
        Right:30,
        Top:120,
        Bottom:30,
    };

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
      
        this.animate();
        this.applyGravity();
       
    }

 

    animate() {
        this.setStoppableIntervals(()=>this.moveChar(), 1000 / 60);
        this.setStoppableIntervals(() => this.animChar(), 60);
    }

    moveChar() {
        this.walking_sound.pause();
        //rechts laufen
        if (this.world.keyboard.RIGHT && this.position_X < this.world.level.levelEnd_X) {
            this.moveRight();
            this.ohterDirection = false;
            this.walking_sound.play();
        }
        //links laufen
        if (this.world.keyboard.LEFT && this.position_X > 100) {
            this.moveLeft();
            this.ohterDirection = true;
            this.walking_sound.play();
        }
        // springen
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
       
        this.world.camera_X = -this.position_X + 100;
    }

    animChar() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            this.stopIntervals();
          //  this.world.enemies.forEach(stopIntervals);
         } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);

        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);

        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Laufanimation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }


}