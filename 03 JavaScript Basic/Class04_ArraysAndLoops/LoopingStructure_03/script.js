// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let userInputName = prompt('Enter students names separated by a comma. Ex: John, Bob, Ana');
let argumetsName;
if (userInputName === null) {
    console.log('Sorry, you have not entered any name');
} else {
    argumetsName = userInputName.split(',')
    console.log(userInputName)
}
if (/([a-zA-Z])$/.test(userInputName) != true) {
    console.log('You have not provided valid input. Your input should be ending with a letter. Please try again.')
}

let userInputSurname = prompt('Enter students surnames separated by a comma. Ex: Bobsky, Wayne, Johnsson');
let argumetsSurname;
if (userInputSurname === null) {
    console.log('Sorry, you have not entered any surname');
} else {
    argumetsSurname = userInputSurname.split(',')
    console.log(userInputSurname)
}

if (/([a-zA-Z])$/.test(userInputSurname) != true) {
    console.log('You have not provided valid input. Your input should be ending with a letter. Please try again.')
}

function orderNamesFromInput(arrayName, arraySurname) {
    if ((arrayName === undefined) || (arraySurname === undefined)) {
        console.log('Please enter names and surnames');
    } else {
        if (arrayName.length != arraySurname.length) {
            console.log('Sorry, a name or surname for a person was not entered. Please check the input')
        } else {
            array = []
            for (i = 0; i < arrayName.length; i++) {
                arrayEntry = `${i + 1}. ${arrayName[i]} ${arraySurname[i]}`
                array.push(arrayEntry)
            }
            console.log(array)
        }
    }
}

orderNamesFromInput(argumetsName, argumetsSurname)

console.log('')
console.log('======HARDCODED SOLUTION======')

firstName = ['Bob', 'John', 'Ana', 'Jenifer']
lastName = ['Bobsky', 'Wayne', 'Johnsson', 'Lawrence']

function orderNames(array1, array2) {
    if (array1.length != array2.length) {
        console.log('Sorry, a name or surname for a person was not entered. Please check the input')
    } else {
        array = []
        for (i = 0; i < array1.length; i++) {
            arrayEntry = `${i + 1}. ${array1[i]} ${array2[i]}`
            array.push(arrayEntry)
        }
        console.log(array)
    }
}

orderNames(firstName, lastName)