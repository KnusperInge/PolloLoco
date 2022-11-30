class CoinsBar extends DrawableObject {

    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.setPercentage(0);
        this.position_X = 20;
        this.position_Y = 80;
        this.width = 150;
        this.height = 50;
    }
    // z.b setPercentage(50)
    setPercentage(coins) {
        this.coins = coins; //Zahl zwischen 0...5 ermitteln
        let imagePath = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    resolveImageIndex() {
        if (this.coins == 10) {
            return 5;
        } else if (this.coins > 8) {
            return 4;
        } else if (this.coins > 6) {
            return 3;
        } else if (this.coins > 4) {
            return 2;
        } else if (this.coins > 2) {
            return 1;
        } else {
            return 0;
        }
    }
}