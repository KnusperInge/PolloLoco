class Cloud extends MovableObjekt {
  position_Y = 10;
  height = 250;
  width = 600;

  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/1.png');
    this.position_X = 0 + Math.random() * 2500; // Zahl zw. 200 und 700
    this.animate();
  }
  animate() {
    this.moveLeft();
  }

}