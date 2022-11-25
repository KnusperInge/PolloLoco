let canvas;
let world;
let keyboard=new Keyboard();


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
    init();
}
function reload(){
    location.reload();
}
function init(){
    
    canvas=document.getElementById('canvas');
    
    world= new World(canvas,keyboard);

   
}



