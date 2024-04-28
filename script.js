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

function playRound(input) {
    let userInput = "";
    if (typeof input === 'string') {
        userInput = input.toLowerCase();
    } else {
        return "Invalid input, please type either Rock, Paper or Scissors!"
    }
    let computerInput = getComputerChoice()
    if (computerInput === userInput) {
        return "It's a Tie!"
    } else if (computerInput === "rock" && userInput === "paper") {
        return "You Win, " + userInput + " beats " + computerInput
    } else if (computerInput === "rock" && userInput === "scissors") {
        return "You Lose, " + computerInput + " beats " + userInput
    } else if (computerInput === "paper" && userInput === "rock") {
        return "You Lose, " + computerInput + " beats " + userInput
    } else if (computerInput === "paper" && userInput === "scissors") {
            return "You Win, " + userInput + " beats " + computerInput
    } else if (computerInput === "scissors" && userInput === "rock") {
        return "You Win, " + userInput + " beats " + computerInput
    } else if (computerInput === "paper" && userInput === "scissors") {
        return "You Lose, " + computerInput + " beats " + userInput
    } else {
        return "Invalid input, please type either Rock, Paper or Scissors!"
    }
}

function playGame() {
    console.log(playRound("Paper"))
    console.log(playRound("rock"))
    console.log(playRound("scissors"))
    console.log(playRound("rockk"))
    console.log(playRound(1000))
}

playGame()
