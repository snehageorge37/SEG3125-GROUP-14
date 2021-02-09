// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "Broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.99
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35
    },
    {
        name: "Organic Apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.35
    },
    {
        name: "GF Organic Pasta",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "Organic Whole Chicken",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.42
    },
    {
        name: "Kitkat Minis",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.99
    },
    {
        name: "Milk",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 4.69
    },
    {
        name: "Carrots",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 2.29
    },
    {
        name: "Organic Yogurt",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 3.99
    },
    {
        name: "GF Organic Cereal",
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


function restrictListProducts(prods, vegetarian, glutin, organic) {	
	let product_names = [];
	for (let i=0; i<prods.length; i++) {
		if ((vegetarian == "Vegetarian") && (prods[i].vegetarian == true)){
			if ((glutin == "GlutenFree") && (prods[i].glutenFree == true)){
                // logic for organic
				if ((organic == "Organic") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + " - Price: "+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "Non-organic") && (prods[i].organic == false)){
					product_names.push(prods[i].name +  " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "None")){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
			}
			else if ((glutin == "None")){
				if ((organic == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "Non-organic") && (prods[i].organic == false)){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "None")){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
			}
		}
		else if ((vegetarian == "None")){
			if ((glutin == "GlutenFree") && (prods[i].glutenFree == true)){
				if ((organic == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "Non-organic") && (prods[i].organic == false)){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "None")){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
			}
			else if ((glutin == "None")){
				if ((organic == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "Non-organic") && (prods[i].organic == false)){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
				else if ((organic == "None")){
					product_names.push(prods[i].name + " - Price: $"+prods[i].price.toFixed(2) + "$");
				}
			}

		}
	}

    // Sort items by price (least to greatest)
    product_names.sort(function(a,b){
        var aPrice = a.split('$')[1].trim();  // get price from product string
        var bPrice = b.split('$')[1].trim();
        return aPrice-bPrice
    });

	return product_names;
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