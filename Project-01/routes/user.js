const express = require("express");

const {handleGetAllUsers , handlegetUserById, handleUpdateUserById , handleDeleteUserById , handleCreateNewUser} = require("../controller/user")
const router = express.Router();


//routes

// read

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser) ;

// This is called grouping of dynamic routes

router.route("/:id").get(handlegetUserById).patch(handleUpdateUserById).delete(handleDeleteUserById)












module.exports = router;