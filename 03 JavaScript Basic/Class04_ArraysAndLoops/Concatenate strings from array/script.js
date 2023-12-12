// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

let userInput = prompt('Enter strings (words) to form your sentence separated by comma (Ex: Bojan, is, happy):');
let wordsFromUserInput = userInput.split(',')

console.log('Entered words are: ', wordsFromUserInput)

function formBigString(array) {
    let bigString = ''
    for (i = 0; i < array.length; i++) {
        bigString = bigString + ' ' + array[i]
    }
    console.log('Your sentence is:', bigString)
}

formBigString(wordsFromUserInput)


//HARDCODED SOLUTION
console.log('------Hardcoded solution------')

let words = ["Hello", "there", "students", "of", "SEDC", "!"]

function createBigString(array) {
    let bigString = ''
    for (i = 0; i < array.length; i++) {
        if (i != array.length - 1) {
            bigString = bigString + ' ' + array[i]
        } else {
            bigString = bigString + array[i]
        }
    }
    console.log('Your sentence is:', bigString)
}

createBigString(words)