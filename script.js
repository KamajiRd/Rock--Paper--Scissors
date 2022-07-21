
// Array for random answers
const gameAnswers = [
    "Rock",
    "Paper",
    "Scissors"
];


// Fuction to generate a random answer
function getComputerChoice() {
    return gameAnswers[Math.floor(Math.random()* gameAnswers.length)]
};

// Scores
let playerScore = 0;
let computerScore = 0;


// Selections. Disabled to be used on the loop
// const computerSelection = getComputerChoice();
// const playerSelection = getPlayerChoice();



function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        computerScore++
        return "You Lost! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        playerScore++
        return "You Win! Rock breaks Scissors"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
        return "It's a Tie!"
    } 

    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        playerScore++
        return "You Won! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        computerScore++
        return "You Lost! Scissors cut paper"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
        return "It's a Tie!"
    } 

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        playerScore++
        return "You Won! Scissors cut paper"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        computerScore++
        return "You Lost! Rock breaks scissors"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") {
        return "It's a Tie!"
    }



};

//Loop function to play 5 rounds and print the result of each
function game() {
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Pick a move");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("your score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    }
}


game();


/* 

When a user inputs an option compare with computers selection
If the user wins, give 1 point to the user
If the computer wins, give 1 point to the computer
Loop the round 5 times and print the result of each round

*/