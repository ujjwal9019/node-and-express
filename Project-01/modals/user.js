const mongoose = require("mongoose");


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

module.exports = User;

