var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlaces = ["Tokyo", "America", "Japan", "Canada", "Turkey"];
//Step 1 :
console.log("Original Order");
console.log(favouritePlaces);
// Step 2 :
console.log("Alphabetical Order");
console.log(__spreadArray([], favouritePlaces, true).sort());
// Step 3 :
console.log("Showing that array is still in it's original order ");
console.log(favouritePlaces);
// Step 4 :
console.log("Reversed Alphabetical Order");
console.log(__spreadArray([], favouritePlaces, true).sort().reverse());
// Step 5 :
console.log("Showing that array is still in it's original order");
console.log(favouritePlaces);
// Step 6 :
console.log("Reversed Order");
favouritePlaces.reverse();
console.log(favouritePlaces);
// Step 7 :
console.log("Back To Original Order");
favouritePlaces.reverse();
console.log(favouritePlaces);
// Step 8 :
console.log("Sorting The Array");
console.log(__spreadArray([], favouritePlaces, true).sort());
// Step 8 :
console.log(" Reverse Sorting The Array");
console.log(__spreadArray([], favouritePlaces, true).sort().reverse());
