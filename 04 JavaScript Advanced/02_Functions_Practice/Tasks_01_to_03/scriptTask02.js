// Create 2 variables with arrow functions.

// First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.


let textChangerBtn = document.getElementById("textChangerBtn")

let h1Color = (element, color = "black") => element.style.color = color

// // Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.

//let h1Text = (element, size = 24) => element.style.fontSize = size + "px"
let h1Text = (element, size = 24) => element.style.fontSize = size + "px"

// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

textChangerBtn.addEventListener("click", () => {
    let colorOfElement = document.getElementById("colorOfElement")
    let fontSizeOfElement = document.getElementById("fontSizeOfElement")
    let hTag = document.getElementById("hTag")
    h1Color(hTag, colorOfElement.value)
    h1Text(hTag, fontSizeOfElement.value || 24)
    console.log(colorOfElement.value, fontSizeOfElement.value);
}
)

// Ex:
// **Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red