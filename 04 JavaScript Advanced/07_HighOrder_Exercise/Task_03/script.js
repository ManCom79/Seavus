// There is a JSON with recipes. Make a call and get the following data from it:

// All Desserts 🤤
// Get the names of recipes with more than 30 reviews
// All recipes that use Cinnamon as an ingredient
// Recipes that are served as both Lunch and Dinner
// The ingredients needed for "Mango Salsa Chicken" dish
// Calculate the average number of calories for all American cusine recipes
// The average cooking time of all pasta recipes
// Find the recipe with the lowest number of reviews
// Link: https://dummyjson.com/recipes

//Task 3.1 All Desserts
let getAllDeserts = data => {
    console.log("Task 1");
    let allRecipes = data.recipes
    let deserts = allRecipes.filter(meal => meal.mealType.includes("Dessert")).map(meal => meal.name)
    console.log(`Deserts are ${deserts}.`);
}


let getData = () => {
    fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => {
        getAllDeserts(data)
    }
    )
}

getData()