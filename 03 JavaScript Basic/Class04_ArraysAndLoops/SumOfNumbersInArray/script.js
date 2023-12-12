// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

let userInput = prompt("Please enter five numbers, separated by comma.")
let numbersArray = userInput.split(',')
let array = [];

for (i = 0; i < numbersArray.length; i++) {
    validateNumber(numbersArray[i])
    array.push(numbersArray[i])
}

function validateNumber(arrayEntry) {
    arrayEntry = parseInt(arrayEntry)
    if (isNaN(arrayEntry)) {
        return console.log(`Sorry, not all of your entries are numbers. Try again!`)
    }
}

console.log(array);

function sumOfNumbersInArray(anArray) {
    let sum = 0;
    for (i = 0; i < anArray.length; i++) {
        anArray[i] = parseInt(anArray[i])
        sum = sum + anArray[i]
    }
    if (isNaN(sum)) {
        console.log(`Sorry, some of the inputs in ${anArray} are not numbers`);
    }
    else {
        console.log(`Sum is ${sum}`)
    }
}

sumOfNumbersInArray(array)