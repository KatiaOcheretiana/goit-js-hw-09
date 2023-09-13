const selectors = {
    start: document.querySelector("[data-start]"),
    stop: document.querySelector("[data-stop]"),
body: document.querySelector("body")
}

let timerId = null
let isActive = false

selectors.start.addEventListener('click', onStart)
selectors.stop.addEventListener('click', onStop)

function onStart() {
    if (isActive) {
        return
    }
    isActive = true
    selectors.start.disabled = true;
    selectors.stop.disabled = false;

    timerId = setInterval(() =>
        {selectors.body.style.backgroundColor = getRandomHexColor()}
, 1000)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStop() {
    clearInterval(timerId)
    isActive = false
    selectors.start.disabled = false;
    selectors.stop.disabled = true;
}