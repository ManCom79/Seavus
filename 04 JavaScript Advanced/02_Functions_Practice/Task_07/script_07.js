// Create an arrow function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation)
// BONUS: Provide the input from the HTML, and print the result in the HTML.

// NO HIGER ORDER FUNCTIONS!!!

let string = "Hello World, I Love You a Lot!"
// let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let vowels = ["a", "e", "i", "o", "u"]

let countStringVowels = string => {
    string = string.toLowerCase()
    let numberOfVowels = 0
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                numberOfVowels = numberOfVowels + 1                
            }            
        }
    }
    console.log(`There are ${numberOfVowels} vowels in the string "${string}".`);
}

countStringVowels(string)