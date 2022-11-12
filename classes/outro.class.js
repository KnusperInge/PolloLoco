class Outro extends DrawableObject{

    IMAGE_LOSE = [
        'img/9_intro_outro_screens/game_over/game over!.png',
        'img/9_intro_outro_screens/game_over/game over.png',
        'img/9_intro_outro_screens/game_over/oh no you lost!.png',
        'img/9_intro_outro_screens/game_over/you lost.png',
    ];
    constructor(){
        super().loadImage('img/9_intro_outro_screens/game_over/game over!.png');
        this.loadImages(this.IMAGE_LOSE);
        this.animate();
        this.height=480;
        this.width=720;
        this.position_Y=0;
        this.position_X=0;
    }

    animate(){
        setInterval(()=>{
            this.playAnimation(this.IMAGE_LOSE);
        },3000);
    }
}