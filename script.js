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

function getUserChoice(){           //This function gets the input from user of what his choice is and returns it.
    let userChoice = prompt("Choose rock, paper or scissors.");
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
    return userChoice;
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
    let totalWins = 0;
    let totalLosses = 0;
    let level;

    for(let i = 0; i < 5; i++){

        level = round(getUserChoice(), getComputerChoice())

        if(level === "win"){
            totalWins++;
        }
        if(level === "lose"){
            totalLosses++;
        }
    }
    if(totalWins > totalLosses){
        console.log("Game Result: You Won!");
    }
    else if(totalWins < totalLosses){
        console.log("Game Result: You Lost...");
    }
    else{
        console.log("Game Result: You had a Draw.")
    }
}

game();

/* 

        ROUGH WORKING OUT BELOW

// if losses > wins, lose
// if losses < wins, win
// if losses = wins, draw

/* console.log(getComputerChoice())   || userChoice !== "paper" || userChoice !== "scissors"*/
/* console.log(Math.floor((Math.random()* 3)+1)) */ 