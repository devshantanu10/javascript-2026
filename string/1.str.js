// let str = "Apna college";

// console.log(str[0])



//templates literals 


// let specialstring = `This is a template literal `;
// console.log(typeof specialstring);\



// let obj = {
//     item: "pen",
//     price: 10,
// };


// let output = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output);
// console.log("the cost of" , obj.item , "is" , obj.price, "rupees") 

// let str = "Apna\ncollege";
// console.log(str.length) 
const prompt = require("prompt-sync")();

let fullName = prompt("Enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username)
