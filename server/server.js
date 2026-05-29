// Import packages
const express = require("express");
const cors = require("cors");

// Import database connection
const db = require("../models/db");

// Import Product model
const Product = require("../models/products");

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Server frontend files
app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
    res.send("Sweet Treats API running");
});

// Get all products
app.get("/products", async (req, res) => {
    console.log("GET /products route accessed");

    try {
        // Fetch all products from MongoDB
        const products = await Product.find();
        console.log(products);

        // Send products as JSON response
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    }
});

// Create product
app.post("/products", async (req, res) => {
    try {
        // create a new product
        const product = new Product(req.body);

        // save the product to MongoDB
        await product.save();

        // send the created product as JSON response
        res.status(201).json(product);

    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: err.message
        });
    }
});

// Get product by ID
app.get("/products/:id", async (req, res) => {
    try {
        // find product by ID
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.status(200).json(product);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    }
});

// Update product by ID
app.put("/products/:id", async (req, res) => {
    try {
        // find product by ID and update it
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.status(200).json(updatedProduct);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    }
});

// Delete product by ID
app.delete("/products/:id", async (req, res) => {
    try {
        // find product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    }
});

// Dynamic port for deployment
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export app for testing
module.exports = app;