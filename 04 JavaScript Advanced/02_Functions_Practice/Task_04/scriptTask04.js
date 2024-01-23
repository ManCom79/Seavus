// Write a self-invoked function that calculates the factorial of a given number and logs it to the console. BONUS: Provide the input from the HTML, and print the result in the HTML.


let btnSubmitValue = document.getElementById("btnSubmitValue")


btnSubmitValue.addEventListener("click" , function() {
    let inputNumber = document.getElementById("numberHolder").value //get value
    let factorielResult = document.getElementById("factorielResult") //get header

    // console.log(inputNumber);

    let factoriel = (function self(number) { //assigning self invoked function to a variable
        if (number === 0) {
            return 1
        } else {
            return number * self(number - 1) //recursion
        }
    })(Number(inputNumber))
    console.log(factoriel); //log result to console

    factorielResult.innerHTML = `${factoriel}` //write result to h1 holder
})

