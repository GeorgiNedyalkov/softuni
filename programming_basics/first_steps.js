function printHelloSoftUni() {
  console.log("Hello SoftUni")
}

printHelloSoftUni()

function printOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i)
  }
}

printOneToTen()

function calcSquareArea(input) {
  let num = Number(input)
  let area = num * num
  console.log(area)
}

calcSquareArea("5")

function convertInchesToCentimeters(input) {
  let inches = +input
  let centimeters = 2.54 * inches
  console.log(centimeters)
}

convertInchesToCentimeters("5")

function greetPerson(name) {
  console.log(`Hello, ${name}!`)
}

greetPerson("Georgi")

function concatenateData(input) {
  let firstName = input[0]
  let lastName = input[1]
  let age = +input[2]
  let town = input[3]

  console.log(
    `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}`
  )
}

concatenateData(["Maria", "Ivanova", 20, "Sofia"])

function calcWorkHours(input) {
  let name = input[0]
  let numOfProjects = +input[1]
  let totalWorkHours = numOfProjects * 3

  console.log(
    `The architect ${name} will need ${totalWorkHours} hours to complete ${numOfProjects} project/s.`
  )
}

calcWorkHours(["Georgi", "4"])

function calcExpenses(input) {
  let dogFood = Number(input[0]) * 2.5
  let catFood = Number(input[1]) * 4
  let totalExpenses = dogFood + catFood

  console.log(totalExpenses + " lv.")
}

calcExpenses(["13", "9"])

function calcYardExpenses(input) {
  let squareMeters = +input[0]
  const priceSqM = 7.61
  const discountPercent = 0.18
  let grossPrice = squareMeters * priceSqM

  let discountAmount = discountPercent * grossPrice

  let discountedPrice = grossPrice - discountAmount

  console.log(`The final price is: ${discountedPrice} lv.`)
  console.log(`The discount is: ${discountAmount} lv.`)
}

calcYardExpenses(["150"])
