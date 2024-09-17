let hitMeButton = document.getElementById("timer-button");
let timebox =  document.getElementById("time")
let startOverButton = document.getElementById("start-over-button");
let timetext = document.getElementById("timeText")
let targetText = document.getElementById("target-text")
let resultText = document.getElementById("result-text")

function getResultComment(currentTime) {
    currentTime = Math.round(currentTime)
    if (target > currentTime) {
        return "Too soon."
    } else if (currentTime > target || currentTime >= 10) {
        hitMeButton.style.display = "none";
        startOverButton.style.display = "block";
        return "Too late."
    } else if (target == currentTime) {
        hitMeButton.style.display = "none";
        startOverButton.style.display = "block";
        resultText.style.fontSize = "300%";
        return "YOU DID IT!!! <br> YOU SON OF A GUN!!!";
    } else {
        return "This is a weird scenario."
    }
}

function hitButton(element) {
    let currentTime = (element.timeStamp / 1000);
    resultText.innerHTML = getResultComment(currentTime);
    timetext.innerHTML = currentTime.toFixed(0);
}

function showHidden() {
    timebox.style.display = "block";
}

function setRandomTarget() {
    let newTarget = (Math.random() * 7 +2).toFixed(0);
    return newTarget;
}

let target = setRandomTarget();
targetText.innerHTML = target;

hitMeButton.addEventListener("click", hitButton);
hitMeButton.addEventListener("click", showHidden, {once:true});

startOverButton.addEventListener("click", f = () => window.location.reload())