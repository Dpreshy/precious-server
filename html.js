const fs = require ('fs')

const http = require ('http');

const port = 1920
// const obj = [
//     {
//      name: "victor",
//      surname: "sunday" ,
//      stack: "frontend",
//     },

//     {
//       name: "precious",
//       surname: "onuegbu",
//       stack: "fullstack"
//     },

//     {
//     name: "michael",
//     surname: "oyilawu",
//     stack: "backend"
//     },
    
//     {
//         name: "luciana",
//         surname: "anozie",
//         stack: "frontend"
//     }
// ]
 




const app = http.createServer(
    (req, res ) =>{
        

        fs.readFile("./index.html", (error, data) => {
            if(error){
                console.log("cant read this file" + error)
            }else{
                res.setHeader("content-type", "text/html")
                res.end(data)
            }
        })



//to pass an html file
// res.setHeader("content-type", "text/html")
// res.end ("<h1>this is precious the backend guru</h1>")
});


app.listen(port, () =>{
    console.log(" listening on port" + port)
});
