// Write a self-invoked function that calculates the factorial of a given number and logs it to the console. BONUS: Provide the input from the HTML, and print the result in the HTML.


let btnSubmitValue = document.getElementById("btnSubmitValue")


btnSubmitValue.addEventListener("click" , function() {
    let inputNumber = document.getElementById("numberHolder").value
    let factorielResult = document.getElementById("factorielResult")

    console.log(inputNumber);

    let factoriel = (function self(number) {
        if (number === 0) {
            return 1
        } else {
            return number * self(number - 1)
        }
    })(Number(inputNumber))
    console.log(factoriel);

    factorielResult.innerHTML = `${factoriel}`
})

