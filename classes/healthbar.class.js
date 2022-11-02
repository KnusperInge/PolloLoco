class Healthbar extends DrawableObject {

    percentage = 100;

    IMAGES_HEALTHBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
       
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.setPercentage(100,this.IMAGES_HEALTHBAR);

       this.position_X=20;
        this.position_Y=0;
        this.width=150;
        this.height=50;
    }



}