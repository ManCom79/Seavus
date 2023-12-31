//Calculating Total Price of Phones

let numberOfPhones = 30;
let phonePrice = 119.95
let taxRate = 5;

let totalPrice = (phonePrice + (phonePrice * (taxRate/100))) * numberOfPhones
console.log('Total price for', numberOfPhones, 'phones including', taxRate, '% taxrate is', totalPrice, '.')
console.log("---------------------------------------------------")

//Attempt 2: Calculating Total Price of Phones
function cellPhones (cellUnitPrice, cellUnutTax, cellUnitCount) {
    let totalCellCountPrice = (cellUnitPrice + (cellUnitPrice * (cellUnutTax/100))) * cellUnitCount
    return "Total price for " + cellUnitCount + ' phones including ' + cellUnutTax + '% taxrate is ' + totalCellCountPrice + '.'
}

console.log(cellPhones(119.95, 5, 30))
console.log("---------------------------------------------------")

//Converting Minutes to Seconds

let numberOfMinutes = 30;

let convertedToSeconds = numberOfMinutes * 60
console.log(numberOfMinutes, 'minutes is equal to', convertedToSeconds, 'seconds.')
console.log("---------------------------------------------------")

//Increment by 1

let yourNumber = 10;
console.log(yourNumber, 'incremented by 1 is', ++yourNumber,'.')
console.log("---------------------------------------------------")

//Area of Triangle

let triangleBase = 7;
let triangleHeight = 9;

let areaOfTriangle = (triangleBase * triangleHeight)/2
console.log('Area of triangle with base', triangleBase, 'and height', triangleHeight, 'is', areaOfTriangle, '.')
console.log("---------------------------------------------------")

//Perimeter of Rectangle

let rectangleWidth = 7;
let rectangleHeight = 9;

let perimeterOfRectangle = 2 * (rectangleWidth + rectangleHeight)
console.log('Perimeter of rectangle with width', rectangleWidth, 'and height', rectangleHeight, 'is', perimeterOfRectangle, '.')
console.log("---------------------------------------------------")

//Area of Circle

let radius = 7;
const pi = 3.14;

let areaOfCircle = 3.14 * (radius ** 2)
console.log('Area of circle with radius', radius, 'is', areaOfCircle, '.')
console.log("---------------------------------------------------")