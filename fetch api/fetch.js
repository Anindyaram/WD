// fetch("https://swapi.dev/api/people/")
//     .then(res=>{
//         console.log("Resolved" , res);
//         // res.json()
//         // .then((data)=>
//         // {console.log("JSON DONE",data,data.name)})
//         //or
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data);
//         // console.log("YOHOHOHOHOHO YOHOHOHOHOHO",data)
//         // for(let a in data.results[0]){
//         //     console.log(data.results[0][a])
//         // }

//     })
//     .catch(e=>{
//         console.log("error" ,e);   
//     })

// fetch("https://swapi.dev/api/people/1/")
//     .then(res=>{
//         console.log("First Response Resolved!!" , res);
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/") //second callback without nesting 
//     })
//     .then(res=>{
//         console.log("SECOND RESPONSE RESOLVED!!");
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/3/"); //Third callback without nesting 
//     })
//     .then(res=>{
//         console.log("THIRD RESPONSE RESOLVED!!");
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(e=>{
//         console.log("error" ,e);   
//     })

/******************************OR**************************/
//using async function to make the code cleaner

const loadStarWarCharacter = async ()=>{

try{    
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res1 = await fetch("https://swapi.dev/api/people/2/");
    const data1 = await res1.json();
    console.log(data1);

    const res2 = await fetch("https://swapi.dev/api/peoples/3/");
    const data2 = await res2.json();
    console.log(data2);

    const res3 = await fetch("https://swapi.dev/api/people/4/");
    const data3 = await res3.json();
    console.log(data3);
}catch(e){
    console.log("ERROR!!",e);
}
}

loadStarWarCharacter();



