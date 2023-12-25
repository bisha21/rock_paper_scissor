'use strict';

let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choices");
const message = document.getElementById("msg");
const usc = document.getElementById("user-score");
const csc = document.getElementById("comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return option[random];
};

const drawGame = function () {
    message.innerText = "Game draw!!!!";
};

const showWinner = function (userWin) {
    if (userWin) {
        message.innerText = "You win";
        userScore++;
        usc.innerHTML = `${userScore}`;
    } else {
        message.innerText = "Computer wins!!!";
        compScore++;
        csc.innerHTML = `${compScore}`;
    }
};

const playGame = function (userChoice) {
    console.log("userChoice=", userChoice);
    const C_choice = genCompChoice();
    console.log("Computer choice=", C_choice);
    if (userChoice === C_choice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = C_choice === "paper" ? false : true;
        }
         else if (userChoice === "paper") {
            userWin = C_choice === "rock" ? false : true;
        } 
        else if (userChoice === 'scissors') {
            userWin = C_choice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
