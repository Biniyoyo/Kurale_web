const express = require("express");
const router = express.Router();
const itemControl = require("../controllers/item")


router.get("/api/get/items", itemControl.getAllItems)
router.post("/api/create/item", itemControl.createItem);

module.exports = router