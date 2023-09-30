var guestList = [
    "Andrew Tate",
    "Tristan Tate",
    "Elon Musk"
];
console.log("Mr.Elon Musk, I just got to know that you wouldn't be able to make it to the dinner.");
// New guestList
var newGuestList = [
    "Junaid Akram"
];
newGuestList.forEach(function (newGuestName) {
    console.log("Mr.".concat(newGuestName, ", I would like to invite you to dinner."));
});
