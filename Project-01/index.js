const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express();
const fs = require("fs")

const PORT = 7000;


// MiddleWare - plugin 
// jab bhi koi data aaega to body me dalne ka kaam krega 
app.use (express.urlencoded({extended : false}))

// next point to next middlkware 
app.use((req , res , next) => {
  fs.appendFile("log.txt" , `\n${Date.now()} : ${req.method} : ${req.path} ` ,  (err , data) =>{
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

app.route("/api/users/:id").get( (req , res) => {
        // this will extract the request url which we have type ,like api/user/1
    const id = Number(req.params.id);
    const user = users.find((user => user.id == id));
    return res.json(user);
    }).patch((req , res) => {
        // edit
        return res.json({status : "pending"});
    }).delete((req , res) => {
        //delete
        return res.json({status : "pending"});
    })




app.get("/users" , (req , res) =>  {
    const html = `
    <ul>
        ${users.map(user => `<li> ${user.first_name}</li>`).join('') }
    </ul>
    `;
    res.send(html);
    })



app.get("/api/users" , (req , res) => {
    // This is the way to create headers
    res.setHeader("myname" , "Ujjwal" )
return res.json(users);
})



app.post("/api/users" , (req, res) => {
    //create user with id

    // form data aagaya post man se starting me undifined dikha rha that kyuki usse data ki body ke baare me pata nhi tha fir humne middleware use kra to pata chal gya
    const body = req.body;
    users.push({...body , id : users.length + 1  });
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err , data) => {})
 
    return res.json({status : "pending"});

})




app.listen(PORT , () => {console.log("Server Started")})