let choice = "";
let playerScoreValue = 0;
let compScoreValue = 0;

const defaultDomState = document.body.innerHTML;

const container = document.querySelector(".container")
container.setAttribute("align", "center");

const title = document.createElement("h1");
title.textContent = "Rock, Paper or Scissors?";
title.setAttribute("align", "center", "style", "margin: 15px");
container.appendChild(title);

const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

const winnerAnnounce = document.querySelector(".winnerAnnounce");
const playAgain = document.querySelector(".playAgain");

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.setAttribute("style", "margin: 18px");
container.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.setAttribute("style", "margin: 18px");
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.setAttribute("style", "margin: 18px");
container.appendChild(scissors);

const results = document.createElement("div");
container.appendChild(results);

const resultList = document.createElement("ul");
results.appendChild(resultList);

rock.addEventListener("click", () => {
    choice = "Rock";
    playRound()
});

paper.addEventListener("click", () => {
    choice = "Paper";
    playRound()
});

scissors.addEventListener("click", () => {
    choice = "Scissors";
    playRound()
});

/*
function getHumanChoice() {
    choice = choice.toLowerCase();
    if (choice === "rock" || (choice === "paper" || choice ==="scissors")) {
        return choice
    } else {
        alert("Invalid input!")
        return getHumanChoice()
    } 
}
*/

function scoreManager(score) {
    if (playerScoreValue === 4) {
        playerScoreValue++;
        playerScore.textContent = playerScoreValue;
        winnerAnnounce.textContent = "You Win!";
        playAgain.textContent = "Play Again?    ";
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play!";
        playAgainBtn.addEventListener("click", () => {
            document.body.innerHTML = defaultDomState;
        })
    } else if (compScoreValue === 4) {
        compScoreValue++;
        compScore.textContent = compScoreValue;
        winnerAnnounce.textContent = "You Lose!";
        playAgain.textContent = "Play Again?    ";
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play!";
        playAgainBtn.addEventListener("click", () => {
            document.body.innerHTML = defaultDomState;
        })

    } else if (playerScoreValue < 5 && compScoreValue < 5) {
        if (score === "player") {
            playerScoreValue++;
            playerScore.textContent = playerScoreValue;
        } else if (score === "computer") {
            compScoreValue++;
            compScore.textContent = compScoreValue;
        }
    }
}

function getComputerChoice() {
    let compChoice = "";
    let compNum = Math.floor(Math.random() * (3 - 0)) + 0;

    if (compNum === 0 ) {
        compChoice = "Rock";
        return compChoice
    } else if (compNum === 1) {
        compChoice = "Paper";
        return compChoice
    } else if (compNum === 2) {
        compChoice = "Scissors";
        return compChoice
    } else {
        return "Error, please reset program"
    }
}

function playRound() {
    let userInput = choice;
    let computerInput = getComputerChoice();

    const roundResult = document.createElement("div");
    const roundMessage = document.createElement("div");
    const roundOutcome = document.createElement("li");
    roundOutcome.setAttribute("style", "list-style-type:none");
    if (playerScoreValue === 5 || compScoreValue === 5) {
        if (computerInput === userInput) {
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
            roundMessage.textContent = "It's a Tie!";
        } else if (computerInput === "Rock" && userInput === "Paper") {
            scoreManager("player");
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
            roundMessage.textContent = "You Win, " + userInput + " beats " + computerInput + "!";
        } else if (computerInput === "Rock" && userInput === "Scissors") {
            scoreManager("computer");
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
            roundMessage.textContent = "You Lose, " + computerInput + " beats " + userInput + "!";
        } else if (computerInput === "Paper" && userInput === "Rock") {
            scoreManager("computer");
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput; 
            roundMessage.textContent = "You Lose, " + computerInput + " beats " + userInput + "!";
        } else if (computerInput === "Paper" && userInput === "Scissors") {
            scoreManager("player");
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
            roundMessage.textContent = "You Win, " + userInput + " beats " + computerInput + "!";
        } else if (computerInput === "Scissors" && userInput === "Rock") {
            scoreManager("player");
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
            roundMessage.textContent = "You Win, " + userInput + " beats " + computerInput + "!";
        } else if (computerInput === "Scissors" && userInput === "Paper") {
            scoreManager("computer");
            roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
            roundMessage.textContent = "You Lose, " + computerInput + " beats " + userInput + "!";
        } else {
            roundResult.textContent = "Error: Please Reset Game";
        }
    }

    roundOutcome.appendChild(roundResult);
    roundOutcome.appendChild(roundMessage);
    resultList.appendChild(roundOutcome);
}



/*
function playGame() {
    let rounds = 5;
    while (rounds > 0) {
        playRound();
        rounds--;
    }
    let inputCorrect = false;

    while (inputCorrect !== true) {
        let playAgain = prompt("Play Again? Y or N");
        if ((playAgain === "Y" || playAgain === "y") || (playAgain === "yes" || playAgain === "Yes")) {
            inputCorrect === true;
            return playGame()
            break
        } else if ((playAgain === "no" || playAgain === "No") || (playAgain === "N" || playAgain === "n")) {
            alert("Good Game!");
            break
        } else {
            alert("Invalid Input");
        }
    }
}
*/

//playGame()