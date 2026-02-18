const mongoose = require("mongoose");
require("dotenv").config();

const verifyDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Host: ${mongoose.connection.host}`);
        console.log(`Database Name: ${mongoose.connection.name}`);

        // Define a simple schema for testing
        const TestSchema = new mongoose.Schema({ name: String, date: Date });
        const TestModel = mongoose.model("Test", TestSchema);

        // Create a document
        console.log("Inserting test document...");
        const doc = new TestModel({ name: "Verification Test", date: new Date() });
        await doc.save();
        console.log("Test document inserted successfully!");

        // Clean up
        console.log("Cleaning up (deleting test document)...");
        await TestModel.deleteOne({ _id: doc._id });
        console.log("Test document deleted.");

        console.log("VERIFICATION SUCCESSFUL: Database is writable.");
        process.exit(0);
    } catch (error) {
        console.error("VERIFICATION FAILED:", error);
        process.exit(1);
    }
};

verifyDB();
