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
    this.setPercentage(0);
 this.position_X=20;
        this.position_Y=40;
        this.width=150;
        this.height=50;
}
  // z.b setPercentage(50)
  setPercentage(percentage) {
    this.percentage = percentage; //Zahl zwischen 0...5 ermitteln
   let imagePath=this.IMAGES_COINS[this.resolveImageIndex()];
   this.img = this.imageCache[imagePath];
}


resolveImageIndex() {
  if (this.coins == 10) {
      return 5;
  } else if (this.percentage > 8) {
      return 4;
  } else if (this.percentage > 6) {
      return 3;
  } else if (this.percentage > 4) {
      return 2;
  } else if (this.percentage > 2) {
      return 1;
  } else {
      return 0;
  }
}
}