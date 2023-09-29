var personName = "Muhammad Ali";
var lowerCase = personName.toLowerCase();
console.log(lowerCase);
var upperCase = personName.toUpperCase();
console.log(upperCase);
var words = personName.split(" ");
var titleCase = "";
for (var i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
;
console.log(titleCase);
