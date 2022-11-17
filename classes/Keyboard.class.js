class Keyboard{
    LEFT=false;
    RIGHT=false;
    UP=false;
    DOWN=false;
    SPACE=false;
    F= false;

    constructor(){
this.keyEvent();
this.touchEvent();
    }
keyEvent(){
    window.addEventListener('keydown',(event)=>{
  
        if(event.keyCode==39){
            this.RIGHT=true;
        }
        if(event.keyCode==37){
            this.LEFT=true;
        }
        if(event.keyCode==38){
            this.UP=true;
        }
        if(event.keyCode==40){
            this.DOWN=true;
        }
        if(event.keyCode==32){
            this.SPACE=true;
        }
        if(event.keyCode==70){
            this.F=true;
        }
        
    
    })
    
    window.addEventListener('keyup',(event)=>{
        if(event.keyCode==39){
            this.RIGHT=false;
        }
        if(event.keyCode==37){
            this.LEFT=false;
        }
        if(event.keyCode==38){
            this.UP=false;
        }
        if(event.keyCode==40){
            this.DOWN=false;
        }
        if(event.keyCode==32){
            this.SPACE=false;
         }
         if(event.keyCode==70){
            this.F=false;
        }
})
}  
touchEvent(){
    document.getElementById('btn_Left').addEventListener('touchstart',()=>{
        this.LEFT=true;
    });
    document.getElementById('btn_Left').addEventListener('touchend',()=>{
        this.LEFT=false;
         });
    document.getElementById('btn_Right').addEventListener('touchstart',()=>{
        this.RIGHT=true;
         });
    document.getElementById('btn_Right').addEventListener('touchend',()=>{
        this.RIGHT=false;
       });
       document.getElementById('btn_Jump').addEventListener('touchstart',()=>{
        this.SPACE=true;
         });
    document.getElementById('btn_Jump').addEventListener('touchend',()=>{
        this.SPACE=false;
       });
       document.getElementById('btn_Fire').addEventListener('touchstart',()=>{
        this.F=true;
         });
    document.getElementById('btn_Fire').addEventListener('touchend',()=>{
        this.F=false;
       });
   
} 

}