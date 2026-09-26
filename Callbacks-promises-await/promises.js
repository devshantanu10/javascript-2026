function asyncFunc() {
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        console.log("some data1")
        resolve("success")
      }, 4000);
    })
}

console.log("fetching data 1")
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
})










// const getPromise = () =>{





//     return new Promise((resolve,reject) =>{
//         console.log("I am  promise");
//         resolve("success")
    
//     })
// }


// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fulfilled", res)
// })

// promise.catch((err) => {
//     console.log("rejected", err)
// })



// function getData(dataId, getNextData){
//     return new Promise((reslove, reject) => {
//         setTimeout(() =>{
//             console.log("data" , dataId);
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000)
//     })
// }


