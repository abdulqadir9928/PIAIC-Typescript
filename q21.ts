const bouquet = {
    name: "bouquet",
    price: 1000,
    description: "Beautiful arrangement of spring flowers"
}

let bouquets: Array<typeof bouquet> = [];

bouquets.push(bouquet);
bouquets.push({name: "Summer bliss", price: 350, description: "beautiful arrangements of summer flowers"})


let bouquet3 = {  
    name: "Rose",
    price: 1500,
    description: "Beautiful flowers"
}

bouquets.push(bouquet3);

console.log(bouquets);

bouquets.push({name: "freshness", price: 450, description: "beautiful arrangements of white and yellow flowers"});

console.log(bouquets);
