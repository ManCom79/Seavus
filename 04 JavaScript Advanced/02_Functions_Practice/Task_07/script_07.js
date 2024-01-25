// Create an arrow function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation)
// BONUS: Provide the input from the HTML, and print the result in the HTML.

// NO HIGER ORDER FUNCTIONS!!!

let stringHolder = document.getElementById("stringHolder")
let submitString = document.getElementById("submitString")

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] // not using toLowerCase on purpose

submitString.addEventListener("click", function() {
    countStringVowels(stringHolder.value)
    stringHolder.value = ""
})

let countStringVowels = string => {
    // string = string.toLowerCase() I HAVE COMMENTED THIS BECAUSE I WANT TO HANDLE UPPERCASE IN LINES 27, 29 and 31
    let numberOfVowels = 0
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                numberOfVowels = numberOfVowels + 1                
            }            
        }
    }
    let resultHolder = document.getElementById("resultHolder")
    if (numberOfVowels === 0) {
        resultHolder.innerText = `There are no vowels in "${string}".`
    } else if (numberOfVowels === 1) {
        resultHolder.innerText = `There is ${numberOfVowels} vowel in "${string}".`
    } else {
    resultHolder.innerText = `There are ${numberOfVowels} vowels in "${string}".`
    }
}