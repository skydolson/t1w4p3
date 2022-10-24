// console.log('***** Cart Functions *****');
// IMP: Test all functions and log.

let basket = []
function addItem(string1, array1) {
    
    if (isFull(array1) == false)
     {array1.push(string1);
        
        console.log("Confirming item added.")
        return true
        
    }
        else {
            console.log("Sorry your item could not be added.")
            return false}
    }

console.log(addItem("rice", basket));
console.log("Logging contents", basket);

console.log(addItem("pepper", basket));
console.log("Logging updated contents.", basket);

console.log(addItem("steak", basket));
console.log("Logging updated contents.", basket);

// Required Features:

// Create a global variable named basket and set it to an empty array.

// Create a function called addItem. It should 
// take an input parameter for a string item and
// add the new item to the global array known as basket, then
// return true indicating the item was added.




function listItems(array1) {
    let n = 1
    for (let x of array1) {
        
        console.log("Item " + n + " is " + x)
        n ++;
    }
}
listItems(basket);


// Create a function called listItems. It should
// loop over the items in the basket array and
// console.log each individual item on a new line.

function empty(array1) {
    array1.length = 0
    // Note to Casie: there appeared to be 3 or 4 methods for this procedure.
    // The above was widely recommended for simplicity.
    console.log("Your array was emptied.")
}

empty(basket);
console.log("Returning emptied basket.", basket);


// Create a function called empty. It should
// reset the basket to an empty array.



// Make sure that you are writing code in the file to test every function that you write!

// For example, to test addItem:
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);


// Stretch Goal: Using functions in other functions

// Add a global const named maxItems and set it to 5.

const maxItems = 5;

// Create a function called isFull(). It should 
// return false if the basket contains less than max number of items
// and return true otherwise (equal or more than maxItems).

function isFull(array1) {
    if (array1.length < 5) {
        return false
    } else {
        return true
    }
}
console.log("Checking to see if basket is full.", isFull(basket));

console.log("Added carrots to basket.", addItem("carrots", basket));

console.log("Added yogurt to basket.", addItem("yogurt", basket));

console.log("Added rice to basket.", addItem("rice", basket));

console.log("Added pepper to basket.", addItem("pepper", basket));

console.log("Added steak to basket.", addItem("steak", basket));

console.log("Logging updated contents.", basket);

console.log("Checking to see if basket is full.", isFull(basket));

console.log("Is is possible to add another item?", addItem("strawberries", basket));

console.log("Checking contents to confirm.", basket);



// Update the required addItem function:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false.

function removeItem(string1, array1) {
    
    for (x of array1) {
        if (x == string1) {
            console.log("The index of the item for removal is: ", array1.indexOf(x));
            array1.splice((array1.indexOf(x)), 1);
            return string1;  
        } 
    }
    if (array1.includes(string1) == false) {
        return null;
    }
      
}

console.log("Item removed: ", removeItem("steak", basket));

console.log("Checking new contents: ", basket);

console.log("Checking for null condtion: ", removeItem("bread", basket));

// Using Array built-in functions:
// Create a function called removeItem. It should 
// take an input parameter for a string item.
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found.