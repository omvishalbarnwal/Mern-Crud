const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // 🟢 Import CORS
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/EmployeeRoutes");

const app = express();
app.use(express.json());
app.use(cors()); // 🟢 Enable CORS

// MongoDB Connect
connectDB();

// Routes
app.use("/api/employees", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
