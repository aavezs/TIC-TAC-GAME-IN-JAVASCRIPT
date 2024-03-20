


let boxes = document.querySelectorAll(".box");
let rest = document.querySelector(".rstbtn");

let currentPlayer = 'X'; // Start with player 'X'

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check if a player has won
function checkWin(player) {
    return winPatterns.some(pattern => {
        return pattern.every(index => boxes[index].innerText === player);
    });
}

// Function to handle box click event
function handleBoxClick(box) {
    console.log("Box was clicked");
    if (!box.innerText.trim()) { // Check if the box is empty
        box.innerText = currentPlayer;
        box.disabled = true;
        if (checkWin(currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
    }
}

// Function to reset the game
function resetGame() {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    currentPlayer = 'X'; // Reset player to 'X'
}

// Add click event listeners to boxes
boxes.forEach(box => {
    box.addEventListener("click", () => {
        handleBoxClick(box);
    });
});

// Add click event listener to reset button
rest.addEventListener("click", () => {
    resetGame();
});
