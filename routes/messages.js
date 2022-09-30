const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/messages",  ensureAuth, messagesController.getMessages)
router.post("/createMessage/:id", messagesController.createMessage)


module.exports = router;