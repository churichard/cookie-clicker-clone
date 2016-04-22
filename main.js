var UPDATE_SCORE_MILLIS = 500; // Update the score/cookies every x milliseconds
var score = 0; // score of the game
var cookies = 0; // number of cookies you have
var cps = 0; // Cookies per second that are added
var cursors = 0; // number of cursors you have
var grandmas = 0; // number of grandmas you have
var cursorCost = 20; // How much it costs to buy a cursor
var grandmaCost = 100; // How much it costs to buy a grandma
var cursorBtn = document.getElementById("cursorBtn"); // Cursor button element
var grandmaBtn = document.getElementById("grandmaBtn"); // Grandma button element
var numOfCookiesElm = document.getElementById("cookiesCount"); // Number of cookies HTML element
var cookiesPerSecElm = document.getElementById("cookiesPerSecond"); // Cookies per second HTML element
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
        cps++;

        cursorCost *= 2;
        cursorBtn.innerHTML = "Cursors: " + cursors + "<br>Cost: " + cursorCost;
        updateStats();
    }
}

// On grandma button click
function grandmaClick() {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;
        cps += 2;

        grandmaCost *= 2;
        grandmaBtn.innerHTML = "Grandmas: " + grandmas + "<br>Cost: " + grandmaCost;
        updateStats();
    }
}

// Updates the number of cookies once every set time interval
function updateCookies() {
    score += cps * (UPDATE_SCORE_MILLIS / 1000);
    cookies += cps * (UPDATE_SCORE_MILLIS / 1000);
    updateStats();
    window.setTimeout(updateCookies, 500);
}

// Update cookies and score
function updateStats() {
    numOfCookiesElm.innerHTML = Math.floor(cookies) + " cookies";
    scoreElm.innerHTML = "Score: " + Math.floor(score);
    cookiesPerSecElm.innerHTML = cps + " per second";
}

// Add event listeners for cursor and grandma buttons
cursorBtn.addEventListener("click", cursorClick);
grandmaBtn.addEventListener("click", grandmaClick);

// Increment cookies based on cursors/grandmas every set time interval
window.setTimeout(updateCookies, UPDATE_SCORE_MILLIS);