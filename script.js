function generateRandomNumber(){
    let randomNumber = Math.floor((Math.random() * 3) + 1); //numbers 1 - 3
    return randomNumber;
}

function getComputerChoice(){
    let num = generateRandomNumber();
    switch(num){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }

}

console.log(getComputerChoice());