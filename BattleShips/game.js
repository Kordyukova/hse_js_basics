// Создаем координаты палуб корабля
let location1 = 5
let location2 = 6
let location3 = 7
// Переменная, чтобы хранить координату выстрела
let currentShot
// Сколько было сделано выстрелов
let shots = 0
// Сколько раз игрок попал по кораблю
let hits = 0
// Утонул ли корабль
let isSunk = false


// Пишем цикл, который работает, пока корабль не утонул
while (isSunk === false) {
  // Получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  if (currentShot < 0 || currentShot > 9) {
    alert('11')
  }
  // 1 выстрел
  shots += 1
  // Проверка попадания
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
   hits +=1
   alert('true')
 } else {
   alert('22')
 }
  // Если не попал, играем дальше
  // Если попал, увеливаем hits
  // Если попал 3 раза, то корабль тонет
  if (hits === 3) {
    isSunk = true
    alert('Победа!')
  }
}
