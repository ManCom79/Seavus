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

//Task 3.3 All recipes that use Cinnamon as an ingredient
let getRecipesWithCinamon = data => {
    console.log("Task 3");
    let allRecipes = data.recipes.filter(rec => rec.ingredients.includes('Cinnamon')).map(rec => rec.name)
    console.log(`Recipes that include Cinnamon are: ${allRecipes}`);
}

//Task 3.4 Recipes that are served as both Lunch and Dinner
let getLunchAndDinnerRecipes = data => {
    console.log("Task 4");
    let allRecipes = data.recipes
    let lunchAndDinner = allRecipes.filter(rec => rec.mealType.includes("Lunch") && rec.mealType.includes("Dinner")).map(rec => rec.name)
    console.log(`For Lunch and Dinner you can have: ${lunchAndDinner}.`);
}

//Task 3.5 The ingredients needed for "Mango Salsa Chicken" dish
let getIngredientsForMangoSalsaChicken = data => {
    console.log("Task 5");
    let allRecipes = data.recipes
    let mangoSalsaChickenIngredients = allRecipes.filter(rec => rec.name === 'Mango Salsa Chicken').map(rec => rec.ingredients)
    console.log(`To make "Mango Salsa Chicken" you need: ${mangoSalsaChickenIngredients}.`);
}

//Task 3.6 Calculate the average number of calories for all American cusine recipes
let getAvgCaloriesInAmericanFood = data => {
    console.log("Task 6");
    let allRecipes = data.recipes
    let allAmericanRecipes = allRecipes.filter(rec => rec.cuisine === 'American').map(rec => rec.caloriesPerServing)
    let totalCaloriesInAmericanRecipes = allAmericanRecipes.reduce((sum, curr) => sum + curr, 0)
    let averageCaloriesInAmericanRecepies = (totalCaloriesInAmericanRecipes) / allAmericanRecipes.length
    console.log(`Average calories in American recipes: ${averageCaloriesInAmericanRecepies} calories.`);
}

//Task 3.7 The average cooking time of all pasta recipes
let getAvgPastCookingTime = data => {
    console.log("Task 7");
    let allPastaRecipes = data.recipes.filter(rec => rec.tags.includes('Pasta'))
    let pastaCookingTime = allPastaRecipes.map(rec => rec.cookTimeMinutes)
    let avgPastaCookingTime = pastaCookingTime.reduce((sum, curr) => sum + curr, 0) / pastaCookingTime.length
    console.log(`Average pasta cooking time is ${avgPastaCookingTime} minutes.`);
}

//Task 3.8 Find the recipe with the lowest number of reviews
let getLowestReviewRecipe = data => {
    console.log("Task 8");
    let allRecipes = data.recipes
    let reviews = allRecipes.map(rec => [rec.reviewCount, rec.name]).sort((a, b) => a[0] - b[0])[0]
    console.log(`${reviews[1]} has only ${reviews[0]} reviews.`);
}


let getData = () => {
    fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => {
        getAllDeserts(data)
        getRecipiesWithMoreTham30Reviews(data)
        getRecipesWithCinamon(data)
        getLunchAndDinnerRecipes(data)
        getIngredientsForMangoSalsaChicken(data)
        getAvgCaloriesInAmericanFood(data)
        getAvgPastCookingTime(data)
        getLowestReviewRecipe(data)
    }
    )
}

getData()