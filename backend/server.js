
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Database test
app.get("/db-test", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT NOW() AS current_time, current_database() AS database"
        );

        res.json({
            message: "PostgreSQL connected successfully!",
            database: result.rows[0].database,
            time: result.rows[0].current_time
        });
    } catch (error) {
        console.error("Database error:", error.message);
        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

// Submit an enquiry
app.post("/api/enquiries", async (req, res) => {
    try {
        const {
            enquiry_type,
            full_name,
            email,
            company,
            message
        } = req.body;

        if (!enquiry_type || !full_name || !email || !message) {
            return res.status(400).json({
                message: "Please fill in all required fields."
            });
        }

        const result = await pool.query(
            `INSERT INTO enquiries
            (enquiry_type, full_name, email, company, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, created_at`,
            [enquiry_type, full_name, email, company || null, message]
        );

        res.status(201).json({
            message: "Enquiry submitted successfully!",
            enquiry: result.rows[0]
        });
    } catch (error) {
        console.error("Enquiry error:", error.message);
        res.status(500).json({
            message: "Unable to submit enquiry."
        });
    }
});

// Administrator login
app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;

    if (!password || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({
            message: "Incorrect administrator password."
        });
    }

    const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );

    res.json({
        message: "Login successful!",
        token
    });
});

// Verify administrator token
function verifyAdmin(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Administrator login required."
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "admin") {
            return res.status(403).json({
                message: "Access denied."
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired login token."
        });
    }
}

// Protected administrator enquiries route
app.get("/api/admin/enquiries", verifyAdmin, async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM enquiries ORDER BY created_at DESC"
        );

        res.json(result.rows);
    } catch (error) {
        console.error("Admin enquiry error:", error.message);
        res.status(500).json({
            message: "Unable to retrieve enquiries."
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
