const mongoose = require("mongoose");


const MessageSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        default: '633255daa28a4e07f5c2af91'
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Message", MessageSchema);