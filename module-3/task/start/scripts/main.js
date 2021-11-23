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


// function showProductName(){
//     console.log(showProductName);
// }
// showProductName();


// function totalPrice(productPrice=0,productQuantity=0){
//     console.log(productPrice)
//     productPrice = parseFloat(productPrice)
//     console.log(productPrice);
//     let totalProductPrice = productPrice * productQuantity;
//     console.log(totalProductPrice);

// }
// totalPrice(price,quantity);

// //showing the difference between a regular function and an arrow function 
// function squareNumber(number=0){
//     let sum = number * number;
//     return sum;
// }

// var square = number => number * number;

// let squaredNumber = squareNumber(3);
// console.log(squaredNumber);

// let squared = square(3);
// console.log(squared);

// //showing the difference between a regular function and an arrow function


// function productDiscount(){
//     let sum;
//     if(quantity > 1){
//         sum = price * quantity;
//         let discount = discountAmount * quantity;
//         sum = sum - discount;
//     } else {
//         sum = price * quantity;
//     }
//     console.log(sum);
// }
//     productDiscount();



// // function calculateDiscount(){
// //     let sum = price * quantity;
// //     if(quantity > 1){
// //     let discount = discoutAmount * quantity;
// //     sum = sum - discount;
// //     }
// //     console.log(sum);



// //FUNCTION called drinkOrder that takes 2 parameters {Size} & {drink}
//  function drinkOrder(size, drink){   
//     // VALIDATE the variables passed through
//     if(size !='small' && size != 'medium' && size != 'large'){
//         console.log('You have ordered a size we don\'t sell');
//         return;
//     }
//     let message = 'You have ordered a ' + size;
//     // SWITCH {drink}
//     switch(drink){
//         case 'cola':
//             message += ' Coca-Cola';
//             break;
//         case 'lemon':
//             message += ' Schwepps';
//             break;
//         case 'orange':
//             message += ' Tango';
//             break;
//         default:
//             message = 'You have ordered a drink we don\'t sell';
//             break;
//     }
//     // RETURN message
//     console.log(message);
//  }
   
// drinkOrder('grande');
// drinkOrder('small', 'cola');
// drinkOrder('medium','orange');
// drinkOrder('grnade', 'tango');

// // ## Task 9

// // 1. Create a function called calculator, which takes in 3 parameters, num1, num2, operator
// // 2. Inside the function use a switch statement taking in the operator as a parameter
// // 3. Create 4 cases and 1 default case
// // 4. Each case should be for addition (+), subtraction (-),division (/) and multiplication (`*`)
// // 5. Each case should console.log the result, for example num1 + num2, num1 / num2, etc
// // 6. Call the function

// // - calculator( 1, 2, '+');
// // - calculator( 1, 2, '/');

// //FUNCTION calculator {num1} {num2} {operator}
// function calculator(num1,num2,operator){  
//     //VALIDATE ALL DATA
//     if(isNaNValidator(num1)){
//         console.log('Number 1 is not a number');
//         return;
//     }
//     if(isNaNValidator(num2)){
//         console.log('Number 2 is not a number');
//         return;
//     }
//     //SWITCH {operator}
//     let sum;
//     switch(operator){
//         case '+' :
//             sum = num1 + num2;
//             break;
//         case '_':
//             sum = num1 - num2;
//             break;
//         case '/':
//             sum = num1 / num2;
//             break;
//         case '*':
//         case 'x':
//             sum = num1 * num2;
//             break;
//         case '%':
//             sum = num1 % num2;
//             break;
//         default:
//             return'Operator is not recognised';
//     }
//     return sum;
// }

// function isNaNValidator(number) {
//     return isNaN(number);
//     console.log('Number 1 is not a number');

// }

// calculator(1,'alex');
// calculator('alex');
// calculator(1,1,'alex');
// let sum1 = calculator(10,2,'+');
// let sum2 = calculator(10,2,'-');
// let sum3 = calculator(10,2,'/');
// let sum4 = calculator(10,2,'*');
// let sum5 = calculator(10,2,'%');
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);

// let arrRainbow =['red','yellow','pink','green','purple','orange']



let arrProductData = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];
   
   console.log(arrProductData);

   console.log(arrProductData[0]);
   console.log(arrProductData[3]);




    let objProductData = {
        'productName':productName,
        'price':price,
        'quantity':quantity,
        'inStock':inStock,
        'discountAmount':discountAmount,
    };
       
       console.log(objProductData);

    
       
    console.log(objProductData.productName);
    objProductData['productName'] = 'fan';
    console.log(objProductData.productName);
    


objProductData.newData1 = 'this is the 1st new data';
objProductData['newData2'] = 'this is the 2nd new data';

console.log(objProductData);



function outputTimesTables(number){
    for(counter=1; //set counter as a variable
        counter<=12; //continue to run loop whilst this is true
        counter++ //add 1 to counter after each iteration
    ){
        let sum = counter * number;
        let strMessage = counter + ' * ' + number + ' = ' + sum;
        console.log(strMessage);
    }
}

for(multiplyer=1;multiplyer<=12;multiplyer++){
    outputTimesTables(multiplyer);
}
