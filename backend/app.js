import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import plantRoutes from "./routes/plantRoutes.js";
import authRoutes from "./routes/authRoutes.js";



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/plants", plantRoutes);
app.use("/api/auth", authRoutes);

console.log("MONGO_URI =", process.env.MONGO_URI);
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully ✅"))
  .catch((err) => console.error("MongoDB Error ❌", err));


// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
