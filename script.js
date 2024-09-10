 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector(".reset-btn");
 let newgameBtn=document.querySelector(".newgame-btn");
 let winnerIs=document.querySelector(".winneris");
 let msg=document.querySelector(".msg");
 
let turnO=true; // playerX,playerO
const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
boxes.forEach((box) =>{
 box.addEventListener("click",()=>{
    console.log("box was clicked");
    if( turnO==true){
        box.innerHTML="0";
        turnO=false;

    }else{
        box.innerHTML="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();

 })
});
const showWinner = (winner)=>{
    winnerIs.innerText=`Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
   }
const disableBoxes=()=>{
for(let box of boxes ){
    box.disabled=true;
}
}
const enableBoxes=()=>{
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";

    }
    }
    const resetGame=()=>{
        turnO=true;
        enableBoxes();
        msg.classList.add("hide");
    }
const checkWinner = () => {
 for ( let pattern of winPatterns){
 let pos1Val= boxes[pattern[0]].innerText;
 let pos2Val= boxes[pattern[1]].innerText;
 let pos3Val= boxes[pattern[2]].innerText;

   if(pos1Val != "" && pos2Val !="" && pos3Val != "" ){
     if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
        disableBoxes();
       }
   }
 }
};
document.querySelector(".newgame-btn").addEventListener("click",resetGame);
document.querySelector(".reset-btn").addEventListener("click",resetGame);
