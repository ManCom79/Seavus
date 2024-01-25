// Create an anonymous function that takes a given array and returns the product of all positive numbers. Test array: let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => Hello ${name}, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

// *Hints:
// Iterate over each element of the array
// Find a way to check if each element is number
// Check if the number is a positive number and if true, store it in a filtered array with all positive numbers
// Multiply all positive numbers

// NO HIGH ORDER FUNCTIONS!!!

let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

let positiveNumbersArray = []

let multiplyPositiveNumbersFromArray = array => {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = product * array[i]
    }
    console.log(`The product of all positive numbers in the array is ${product}`);
}


let detectNumbers = array => {
    for (let i = 0; i < array.length; i++) {
        if ((typeof(array[i]) === "number" && array[i] > 0) && array[i] !== Infinity) {
            // console.log(` Larger than zero is ${array[i]}`);
            positiveNumbersArray.push(array[i])
        }
    }
    multiplyPositiveNumbersFromArray(positiveNumbersArray)
}


detectNumbers(array)




