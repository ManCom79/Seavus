// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

userInput = prompt('Please enter numbers separated by comma (Ex: 5, 3, 7):')
userInputArray = userInput.split(',')
array = []

for (i = 0; i < userInputArray.length; i++) {
    let parsedUserInputArray = Number(userInputArray[i])
    if (isNaN(parsedUserInputArray)) {
        console.log('Sorry, not all inputs were numbers');
    } else {
        array.push(parsedUserInputArray)
    }
}

console.log(array)

function addMinAndMax(array) {
    let max = -Infinity
    let min = Infinity
    let sum = 0
    if (array.length < 2) {
        console.log('Please enter at least two numbers.')
    } else {
        for (i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            } else if (array[i] < min) {
                min = array[i]
            }
        }
        sum = min + max
        console.log(`The minimum value in the array is ${min}. The maximum value in the array is ${max}. The sum of minimum and maximum value in the array is ${sum}.`)
    }
}

addMinAndMax(array)