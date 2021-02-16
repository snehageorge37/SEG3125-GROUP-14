// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "Broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.99,
        category: "vegetable"
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35,
        category: "bakery"
    },
    {
        name: "Organic Apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.35,
        category: "fruit"
    },
    {
        name: "GF Organic Pasta",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99,
        category: "pantry"
    },
    {
        name: "Organic Whole Chicken",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 7.42,
        category: "meat"
    },
    {
        name: "Kitkat Minis",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.99,
        category: "snack"
    },
    {
        name: "Milk",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 4.69,
        category: "dairy"
    },
    {
        name: "Carrots",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 2.29,
        category: "vegetable"
    },
    {
        name: "Organic Yogurt",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 3.99,
        category: "dairy"
    },
    {
        name: "GF Organic Cereal",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 4.99,
        category: "pantry"
    },
    {
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 10.00,
        category: "seafood"
    }
];


function restrictListProducts(prods, vegetarian, glutin, organic) {
    let product_names = [];
    for (let i = 0; i < prods.length; i++) {
        if ((vegetarian == "Vegetarian") && (prods[i].vegetarian == true)) {
            if ((glutin == "GlutenFree") && (prods[i].glutenFree == true)) {
                // logic for organic
                if ((organic == "Organic") && (prods[i].organic == true)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "Non-organic") && (prods[i].organic == false)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "None")) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                }
            } else if ((glutin == "None")) {
                if ((organic == "Organic") && (prods[i].organic == true)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "Non-organic") && (prods[i].organic == false)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "None")) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                }
            }
        } else if ((vegetarian == "None")) {
            if ((glutin == "GlutenFree") && (prods[i].glutenFree == true)) {
                if ((organic == "Organic") && (prods[i].organic == true)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "Non-organic") && (prods[i].organic == false)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "None")) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                }
            } else if ((glutin == "None")) {
                if ((organic == "Organic") && (prods[i].organic == true)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "Non-organic") && (prods[i].organic == false)) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                } else if ((organic == "None")) {
                    product_names.push(prods[i].name + " - \t$" + prods[i].price.toFixed(2) + " (" + prods[i].category + ")");
                }
            }

        }
    }

    // Sort items by price (least to greatest)
    product_names.sort(function(a, b) {
        var aPrice = a.split('$')[1].trim(); // get price from product string
        var bPrice = b.split('$')[1].trim();
        return aPrice - bPrice
    });

    return product_names;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    var totalPrice = 0;

    for (i = 0; i < chosenProducts.length; i++) {
        var prod = chosenProducts[i];
        var prodPrice = prod.split('$')[1].trim(); // get price from product string
        totalPrice = parseFloat(totalPrice) + parseFloat(prodPrice);
    }

    return "$" + totalPrice.toFixed(2);
}