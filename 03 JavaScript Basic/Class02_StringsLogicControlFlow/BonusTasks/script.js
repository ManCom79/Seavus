// Task 1. Write a program to find maximum between two numbers.

let firstNumber = prompt("Enter the first number:")
let firstNumberParsed = parseFloat(firstNumber)
console.log(firstNumber)


if (isNaN(firstNumberParsed) == true) {
    do {
        firstNumber = prompt("The entered value was not of type number. Please enter a numerical value:")
        firstNumberParsed = parseFloat(firstNumber)
        console.log(firstNumberParsed)
    }
    while (isNaN(firstNumberParsed) == true)
}

let secondNumber = prompt("Enter the second number:")
let secondNumberParsed = parseFloat(secondNumber)
console.log(secondNumber)

if (isNaN(secondNumberParsed) == true) {
    do {
        secondNumber = prompt("The entered value was not of type number. Please enter a numerical value:")
        secondNumberParsed = parseFloat(secondNumber)
        console.log(secondNumberParsed)
    }
    while (isNaN(secondNumberParsed) == true)
}

if (firstNumber > secondNumber) {
    console.log(firstNumber, 'is greater than', secondNumber, '.')
} else if(firstNumber < secondNumber) {
    console.log(secondNumber, 'is greater than', firstNumber, '.')
} else {
    console.log('The entered numbers are equal.')
}

// Write a program to find maximum between three numbers.
// Write a program to check whether a number is negative, positive or zero.
// Write a program that will accept user input between 1-7 (week number) and print week day.
// Write a program that will check if user typed an input that is a number or not
// Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F