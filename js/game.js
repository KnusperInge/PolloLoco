let canvas;
let world;
let keyboard=new Keyboard();
let fullscreen=false;

function openGameInfo(){
   document.getElementById('InfoFrame').classList.remove('d-none');
   document.getElementById('InfoFrame').classList.add('d-flex');
}

function closeGameInfo(){
    document.getElementById('InfoFrame').classList.remove('d-flex');
    document.getElementById('InfoFrame').classList.add('d-none');  
}

function start(){
  
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-flex');
    document.getElementById('canvas').classList.remove('d-none');
    init();
}
function reload(){
    location.reload();
    start();
}
function init(){
    
    canvas=document.getElementById('canvas');
    world= new World(canvas,keyboard);
    world.gameStatus=false;

   
}

function fullscreenModus(){
  let element=document.getElementById('display');
    if(!fullscreen){
        enterFullscreen(element);
    }else{
       exitFullscreen(); 
    }
}

function enterFullscreen(element) {
   fullscreen=true;
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
  }

  function exitFullscreen() {
    fullscreen=false;
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

