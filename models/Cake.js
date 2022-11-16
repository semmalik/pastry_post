const mongoose = require("mongoose");

const CakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cake: {
        type: String,
        required: true
    },
    filling: {
        type: String,
        required: true
    },
    butterCream: {
        type: String,
        required: true
    },
    description: {
       type: String,
       required: true
    }
  });

module.exports = mongoose.model("Cake", CakeSchema);