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
  box.style.transform = "translateX(10%)"
}

function makeBlinking() {
  box.style.animation = "blink 0.2s linear infinite"
}

function addText() {
  let labelInputValue = document.getElementById('labelInput').value
  box.innerText = labelInputValue
  labelInputValue = ""
}

function changeColor() {
  let colorInput = document.querySelector("#colorInput")
  box.style.backgroundColor = colorInput.value
  colorInput.value = ""
}
