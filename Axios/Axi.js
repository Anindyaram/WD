// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("Response: ",res);
// })
// .catch((e)=>{
//     console.log("Error!! Yohohohohoho!! ",e)
// })

const getStarWarsPerson = async (id)=>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log('ERROR!!' , e);
    }
};

getStarWarsPerson(3);


const getDadJoke = async ()=>{
    try{
        const res = await axios.get("https://icanhazdadjoke.com/")
        console.log(res)
    }catch(e){
        console.log("ERROR!!",e)
    }
}
getDadJoke();






