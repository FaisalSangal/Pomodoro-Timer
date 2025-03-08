const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const sessionCount = document.getElementById("count");

let timer;
let timeLeft = 25 * 60; // 25 minutes
let isRunning = false;
let sessions = 0;

// Start Timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

// Pause Timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

// Update Timer
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        clearInterval(timer);
        isRunning = false;
        sessions++;
        sessionCount.textContent = sessions;
        timeLeft = 25 * 60; // Reset to 25 minutes
        updateDisplay();
    }
}

// Update Timer Display
function updateDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    minutesDisplay.textContent = mins < 10 ? "0" + mins : mins;
    secondsDisplay.textContent = secs < 10 ? "0" + secs : secs;
}

// Event Listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initial Display
updateDisplay();
