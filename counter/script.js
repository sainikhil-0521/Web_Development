console.log("welcome to timer");

document.getElementById("submit").onclick=function execute(){
    document.getElementById("submit").disabled = true;
    document.getElementById("output").style.backgroundColor='#ff4500';
    let target=document.getElementById("datetime").value;
    intertvalID=setInterval(function time_counter() {
        let current=new Date();
        let diff=new Date(target).getTime()-current.getTime();
        
        document.getElementById("days").innerText=Math.floor(diff/(1000*3600*24));
        document.getElementById("hours").innerText=Math.floor((diff%(1000*3600*24))/(1000*3600));
        document.getElementById("minutes").innerText=Math.floor(((diff%(1000*3600*24))%(1000*3600))/(1000*60));
        document.getElementById("seconds").innerText=Math.floor((((diff%(1000*3600*24))%(1000*3600))%(1000*60))/(1000));
        if(Math.floor(diff/1000)<=0){
            document.getElementById("output").style.backgroundColor='#FF9F45';
            document.getElementById("submit").disabled = false;
            clearInterval(intertvalID);
            
        }
    }, 1000);
    
}