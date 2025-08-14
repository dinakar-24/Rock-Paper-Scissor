let Options = document.querySelectorAll(".options");
let final = document.querySelector("#msg");
let uScore = document.querySelector("#yourscore");
let cScore = document.querySelector("#compscore");


let UserScore = 0;
let CompScore = 0;

const genChoice = () => {
    let comp = ["rock", "paper", "scissor"];
    const RandomIndex = Math.floor(Math.random() * 3);
    return comp[RandomIndex];
}
const playGame = (choice) => {
    const compChoice = genChoice();
    if(compChoice === choice){
        final.innerText = "Game Draw!";
    }
    else if(choice === "rock" && compChoice === "scissor" || choice === "paper" && compChoice === "rock" || choice === "scissor" && compChoice === "paper"){
        console.log("You win");
        UserScore++;
        uScore.innerText = UserScore;
        final.innerText = `You Win! your ${choice} beats ${compChoice}`;
        final.style.backgroundColor = "green";
    }
    else{
        CompScore++;
        cScore.innerText = CompScore;
        final.innerText = `You Lose! ${compChoice} beats your ${choice}`;
        final.style.backgroundColor = "red";
    }
}
for(let option of Options){
    option.addEventListener("click", () =>{
        const value = option.getAttribute("id");
        playGame(value);
    })
}

