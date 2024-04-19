// DOM variables declaration
let gussedNumber = document.querySelector("#previousNumber");
let form = document.querySelector("#myForm");
let submit = document.querySelector("#submit");
let restart = document.querySelector("#restart");
let text = document.querySelector("#myText");
let inputNumber = document.querySelector("#inputNumber");
let opponent = document.querySelector("#opponent");
let gameScreen = document.querySelector(".gameScreen");
let gameStation = document.querySelector("#gameStation");
let main = document.querySelector("main");

// created DOM elements
let winScreen = document.createElement("div");

// variables declaration


let winTry = 0;
let number;

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

function restartGame(){
    console.log("restart")  
    number = randomNumber();
    opponent.style.fontSize = "16px";
    gameScreen.style.height = "400px";
    text.innerText = "";
    gussedNumber.innerText = "";
    inputNumber.value = "";
    winTry = 0; 
    gameStation.style.display = "flex";
    winScreen.style.display = "none";

}

function playerWon(){
    gameStation.style.display = "none";
    
    let winGameScreen = document.createElement("div");
    winScreen.classList.add("gameScreen");
    winGameScreen.classList.add("game");
    main.appendChild(winScreen);
    winScreen.appendChild(winGameScreen);
    let winText = document.createElement("h3");
    winText.innerText = "you win!";
    winGameScreen.appendChild(winText);
    let br = document.createElement("br");
    winGameScreen.appendChild(br);
    let winImage = document.createElement("img");
    winImage.src = "images/alejandro-perez-pbSjZllFJWg-unsplash.jpg";
    winImage.style.width = "200px";
    winImage.style.height = "200px";
    winImage.style.borderRadius = "10px";
    winImage.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.2)";
    winGameScreen.appendChild(winImage);
    let restartBtn = document.createElement("button");
    restartBtn.classList.add("button-74")
    restartBtn.innerText = "Restart";
    winGameScreen.appendChild(restartBtn);
    restartBtn.addEventListener("click", restartGame);




}

function youLose(){
    alert("you lose");
}

function opponentFn(){
    let currentsize = parseInt(window.getComputedStyle(opponent).fontSize);
    let currentHeight = parseInt(window.getComputedStyle(gameScreen).height);
    console.log(currentsize)
    if(currentsize < 25){
    gameScreen.style.height = (currentHeight + 5) + "px";
    opponent.style.fontSize = (currentsize + 1) + "px";
}
else if(currentSize = 25){
    youLose();
}

}



// event listener declaration
number = randomNumber();
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(number);
    winTry++;
    let guess = parseInt(inputNumber.value);
    if(number === guess){
        playerWon();
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
restart.addEventListener("click", restartGame);