// Task 1: Write a program to find maximum between two numbers.

let firstNumber = prompt("Enter the first number:")
let firstNumberParsed = parseFloat(firstNumber)
console.log(firstNumber)


if (isNaN(firstNumberParsed) === true) {
    do {
        firstNumber = prompt("The entered value was not of type number. Please enter a numerical value:")
        firstNumberParsed = parseFloat(firstNumber)
        console.log(firstNumberParsed)
    }
    while (isNaN(firstNumberParsed) === true)
}

let secondNumber = prompt("Enter the second number:")
let secondNumberParsed = parseFloat(secondNumber)
console.log(secondNumber)

if (isNaN(secondNumberParsed) === true) {
    do {
        secondNumber = prompt("The entered value was not of type number. Please enter a numerical value:")
        secondNumberParsed = parseFloat(secondNumber)
        console.log(secondNumberParsed)
    }
    while (isNaN(secondNumberParsed) === true)
}

if (firstNumber > secondNumber) {
    console.log(firstNumber, 'is greater than', secondNumber, '.')
} else if(firstNumber < secondNumber) {
    console.log(secondNumber, 'is greater than', firstNumber, '.')
} else {
    console.log('The entered numbers are equal.')
}

// Task 2: Write a program to find maximum between three numbers. (the program does not check if the input contains equal numbers)

let numOne = prompt('Enter the first of the three numbers to compare:')
let numTwo = prompt('Enter the second of the three numbers to compare:')
let numThree = prompt('Enter the third of the three numbers to compare:')

if (numOne > numTwo) {
    if (numOne > numThree) {
        console.log(numOne, 'is the largest number among', numOne,',', numTwo,'and', numThree, '.')
    } else {
        console.log(numThree, 'is the largest number among', numOne,',', numTwo,'and', numThree, '.')   
    }
} else if (numTwo > numOne) {
    if (numTwo > numThree) {
        console.log(numTwo, 'is the largest number among', numOne,',', numTwo,'and', numThree, '.')
    } else {
        console.log(numThree, 'is the largest number among', numOne,',', numTwo,'and', numThree, '.')   
    }
}

// Task 3: Write a program to check whether a number is negative, positive or zero.

let numberToCheck = prompt('Enter number to check if positive, negative or zero:')

if (numberToCheck > 0) {
    console.log(numberToCheck, 'is a positive number.')
} else if (numberToCheck < 0) {
    console.log(numberToCheck, 'is a negative number.')
} else {
    console.log(numberToCheck, 'is zero.')
}

// Task 4: Write a program that will accept user input between 1-7 (week number) and print week day.

let numOfDayInWeek = prompt('Enter the numerical order of a day in week (in range of 1 to 7): ')

if (numOfDayInWeek === 1) {
    console.log('Monday')
} else if (numOfDayInWeek === 2) {
    console.log('Tuesday')
} else if (numOfDayInWeek === 3) {
    console.log('Wednesday')
} else if (numOfDayInWeek === 4) {
    console.log('Thursday')
} else if (numOfDayInWeek === 5) {
    console.log('Friday')
} else if (numOfDayInWeek === 6) {
    console.log('Saturday')
} else if (numOfDayInWeek === 7) {
    console.log('Sunday')
}

// Task 5: Write a program that will check if user typed an input that is a number or not

let checkIfNumber = prompt('Make an input to check if it\'s a numer:')
let parsedCheckIfNumber = parseFloat(checkIfNumber)

if (isNaN(parsedCheckIfNumber) === true) {
    console.log('The input is not a number!')
} else {
    console.log('The input is a number!')
}

// Task 6: Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F

let physicsMark = prompt('Enter Physics achieved percentage:')
physics = parseFloat(physicsMark)
let chemistryMark = prompt('Enter Chemistry achieved percentage:')
chemistry = parseFloat(chemistryMark)
let biologyMark = prompt('Enter Biology achieved percentage:')
biology = parseFloat(biologyMark)
let mathMark = prompt('Enter Mathematics achieved percentage:')
maths = parseFloat(mathMark)
let csMark = prompt('Enter Computer Science achieved percentage:')
cs = parseFloat(csMark)

scorePercentage = ((physics + chemistry + biology + maths + cs)/5)
console.log('You\'r average score in percentage is', scorePercentage, '%.')

if (scorePercentage >= 90) {
    console.log('Grade A')
} else if (scorePercentage >= 80) {
    console.log('Grade B')
} else if (scorePercentage >= 70) {
    console.log('Grade C')
} else if (scorePercentage >= 60) {
    console.log('Grade D')
} else if (90 <= scorePercentage >= 100) {
    console.log('Grade E')
} else {
    console.log('Grade F')
}