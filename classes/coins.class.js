class Coins extends MovableObjekt {
height=120;
width=120;

constructor(x,y){
super().loadImage('img/8_coin/coin_2.png');
this. position_X=x;
this.position_Y=y;


}


delete(){
    this.position_Y=500;
}

 }