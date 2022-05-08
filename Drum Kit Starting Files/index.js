const button=document.querySelectorAll('.drum');
    for(let i=0;i<button.length;i++){
       
        button[i].addEventListener('click',function click(){
            this.style.color='white';
            var ele=this.innerHTML;
            makesound(ele);
        });
    }

document.addEventListener('keypress',function play(event){
    
            makesound(event.key);
            
});

function makesound(ele){

    document.querySelector("."+ele).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+ele).classList.remove("pressed");},100);
    switch(ele){
        case "w":var p=new Audio('sounds/tom-1.mp3');
                    p.play();
                    break;
        
        case "a":var p=new Audio('sounds/tom-2.mp3');
                    
                    p.play();
                    break;
        case "s":var p=new Audio('sounds/tom-3.mp3');
                    
                    p.play();
                    break;
        case "d":var p=new Audio('sounds/tom-4.mp3');
                    
                    p.play();
                    break;
        case "j":var p=new Audio('sounds/crash.mp3');
                    
                    p.play();
                    break;
        case "k":var p=new Audio('sounds/snare.mp3');
                    
                    p.play();
                    break;
        case "l":var p=new Audio('sounds/kick-bass.mp3');
                    
                    p.play();
                    break;
    }

}