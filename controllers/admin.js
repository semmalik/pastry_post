const Order = require("../models/order");
const Message = require("../models/Message");
const User = require("../models/User");


module.exports = {
    getDashboard: async (req, res) => {
        try {
            const orders = await Order.find({fulfilled: false}).sort({createdAt: "desc"}).lean()
            const messages = await Message.find().sort({customer: 1, createdAt: "desc"}).lean()
            res.render("admin.ejs", {orders: orders, messages: messages, user: req.user});
        } catch (err) {
            console.log(err)
        } 
    },
    getMessage: async (req, res) => {
        try {
            const messages = await Message.find({customer: req.params.id}).sort({createdAt: "desc"}).lean()
            console.log(`message: ${messages}`)
            res.render("adminMessage.ejs", {messages: messages, user: req.user})
        } catch (err) {
            console.log(err)
        }
    },
    replyMessage: async (req, res) => {
        try {
            const message = await Message.create(
                {
                    customer: req.params.id,
                    writer: req.user,
                    receiver: req.params.id,
                    message: req.body.message
                }
            )
            console.log(`message has been sent: ${message}`)
            res.redirect("/admin")
        } catch (err) {
            console.log(err)
        }   
    }
  };