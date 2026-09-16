// let i = 1;

// while(i<=5){
//     console.log("i " , i);
//     i++;
// }  

// let str = "Shantanu"

// for(let i of str){
//     console.log("i=" , i)
// }


// code: 
// const cars = ["volvo" , "bmw" , "porche" , "lamborghini"];

// let text = "";

// for(let i = 0 ; i< cars.length; i++){
//     text+=  cars[i]   
// } 






// for(let num=0; num<=100; num++){
//     if(num%2 == 0){

//         console.log("num= " , num)
        
//     }

// }    


// const prompt = require("prompt-sync")();



// let gameNum = 25;
// let userNum = Number(prompt("Enter your guess number"));

// while(userNum !== gameNum){
//     userNum = Number(prompt("You entered wrong number enter again"));
// }

// console.log("You entered right number. nice good");



//  exercise 1 


// for(let num = 0; num<= 20;  num++){
//       console.log(`Number: ${num}`);
// }   





//  exercise 2 

// for(let i = 20; i>= 1; i--){
//     console.log("i " , i)
// }


// for(let i = 10; i<= 100; i+=10){
//     console.log("i " , i)
// }



// for(let i = 1; i<= 10; i++){
//     console.log(`7 x ${i} = ${7*i}`)
// }


// const prompt = require("prompt-sync")();

// let num = Number(prompt("Enter a number: "));

// for(let i= 1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// } 
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum = sum + i;

// }

// console.log(sum);


// let even_sum = 0;
// for(let i = 1; i<=100; i++){
//     if(i%2==0){
//         even_sum = even_sum + i
//     }
// }

// console.log(even_sum)

// let count = 0
// for(let i = 1; i<=100; i++){
//     if(i%5==0){
//         count++
//     }
// }

// console.log(count)


for(let i = 1; i<=100; i++){
    if(i%3===0){
        console.log("Fizz")

    }


    if(i%5===0){
        console.log("Buzz")
    }

    if(i%3 ===0 && i%5===0){
        console.log("FizzBuzz")
    }

    else{
        console.log(i)
    }
}