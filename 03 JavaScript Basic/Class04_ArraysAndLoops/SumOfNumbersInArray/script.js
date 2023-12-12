// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

let userInput = prompt("Please enter five numbers, separated by comma.")
let numbersArray = userInput.split(',')
let array = [];
let continueWithSum = true

//Validate the user input
for (i = 0; i < numbersArray.length; i++) {
    validateNumber(numbersArray[i])
    array.push(numbersArray[i])
}

function validateNumber(arrayEntry) {
    arrayEntry = parseInt(arrayEntry)
    if (isNaN(arrayEntry)) {
        console.log(`Sorry, not all of your entries are numbers. Try again!`)
        continueWithSum = false
        return continueWithSum
    }
}

//Validate the array length and sum the numbers
if (continueWithSum == true) {
    sumOfNumbersInArray(array)
}

function sumOfNumbersInArray(anArray) {
    if (anArray.length != 5) {
        console.log('Sorry, the program works only if 5 numbers are gievn as input.')
    }
    else {
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
}

