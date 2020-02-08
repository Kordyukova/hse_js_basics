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
