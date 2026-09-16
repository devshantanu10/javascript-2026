// function sum(a , b){
//     s = x + y;
//     return s;

// }

// let val = (3,4);
// console.log(val);


// 
// const arrowSum = (a , b) => {

//     console.log(a + b);

// } 

// arrowSum(5,10);



// let arrowMul = (a , b) => {
//     return a * b;


// }
// arrowMul(4,7);  


// function countVowels(str){

//     for(const char of str){
//         console.log(char)
//     }

// }  



// function sum(x , y){
//     s = x + y; 
//     return s;
// }

// let val = sum(3,4);
// console.log(val); 

// const arrowSum = (a, b) =>{
//     console.log(a * b)
// }

// arrowSum(3,5)  


// function countVowels(str){

//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }

//     console.log(count);
// }


// countVowels("aeiou") 





// const countVow = (str) =>{

// let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }

//     console.log(count);
// }



// countVow("aeiou"); 


// const checkNumber = (number) => {
//     if(number > 0){
//         console.log("Positive");
//     }

//     else if(number < 0){
//         console.log("negeative");
//     }

//     else{
//         console.log("Is equal");
//     }

// }

// checkNumber(75);




// const toFarenheit = (celsius) => {
//         return (celsius * 9 / 5) + 32;

// }

//  console.log(toFarenheit(100));

// const toFarenheit = (celsius) => {
//     return (celsius * 9 / 5) + 32;
// }

// console.log(toFarenheit(100));


// const calculateDiscount = (price , discount) => {

//     return price - discount*price/100;

// }

// console.log(calculateDiscount(1000,30));



// let numbers = [12, 7, 8, 15, 20, 3, 10];
// const countEven = (numbers) =>{ 
//     let count = 0;

//     for(let num of numbers) {
//         if(num %2==0){
//             count++;
//         }
        
//     }

//     return count;
    
// }

// console.log(countEven(numbers));

// function myFunc(theObject){
//     theObject.make = "Toyota";
// }


// const myCar = {

//     make: "Honda",
//     model: "Accord",
//     year:1998,
// }

// console.log(myCar.make)
// myFunc(myCar);
// console.log(myCar.make)
    

// function myFunc(theArr){
//     theArr[0] = 30;
// }


// const arr = [45];


// console.log(arr[0]);
// myFunc(arr)
// console.log(arr[0])



// function addsquares(a,b){
//     function square(x){
//         return x * x;
//     }

//     return square(a) + (b);
// }







// const square = function(number){
//     return number * number;
// }

// console.log(square(8)); 





// const factorial = function fac(n){
//     return n < 2 ? 1 : n * fac(n-1);
// };

// console.log(factorial(3)); // factotialn  exercise for functions 









// function map(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }

// const numbers = [0, 1, 2, 5, 10];
// const cubedNumbers = map(function (x) {
//   return x * x * x;
// }, numbers);
// console.log(cubedNumbers); // [0, 1, 8, 125, 1000] adding to new array for the result 



// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     } 

//     return n * factorial(n - 1);
// }
// console.log(factorial(5));



// function greet(name){
//       console.log("hello "  +  name)
// }
// greet("Shantanu")
// greet("ram")


// function square(number){

//     return number * number;
// }

// console.log(square(5));

// function checkNumber(number) {
//     if (number < 0) {
//         return "Negative";
//     } else if (number > 0) {
//         return "Positive";
//     } else {
//         return "Zero";
//     }
// }

// console.log(checkNumber(-7));



// function toFarenheit(celcius){
//     return celcius * 9/5 + 32;
// }

// console.log(toFarenheit(45));



// function calculateDiscount(price , discount){
//     return  price - (price * discount/100);
    
// }
// console.log(calculateDiscount(250,10));

// 
// function findLargest(a, b) {
//     if (a > b) {
//         return a + " is the largest";
//     } else {
//         return b + " is the largest";
//     }
// }

// console.log(findLargest(12, 34));


// function isEvennumber(number) {
//     return number % 2 == 0;
// }

// console.log(isEvennumber(46));


// calculateAverage = (a,b,c) =>{
          
//         return (a+b+c)/3;
// }

// console.log(calculateAverage(15,23,67));

function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(15, 42, 27)); 


