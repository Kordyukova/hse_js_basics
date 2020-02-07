let secondName = "Иванов"
function logUser() {
  let name = "Иван"
  console.log(name + " " + secondName)
}

logUser()
console.log("secondName: " + secondName)
console.log("name: " + name)

function getFullName(name, secondName) {
  return `Полное имя: ${name} ${secondName}`
}
getFullName()
console.log(getFullName("Марк", "Марков"))
let leoFullName = getFullName("Леонард", "Леонтьев")
console.log(leoFullName)

//3
function sayHello(name = "stranger") {
  //if (name === inderfined) {
  //name = "stranger"
  //}
  //name = name || "stranger"
  // "Hello " + name + "!"
  alert(`Hello ${name}!`)
}

//4
function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log(`Варю ${cups} кофе с молоком...`)
  }
  return console.log(`Варю ${cups} кофе без добавок`)
}
makeCoffee(22, true)
makeCoffee(10, false)

function findMax(number1, number2) {
  if (number1 > number2) {
    return num1
  }
  if (number2 > number1) {
    return num2
  }
  if (number1 === number2) {
    return 'Равны'
  }
}

console.log(findMax(44,76));


function addOne(number1) {
  number1 = Number(number1)
  return number1 + 1
}

number1 = addOne(prompt('1'))
console.log(number1)

function nextEven(number1) {
  if ((number1 % 2) === 0) {
    return console.log(Number(number1) + 2)
  }
  else {
    return console.log(Number(number1) + 1)
  }
}

function showQuote(text, author) {
  if (text === underfined) {
    return
  }
    if (author === underfined) {
      author = 'Марианна'
    }
  return console.log('«' + text +'» - ' + author + '.')
}

showQuote()
showQuote('Я не знаю js')
showQuote('Я тоже не знаю')
