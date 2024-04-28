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








function getHumanChoice() {
    let choice = prompt("Choose one: Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || (choice === "paper" || choice ==="scissors")) {
        return choice
    } else {
        alert("Invalid input!")
        return getHumanChoice()
    } 
}

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
    let userInput = getHumanChoice();
    let computerInput = getComputerChoice();
    if (computerInput === userInput) {
        alert("It's a Tie!");
    } else if (computerInput === "rock" && userInput === "paper") {
        alert("You Win, " + userInput + " beats " + computerInput + "!");
    } else if (computerInput === "rock" && userInput === "scissors") {
        alert("You Lose, " + computerInput + " beats " + userInput + "!");
    } else if (computerInput === "paper" && userInput === "rock") {
        alert("You Lose, " + computerInput + " beats " + userInput + "!");
    } else if (computerInput === "paper" && userInput === "scissors") {
        alert("You Win, " + userInput + " beats " + computerInput + "!");
    } else if (computerInput === "scissors" && userInput === "rock") {
       alert("You Win, " + userInput + " beats " + computerInput + "!");
    } else if (computerInput === "scissors" && userInput === "paper") {
        alert("You Lose, " + computerInput + " beats " + userInput + "!");
    } else {
        alert("Error: Please Reset Game");
    }
}

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

playGame()