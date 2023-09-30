let guestList:Array<string> = [
    "Andrew Tate",
    "Tristan Tate",
    "Elon Musk"
];

console.log("Mr.Elon Musk, I just got to know that you wouldn't be able to make it to the dinner.");


// New guestList

let newGuestList: Array <string> = [
    "Junaid Akram"
];

newGuestList.forEach((newGuestName) =>
{
    console.log(`Mr.${newGuestName}, I would like to invite you to dinner.`);
}
);