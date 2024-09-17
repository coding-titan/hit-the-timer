let button = document.getElementById("timer-button");
let timebox =  document.getElementById("time")
let timetext = document.getElementById("timeText")

function showTime(element) {
    timebox.style.display = "block";
    timetext.innerHTML = (element.timeStamp / 1000).toFixed(2);
}

button.addEventListener("click", showTime)

