const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");


router.post("/", async (req, res) => {
  try {
    console.log("Received contact form submission:", req.body);
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new contact document
    const contact = new Contact({
      name,
      email,
      message,
    });

    // Save to database
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.error("Error saving contact:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

module.exports = router;
