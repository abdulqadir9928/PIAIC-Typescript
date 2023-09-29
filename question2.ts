let personName = "Muhammad Ali";

let lowerCase = personName.toLowerCase();
console.log(lowerCase);

let upperCase = personName.toUpperCase();
console.log(upperCase);

let words: string[] = personName.split(" ");
let titleCase: string = "";
for (let i = 0 ; i < words.length; i++) {
    titleCase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ ""
};

console.log(titleCase);