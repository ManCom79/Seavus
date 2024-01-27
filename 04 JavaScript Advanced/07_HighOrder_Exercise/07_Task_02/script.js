// There is a JSON with products. Make a call and get the following data from it:

// All laptops, ordered by price descending
// The first grocery item
// Index of the first "Samsung" smartphone
// Check if there is any item from the brand "Sony"
// The name of the highest rated skincare product
// The average discount percentage of products with a rating above 4.5
// Find the product with the highest price
// Average price of all IPhone smartphones
// The product with the lowest price

// Link: https://dummyjson.com/products

//Task 2.1
let getLaptopsByPriceDescending = (data) => {
    console.log("Task 1");
    let products = data.products
    const laptops = products.filter(product => product.category === "laptops").map(product => product.price + ` for ${product.brand}`)
    laptops.sort((a, b) => b.localeCompare(a))
    console.log(laptops);

}

//Task 2.2
let getFirstGroceryItem = data => {
    console.log("Task 2");
    let product = data.products
    console.log(product);
    let firstGroceryItem = product.find(product => product.category === "groceries")
    console.log(`First grocery item is ${firstGroceryItem.brand}, that's ${firstGroceryItem.description}`)
}

//Task 2.3
// let getFirstSamsungIndex = data => {
//     console.log("Task 3");
//     let product = data.products
//     // let firstSamsungIndex = 
//     let index = product.indexOf(product.find(product => product.brand === "Samsung" && product.category === "smartphones"))
//     console.log(`Index of the first Samsung smartphone is ${index}.`);
// }

let getFirstSamsungIndex = data => {
    console.log("Task 3");
    let product = data.products
    let allBrandsArray = product.findIndex(samsung => samsung.brand === "Samsung" && samsung.category === "smartphones")
    console.log(`Index of the first Samsung smartphone is ${allBrandsArray}.`);
}

//Task 2.4
let checkIfSonlyIncluded = data => {
    console.log("Task 4");
    let product = data.products
    let checkSonyPresence = product.includes(product => product.brand === "Sony")
    if(!checkSonyPresence){
        console.log('There are no items of brand "Sony"')
    } else {
        console.log(`There is item of brand "Sony".`)
    };
}

//Task 2.5
let getHighestRatedSkincarePorduct = data => {
    console.log("Task 5");
    let product = data.products
    let skinCarePorducts = product.filter(skinCarePorduct => skinCarePorduct.category === "skincare").find(skinProductsInfo => Math.max(skinProductsInfo.rating))
    console.log(`Skincare produc with highest rating is ${skinCarePorducts.title} from ${skinCarePorducts.brand} with rating value ${skinCarePorducts.rating}.`);

}

function getData() {
    fetch("https://dummyjson.com/products")
    .then(
        (response) => response.json()
    )
    .then (data => {
        getLaptopsByPriceDescending(data);
        getFirstGroceryItem(data);
        getFirstSamsungIndex(data)
        checkIfSonlyIncluded(data)
        getHighestRatedSkincarePorduct(data)
    }
    );
}

getData()