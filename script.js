let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let lapList = document.querySelector(".lap-list");
let int = null;

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.classList.toggle("dark-mode");
});

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

function displayTimer() {

    milliseconds += 10;
  
    if (milliseconds === 1000) {
      seconds++;
      milliseconds = 0;
    }
  
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
  
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
  
  

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;




}

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00:00:00:000";
    const lapTable = document.querySelector(".lap-table");
    const lapList = document.querySelector(".lap-list");
    lapList.innerHTML = ''; 



});




let lapCounter = 0;

document.getElementById("lap-timer").addEventListener("click", () => {
  
    lapCounter++;

    const lapTime = timerRef.innerHTML;
    const lapItem = document.createElement("tr");
    
    
    const lapCell = document.createElement("td");
    lapCell.textContent = lapCounter;
    const lapTimeCell = document.createElement("td");
    lapTimeCell.textContent = `+${lapTime}`;
    const totalTimeCell = document.createElement("td");
    totalTimeCell.textContent = timerRef.innerHTML;


    lapItem.appendChild(lapCell);
    lapItem.appendChild(lapTimeCell);
    lapItem.appendChild(totalTimeCell);

    
    lapList.insertBefore(lapItem, lapList.firstChild);
});


