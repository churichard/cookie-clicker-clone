var score = 0; // score of the game
var cookies = 0; // number of cookies you have
var cursors = 0; // number of cursors you have
var grandmas = 0; // number of grandmas you have
var cursorCost = 20 + 20 * cursors/2; // How much it costs to buy a cursor
var grandmaCost = 100 + 100 * grandmas/2; // How much it costs to buy a grandma
var cursorBtn = document.getElementById("cursorBtn"); // Cursor button element
var grandmaBtn = document.getElementById("grandmaBtn"); // Grandma button element
var numOfCookiesElm = document.getElementById("cookiesCount"); // Number of cookies HTML element
var scoreElm = document.getElementById("score"); // Score HTML element

// On cookie click
function cookieClick() {
    score++;
    cookies++;
    updateStats();
}

// On cursor button click
function cursorClick() {
    if (cookies >= cursorCost) {
        cookies -= cursorCost;
        cursors++;

        cursorCost = 20 + 20 * cursors/2;
        cursorBtn.innerHTML = "Cursors: " + cursors + "<br>Cost: " + cursorCost;
        updateStats();
    }
}

// On grandma button click
function grandmaClick() {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;

        grandmaCost = 100 + 100 * grandmas/2;
        grandmaBtn.innerHTML = "Grandmas: " + grandmas + "<br>Cost: " + grandmaCost;
        updateStats();
    }
}

// Increment cookies based on number of cursors
function handleCursors() {
    // Handle cursors
    score += cursors;
    cookies += cursors;
    updateStats();
    window.setTimeout(handleCursors, 1000);
}

// Increment cookies based on number of grandmas
function handleGrandmas() {
    // Handle grandmas
    score += grandmas;
    cookies += grandmas;
    updateStats();
    window.setTimeout(handleGrandmas, 500);
}

// Update cookies and score
function updateStats() {
    numOfCookiesElm.innerHTML = cookies + " cookies";
    scoreElm.innerHTML = "Score: " + score;
}

// Add event listeners for cursor and grandma buttons
cursorBtn.addEventListener("click", cursorClick);
grandmaBtn.addEventListener("click", grandmaClick);

// Increment cookies based on cursors/grandmas every set time interval
window.setTimeout(handleCursors, 1000);
window.setTimeout(handleGrandmas, 500);