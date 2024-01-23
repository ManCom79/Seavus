// Write an arrow function that takes a string and returns a new string with each word reversed. Example: 'hello from qinshift academy' ==> 'olleh morf tfihdniq ymedaca' *You don't have to handle uppercase and lowercase, make the example all lowercase BONUS: Provide the input from the HTML, and print the result in the HTML.

let inputString = document.getElementById("inputString")
let reverseBtn = document.getElementById("reverseBtn")
let reversedString = document.getElementById("reversedString")

//THE GOAL WAS TO SOLVE THE TASK WITHOUT USING THE split() METHOD
reverseBtn.addEventListener("click", function() {
    let reverseString = (string) => { //arrow function
        let arrayStringHolder = []
        let stringReversed = "" //mirroring entered string
        let swapWord = "" //container to extract separate words from string
        let result = "" //final result

        for (let i = string.length - 1; i >= 0; i--) {
            stringReversed = stringReversed + string[i]
        }
        stringReversed = stringReversed + " " //bralnk space added to string to get the last word past the last blank space

        for (let i = 0; i < stringReversed.length; i++) { //reversing words and pushing to array
              if (stringReversed[i] !== " ") {
                swapWord = swapWord + stringReversed[i]
            } else {
                arrayStringHolder.push(swapWord)
                swapWord = ""
            }
        }

        for (let i = arrayStringHolder.length -1; i >= 0; i--) { //building final string from entries in the array
            result = result + " " + arrayStringHolder[i]
        }
        reversedString.innerText = result //showing result on webpage
    }
    reverseString(inputString.value)
})