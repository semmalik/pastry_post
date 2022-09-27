const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const adminController = require("../controllers/admin");
const { ensureAuth, ensureGuest, ensureAdmin } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/orders", ensureAuth, ensureAdmin, adminController.getOrders)

module.exports = router;
