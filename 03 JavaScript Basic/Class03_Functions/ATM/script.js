// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let balance = 50000;

let request = prompt('How much money would you like to withdraw?')
// parsedRequest = parseInt(request)

function atmCalculator(a) {
    let parsedRequest = parseInt(request)

    if (parsedRequest < balance) {
        balance = balance - parsedRequest
        console.log(`You have withdrawn ${parsedRequest} denars. The new account balance is ${balance}.`)
        return balance
    }
    else {
        console.log(`The transaction was unsuccessful. Your balance is ${balance}.`)
    }
}

atmCalculator(request);











// let availableAmount = 50000;

// let request = prompt('How much money would you like to withdraw?')
// parsedRequest = parseInt(request)

// function atmCalculator(request) {
//     if (request < availableAmount) {
//         balance = availableAmount - request
//         console.log(`You have withdrawn ${request} denars. The new account balance is ${balance}.`)
//         return balance
//     }
//     else {
//         console.log('The transaction was unsuccessful. You don\'t have enough money on the account.')
//     }
// }

// atmCalculator(parsedRequest);