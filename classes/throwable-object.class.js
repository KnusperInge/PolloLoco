class throwableObject extends MovableObjekt{
    rotatingBottle;
IMAGE_ROTATION=[
'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
];

IMAGE_SPLASH=[
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
];

    constructor(x,y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGE_ROTATION);
       this.loadImages(this.IMAGE_SPLASH);
        this.position_X= x;
        this.position_Y=y;
        this.width=50;
        this.height=50;
     this.damage=5;
        //this.throw();

    }

    throw(){
        this.speedY=30;
        this.applyGravity();
       this.rotatingBottle= setInterval(()=>{
            this.position_X+=30;
           this.playAnimation(this.IMAGE_ROTATION);
        },100 )
    }
   
    splash(){
        setInterval(()=>{
            this.playAnimation(this.IMAGE_SPLASH);
            clearInterval(this.rotatingBottle);
           
           
        },100);
    }
}