class throwableObject extends MovableObjekt{
    
IMAGE_ROTATION=[
'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
];

    constructor(x,y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGE_ROTATION);
        this.position_X= x;
        this.position_Y=y;
        this.width=50;
        this.height=50;
      //this.throw();

    }

    throw(){
        
        this.speedY=30;
        this.applyGravity();
        setInterval(()=>{
            this.position_X+=10;
           this.playAnimation(this.IMAGE_ROTATION);
        },1000/60)
    }
}