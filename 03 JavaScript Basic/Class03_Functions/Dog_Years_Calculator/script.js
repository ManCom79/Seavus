// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

let conversionType = prompt('Type H to convert human years to dog years or D to convert dog years to human years:')
let hConverted = conversionType.toLocaleLowerCase()

console.log(conversionType)

function yearsConversion () {
    if(hConverted === 'h') {
        let humanYears = prompt('How many years does the human have?')
        dogYears = humanYears * 7
        console.log(`The ${humanYears} year old human is ${dogYears} years old in dog years.`)
    }
    else if (hConverted === 'd') {
        let dogYears = prompt('How many years does the dog have?')
        humanYears = dogYears / 7
        console.log(`The ${dogYears} year old dog is ${humanYears} years old in human years.`)
    }
    else {
        console.log('Sorry, you were supposed to enter D or H.')
    }
}

yearsConversion();


// let humanToDogConversion = prompt('Would you like to convert human years to dog years? (Please answer with Yes or No):')
// if (humanToDogConversion.toLocaleLowerCase() == 'yes') {
//     humanYearsInput = prompt('What is the age of the human?')
//     parsedhumanYearsInput = parseInt(humanYearsInput)
//     convertYears(parsedhumanYearsInput);
// }

// if (humanToDogConversion.toLocaleLowerCase() == 'no') {
//     let dogToHumanConversion = prompt('Would you like to convert dog years to human years? (Please answer with Yes or No):')
//     if (dogToHumanConversion.toLocaleLowerCase == 'no') {
//         console.log('Sorry, I can\'t help you')
//     }
// }

// function convertYears (input) {
//     if (typeof(humanToDogConversion) !== undefined ) {
//         humanToDogYears = parsedhumanYearsInput * 7
//         console.log(`${parsedhumanYearsInput} human years equals ${humanToDogYears}.`)
//     }
// }