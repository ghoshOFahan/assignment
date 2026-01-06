const express = require("express");
const router = express.Router();
const emailGenerateHandler = require("../controller/email.controller");
router.post("/generate", emailGenerateHandler);
module.exports = router;
