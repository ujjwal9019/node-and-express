const User = require("../modals/user")



async function handleGetAllUsers(req ,res) {
 
    const alldbuser = await User.find({});
    return res.json(alldbuser);
}

async function handlegetUserById(req , res) {
    
    // this will extract the request url which we have type ,like api/user/1
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function handleUpdateUserById(req , res) {
     // Update the user from Database
     await User.findByIdAndUpdate(req.params.id , {lastName : "Changed"})
     return res.json({ status: "succes" });
}

async function handleDeleteUserById(req , res) {
      // delete users
      await User.findByIdAndDelete(req.params.id)
      return res.json({ status: "Sucess" });
}

async function handleCreateNewUser(req , res){
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
    
    return res.status(201).json({mssg : "Success" , id : result._id})
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById , 
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}