let favouriteTransportation: Array <[transport:string , brand:string]> = []

favouriteTransportation.push(["Motorbike", "Honda"]);
favouriteTransportation.push(["car", "Toyota"]);
favouriteTransportation.push(["Bicycle", "Sohrab"]);

favouriteTransportation.forEach(([transport,brand])=>
{ console.log(`I would like to own a ${brand} ${transport}`)});