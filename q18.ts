let favouritePlaces: string[] = ["Tokyo" , "America" , "Japan" , "Canada" , "Turkey"]

//Step 1 :
console.log("Original Order");
console.log(favouritePlaces);

// Step 2 :
console.log("Alphabetical Order");
console.log([...favouritePlaces].sort());

// Step 3 :
console.log("Showing that array is still in it's original order ");
console.log(favouritePlaces);

// Step 4 :
console.log("Reversed Alphabetical Order");
console.log([...favouritePlaces].sort().reverse());

// Step 5 :
console.log("Showing that array is still in it's original order");
console.log(favouritePlaces);

// Step 6 :
console.log("Reversed Order");
favouritePlaces.reverse()
console.log(favouritePlaces);

// Step 7 :
console.log("Back To Original Order");
favouritePlaces.reverse()
console.log(favouritePlaces);


// Step 8 :
console.log("Sorting The Array");
console.log([...favouritePlaces].sort());

// Step 8 :
console.log(" Reverse Sorting The Array");
console.log([...favouritePlaces].sort().reverse());


