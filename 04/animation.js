function reset() {
  window.location.reload()
}

let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black"
}

function makeCircle() {
  box.style.borderRadius = "200px"
  if (box.style.borderRadius === "200px") {
    box.style.borderRadius = 0
  }
}

function move() {
  box.style.transform = "translate(100px, 100px)"
}

function makeBlinking() {
  box.style.animation = "blink 0.2s linear infinite"
}

function addText() {

}

function changeColor() {
  color = getElementById('colorInput').value;
  box.style.backgroundColor = color;
}
