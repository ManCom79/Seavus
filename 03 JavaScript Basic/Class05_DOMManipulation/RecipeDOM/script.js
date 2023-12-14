// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let ingredients = []

let nameOfTheRecipe = prompt("Please enter the name of the recipe:")
let h1Title = document.getElementById("h1Title")
h1Title.innerText = nameOfTheRecipe


let numberOfIngredients = prompt("How many ingredients do we need for the recipe? (Please enter numerical value)")
let parsedNumberOfIngredients = Number(numberOfIngredients)
console.log(parsedNumberOfIngredients);

for (i = 0; i < parsedNumberOfIngredients; i++) {
    let nameOfIngredient = prompt("What is the name of the ingredient?")
    ingredients.unshift(nameOfIngredient)
}


let table = document.getElementById("table")
let tbody = document.getElementById("tbody")
console.log(tbody);

let tableHeader = document.getElementById("recipeName")
console.log(tableHeader.innerText = nameOfTheRecipe);


function addRows (ingredient) {
    tbody.innerHTML += "<tr>"
    tbody.innerHTML += `<td style="border 2px solid black"><b>Number</b></td><td><b>Ingredient</b></td>`
    for (i = 0; i < ingredient.length; i++) {
        tbody.innerHTML += `<td>${i + 1}</td><td>${ingredient[i]}</td>`
    }
    tbody.innerHTML += "</tr>"
}

addRows(ingredients)

// function buildTable (table) {
//     table.innerHTML = ""
//     table.innerHTML += "<tr>"
//     table.innerHTML +=  "<th>Person 1</th>"
//     table.innerHTML += "<th>Person 2</th>"
//     table.innerHTML += "<th>Person 3</th>"
//     table.innerHTML += "</tr>"
// }

// buildTable(table)