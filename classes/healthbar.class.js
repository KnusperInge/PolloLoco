class Healthbar extends DrawableObject {

    percentage = 100;
    image;
    IMAGES_HEALTHBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',

    ];

    constructor(x, y) {
        super();
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.setPercentage(100);
        this.position_X = x;
        this.position_Y = y;
        this.width = 150;
        this.height = 50;
    }
    // z.b setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage; //Zahl zwischen 0...5 ermitteln
        let imagePath = this.IMAGES_HEALTHBAR[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 10) {
            return 1;
        } else {
            return 0;
        }
    }

}