// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers = [3, 5, 7, 9]
let sum = 0

let listingNumbersFromArray = document.getElementById("tableOfArrayNumbers")
console.log(listingNumbersFromArray.innerHTML);

let elementSum = document.getElementById("result")
let elementCalculation = document.getElementById("calculation")

function makeCalculation(array, element) {
    element.innerHTML = ""
    element.innerHTML += '<ul>'
    for (let number of array) {
        element.innerHTML += `<li>${number}</li>`
    }
    element.innerHTML += "</ul>"
    console.log(element.innerHTML);
}

makeCalculation(numbers, listingNumbersFromArray)

function addingNumbers(array, element) {
    
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    console.log(sum);
    element.innerHTML = ""
    element.innerHTML += `If the numbers listed in the array are added, the sum will be: ${sum}`
    return sum
}

addingNumbers(numbers, elementSum)


function createCalculationString(array, element) {
    element.innerHTML = ""
    element.innerHTML += "( "
    for (i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            element.innerHTML += ` ${array[i]} +`
        } else {
            element.innerHTML += ` ${array[i]}`
        }
    }
    element.innerHTML += ` = ${sum} )`
    console.log(element.innerHTML);

}

createCalculationString(numbers, elementCalculation)