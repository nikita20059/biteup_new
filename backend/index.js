const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Express Setup
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection using async/await
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Biteup_new', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Biteup_new database");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1); // Optional: Stop server if DB connection fails
    }
};
connectDB();

// User Schema & Model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

// Routes
app.get("/", (req, res) => {
    res.send("App is Working");
});

// Register Route
app.post("/register", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).send("Name and Email are required");
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send("User already registered with this email");
        }

        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json(result);
        console.log("User registered:", result);

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Something Went Wrong");
    }
});

// Start Server
app.listen(5000, () => {
    console.log("App listening on port 5000");
});
