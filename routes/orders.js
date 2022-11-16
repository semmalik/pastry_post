const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/orders",  ensureAuth, ordersController.getOrders)
router.get(`/orders/:cakeName`,  ensureAuth, ordersController.getCakeForm)
router.post("/createOrder/:id", ordersController.createOrder)


module.exports = router;
