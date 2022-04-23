const addButton = document.getElementById("addButton");
const counterText = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

let counter = 0;

function incrementValue() {
    counter++;
    if (counter === 1) {
        counterText.innerHTML = `Clicked ${counter} time`;
    } else {
        counterText.innerHTML = `Clicked ${counter} times`;
    }
}

function resetValue() {
    counter = 0;
    counterText.innerHTML = "Loading button click data.";
}

addButton.addEventListener("click", incrementValue);
resetButton.addEventListener("click", resetValue);