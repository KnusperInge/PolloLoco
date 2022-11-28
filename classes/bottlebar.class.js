class bottleBar extends DrawableObject{
    IMAGES=[
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    constructor(bottles){
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0,bottles);
     this.position_X=20;
            this.position_Y=40;
            this.width=150;
            this.height=50;
          //  console.log('Flaschen',this.world.level.bottle.lengh);
    }
      // z.b setPercentage(50)
  setPercentage(bottles,availableBottles) {
    this.collectedBottles = bottles; //Zahl zwischen 0...5 ermitteln
  this.loadedBottles= availableBottles;
    let imagePath=this.IMAGES[this.resolveImageIndex()];
   this.img = this.imageCache[imagePath];
}


resolveImageIndex() {
  if (this.collectedBottles == this.loadedBottles) {
      return 5; //100%
  } else if (this.collectedBottles> this.loadedBottles-2) {
      return 4; //80%
  } else if (this.collectedBottles >this.loadedBottles/2 ) {
      return 3; //60%
  } else if (this.collectedBottles > this.loadedBottles/3) {
      return 2; //40%
  } else if (this.collectedBottles > this.loadedBottles/5) {
      return 1; //20%
  } else {
      return 0; //0%
  }
}
}