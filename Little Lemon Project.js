// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices() 

//MY CODE (Did Mistake of using foreach for every obj in array instead of just for in in every if else condition)

// function getPrices(taxBoolean) {
//     if (taxBoolean == true || taxBoolean == false) {
//         dishData.forEach(dishData => {
//             for (let key in dishData) {
//                 if (taxBoolean == true) {
//                     var finalPrice = dishData["price"] * tax;
//                     console.log("Dish:", dishData['name'] + " Price: $" + finalPrice)
//                     return
//                 }
//                 else if (taxBoolean == false) {
//                     var finalPrice = dishData["price"];
//                     console.log("Dish:", dishData['name'] + " Price: $" + finalPrice)
//                     return
//                 }
//             }
//         },
//         );
//     }
//     else {
//         console.log("You need to pass a boolean to the getPrices call!")
//     }
// }

//BETTER CODE

function getPrices(taxBoolean) {
    if (taxBoolean == true) {
        for (obj in dishData) {
            var finalPrice = dishData[obj].price * tax
            console.log("Dish: " + dishData[obj].name + " Price: $" + finalPrice)
        }
    } else if (taxBoolean == false) {
        for (obj in dishData) {
            var finalPrice = dishData[obj].price
            console.log("Dish: " + dishData[obj].name + " Price: $" + finalPrice)
        }
    } else {
        console.log("You need to pass a boolean to the getPrices call!")
    }
}
getPrices(true)

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean)
    if (typeof guests == 'number' && guests > 0 && guests < 30) {
        var discount = 0
        if (guests < 5) {
            var discount = 5
            console.log('Discount is: $' + discount);

        }
        else if (guests >= 5) {
            var discount = 10
            console.log('Discount is: $' + discount);
        }
    }
    else {
            console.log('The second argument must be a number between 0 and 30')
    }
}

// Call getDiscount()

// getDiscount(true, 2)
// getDiscount(false, 10)