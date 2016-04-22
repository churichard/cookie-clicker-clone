var score = 0;
var cookies = 0;
var cursors = 0;
var grandmas = 0;

function cookieClick() {
    score++;
    cookies++;
    updateStats();
}

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

function handleCursors() {
    // Handle cursors
    score += cursors * 1;
    cookies += cursors * 1;
    updateStats();
    window.setTimeout(handleCursors, 1000);
}

function handleGrandmas() {
    // Handle grandmas
    score += grandmas * 1;
    cookies += grandmas * 1;
    updateStats();
    window.setTimeout(handleGrandmas, 500);
}


function updateStats() {
    document.getElementById("cookies").innerHTML = cookies + " cookies";
    document.getElementById("score").innerHTML = "Score: " + score;
}

window.setTimeout(handleCursors, 1000);
window.setTimeout(handleGrandmas, 500);