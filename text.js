const http = require ('http')
const port = 1930

const obj = [
    {
     name: "victor",
     surname: "sunday" ,
     stack: "frontend",
    },

    {
      name: "precious",
      surname: "onuegbu",
      stack: "fullstack"
    },

    {
    name: "michael",
    surname: "oyilawu",
    stack: "backend"
    },
    
    {
        name: "luciana",
        surname: "anozie",
        stack: "frontend"
    }
]
 




const app = http.createServer(
    (req, res ) =>{
        
 res.setHeader("content-type", "text/plain")


res.write("i love backend")
res.write(" \n")
res.write(" \n")

res.end ()
});

app.listen(port, () =>{
    console.log(" listening on port" + port)
});
