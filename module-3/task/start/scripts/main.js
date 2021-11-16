console.log('Hello');

//Single line comment

/*Learning about commenting

Multi line comment

/*This time commenting multiple lines
here*/

let productName = 'lightbulb';
let price = '6.00';
let quantity = 2;
let inStock = true;
let discountAmount = 4;

// console.log(productName);
// console.log(price);
// console.log(quantity);
// console.log(inStock);
// console.log(discountAmount);


function showProductName(){
    console.log(showProductName);
}
showProductName();


function totalPrice(productPrice=0,productQuantity=0){
    console.log(productPrice)
    productPrice = parseFloat(productPrice)
    console.log(productPrice);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);

}
totalPrice(price,quantity);

//showing the difference between a regular function and an arrow function 
function squareNumber(number=0){
    let sum = number * number;
    return sum;
}

var square = number => number * number;

let squaredNumber = squareNumber(3);
console.log(squaredNumber);

let squared = square(3);
console.log(squared);

//showing the difference between a regular function and an arrow function


function productDiscount(){
    let sum;
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum = sum - discount;
    } else {
        sum = price * quantity;
    }
    console.log(sum);
}
    productDiscount();



// function calculateDiscount(){
//     let sum = price * quantity;
//     if(quantity > 1){
//     let discount = discoutAmount * quantity;
//     sum = sum - discount;
//     }
//     console.log(sum);

