class bottle extends DrawableObject{

    constructor(imgPath,x,y){
        super().loadImage(imgPath);
        this.position_X=x;
        this.position_Y=y;
        this.height=70;
        this.width=70;
    }
}