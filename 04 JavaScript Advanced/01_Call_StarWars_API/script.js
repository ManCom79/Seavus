// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1 \

let btnCallApi = document.getElementById("btnCallApi")
let nameHolder = document.getElementById("nameHolder")
let tableHolderDiv = document.getElementById("tableHolderDiv")

function createTable (height, mass, eye_color, hair_color) {
    console.log("Function is called!!!");
    console.log(height, mass, eye_color, hair_color);
    tableHolderDiv.innerHTML = `
        <table border = "1">
            <thead>
                <th>Luke's Height</th>
                <th>Luke's Weight</th>
                <th>Luke's Eye Color</th>
                <th>Luke's Hair Color</th>
            </thead>
            <tr>
                <td>${height} cm</td>
                <td>${mass} kg</td>
                <td>${eye_color}</td>
                <td>${hair_color}</td>
            </tr>
        </table>
    `
    console.log(tableHolderDiv.innerHTML);
}

btnCallApi.addEventListener("click", function() {
    fetch("https://swapi.dev/api/people/1/")
    .then(function(response) {
        console.log("Success!!!");
        return response.json()
    })
    .then(function(response){
        nameHolder.innerText = response.name
        return response
    })
    .then(function(response){
        createTable(response.height, response.mass, response.eye_color, response.hair_color)
    })
    .catch(function(response){
        console.log("Failed call!!!");
        console.log(response.status);
        console.log(response.responseText);
    })
})