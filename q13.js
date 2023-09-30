var favouriteTransportation = [];
favouriteTransportation.push(["Motorbike", "Honda"]);
favouriteTransportation.push(["car", "Toyota"]);
favouriteTransportation.push(["Bicycle", "Sohrab"]);
favouriteTransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, " ").concat(transport));
});
