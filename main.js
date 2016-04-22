var score = 0; // score of the game
var cookies = 0; // number of cookies you have
var cursors = 0; // number of cursors you have
var grandmas = 0; // number of grandmas you have

// On cookie click
function cookieClick() {
    score++;
    cookies++;
    updateStats();
}

// On cursor button click
function cursorClick() {
    var cursorCost = 20 + 20 * cursors/2;
    if (cookies >= cursorCost) {
        cookies -= cursorCost;
        cursors++;

        cursorCost = 20 + 20 * cursors/2;
        document.getElementById("cursors").innerHTML = "Cursors: " + cursors + "<br>Cost: " + cursorCost;
        updateStats();
    }
}

// On grandma button click
function grandmaClick() {
    var grandmaCost = 100 + 100 * grandmas/2;
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;

        grandmaCost = 100 + 100 * grandmas/2;
        document.getElementById("grandmas").innerHTML = "Grandmas: " + grandmas + "<br>Cost: " + grandmaCost;
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
    document.getElementById("cookies").innerHTML = cookies + " cookies";
    document.getElementById("score").innerHTML = "Score: " + score;
}

// Add event listeners for cursor and grandma buttons
document.getElementById("cursors").addEventListener("click", cursorClick);
document.getElementById("grandmas").addEventListener("click", grandmaClick);

// Increment cookies based on cursors/grandmas every set time interval
window.setTimeout(handleCursors, 1000);
window.setTimeout(handleGrandmas, 500);