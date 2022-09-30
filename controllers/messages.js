const Message = require("../models/Message");
const User = require("../models/User");


module.exports = {
    getMessages: async (req, res) => {
        console.log(req.user._id)
        try {
            const messages = await Message.find({customer: req.user.id}).lean()
            res.render("messages.ejs", {messages: messages, user: req.user});
        } catch (err) {
            console.log(err)
        }
    },
    createMessage: async (req, res) => {
        try {
            const message = await Message.create(
                {
                    customer: req.params.id,
                    writer: req.params.id,
                    message: req.body.message
                }
            )
            console.log(`message created: ${message}`)
            res.redirect("/message/messages")
        } catch (err) {
            console.log(err)
        }
      }
  };