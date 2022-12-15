// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("Response: ",res);
// })
// .catch((e)=>{
//     console.log("Error!! Yohohohohoho!! ",e)
// })

// const getStarWarsPerson = async (id)=>{
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//         console.log(res.data.name);
//     }catch(e){
//         console.log('ERROR!!' , e);
//     }
// };


const jokes = document.querySelector("#jokes");
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
        const newLi = document.createElement('li');
        newLi.append(jokeText);
        jokes.append(newLi);
    }

    const getDadJoke = async () => {
        try {
            const config = { headers: { Accept: 'application/json' } }
            const res = await axios.get("https://icanhazdadjoke.com/", config)
            return res.data.joke;
        } catch (e) {
            console.log("No jokes Available Sorry!!!", e)
        }
    }

    button.addEventListener('click', addNewJoke);

