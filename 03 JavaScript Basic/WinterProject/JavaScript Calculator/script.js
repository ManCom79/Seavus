let result = null;
let userNumberInput = "";
let number = "";
let calculationsContainer = [];

let upperScreen = document.getElementById("upperScreen");
let lowerScreen = document.getElementById("lowerScreen");

//Evaluating expression based on values and operation pushed in array by event listeners
function evaluateExpression() {
  if (calculationsContainer[1] === "+") {
    result = calculationsContainer[0] + calculationsContainer[2];
    console.log(`Result is ${result}`);
    calculationsContainer = []
    calculationsContainer.unshift(result);
    lowerScreen.innerText = result;
    upperScreen.innerText = `${result} `;
  } else if (calculationsContainer[1] === "-") {
    result = calculationsContainer[0] - calculationsContainer[2];
    console.log(`Result is ${result}`);
    calculationsContainer = []
    calculationsContainer.unshift(result);
    lowerScreen.innerText = result;
    upperScreen.innerText = `${result} `;
  } else if (calculationsContainer[1] === "÷") {
    if (calculationsContainer[2] === 0) {
        lowerScreen.innerText = 'ERROR! Division by 0!'
    } else {
        result = calculationsContainer[0] / calculationsContainer[2];
        console.log(`Result is ${result}`);
        calculationsContainer = []
        calculationsContainer.unshift(result);
        lowerScreen.innerText = result;
        upperScreen.innerText = `${result} ÷`;
    }
  } else if (calculationsContainer[1] === "×") {
    result = calculationsContainer[0] * calculationsContainer[2];
    console.log(`Result is ${result}`);
    calculationsContainer = []
    calculationsContainer.unshift(result);
    upperScreen.innerText = `${result} ×`;
    lowerScreen.innerText = result;
  }
}

//listener
listenInput = addEventListener("click", function (event) {
    //listen clicks on numbers
  if (event.target.className.includes("number")) {
    userNumberInput += event.target.innerText;
    number = userNumberInput;
    if (upperScreen.innerText == "") {
      upperScreen.innerText = number;
    } else {
      if (calculationsContainer.length === 2) {
        upperScreen.innerText = `${calculationsContainer[0]} ${calculationsContainer[1]} ${number}`;
      } else {
        upperScreen.innerText = `${number}`;
      }
    }
  }

  //listen clicks on operations buttons
  if (event.target.className.includes("operation")) {
    if (number === "") {
      console.log("No number in number");
    } else {
      upperScreen.innerText = `${number} ${event.target.innerText}`;
      calculationsContainer.push(parseFloat(number));
      calculationsContainer.push(event.target.innerText);
      number = "";
      userNumberInput = "";
      upperScreen.innerText = `${calculationsContainer[0]} ${event.target.innerText}`;
      if (calculationsContainer.length > 3) {
        upperScreen.innerText = `${calculationsContainer[0]} ${event.target.innerText}`;
        evaluateExpression();
        upperScreen.innerText = `${calculationsContainer[0]} ${event.target.innerText}`;
      }
    }
  }

  //when equal button is pressed
  if (event.target.className.includes("equal")) {
    if (number === "") {
    } else {
      calculationsContainer.push(parseFloat(number));
      number = "";
      userNumberInput = "";
      evaluateExpression();
      upperScreen.innerText = `${result}`; //changed from ""--------------------------------
      number = result // added as whole
      console.log("Equal is", result);
      calculationsContainer = [];
    }
  }

  //when clear screen button is pressed
  if (event.target.className.includes("clear")) {
    result = null;
    number = "";
    userNumberInput = "";
    calculationsContainer = [];
    upperScreen.innerText = "";
    lowerScreen.innerText = "";
  }
});
