class BackgroundObject extends MovableObjekt{
    width=720;
    height=480;
   

    constructor(imagePath,x){
        super().loadImage(imagePath);
        this.position_X=x;
        this.position_Y= 480-this.height;
    }
}