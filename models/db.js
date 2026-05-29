const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection string
const dbURI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(dbURI);

// Successful connection
mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB Atlas");
});

// Connection error
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:", err);
});

// Disconnected
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

// Close the Mongoose connection when the app stops
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose connection closed due to app termination");
        process.exit(0);
    });
});

// Export mongoose
module.exports = mongoose;