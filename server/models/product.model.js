const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You really thought you could just not enter a Product title???"],
        minLength: [3, "Must be at least 3 cahracters"]
    },
    price: {
        type: Number,
        required: [true,"Price amount Required"],
        min: [1, "Amount Required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Must be at least 10 cahracters"]
    }
}, {timestamps: true});

module.exports.Product =  mongoose.model('Product', ProductSchema);