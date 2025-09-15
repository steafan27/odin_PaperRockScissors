const CPU_ROCK = 'rock';
const CPU_PAPER = 'paper';
const CPU_SCISSORS = 'scissors';
let round = 1;
let userPoints = 0;
let cpuPoints = 0;

function userScore(){
    return ++userPoints;
}

function cpuScore(){
    return ++cpuPoints;
}

function brokenGame(){
    console.log("No proper choice was selected by the user.");
}

function generateRandomNumber(){
    let randomNumber = Math.floor((Math.random() * 3) + 1); //numbers 1 - 3
    return randomNumber;
}

function getComputerChoice(){
    let num = generateRandomNumber();
    switch(num){
        case 1: return CPU_ROCK;
        case 2: return CPU_PAPER;
        case 3: return CPU_SCISSORS;
    }

}

function getUserChoice(){
    let usrChoice = prompt("Make a selection of Paper, Rock or Scissors.");
    return usrChoice;
}

function gameLogic(){
    let usrChoice = getUserChoice().toLowerCase();
    console.log(`You chose: ${usrChoice}!`);
    let cpuChoice = getComputerChoice().toLowerCase();
    console.log(`The cpu chose: ${cpuChoice}!`);

    if (usrChoice == cpuChoice){
        cpuScore();
        userScore();
        return;
    }else if(usrChoice == "rock" && cpuChoice == "paper"){
        cpuScore();
        return;
    }else if(usrChoice == "paper" && cpuChoice == "rock"){
        userScore();
        return;
    }else if(usrChoice == "scissors" && cpuChoice == "rock"){
        cpuScore();
        return;
    }else if(usrChoice == "rock" && cpuChoice == "scissors"){
        userScore();
        return;
    }else if(usrChoice == "paper" && cpuChoice == "scissors"){
        cpuScore();
        return;
    }else if(usrChoice == "scissors" && cpuChoice == "paper"){
        userScore();
        return;
    }else{
        brokenGame();
        return;
    }
    

}

function playRound(){
    console.log(`This is round ${round}!`)
    gameLogic();
    round = round + 1;
}

function playGame(){
    console.log("Welcome to paper rock scissors");
    //Loop here maybe vvv
    playRound();
    //Loop here maybe ^^^
    computeScore();
    

    
}

function computeScore(){
    if(userScore == cpuScore){
        console.log("TIE");
    }else if (userScore > cpuScore){
        console.log("USER WINS");
    }else{
        console.log("CPU WINS");
    }
}

playGame();