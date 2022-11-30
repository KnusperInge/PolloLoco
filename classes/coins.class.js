class Coins extends MovableObjekt {
    height = 120;
    width = 120;

    constructor() {
        super().loadImage('img/8_coin/coin_2.png');
        this.position_X = 250 + Math.random() * this.levelEndX - 100;
        this.position_Y = 150 + Math.random() * 200;
    }

}