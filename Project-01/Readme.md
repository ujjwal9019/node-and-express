In this we Practice Rest APi We Create Following apis and test in Post Man


REST API - JSON 

GET /users - HTML Document Render

GET/api/user - List All user json
 
GET/api/Users/1 - Get the user with  id 1

GET/api/users/:id 
id = Dynamic url 


POST /api/user - Create new user

PATCH /api/user/1 - Edit user with id 1

DELETE /api/user/1 - DELETE THE USER WITH ID 1

 
*-----------------*
CRUD OPERATION CODE
*--------------------*


const express = require("express")

const app = express();
const fs = require("fs")
const mongoose = require("mongoose");
const { type } = require("os");

const PORT = 7000;


// These 3 steps are mandatory to setup MongoDb

//conection 

mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1').then(() => {
    console.log("mongodb connected");

}
).catch((err) => { console.log("Mongo Error", err) })


// THis is the the schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        require: true,
        unique: true,

    },
    jobTittle: {
        type: String,
    },
    gender: {
        type: String,
    }
});

const User = mongoose.model("user", userSchema);


// MiddleWare - plugin 
// jab bhi koi data aaega to body me dalne ka kaam krega 
app.use(express.urlencoded({ extended: false }))

// next point to next middlkware 
app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()} : ${req.method} : ${req.path} `, (err, data) => {
        next();
    })
})

// app.use((req , res , next) => {
//     console.log("hello from the middleware  2")
//     return res.json({ msg : "hello from middleware 2"})
//     next();
// })



//routes

// This is called grouping of dynamic routes

app.route("/api/users/:id").get(async(req, res) => {
    // this will extract the request url which we have type ,like api/user/1
    const user = await User.findById(req.params.id);
  
    return res.json(user);
}).patch(async(req, res) => {
    // Update the user from Database
    await User.findByIdAndUpdate(req.params.id , {lastName : "Changed"})
    return res.json({ status: "succes" });
}).delete(async(req, res) => {
    // delete users
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Sucess" });
})




app.get("/users",  async(req, res) => {
const alldbuser = await User.find({})
    const html = `
    <ul>
        ${alldbuser.map((user) => `<li> ${user.firstName} - ${user.email}</li>`).join('')}
    </ul>
    `;
    res.send(html);
})



app.get("/api/users", async(req, res) => {
    const alldbuser = await User.find({})

    // This is the way to create headers
    res.setHeader("myname", "Ujjwal")
    return res.json(alldbuser);
})



app.post("/api/users", async(req, res) => {
    //create user with id


    // form data aagaya post man se starting me undifined dikha rha that kyuki usse data ki body ke baare me pata nhi tha fir humne middleware use kra to pata chal gya
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        res.status(402).json({ mssg: "req all feild" });
    }


//    this will return a result which store value in our databse
 

   const result =   await User.create ({
        firstName : body.first_name ,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTittle: body.job_title,

    });
    

    return res.status(201).json({mssg : "Success"})
})




app.listen(PORT, () => { console.log("Server Started") })

