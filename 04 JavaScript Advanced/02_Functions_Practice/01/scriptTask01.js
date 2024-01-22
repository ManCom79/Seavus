//1. Function that takes a number through a parameter and returns how many digits that number has
function countNumberOfDigits (number) {
    numberOfDigits = (number.toString()).length
    if (number.toString()[0] === "-"){
        numberOfDigits = numberOfDigits - 1
        return numberOfDigits
    } else {
        return numberOfDigits
    }
}

// 2. Function that takes a number through a parameter and returns if its even or odd
function evenOrOdd (number) {
    if (number % 2 === 0) {
        // console.log(`Number ${number} is even!`);
        return "even"
    } else {
        // console.log(`Number ${number} is odd!`);
        return "odd"
    }
}

// 3. Function that takes a number through a parameter and returns if its positive or negative
function numberPositiveOrNegative (number) {
    if (number >= 0) {
        // console.log(`Number ${number} is positive!`);
        return "positive"
    } else {
        // console.log(`Number ${number} is negative!`);
        return "negative"
    }
}


// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
// Ex:
// Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
function numberPropertiesAnalysis (number) {
    return `${countNumberOfDigits(number)} digits, ${evenOrOdd(number)}, ${numberPositiveOrNegative(number)}`;
}

let response = numberPropertiesAnalysis(10101)
console.log(response);