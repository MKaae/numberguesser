"use-strict"

let GUESS = null;
let HIGH = null;
let LOW = 1;

window.addEventListener("DOMContentLoaded", start);

function start() {
    const startButton = document.querySelector("#start-game");
    const actions = document.querySelector("#actions");
    const inputValue = document.querySelector("#high-value");
    startButton.addEventListener("click", function () {
        HIGH = parseInt(inputValue.value);
        guessNumber();
        startButton.style.display = "none";
        actions.style.display = "block";
        inputValue.style.display = "none";
    });
}
function guessNumber(){
    GUESS = Math.floor((HIGH + LOW) / 2);
    const list = document.querySelector("#guess-list");
    list.insertAdjacentHTML("beforeend", `<li>${list.childElementCount+1}. My GUESS is: ${GUESS}</li>`);
    userResponse(GUESS);
}
function userResponse(){
    const action = document.querySelector("#actions");
    action.addEventListener("click", handleUserResponse);
    action.disabled;
}
function handleUserResponse(event){
    event.preventDefault();
    if(event.target.id === "too-low-btn"){
        tooLow();
    }
    else if(event.target.id === "too-high-btn"){
        tooHigh();
    }
    else if(event.target.id === "success-btn"){
        correct();
    }
}
function tooLow(){
    LOW = GUESS + 1;
    const list = document.querySelector("#guess-list");
    const lastElement = list.lastElementChild;
    lastElement.innerHTML += " - too low";
    guessNumber();
}
function tooHigh(){
    HIGH = GUESS - 1;
    const list = document.querySelector("#guess-list");
    const lastElement = list.lastElementChild;
    lastElement.innerHTML += " - too high";
    guessNumber();
}
function correct(){
    const list = document.querySelector("#guess-list");
    if(list.childElementCount === 1){
        list.insertAdjacentHTML("beforeend", `<li>Success! It took me ${list.childElementCount} GUESS.</li>`);
    } else {
    list.insertAdjacentHTML("beforeend", `<li>Success! It took me ${list.childElementCount} guesses.</li>`);
    }
    const action = document.querySelector("#actions");
    action.style.display = "none";
}