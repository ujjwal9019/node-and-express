
const express = require("express");


// step 1 : 
const app = express();

// routing with express app.method("path" , myhandlerfunction)

app.get("/", (req , res) => {
return res.send("hello from the home page")
} )


app.get("/about", (req , res) => {
    return res.send("hello from the about us page")
    } )


// to create a port 

app.listen(1000 , () => {console.log("server started")})






