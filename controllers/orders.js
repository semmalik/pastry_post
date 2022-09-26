const Order = require("../models/order");

module.exports = {
    getOrders: async (req, res) => {
        console.log(req.user._id)
        const orders = await Order.find({user: req.user.id}).sort({createdAt: "desc"}).lean()
        res.render("orders.ejs", {orders: orders, user: req.user});
    },
    createOrder: async (req, res) => {
        try {
            const order = await Order.create(
                {
                    user: req.params.id,
                    cake: req.body.cake,
                    filling: req.body.filling,
                    butterCream: req.body.butter_cream,
                    size: req.body.size,
                    orderPickup: req.body.orderPickup
                }
            )
            console.log(`order created: ${order}`)
            res.redirect("/order/orders")
        } catch (err) {
            console.log(err)
        }
      }
  };
