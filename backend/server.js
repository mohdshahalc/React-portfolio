const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database Name: ${conn.connection.name}`);
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Contact Route
app.use("/api/contact", require("./routes/contact"));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
