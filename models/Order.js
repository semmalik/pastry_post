const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cake: {
        type: String
    },
    filling: {
        type: String
    },
    butterCream: {
        type: String
    },
    size: {
        type: String
    },
    orderPlaced: {
        type: Date,
        default: Date.now
    },
    orderPickup: {
        type: Date
    },
    fulfilled: {
        type: Boolean,
        default: false
    }
  });

module.exports = mongoose.model("Order", OrderSchema);
