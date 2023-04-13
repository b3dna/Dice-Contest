// Random dice Number
function randomDiceNumber() {
    return Math.floor(Math.random() * 6)+1;
}

const rollDiceButton = document.getElementById("roll-dice");
const winner = document.getElementById("winner");

// hear are results of all players in array
var results = [];
var rollAgain = 0;
var winerName = 0;


rollDiceButton.addEventListener("click", rollDice);

function rollDice() {
    var wi = 0
    while (wi === 0) {
    changeDiceNumbers();
    if (moreThanOne() === false) 
    wi = 1;
    }
    winner.innerHTML = document.querySelectorAll(".card-header h5")[winerName].innerHTML;
}

function changeDiceNumbers() {
    for (var i = 0; i < 4; i++) {
        results[i] = randomDiceNumber();
        document.getElementsByClassName("card-body")[i].innerHTML = `<i class="bi bi-dice-${results[i]}-fill"></i>`;
    }
}

// checks if there is more then one the biggest result if it is returns true
function moreThanOne() {
    var big = 1;

    for (const num of results) {
        if (num > big) 
        big = num;
    }

    if (results.indexOf(big) === results.lastIndexOf(big)) {
        winerName = results.indexOf(big);
        return false;
    }

    return true;
}