const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { ensureAuth, ensureGuest, ensureAdmin } = require("../middleware/auth");

router.get("/", ensureAuth, ensureAdmin, adminController.getDashboard)
router.get("/getMessage/:id", ensureAuth, adminController.getMessage)
router.post("/replyMessage/:id", ensureAuth, ensureAdmin, adminController.replyMessage)
router.post("/createCake", ensureAuth, ensureAdmin, adminController.createCake)


module.exports = router;
