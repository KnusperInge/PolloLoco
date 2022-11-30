class Charakter extends MovableObjekt {
    height = 250;
    width = 130;
    speed = 5;
    position_Y = 80;
    world;
    groundPosY = 180;
    offSet = {
        Left: 20,
        Right: 20,
        Top: 50,
        Bottom: 0,
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
        this.jumpheight = 30;
        this.damage = 10;
        this.health = 100;
    }

    animate() {
        this.setStoppableIntervals(() => this.moveChararacter(), 1000 / 60);
        this.setStoppableIntervals(() => this.animChararacter(), 60);
    }

    moveChararacter() {
        //rechts laufen
        this.moveCharRight();
        //links laufen
        this.moveCharLeft();
        // springen
        this.moveJump();
        this.world.camera_X = -this.position_X + 100;
    }

    animChararacter() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);

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

    moveJump() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
    }

    moveCharLeft() {
        if (this.world.keyboard.LEFT && this.position_X > 100) {
            this.moveLeft();
            this.ohterDirection = true;
        }
    }
    moveCharRight() {
        if (this.world.keyboard.RIGHT && this.position_X < this.levelEndX) {
            this.moveRight();
            this.ohterDirection = false;
        }
    }
}