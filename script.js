function getComputerChoice() {
    let compChoice = "";
    // automatically generate computer choice numerically(?)
    let compNum = Math.random() * (3 - 0) + 0;
    // associate that to Rock, Paper or Scissors
    if (compNum === 0 ) {
        compChoice === "Rock";
        return compChoice
    } else if (compNum === 1) {
        compChoice === "Paper";
        return compChoice
    } else if (compNum === 2) {
        compChoice === "Scissors";
        return compChoice
    } else {
        console.log("Error, please reset program");
        return compChoice
    }
    // return random choice
}

function playRound(userInput) {
    // check if input is a string / either rock, paper or scissors
        //if not then return "Wrong input! Please choose rock, paper or scissors!"
    // convert user input into lower case
    // run getComputerChoice()
    // check userInput against computerChoice()
    // if player wins return "You Win! [userInput] beats [computerChoice()]"
    // if computer wins return "You Lose! [computerChoice() beats [userInput]"

}

function playGame() {
    //don't use loops because prompt
    //play five instances of playRound
}
