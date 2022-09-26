const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/orders",  ensureAuth, ordersController.getOrders)
router.post("/createOrder/:id", ordersController.createOrder)


module.exports = router;
