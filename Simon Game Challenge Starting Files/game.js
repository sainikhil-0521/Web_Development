
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var start=false;

function playsound(song) {
    var audio1 = new Audio("sounds/" + song + ".mp3");
    audio1.play();
}

function nextSequence() {
    
    level++;
    $("h1").text("Level "+level);
    let randomNumber=Math.floor(Math.random()*4);
    gamePattern.push(buttonColors[randomNumber]);
    
    userClickedPattern=[];
        
        $("."+buttonColors[randomNumber]). fadeIn(100);
        $("."+buttonColors[randomNumber]). fadeOut(100);
        $("."+buttonColors[randomNumber]). fadeIn(100);
        playsound(buttonColors[randomNumber]);
        console.log(gamePattern); 
        
} 
        
 
$(".btn").click(function (){

        
        var choosenColor=$(this).attr("id");
        userClickedPattern.push(choosenColor);
        playsound(choosenColor);
        animatePress(this);
        
        checkans(userClickedPattern.length-1);
        
        
    
});
var level=0;
$(document).keypress(function key(event) {
    if(event.code=="Space")
    {
        if(!start){
            nextSequence();   
            start=true;
        }
        
    }    
    


});

function animatePress(par) {
    $(par).addClass("pressed");
    setTimeout(function(){
        $(par).removeClass("pressed");
    },100);
}

function checkans(len) {
    if(userClickedPattern[len]===gamePattern[len]){ 
        // console.log("success");
        if((len+1)===gamePattern.length){
            setTimeout(function () {
                console.log("success");
                nextSequence();
              }, 1000);
        }

    }
    else{
        playsound("wrong");
        $("h1").html("Game Over<br>Press space to start again");
        startOver();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
    }

    
}

function startOver() {
    start=false;
    gamePattern=[];
    level=0;
}