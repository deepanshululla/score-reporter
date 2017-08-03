var p1B=document.querySelector("#p1B");
var p2B=document.getElementById("p2B");
var resB=document.querySelector("#resB");

var p1ScoreTag=document.getElementById("p1Score");
var p2ScoreTag=document.getElementById("p2Score");
var maxScoreTag=document.getElementById("maxScore");

var statusTag=document.querySelector("#status");
var numInput=document.querySelector("input");

var p1Score=0;

var p2Score=0;
var maxScore=5;
var gameOver=false;

p1B.addEventListener("click", function(){
    // console.log(p1Score);
    if(p1Score<maxScore && gameOver===false){
        p1Score+=1;
        p1ScoreTag.textContent=p1Score;
    }
    else if(p1Score>=(maxScore-1)){
       
            p1ScoreTag.classList.add("winner");
            p2ScoreTag.classList.add("loser");
            gameOver=true;

            statusTag.textContent="Game over. Press Reset to Restart";
        }  
    else{
        
        p1ScoreTag.classList.add("loser");
        p2ScoreTag.classList.add("winner");
        gameOver=true;
        statusTag.textContent="Game over. Press Reset to Restart";


    }

});
p2B.addEventListener("click", function(){
    // console.log(p1Score);
    if(p2Score<maxScore && gameOver===false){
        p2Score+=1;
        p2ScoreTag.textContent=p2Score;
    }
    else if(p2Score>=(maxScore-1)){
        p1ScoreTag.classList.add("loser");
        p2ScoreTag.classList.add("winner"); 
        gameOver=true;
        statusTag.textContent="Game over. Press Reset to restart";
    }
    else{
        p1ScoreTag.classList.add("winner");
        p2ScoreTag.classList.add("loser");
        gameOver=true;
        statusTag.textContent="Game over. Press Reset to restart";

    }

});
resB.addEventListener("click", function(){
    // console.log(p1Score);
    reset();
   

});

function reset(){
    p1Score=0;
    p2Score=0;
    p1ScoreTag.textContent=p1Score;
    p2ScoreTag.textContent=p2Score;
    p1ScoreTag.classList.remove("winner");
    p1ScoreTag.classList.remove("loser");
    p2ScoreTag.classList.remove("winner");
    p2ScoreTag.classList.remove("loser");
    statusTag.textContent="";
	
    
    gameOver=false;

}

numInput.addEventListener("change", function(){
    // alert("changed input");
    maxScoreTag.textContent=this.value;
    maxScore=Number(this.value);
    
    // don't leave it without type casting. becuase otherise it will be stored as a string and game will never be won
    reset();
    //basically every time a user changes number in the middle of game reset the whole thing
});