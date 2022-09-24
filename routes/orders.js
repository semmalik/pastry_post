const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/orders", ordersController.getOrders)

module.exports = router;
