let button = document.getElementById("timer-button");
let timebox =  document.getElementById("time")
let timetext = document.getElementById("timeText")
let targetText = document.getElementById("target-text")
let resultText = document.getElementById("result-text")

function getResultComment(currentTime) {
    currentTime = currentTime.toFixed(0);
    if (target > currentTime) {
        return "Too soon."
    } else if (currentTime > target) {
        return "Too late."
    } else if (target == currentTime) {
        button.disabled = true;
        return "YOU DID IT!!!";
    } else {
        return "This is a weird scenario."
    }
}

function hitButton(element) {
    timebox.style.display = "block";
    let currentTime = (element.timeStamp / 1000);
    timetext.innerHTML = currentTime.toFixed(0);
    resultText.innerHTML = getResultComment(currentTime);
}

function setRandomTarget() {
    let newTarget = (Math.random() * 8 +2).toFixed(0);
    return newTarget;
}

let target = setRandomTarget();
targetText.innerHTML = target;

button.addEventListener("click", hitButton)