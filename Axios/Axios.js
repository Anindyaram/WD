axios.get("https://swapi.dev/api/player/1/")
.then((res)=>{
    console.log("Response: " ,res);
})
.catch((x)=>{
    console.log("Error: ",res)
})



