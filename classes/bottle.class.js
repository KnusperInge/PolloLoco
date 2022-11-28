class bottle extends DrawableObject{

    constructor(imgPath,x,y){
        super().loadImage(imgPath);
        this.position_X=250+Math.random()*this.levelEndX-100;
       this.position_Y=370;
        this.height=70;
        this.width=70;
        
    }
}