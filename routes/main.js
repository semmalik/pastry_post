const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const ordersController = require("../controllers/orders");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.get("/orders", ensureAuth, ordersController.getOrders)
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//navigation
router.get("/about", homeController.getAbout)
router.get("/gallery", homeController.getGallery)
router.get("/testimonials", homeController.getTestimonials)
router.get("/menu", homeController.getMenu)
router.get("/messages", homeController.getMessages)


module.exports = router;
