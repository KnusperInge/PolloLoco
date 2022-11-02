class CoinsBar extends DrawableObject {

  percentage=0;
  coins=0;

    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',

    ];
constructor(){
    super();
    this.loadImages(this.IMAGES_COINS);
    this.setPercentage(0,this.IMAGES_COINS);
 this.position_X=20;
        this.position_Y=40;
        this.width=150;
        this.height=50;
}
}