// Movies renting App
// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )


let movies = ["die hard", "fight club", "avengers"]
let inputTitle = document.getElementById("inputTitle")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

btn.addEventListener("click", function () {
    let inputTitleText = inputTitle.value.toLowerCase()
    if (inputTitleText === "") {
        console.log("Input field is empty!");
    } else {
        if (movies.includes(inputTitleText)) {
            console.log("We have the movie");
            result.innerHTML = `<h1 style="color: green">The movie can be rented!</h1>`
            inputTitle.value = ""
        } else {
            console.log("Sorry, we don't have the movie.");
            result.innerHTML = `<h1 style="color: red">The movie can't be rented!</h1>`
            inputTitle.value = ""
        }
    }
})