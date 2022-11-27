class Outro extends DrawableObject{
loop=0;
world;
    IMAGE_LOSE = [
        'img/9_intro_outro_screens/game_over/game over!.png',
        'img/9_intro_outro_screens/game_over/game over.png',
        'img/9_intro_outro_screens/game_over/oh no you lost!.png',
        'img/9_intro_outro_screens/game_over/you lost.png',
    ];
    constructor(i){
        super().loadImage('img/9_intro_outro_screens/game_over/game over!.png');
        this.loadImages(this.IMAGE_LOSE);
        this.animate();
        this.height=480;
        this.width=720;
        this.position_Y=0;
        this.position_X=0;
        this.loop=i;
    }

    animate(){
     var interval= setInterval(()=>{
            this.playAnimation(this.IMAGE_LOSE);
       if(this.world.character.isDead()){
        this.loop+=1;
      
       }
          
       
       if(this.loop==5){
        clearInterval(interval);
        document.getElementById('startScreen').classList.add('d-flex');
        document.getElementById('startScreen').classList.remove('d-none');
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('startBtn').classList.add('d-none');
        document.getElementById('reloadBtn').classList.remove('d-none');
        
    }
      
        },3000);
    }
}