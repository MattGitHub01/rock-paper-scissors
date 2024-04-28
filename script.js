let choice = "";

const container = document.querySelector(".container")

const title = document.createElement("h2");
title.textContent = "Rock, Paper or Scissors?";
title.setAttribute("style", "margin: 19px");
container.appendChild(title);

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.setAttribute("style", "margin: 20px");
container.appendChild(rock);
const paper = document.createElement("button");
paper.textContent = "Paper";
paper.setAttribute("style", "margin: 20px");
container.appendChild(paper);
const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.setAttribute("style", "margin: 20px");
container.appendChild(scissors);

const results = document.querySelector(".results");
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
    if (computerInput === userInput) {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
        roundMessage.textContent = "It's a Tie!";
    } else if (computerInput === "Rock" && userInput === "Paper") {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
        roundMessage.textContent = "You Win, " + userInput + " beats " + computerInput + "!";
    } else if (computerInput === "Rock" && userInput === "Scissors") {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
        roundMessage.textContent = "You Lose, " + computerInput + " beats " + userInput + "!";
    } else if (computerInput === "Paper" && userInput === "Rock") {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput; 
        roundMessage.textContent = "You Lose, " + computerInput + " beats " + userInput + "!";
    } else if (computerInput === "Paper" && userInput === "Scissors") {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
        roundMessage.textContent = "You Win, " + userInput + " beats " + computerInput + "!";
    } else if (computerInput === "Scissors" && userInput === "Rock") {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
        roundMessage.textContent = "You Win, " + userInput + " beats " + computerInput + "!";
    } else if (computerInput === "Scissors" && userInput === "Paper") {
        roundResult.textContent = "You Chose: " + userInput + " | Your Opponent Chose: " + computerInput;
        roundMessage.textContent = "You Lose, " + computerInput + " beats " + userInput + "!";
    } else {
        roundResult.textContent = "Error: Please Reset Game";
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