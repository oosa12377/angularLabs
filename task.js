function logProduct(product) {
    console.log("id: ".concat(product.id));
    console.log("name: ".concat(product.name));
    console.log("price: ".concat(product.price));
    console.log("in stock: ".concat(product.inStock));
}
var book = {
    id: 1,
    name: "linux basics",
    price: 30,
    inStock: true,
};
logProduct(book);
function wrapValue(value) {
    return [value];
}
console.log(wrapValue("hello world"));
function printProductIfSuccess(result) {
    if (result.success) {
        logProduct(result.data);
    }
    else {
        console.log("Error:", result.message);
    }
}
var apiResponse = {
    data: book,
    success: true,
    message: "from api",
};
printProductIfSuccess(apiResponse);
