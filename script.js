function getComputerChoice() {
    let compChoice = "";
    let compNum = Math.random() * (3 - 0) + 0;
    if (compNum === 0 ) {
        compChoice === "rock";
        return compChoice
    } else if (compNum === 1) {
        compChoice === "paper";
        return compChoice
    } else if (compNum === 2) {
        compChoice === "scissors";
        return compChoice
    } else {
        console.log("Error, please reset program");
        return compChoice
    }
}

function playRound(userInput) {
    userInput = userInput.toLowerCase();
    // convert user input into lower case
    let computerInput = getComputerChoice();
    // run getComputerChoice()

    // check userInput against computerChoice()
        // check if input is a string / either rock, paper or scissors
            //if not then return "Wrong input! Please choose rock, paper or scissors!"
    // if player wins return "You Win! [userInput] beats [computerChoice()]"
    // if computer wins return "You Lose! [computerChoice() beats [userInput]"

}

function playGame() {
    //don't use loops because prompt
    //play five instances of playRound
}
