// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object
// boolean
// number
// string
// undefined

function returnTypeOfVariable (variable) {
    type = typeof(variable)
    console.log(`The type of the variable is ${type}`)
    return type
}

returnTypeOfVariable({1:2}); //returns object and prints it in a console
returnTypeOfVariable(true); //returns bool and prints it in a console
returnTypeOfVariable(34); //returns number and prints it in a console
returnTypeOfVariable('string'); //returns string and print is in a console
returnTypeOfVariable(); //returns undefined and prints it in a console