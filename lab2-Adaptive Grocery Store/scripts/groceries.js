// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35
    },
    {
        name: "apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.35
    },
    {
        name: "pasta",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "whole chicken",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.42
    },
    {
        name: "kitkat minis",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.99
    },
    {
        name: "milk",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 4.69
    },
    {
        name: "carrots",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 2.29
    },
    {
        name: "yogurt",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 3.99
    },
    {
        name: "cereal",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 4.99
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 10.00
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			products.push(prods[i]);
		}
		if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			products.push(prods[i]);
        }
        if ((restriction == "Organic") && (prods[i].organic == true)){
			products.push(prods[i]);
        }
        if ((restriction == "Non-organic") && (prods[i].organic == false)){
			products.push(prods[i]);
		}
		else if (restriction == "None"){
			products.push(prods[i]);
		}
	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}