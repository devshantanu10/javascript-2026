// for(num = 0; num<=100; num++){
//     console.log(num)
// }    question one 



// for(num = 10; num>=1; num--){
//     console.log(num)
// }   question no 2




// for(num = 0; num<= 100; num++){

//     if(num%2==0){
//         console.log("even number:  " , num  )
//     }


    
// } question no 3 


// for(num = 0; num<= 100; num++){
//     if(num%2 !== 0){
//         console.log(`odd numbers: ${num}`)
//     }
// } quessssstion no 4 



// for(let i =1; i<= 100; i++){
//     if(i%5 === 0){
//         console.log(i);
//     }
// }


// for(let i =1; i<= 10; i++){

//     console.log(`7 x ${i} = ${7*i}`);
    
// } 

// for(let i = 1; i<= 10; i++){
//     console.log(`8 x ${i} = ${7*i}`)
// }  




// function calculateArea(length,width){
//     return length * width;
// }

// console.log(calculateArea(18,10)); 




// function checknum(number){
//     if(number%2 === 0){
//         return "even";
//     } else{
//         console.log("odd")
//         return "odd";
//     }
// }

// console.log(checknum(18));



// let numbers = [12 , 23 , 45 , 67 , 89];
// let smallest = arr[0];
// function checksmallest(arr){
//     for(let num of arr){

//         if(num<smallest){
//             smallest = num;

//         }

    
//     }

//     return smallest;
// }

// console.log(checksmallest(numbers))




let numbers = [12, 23, 45, 67, 89];

function checksmallest(arr){

    let smallest = arr[0];

    for(let num of arr){

        if(num < smallest){
            smallest = num;
        }

    }

    return smallest;
}

console.log(checksmallest(numbers));








