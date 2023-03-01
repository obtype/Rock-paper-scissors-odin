function getComputerChoice(){       //This function assigns a random number from 1-3 then assigns R, P or S to the computer.
    let randomNumber = Math.floor((Math.random()* 3)+1);
    let computerChoice;
    if(randomNumber === 1){
        computerChoice = "rock"
    }
    else if(randomNumber === 2){
        computerChoice = "paper"
    }
    else if(randomNumber === 3){
        computerChoice = "scissors"
    }

    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}



/*
This function below takes the user and computer choices as arguments and checks if the player won the
round and then returns 'win' or 'lose' .
*/
function round(userChoice, computerChoice){
    if(userChoice === computerChoice){          
        console.log("Draw")
        return "draw";
    }

    if(userChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("Lose")
            return "lose";
        }
        if(computerChoice === "scissors"){
            console.log("Win")
            return "win";
        }
    }

    if(userChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("Win")
            return "win";
        }
        if(computerChoice === "scissors"){
            console.log("Lose")
            return "lose";
        }
    }

    if(userChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("Win")
            return "win";
        }
        if(computerChoice === "rock"){
            console.log("Lose")
            return "lose";
        }
    }
}

/* This function below is the main one, it counts the wins and losses and determines if you won or lost. */

function game(){
    let userScore = 0;
    let computerScore = 0;
    let level;

    for(let i = 0; i < 5; i++){

        level = round(getUserChoice(), getComputerChoice())

        if(level === "win"){
            userScore++;
        }
        if(level === "lose"){
            computerScore++;
        }
    }
    if(userScore > computerScore){
        console.log("Game Result: You Won!");
    }
    else if(userScore < computerScore){
        console.log("Game Result: You Lost...");
    }
    else{
        console.log("Game Result: You had a Draw.")
    }
}

//game();

/* 

        ROUGH WORKING OUT BELOW

// if losses > wins, lose
// if losses < wins, win
// if losses = wins, draw

/* console.log(getComputerChoice())   || userChoice !== "paper" || userChoice !== "scissors"*/
/* console.log(Math.floor((Math.random()* 3)+1)) */ 

function getUserChoice(){           //This function gets the input from user of what his choice is and returns it.
    
    const buttons = document.querySelectorAll('.main-buttons');
    buttons.forEach(button => {button.addEventListener('click', getChoice )});
    let choice;

    function getChoice(e){
        choice = e.target.attributes['data-option'].value;
        //console.log(choice);
        //if(!choice) return getChoice(e);
        //return (choice);
    }
    
    return choice;
    
    
    /* let userChoice = prompt("Choose rock, paper or scissors.");
    userChoice = userChoice.toLowerCase();

    while(true){
    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
        userChoice = prompt("Denied. Please enter 'rock', 'paper' or 'scissors' instead.");
        userChoice = userChoice.toLowerCase();
    }
    else{
        break;
    }
    }
    console.log(`You chose: ${userChoice}`);
    return userChoice; */
}


function playRound(e){
    let userChoice = e.target.attributes['data-option'].value;
    let computerChoice = getComputerChoice();
    let roundResult = round(userChoice, computerChoice);
    
    if(roundResult === 'win') {userScore++; roundResult = "won"}
    if(roundResult === 'lose') {computerScore++;roundResult = "lost"}

    if(userScore === 5 || computerScore === 5){
        resetGame();
        userScore = 0;
        computerScore = 0;
        roundNumber = 0;
    }


    console.log(userScore);
    console.log(computerScore);
    roundNumber++;
    roundDiv.textContent = "Round Number: " + roundNumber;
    userChoiceDiv.textContent = "You chose: " + userChoice;
    computerChoiceDiv.textContent = "Computer chose: " + computerChoice;
    outcomeDiv.textContent = "You " + roundResult + " this round!";
    userScoreDiv.textContent = "User score: " + userScore;
    computerScoreDiv.textContent = "Computer score: " + computerScore;





    function resetGame(){
        if(userScore === 5) console.log('User won the whole game.');
        else console.log('Computer won the whole game.');

        console.log('Resetting the game now... Game reset!')
    }

    
    

}


const buttons = document.querySelectorAll('.main-buttons');
buttons.forEach(button => {button.addEventListener('click', playRound)});
const roundDiv = document.querySelector('.round .text');
roundDiv.textContent = 'Round Number: 1';
const userChoiceDiv = document.querySelector('.user-choice');
userChoiceDiv.textContent = "You chose: ";
const computerChoiceDiv = document.querySelector('.computer-choice');
computerChoiceDiv.textContent = "Computer chose: ";
const outcomeDiv = document.querySelector('.outcome');
outcomeDiv.textContent = "";
const userScoreDiv = document.querySelector('.user-score');
userScoreDiv.textContent = 'User score: 0';
const computerScoreDiv = document.querySelector('.computer-score');
computerScoreDiv.textContent = 'Computer score: 0';

let userScore = 0;
let computerScore = 0;
let roundNumber = 1;

/* if(userScore === 5 || computerScore === 5){
    resetGame();
}

function resetGame(){
    if(userScore === 5) console.log('User won the whole game.');
    else console.log('Computer won the whole game.');
}
 */
