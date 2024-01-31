"use-strict"

let GUESS = 0;

window.addEventListener("DOMContentLoaded", start);

function start() {
    const startButton = document.querySelector("#start");
    const actions = document.querySelector("#actions");
    startButton.addEventListener("click", function () {
        guessNumber();
        startButton.style.display = "none";
        actions.style.display = "block";
    });
}
function guessNumber(){
    GUESS = Math.floor(Math.random() * 99) + 1;
    const list = document.querySelector("#guesses");
    list.insertAdjacentHTML("beforeend", `<li>${list.childElementCount+1}. My GUESS is: ${GUESS}</li>`);
    userResponse(GUESS);
}
function userResponse(){
    const action = document.querySelector("#actions");
    action.removeEventListener("click", handleUserResponse);
    action.addEventListener("click", handleUserResponse);
}
function handleUserResponse(event){
    event.preventDefault();
    if(event.target.id === "low-btn"){
        tooLow();
    }
    else if(event.target.id === "high-btn"){
        tooHigh();
    }
    else if(event.target.id === "correct-btn"){
        correct();
    }
}
function tooLow(){
    const list = document.querySelector("#guesses");
    const lastElement = list.lastElementChild;
    lastElement.innerHTML += " - too low";
    guessNumber();
}
function tooHigh(){
    const list = document.querySelector("#guesses");
    const lastElement = list.lastElementChild;
    lastElement.innerHTML += " - too high";
    guessNumber();
}
function correct(){
    const list = document.querySelector("#guesses");
    if(list.childElementCount === 1){
        list.insertAdjacentHTML("beforeend", `<li>Success! It took me ${list.childElementCount} GUESS.</li>`);
    } else {
    list.insertAdjacentHTML("beforeend", `<li>Success! It took me ${list.childElementCount} guesses.</li>`);
    }
    const action = document.querySelector("#actions");
    action.style.display = "none";
}