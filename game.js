let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const Uscore=document.querySelector("#user-score");
const Cscore=document.querySelector("#comp-score");
const genCompChoice=()=>{
    options=["rock","paper","scissors"];
    random_idx=Math.floor(Math.random()*3);
    return options[random_idx]; 
}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw! Play again";
    msg.style.backgroundColor="rgb(102, 102, 102)"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        Uscore.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        Cscore.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="rgb(198, 8, 8)";
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
