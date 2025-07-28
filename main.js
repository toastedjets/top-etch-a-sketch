/*
**Function: blankGrid()
**Params; NONE
**Return value: NONE
**Description: The function blankGrid() clears the grid
*/
function blankGrid() {
    const gridDiv = document.getElementById("gridContainer");


    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
}

/*
**Function: createGrid()
**Params: NONE
**Return value: NONE
**Description: The function createGrid() initializes the grid
*/
function createGrid() {
    const gridDiv = document.getElementById("gridContainer");

    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");

        square.dataset.mouseenterCount = 0;

        square.style.display = "flex";
        square.style.width = "36px";
        square.style.height = "36px";
        square.style.border = "1px solid black";

        square.addEventListener("mouseenter", handleMouseEnter);
        gridDiv.appendChild(square);
    }
}

/*
**Function: run()
**Params: NONE
**Return value: NONE
**Description: The main code to run
*/
function run() {
    createGrid();
    const resetButton = document.querySelector("#resetButton");
    if (resetButton) {
        resetButton.addEventListener("click", handleResetButton);
    }
}

/*
**Function: handleMouseEnter()
**Params: event
**Return value: NONE
**Description: The handler for when the mouse enters a square in the grid
*/
function handleMouseEnter(event) {
    const square = event.target;

    let currentCount = parseInt(square.dataset.mouseenterCount);

    if (currentCount < 10) {
        currentCount++;
        square.dataset.mouseenterCount = currentCount;

        const alphaValue = currentCount * 0.1;
        const red = Math.floor(Math.random() * 256) + "";
        const blue = Math.floor(Math.random() * 256) + "";
        const green = Math.floor(Math.random() * 256) + "";
    
        square.style.backgroundColor = `rgba(${red}, ${blue}, ${green}, ${alphaValue})`;
    } else {
        square.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
    }
}

/*
**Function: handleButtonReset
**Params: NONE
**Return value: NONE
**Description: The handler for the reset button
*/
function handleResetButton() {
    let number = prompt("Enter the number of squares desired for each side of the grid");
    number = parseInt(number);

    if (isNaN(number) || number <= 0) {
        alert("Please enter a valid positive number.");
        return; // Exit if input is invalid
    }
    
    if (number > 100) {
        number = 100;
    }

    resetGrid(number);
}

/*
**Function: resetGrid()
**Params: number
**Return value: NONE
**Description: The function resetGrid() resets the squares in the grid
*/
function resetGrid(number) {
    const gridDiv = document.getElementById("gridContainer");
    const dimensions = number * number;

    blankGrid();

    const totalGridDimensions = 608;
    const squareWidth = (totalGridDimensions - (2 * number)) / number + "px";
    const squareHeight = (totalGridDimensions - (2 * number)) / number + "px";
    
    for (let i = 0; i < dimensions; i++) {
        const square = document.createElement("div");

        square.style.display = "flex";
        square.style.width = squareWidth;
        square.style.height = squareHeight;
        square.style.border = "1px solid black";

        square.addEventListener("mouseenter", handleMouseEnter);
        gridDiv.appendChild(square);
    }
}

run();