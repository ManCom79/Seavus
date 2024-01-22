// Exercise 3
// Write an anonymous function that takes an array as a parameter and returns the square of each element.
// *Hint: square = number * number or number on power 2.

array = [2, 4, 6, 8, 10]
square = []

let exponentTwo = function (array) {
    for (let i = 0; i < array.length; i++) {
        squaredNumber = array[i] ** 2
        square.push(squaredNumber)
    }
    console.log(`Squared numbers are ${square}`); 
}

exponentTwo(array)