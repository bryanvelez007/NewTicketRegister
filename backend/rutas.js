const { Router } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/",controller.saludar)
module.exports = router;