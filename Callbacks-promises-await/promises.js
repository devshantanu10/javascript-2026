let promise = new Promise ((resolve, reject) => {

    console.log("i am a promise")
    resolve("success");
    reject("some error occured");

});