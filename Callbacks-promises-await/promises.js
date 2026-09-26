let promise = new Promise ((resolve, reject) => {

    console.log("i am a promise")
    resolve("success");
    reject("some error occured");

}); 


function getData(dataId, getNextData){
    return new Promise((reslove, reject) => {
        setTimeout(() =>{
            console.log("data" , dataId);
            if(getNextData){
                getNextData();
            }
        }, 5000)
    })
}


