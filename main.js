let button = document.getElementById("timer-button");
let timebox =  document.getElementById("time")
let timetext = document.getElementById("timeText")
let targetText = document.getElementById("target-text")
let resultText = document.getElementById("result-text")

function getResultComment(currentTarget, currentTime) {
    if (currentTarget > currentTime) {
        return "Too soon."
    } else if (currentTime > currentTarget) {
        return "Too late."
    } else if (currentTarget === currentTime) {
        button.disabled = true;
        return "YOU DID IT!!!";
    } else {
        return "This is a weird scenario."
    }
}

function hitButton(element) {
    timebox.style.display = "block";
    let currentTime = (element.timeStamp / 1000).toFixed(0);
    timetext.innerHTML = currentTime;
    let currentTarget = target;
    resultText.innerHTML = getResultComment(currentTarget, currentTime);
}

function setRandomTarget() {
    let newTarget = (Math.random() * 8 +2).toFixed(0);
    return newTarget;
}

let target = setRandomTarget();
targetText.innerHTML = target;

button.addEventListener("click", hitButton)