const mongoose = require("mongoose");

// Product schema
const productSchema = new mongoose.Schema({
    storeId: {
        type: Number,
        required: true
    },
    storeName: {
        type: String,
        required: true,
        trim: true
    },
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

// Export Product model
module.exports = mongoose.model("Product", productSchema);