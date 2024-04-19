// DOM variables declaration
let gussedNumber = document.querySelector("#previousNumber");
let form = document.querySelector("#myForm");
let submit = document.querySelector("#submit");
let restart = document.querySelector("#restart");
let text = document.querySelector("#myText");
let inputNumber = document.querySelector("#inputNumber");
let opponent = document.querySelector("#opponent");

// variables declaration
let winTry = 0;

// function declaration
function randomNumber(){
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) - 1;
    } while (randomNumber <= 0);
    return randomNumber;
}

function greaterThan (){
    text.innerText = "your guess is big"
    text.style.color ="red";
}

function lessThan (){
    text.innerText = "your guess is small"
    text.style.color ="green";
}

function guessed(x){
    gussedNumber.innerText = `${x}` 
}

function playerWon(){



}

function opponentFn(){
    opponent.style.fontSize += "10px"
    console.log(opponent.style.fontSize)
}



// event listener declaration
let number = randomNumber();
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(number);
    winTry++;
    let guess = parseInt(inputNumber.value);
    if(number === guess){
        alert(`you win in ${winTry} moves`);
    }
    else if(guess > number && guess <= 100){
       greaterThan();
        guessed(guess);
        opponentFn();

    }
    else if(guess < number && guess <= 100){
        lessThan();
        opponentFn();
        guessed(guess);
    }
    else {
        alert("please enter a number between 1 and 100");
    }



})
