const express = require("express");
const router = express.Router();
const itemControl = require("../controllers/item")
const userControl = require("../controllers/user")


//items
router.get("/api/get/items", itemControl.getAllItems);
router.post("/api/create/item", itemControl.createItem);

//users
router.get("/api/get/users", userControl.getAllUsers);
router.post("/api/create/user", userControl.createUser);

module.exports = router 