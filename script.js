let choice = "";

const container = document.querySelector(".container")

const title = document.createElement("h1");
container.appendChild(title);
title.textContent = "Rock, Paper or Scissors?";

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
    choice = "rock";
    playRound()
});
paper.addEventListener("click", () => {
    choice = "paper";
    playRound()
});
scissors.addEventListener("click", () => {
    choice = "scissors";
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
        compChoice = "rock";
        return compChoice
    } else if (compNum === 1) {
        compChoice = "paper";
        return compChoice
    } else if (compNum === 2) {
        compChoice = "scissors";
        return compChoice
    } else {
        return "Error, please reset program"
    }
}

function playRound() {
    let userInput = choice;
    let computerInput = getComputerChoice();
    let roundResult = document.createElement("li");
    roundResult.setAttribute("style", "list-style-type:none");
    if (computerInput === userInput) {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + "\n | It's a Tie!";
    } else if (computerInput === "rock" && userInput === "paper") {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + "\n | You Win, " + userInput + " beats " + computerInput + "!";
    } else if (computerInput === "rock" && userInput === "scissors") {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + "\n | You Lose, " + computerInput + " beats " + userInput + "!";
    } else if (computerInput === "paper" && userInput === "rock") {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + "\n | You Lose, " + computerInput + " beats " + userInput + "!";
    } else if (computerInput === "paper" && userInput === "scissors") {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + "\n | You Win, " + userInput + " beats " + computerInput + "!";
    } else if (computerInput === "scissors" && userInput === "rock") {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + "\n | You Win, " + userInput + " beats " + computerInput + "!";
    } else if (computerInput === "scissors" && userInput === "paper") {
        roundResult.textContent = "You Chose: " + userInput + "Your Opponent Chose: " + computerInput + + " | You Lose, " + computerInput + " beats " + userInput + "!";
    } else {
        roundResult.textContent = "Error: Please Reset Game";
    }
    results.appendChild(roundResult);
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