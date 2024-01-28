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

//Task 3.2 Get the names of recipes with more than 30 reviews
let getRecipiesWithMoreTham30Reviews = data => {
    console.log("Task 2");
    let allRecipes = data.recipes
    let revireMoreThan30 = allRecipes.filter(recipe => recipe.reviewCount > 30).map(recipe => recipe.name)
    console.log(`Recipies with more than 30 reviews are ${revireMoreThan30}`);
}

//Task 3.3 Recipes that are served as both Lunch and Dinner
let getLunchAndDinnerRecipes = data => {
    console.log("Task 3");
    let allRecipes = data.recipes
    console.log(allRecipes);
    let lunchAndDinner = allRecipes.filter(rec => rec.mealType.includes("Lunch") && rec.mealType.includes("Dinner")).map(rec => rec.name)
    console.log(`For Lunch and Dinner you can have: ${lunchAndDinner}.`);
}


let getData = () => {
    fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => {
        getAllDeserts(data)
        getRecipiesWithMoreTham30Reviews(data)
        getLunchAndDinnerRecipes(data)
    }
    )
}

getData()