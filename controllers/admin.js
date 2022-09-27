const Order = require("../models/order");

module.exports = {
    getOrders: async (req, res) => {
        const orders = await Order.find({fulfilled: false}).sort({createdAt: "desc"}).lean()
        res.render("admin.ejs", {orders: orders, user: req.user});
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


  //add fulfilled attribute to order schema
  //search for all unfulfilled orders
  //render all unfulfilled orders on admin page
