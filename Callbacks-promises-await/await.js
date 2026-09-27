function api(){
    return New Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("weather data");
            reslove(200);
        })
    })
}