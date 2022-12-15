const http =require("http");
const port = 4000;

const server = http.createServer(function(req,res){
    res.write('Anindya');
    res.end();
    console.log(req.method,req.url)
}).listen(port);

// server.listen(port,(e)=>{
//     if(e){
//         console.log('Error!!');
//     }else{
//         console.log('Server is listening at port ',port)
//     }
// })


