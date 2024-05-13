const express = require("express")
const {connectMongoDb}  = require('./connection')
const app = express();
const{logReqRes} = require("./middleware/index")
const userRouter = require('./routes/user')


const PORT = 7000;

connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(() => {
    console.log("mongpdbconnectd")
})



// MiddleWare - plugin 
// jab bhi koi data aaega to body me dalne ka kaam krega 
app.use(express.urlencoded({ extended: false }))

// next point to next middlkware 
app.use(logReqRes("log.txt") );



//routes
app.use("/api/user" , userRouter);


app.listen(PORT, () => { console.log("Server Started") })